import Cube from './components/Cube/Cube';
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import About from "./components/About/About";
import Index from "./components/Index/Index";
import Create from "./components/Create/Create";

const App = () => {

    return (
        <div className={styles.App}>
            <Router>
            <header>
                <Nav/>
            </header>
                <main>
                    <Switch>
                        <Route path="/">
                            {/*<Index/>*/}
                        </Route>
                        <Route path="/create">
                            <Create/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                    </Switch>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </Router>
        </div>
    );
}

export default App;
