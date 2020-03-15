import React from 'react';
import Connexion from './connexion';
import { equal } from 'assert';


class Accueil extends React.Component{
    render(){
        
            if(Connexion.flag == 1){
                return(
                    <h1 className = "position_change">Page d'accueil'</h1>
                );
            }
            else{
                return(
                    <h1 className = "position_change">D'abord il faut se connecter !!</h1>
                );
            }
           
        
    }
}

export default Accueil;