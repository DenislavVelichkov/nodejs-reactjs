import Cube from './components/Cube/Cube';
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = () => {

    return (
        <div className={styles.App}>
            <Router>
                <header><Nav/></header>
                <Switch>
                    <main>
                        <Route path="/cube">
                            <Cube/>
                        </Route>
                    </main>
                </Switch>
                <footer><Footer/></footer>
            </Router>
        </div>
    );
}

export default App;
