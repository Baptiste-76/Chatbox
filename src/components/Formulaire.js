import React, { Component } from 'react';

class Formulaire extends Component {
    state = { 
        message: '',
        length: this.props.length
    }

    createMessage = () => {
        const { pseudo, length, addMessage} = this.props

        // Création d'un objet message qui comprend le pseudo et le message
        const message = {
            pseudo,
            message: this.state.message
        }

        // On ajoute le message au state de App
        addMessage(message)

        // On reset le TextArea et le compteur de caractères restants
        this.setState({ message: '', length })
    }

    // Gestion du submit qui déclenche la fonction createMessage()
    handleSubmit = (event) => {
        event.preventDefault()
        this.createMessage()
    }

    // Changement du state dès qu'il y a une saisie dans le TextArea
    handleChange = (event) => {
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({ message, length })
    }

    // Gestion de l'appui sur la touche Entrée qui déclenche la fonction createMessage()
    handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            this.createMessage()
        }
    }

    render() { 
        return ( 
            <form  className="form" onSubmit= {this.handleSubmit}>
                <textarea value={this.state.message} required maxLength={this.props.length} onChange={this.handleChange} onKeyUp={this.handleKeyUp}></textarea>
                <div className="info">{this.state.length}</div>
                <button type="submit">Envoyer !</button>
            </form>
         );
    }
}
 
export default Formulaire;