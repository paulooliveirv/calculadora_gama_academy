import React, {useState} from 'react';
import './App.css'

const App = () => {
    const [resultado, mostraResultado] = useState("");

    const clique = (e) => {
        mostraResultado(resultado.concat(e.target.name));
    }

    const limpa = () => {
        mostraResultado("");
    }

    const apagaItem = () => {
        mostraResultado(resultado.slice(0, resultado.length -1));
    }

    const calcular = () =>{
        try{
            mostraResultado(eval(resultado).toString());
        }catch(err){
            mostraResultado("DIGITE NOVAMENTE")
        }
    }
    return (
        <div>
            <h1>Calculadora Gama Academy</h1>
            <div className = "container">
                <form>
                    <input type="text" value= {resultado}/>
                </form>

                <div className="teclado">
                    <button className="botoesEspeciais" onClick={ limpa } id="limpa">Limpa</button>
                    <button className="botoesEspeciais" onClick={ apagaItem } id="c">C</button>
                    <button className="botoesEspeciais" name= "/" onClick={ clique }>&divide;</button>
                    <button name= "7" onClick={ clique }>7</button>
                    <button name= "8" onClick={ clique }>8</button>
                    <button name= "9" onClick={ clique }>9</button>
                    <button className="botoesEspeciais" name= "*" onClick={ clique }>&times;</button>
                    <button name= "4" onClick={ clique }>4</button>
                    <button name= "5" onClick={ clique }>5</button>
                    <button name= "6" onClick={ clique }>6</button>
                    <button className="botoesEspeciais" name= "-" onClick={ clique }>&ndash;</button>
                    <button name= "1" onClick={ clique }>1</button>
                    <button name= "2" onClick={ clique }>2</button>
                    <button name= "3" onClick={ clique }>3</button>
                    <button className="botoesEspeciais" name= "+" onClick={ clique }>+</button>
                    <button className = "botaoZero" name= "0" onClick={ clique }>0</button>
                    <button className="botoesEspeciais" name= "." onClick={ clique }>.</button>
                    <button className="botoesEspeciais" onClick={ calcular } id= "resultado">=</button>
                </div>
            </div>
        </div>
    );
}

export default App;