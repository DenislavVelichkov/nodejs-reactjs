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
import About from "./components/About/About";

const App = () => {

    return (
        <div className={styles.App}>
            <Router>
                <header><Nav/></header>
                <main>
                    <Switch>
                        <Route path="/">
                            <h1>Browser</h1>
                            <form action="" method="">
                                <input type="text"
                                       className="search"
                                       name="search"
                                       value="{{search}}"
                                       placeholder="Search..."/>
                                <input type="number"
                                       name="from"
                                       className="difficulty"
                                       value=""
                                       placeholder="Difficulty from..."/>
                                <span>-</span>
                                <input type="number"
                                       name="to"
                                       className="difficulty"
                                       value=""
                                       placeholder="Difficulty to..."/>
                                <input type="submit" value="search"/>
                            </form>
                        </Route>
                        <Route path="/cube">
                            <Cube/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                    </Switch>
                </main>
                <footer><Footer/></footer>
            </Router>
        </div>
    );
}

export default App;
