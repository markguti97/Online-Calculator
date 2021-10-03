import React, { useState } from "react";
import './App.css';
import axios from "axios";

const App = () => {
    const[result, setResult] = useState("");

    const handleClick = (e) =>{                             // számok és operátorok begépelése
        if(result !== "Error"){
            setResult(result.concat(e.target.name));
        }
        else{
            setResult("");
            setResult(e.target.name);
        }
    }

    const equal = () => {                                   // eredményszámolás
        try{
            setResult(eval(result).toString());
        }catch(err) {
            setResult("Error")
        }
    }

    const clear = () => {                                   // teljes kijelző törlése
        setResult("");
    }

    const backspace = () => {                               // egy-egy karakter törlése a kijelzőről
        setResult(result.slice(0, result.length - 1));
    }

    const loadIn = () => {                                              // külön fájlban eltárolt szám betöltése a kijelzőbe
        axios.get("/loadin").then((response) => {                       
            setResult(response.data.savedNumber.toString());
          });
    }

    const storeNumber = async () => {                                   // kijelzőn lévő szám elmentése külön fájlba
            const equal2 = new Promise((resolve, reject) => {           // eredményszámolás Promise-szal
                if(result === "Error")
                    reject("Error")
                try{
                    setResult(eval(result).toString());
                    resolve(eval(result).toString())
                }catch(err) {
                    setResult("Error")
                    reject("Error")
                }
            })
            equal2.then((message) => {                                    // valid érték esetén elküldjük a tárolni kívánt számot/eredményt a szervernek
                fetch("/store", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    savedNumber: JSON.parse(message)
                })
            })
        }).catch((message) => {
            setResult(message)})               
    }
    
    return (        
        <div className="container">
            <form>
                <input type="text" defaultValue={result} />
            </form>

            <div id="logo"><img src="logo.png"/></div>
                <div className="keypad">     

                    <button className="highlight2" onClick={storeNumber} id="store">Store</button>

                    <button className="highlight" onClick={clear} id="clear">AC</button>                    
                    <button className="highlight" onClick={backspace} id="backspace">C</button>

                    <button className="highlight" name="/" onClick={handleClick}> &#xf7;</button>
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                    <button className="highlight" name="*" onClick={handleClick}>&#215;</button>
                    <button name="4" onClick={handleClick}>4</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="6" onClick={handleClick}>6</button>
                    <button className="highlight" name="-" onClick={handleClick}>-</button>
                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button className="highlight" name="+" onClick={handleClick}>+</button>
                    <button name="0" onClick={handleClick}>0</button>
                    <button name="." onClick={handleClick}>.</button>

                    <button className="highlight2" onClick={loadIn} id="loadin">Load in</button>
                    <button className="highlight" onClick={equal} id="equal">=</button>

                </div>
        </div>
    );
}

export default App;