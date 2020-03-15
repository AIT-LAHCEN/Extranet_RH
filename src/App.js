import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './composants/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="app">
    <Layout>
        <Header title="JEE Project" scroll className = "fixed_position">
            <Navigation>
                <Link to = "accueil">Accueil</Link>
                <Link to = "aide">Aide</Link>
            </Navigation>
        </Header>
        <Drawer title="JEE Project" className = "fixed_position">
            <Navigation>
                <Link to = "accueil">Accueil</Link>
                <Link to = "aide">Aide</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div/>
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
