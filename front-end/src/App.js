import styles from "./App.module.scss";
import {Route, Switch} from "react-router-dom";
import {Suspense} from "react"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Index from "./components/Index/Index";
import Create from "./components/Create/Create";
import NotFound from "./components/NotFound/NotFound";
import Details from "./components/Details/Details";

const App = () => (
    <div className={styles.App}>
        <header>
            <Nav/>
        </header>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path="/create" component={Create}/>
                    <Route path="/about" component={About}/>
                    <Route path="/details/:cubeId" component={Details}/>
                    <Route component={NotFound}/>
                </Switch>
            </Suspense>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
)

export default App;
