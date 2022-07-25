//buscando endereço dos elementos
const btsend = document.querySelector("#btsend");
const inname = document.querySelector("#name");
const inage = document.querySelector("#age");

btsend.addEventListener('click', e => {
    //bloqueando action do botão
    e.preventDefault();
    let name = inname.value;
    let age = Number(inage.value);
    let level;

    //reset do formulário
    inname.value = '';
    inage.value = '';
    inname.focus();

    //teste de idade para adicionar usuário
    if (age < 18)
        level = "listajunior"
    else if (age <= 40)
        level = "listamaster"
    else
        level = "listasenior"

    //adicionando usuário na lista correspondente
    let addlist = document.querySelector(`#${level}`);
    let li = `<li>Nome: ${name}; Idade: ${age};`;
    addlist.innerHTML += li;
    //alert("DEV adicionado");
});