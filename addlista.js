//utilizacao do modo restrito
'use strict';

//buscando endereco dos elementos
const btsend = document.querySelector("#btsend");
const inname = document.querySelector("#name");
const inage = document.querySelector("#age");

btsend.addEventListener('click', e => {
    //bloqueando action do botão
    e.preventDefault();

    //definicao de variaveis
    let name = inname.value;
    let age = Number(inage.value);
    let level;

    //reset do formulario
    inname.value = inage.value = '';
    inname.focus();

    //teste de idade para adicionar usuario
    if (age < 18)
        level = "listajunior"
    else if (age <= 40)
        level = "listamaster"
    else
        level = "listasenior"

    //inclusao do usuario na lista correspondente
    let addlist = document.querySelector(`#${level}`);
    let li = `<li>Nome: ${name}; Idade: ${age};`;
    addlist.innerHTML += li;

    //alert("DEV adicionado");
});