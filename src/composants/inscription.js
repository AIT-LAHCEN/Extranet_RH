import React from 'react';


class Inscription extends React.Component{
    render(){
        const inscription = () => {
            console.log("en train de s'inscrire avec la base de donnees oracle");
          };
        return(
            <div className="connect">
            <form class="my-form" className>
            <div>
            <label className="labelcolor" >E-mail </label><br/>
            <input type="text" className="FormField__Input" placeholder="Entrer votre e-mail" name="e-mail"/>
            </div>
            <div>
            <label className="labelcolor" >Numéro de mobile </label>
            <input type="text" className="FormField__Input" placeholder="Entrer votre numéro de mobile" name="Numéro-de-mobile"/>
            </div>
            <div>
            <label className="labelcolor" >Nom d'utilisateur</label>
            <input type="text" className="FormField__Input" placeholder="Entrer votre nom d'utilisateur" name="name"/>
            </div>
            <div>
            <label className="labelcolor">Mot de passe</label>
            <input type="text" className="FormField__Input" placeholder="Entrer votre mot de passe" name="password"/>
            </div>
            <div>
            <label className="labelcolor">Confirmation de mot de passe</label>
            <input type="text" className="FormField__Input" placeholder="Retaper le mot de passe" name="password2"/>
            </div>
            <button onClick={inscription} className="login">s'inscrire</button>
            </form>
            </div>
            
        );
    }
}

export default Inscription;