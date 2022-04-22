import React, { Component } from 'react';

class Calculatorx extends Component{

    constructor(props){
        super(props)
        this.state = {
            numOne: 0,
            numTwo: 0,
            result: 0
        }
    }

    handleChange = (e) =>  {
        const { name, value } = e.target;
        this.setState( { [name]: value } );

        console.log("Algo a cambiado");
    }

    handleAdition = (e) => {
        e.preventDefault();
        const { numOne, numTwo } = this.state;
        this.calc(numOne,numTwo, 'A');
        console.log("Algo se a enviado: " +  JSON.stringify(this.state) );
    }

    handleSubtraction = (e) => {
        e.preventDefault();
        const { numOne, numTwo } = this.state;
        this.calc(numOne,numTwo, 'S');
        console.log("Algo se a enviado: " +  JSON.stringify(this.state) );
    }

    handleMultiplication = (e) => {
        e.preventDefault();
        const { numOne, numTwo } = this.state;
        this.calc(numOne,numTwo, 'M');
        console.log("Algo se a enviado: " +  JSON.stringify(this.state) );
    }

    calc(a, b, oper){
        if (oper == 'A')
            this.setState( { result:  parseInt(a) + parseInt(b) } );         
        else
            if(oper == 'S')
            this.setState( { result:  a - b } );  
            else
            this.setState( { result:  a * b } ); 
    }

    render(){
        const { numOne, numTwo, result } = this.state;
        return(
            <div>
                <h1>Calculadora</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Oper One:</label>
                        <input type="text" name="numOne" value = { numOne } onChange = { this.handleChange } ></input>
                    </div>
                    <div>
                        <label>Oper two:</label>
                        <input type="text" name = "numTwo" value = { numTwo } onChange = { this.handleChange } ></input>
                    </div>
                    <div>
                        <label>Result:</label>
                        <input type="text" name = "result" value = { result } ></input>
                    </div>
                    <button type='submit' onClick={ this.handleAdition }>addition</button>
                    <button type='submit' onClick={ this.handleSubtraction }>subtraction</button>
                    <button type='submit' onClick={ this.handleMultiplication }>multiplication</button>
                </form>
                <hr></hr>
                <div>
                    <h2>Datos del formulario</h2>
                    <p> { JSON.stringify(this.state) } </p>
                </div>
            </div>
        )
    }

    
}

export default Calculatorx;