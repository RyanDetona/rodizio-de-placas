function operador(){
    const numplac = document.querySelector('#numplac').value;
    const dia = document.querySelector('#dia').value;
    const txt = document.querySelector("h3");

    if((numplac == 1||numplac == 2) && ( dia == "segunda"||dia == "Segunda")){
        txt.innerHTML = "Não pode dirigir";
    } else if((numplac == 3||numplac == 4) && (dia == "terça"||dia == "Terça")){
        txt.innerHTML = "Não pode dirigir";
    } else if((numplac == 5 ||numplac == 6) && (dia == "quarta"||dia == "Quarta")){
        txt.innerHTML = "Não pode dirigir";
    } else if((numplac == 7 ||numplac == 8) && (dia == "quinta"||dia == "Quinta")){
        txt.innerHTML = "Não pode dirigir";
    } else if((numplac == 9 ||numplac == 0) && (dia == "sexta"||dia == "Sexta")){
        txt.innerHTML = "Não pode dirigir";
    } else {
        txt.innerHTML = "Pode dirigir";
    }
}