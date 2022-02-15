function imprimeHola() {
    console.log("Hola");
}     

function main(){
                console.log("Starting......");
                const titulo = document.querySelector("h1");
                titulo.addEventListener("pointerenter", imprimeHola);
                const elements=Array.from(document.body.querySelectorAll("*"));
                console.log(elements);
                for (let item of elements) {item.addEventListener("pointerenter",()=>{console.log("Pop!!")})};
                const counters = elements.map((item)=>{return{element:item, counter:0,}});
                console.log(counters);
}

window.addEventListener("load", main);
