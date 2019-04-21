import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainNavbar from '../components/MainNavbar';
import Home from '../views/Home';
import About from '../views/About';
import Services from '../views/Services';
import Blog from '../views/Blog';
import Contact from '../views/Contact';
import Footer from '../components/Footer';

class App extends React.Component {
    
    componentDidMount(){

    }

    render() {
        return(
            <div>
                <MainNavbar/>
                <Switch>
                    <Route path="/app/home" component={Home}/>
                    <Route path="/app/about" component={About}/>
                    <Route path="/app/services" component={Services}/>
                    <Route path="/app/blog" component={Blog}/>
                    <Route path="/app/contact" component={Contact}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;