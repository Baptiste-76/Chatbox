import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

// On crée une constante Firebase sous la forme d'un objet qui comprend les données d'identification de la BDD
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC8lbiljUzcE5bnKAlhfajbidmZPFyvw-o",
    authDomain: "chatbox-7a466.firebaseapp.com",
    databaseURL: "https://chatbox-7a466.firebaseio.com",
})

// On gère la BDD Firebase via une classe spéciale de la librairie Rebase
const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base