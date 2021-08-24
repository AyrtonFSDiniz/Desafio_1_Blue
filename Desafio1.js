/* Desafio 1
Projeto Detetive
Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
"Telefonou para a vítima?"
"Esteve no local do crime?"
"Mora perto da vítima?"
"Devia para a vítima?"
"Já trabalhou com a vítima?" 

O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita",
entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
*/

const prompt = require('prompt-sync')();

const nome_suspeito = prompt ("Qual o seu nome? ");

console.log(`${nome_suspeito} digite 1 para Sim e 0 para Não`);

let resposta1 = +prompt (`${nome_suspeito}, você telefonou para a vítima? `);
let resposta2 = +prompt ("Esteve no local do crime? ");
let resposta3 = +prompt ("Mora perto da vítima? ");
let resposta4 = +prompt ("Devia para a vítima? ");
let resposta5 = +prompt ("Já trabalhou com a vítima? ");

let classificacao = (resposta1 + resposta2 + resposta3 + resposta4 + resposta5);

if (classificacao < 2) {
    console.log("Você é inocente.");
} else if (classificacao > 2 && classificacao < 5) {
    console.log("Cúmplice! Será levado a delegacia para acareação.");
} else if (classificacao >= 5) {
    console.log("Assasino!! Você está preso!!");
} else {
    console.log ("Você é um suspeito!")
}