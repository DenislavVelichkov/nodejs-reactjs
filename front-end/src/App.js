import styles from "./App.module.scss";
import {Route, Switch} from "react-router-dom";
import * as React from "react"
import {Suspense, useEffect, useState} from "react"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Index from "./components/Index/Index";
import Create from "./components/Create/Create";
import NotFound from "./components/NotFound/NotFound";
import Details from "./components/Details/Details";
import Accessories from "./components/Accessories/Accessories";
import {CubeContext} from "./context/CubeContext"

const App = () => {
    const [cubes, setCubes] = useState([])

    useEffect(() => {
        fetch('/api/all-cubes')
            .then(response => response.json())
            .then(cubes => setCubes(cubes))
            .catch(err => console.log(err))
    },[])

    return (
        <CubeContext.Provider value={{cubes: cubes}}>
            <div className={styles.App}>
                <header>
                    <Nav/>
                </header>
                <main>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Index}/>
                            <Route path="/create/cube" component={Create}/>
                            <Route path="/create/accessory" component={Accessories}/>
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
        </CubeContext.Provider>
    )
}

App.contextType = CubeContext

export default App;