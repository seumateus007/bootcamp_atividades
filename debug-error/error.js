function validacao (array, num){
try {

    if(!array && !num) throw new ReferenceError("Envie os parametros");

    if(typeof array !== "object" ) throw new TypeError  ("Array precisa ser do tipo object");

    if(typeof num !== "number" ) throw new TypeError  ("Array precisa ser do tipo numero");

    if(array.length !== num) throw new RangeError ("array ta diferente do numero");
    
    return array;

} catch (e) {
    if (e instanceof RangeError) {
        console.log('RangeError!');
        console.log(e.stack);
    } else if (e instanceof ReferenceError) {
        console.log('ReferenceError!');
        console.log(e.stack);
    } else {
        console.log('Outro tipo de erro!');
        console.log(e.stack);
    }
    
}
}

console.log(validacao([1, 2, 3 ,4 ,5], 5));
