import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Connexion extends Component {
    state = { 
        pseudo: '',
        goToChat: false
     }

    // Gestion du changement de State dès que la vleur de l'Input change
    handleChange = (event) => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    // Gestion du Submit en passant la valeur de la prop goToChat à true
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ goToChat: true})
    }

    render() { 
        if (this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
        }

        return ( 
            <div className="connexionBox">
                <form className="connexion" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Pseudo" required value={this.state.pseudo} onChange={this.handleChange} />
                    <button type="submit">GO</button>
                </form>
            </div>
         );
    }
}
 
export default Connexion;