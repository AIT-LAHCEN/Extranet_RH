import React from 'react';


class Connexion extends React.Component{
    flag = 0;
    render(){
        const connex = () => {
            console.log("en train de se connecter avec la base de donnees oracle");
            this.flag = 1;
          };
        return(
            <div className="connect">
            <form class="my-form" className>
            <div>
            <label className="labelcolor" >Nom d'utilisateur</label>
            <input type="text" className="FormField__Input" placeholder="Entrer votre nom d'utilisateur" name="name"/>
            </div>
            <div>
            <label className="labelcolor">Mot de passe</label>
            <input type="text" className="FormField__Input" placeholder="Entrer votre mot de passe" name="password"/>
            </div>
            <button onClick={connex} className="login">Se connecter</button>
            </form>
            </div>
        );
    }
}

export default Connexion;