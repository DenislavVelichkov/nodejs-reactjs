import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import About from "./components/About/About";
import Index from "./components/Index/Index";
import Create from "./components/Create/Create";
import {Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import {Suspense} from "react"

const App = () => {

    return (
        <div className={styles.App}>
            <header>
                <Nav/>
            </header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/" exact component={Index}/>
                        <Route path="/create" component={Create}/>
                        <Route path="/about" component={About}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Suspense>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
