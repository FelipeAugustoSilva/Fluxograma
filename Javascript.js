
const date1 = new Date();

const date2 = new Date('2022-01-03 19:00:00');

if (date1.getTime() === date2.getTime()) {
	console.log('As datas são iguais');
}
else if (date1.getTime() < date2.getTime()) {
	console.log(date1.toString() + ' maior que ' + date2.toString() + ' permitir cadastro.');
}
else {
	console.log(date1.toString() + ' menor que ' + date2.toString() + ' cadastro nao permitido por data invalida.');
}

let idade = 28;
if(idade<18){
    console.log("Cadastro nao permitido para menores de 18 anos.")
}else {
    console.log("Cadastro permitido.")
}

let listpart = ["Marcos","Pedro","Maria","Lucas"]
if (listpart.length > 100){
    console.log("Infelizmente foi excedido o numero de pessoas por palestra.")
}else {
    console.log("Cadastro realizado com sucesso.")
}