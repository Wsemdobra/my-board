import { useState } from 'react';
import './App.scss';
import { MainBoard } from './components/MainBoard/MainBoard';
import { LoginPage } from "./Pages/LoginPage/LoginPage";


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    );

    return (
        <div className="App">
            {
                isLoggedIn ?
                    (<MainBoard
                        setIsLoggedIn={setIsLoggedIn} />)
                    :
                    (<LoginPage setIsLoggedIn={setIsLoggedIn} />)
            }
        </div>

    );
}

export default App;
