import styles from './styles.module.css';
import {Header} from "./components/header/header";
import {useEffect, useState} from "react";
import classnames from "classnames";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Search} from "./pages/Search";

function App() {
    const [showOverlay, setOverlay] = useState(false)
    useEffect(() => {
        document.body.classList.toggle('overlay-is-active', showOverlay);
    }, [showOverlay])
    return (
        <BrowserRouter>
            <Header setOverlay={setOverlay} showOverlay={showOverlay}/>
            <Routes>
                <Route index element={<Search />} />
            </Routes>
            <div className={classnames(styles.overlay, {[styles.overlayShow]: showOverlay})}/>
        </BrowserRouter>
    );
}

export default App;
