const btsend = document.querySelector("#btsend");
const inname = document.querySelector("#name");
const inage = document.querySelector("#age");

btsend.addEventListener('click', (e) => {
    e.preventDefault();
    let name = inname.value;
    let age = Number(inage.value);
    let level;
    inname.value = '';
    inage.value = '';
    inname.focus();

    if (age < 18)
        level = "listajunior"
    else if (age <= 40)
        level = "listamaster"
    else
        level = "listasenior"

    let addlist = document.querySelector(`#${level}`);
    let li = `<li>Nome: ${name}; Idade: ${age};`;
    addlist.innerHTML += li;
    
});