// const alunos = [
// 	{
// 		nome: 'João',
// 		nota: 5,
// 		turma: '1B',
// 	},
// 	{
// 		nome: 'Sofia',
// 		nota: 9,
// 		turma: '1B',
// 	},
// 	{
// 		nome: 'Paulo',
// 		nota: 6,
// 		turma: '2C',
// 	},
//     {
// 		nome: 'Mateus',
// 		nota: 2,
// 		turma: '2C',
// 	},
// ];


// //## Atividade 1: Alunos Aprovados


// function alunosAprovados(array,  media) {
//     //ARRY AUXILIAR
//     let aprovados = [];
//     for(let i = 0; i < array.length; i++) {

//         //object destructuring

//         const {nota, nome} = array[i];

//         if(nota >= media){
//             aprovados.push(nome);
//         }
//     }
//     return aprovados;
// }

// console.log(alunosAprovados(alunos, 9));


//## Atividade 2: This


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	idade: 13,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));