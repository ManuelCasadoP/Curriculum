function imprimeHola() {
    console.log("Hola");
}     

function main(){
                console.log("Starting......");
                const titulo = document.querySelector("h1");
                titulo.addEventListener("pointerenter", imprimeHola);
                const elements=Array.from(document.body.querySelectorAll("*"));
                console.log(elements);
}

window.addEventListener("load", main);
