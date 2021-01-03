import styles from "./App.module.scss";
import {Route, Switch} from "react-router-dom";
import * as React from "react"
import {Suspense} from "react"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Index from "./components/Index/Index";
import Create from "./components/Create/Create";
import NotFound from "./components/NotFound/NotFound";
import Details from "./components/Details/Details";
import Accessories from "./components/Accessories/Accessories";
import CubeContextProvider, {CubeContext} from "./context/CubeContext"
import AttachAccessory from "./components/AttachAccessory/AttachAccessory";

const App = () => {

    return (
        <CubeContextProvider>
            <div className={styles.App}>
                <header>
                    <Nav/>
                </header>
                <main>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/" exact component={Index}/>
                            <Route path="/create/cube" component={Create}/>
                            <Route path="/create/accessory" component={Accessories}/>
                            <Route path="/about" component={About}/>
                            <Route path="/details/:cubeId" component={Details}/>
                            <Route path="/attach/accessory/:cubeId" component={AttachAccessory}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Suspense>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </CubeContextProvider>
    )
}

App.contextType = CubeContext

export default App;