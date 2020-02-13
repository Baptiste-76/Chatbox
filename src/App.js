import React, { Component, createRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './animations.css'
import './App.css'
import base from './base'
import Formulaire from './components/Formulaire'
import Message from './components/Message'

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  // On crée une réf.
  messagesRef = createRef()

  // On synchronise le state avec la BDD à chaque fois que le composant App se charge
  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  // On scroll automatiquement la vue sur le message qui vient d'être ajouté grâce à la ref ajoutée
  componentDidUpdate () {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  // Gestion de l'ajout des messages dans le state et supression des messages les + anciens (on ne garde que les 10 derniers)
  addMessage = (message) => {
    // On copie notre state
    const messages = {...this.state.messages}

    // On ajoute le message quivient d'être tapé
    messages[`message-${Date.now()}`] = message

    // On supprime les messages les + anciens (au dessus de 10)
    Object.keys(messages)
      .slice(0, -10)
      .forEach(key => {
        messages[key] = null
    })

    // On met à jour le state
    this.setState({ messages })
  }

  isUser = (pseudo) => {
    return pseudo === this.state.pseudo ? true : false
  }

  render () {
    const messages = Object.keys(this.state.messages).map(key => (
      <CSSTransition key={key} timeout={500} classNames='fade'>
        <Message pseudo={this.state.messages[key].pseudo} message={this.state.messages[key].message} isUser={this.isUser} />
      </CSSTransition>
    ))
    return (
      <div className='box'>
        <div>
          {/* On définit la réf. sur un élément */}
          <div className="messages" ref={this.messagesRef}>
            <TransitionGroup className="message">
              { messages }
            </TransitionGroup>
          </div>
        </div>
        <Formulaire pseudo={this.state.pseudo}  length={140} addMessage={this.addMessage} />
      </div>
    )
  }
}

export default App
