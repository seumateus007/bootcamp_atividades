import {useState} from 'react';



function Smartcounter(){

    //useState > retorna uma vetor
    //1. variavel stateful
    //2. função amarra a variavel que atualiza esse valor
    const [quantity, upQuantity] =  useState(1);
    console.log(quantity);

    return(
        <>
            <h1>{quantity}</h1>
            <button onClick={()=> upQuantity(quantity +1)}>Aumentar</button>
        </>
    );
}

export default Smartcounter;