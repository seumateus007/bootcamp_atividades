import React, {useState, useEffect} from 'react';
import '../Ifoodcounter/Ifoodcounter.css'

function Ifoodcounter(){

    const [value, setValue] = useState (0);
    const [buttonStyle, setButtonStyle] = useState ('counter-button-minus-active');

    useEffect(()=>{
        document.getElementById('moeda').innerHTML = 2.00 * value;
    },[value]);

    function down(){ 

    if( value <= 1){
        setButtonStyle('counter-button-minus-desactive');

    }
    
    if(value > 0 ){  
        setValue(value -1)
        }
    }

    function up(){
        setValue(value +1)
        setButtonStyle('counter-button-minus-active');
    }

    return (
        <div className='countex-wrapper'>
            <button onClick={down} className={buttonStyle}>-</button>
            <p>{value}</p>
            <button onClick={up} className='counter-button-plus-active'>+</button>
            <button id='moeda'>12,00</button>
            
        </div>
    );
}

export default Ifoodcounter;