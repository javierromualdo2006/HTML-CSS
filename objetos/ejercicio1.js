// arrays

const ejemploArray = [1, 2, 3];
console.log[ejemploArray[1]];

//objetos

const persona = {
    //clave : valor
    name: "federico",
    age: 28,
    isWorking: true,
    cats: ["felipe", "zoe", "mimi"],
    walk: function () {
        console.log("estoy caminando");
    },
};

console.log(persona.name);
console.log(persona["name"]);
console.log(persona.cats[1]);
//si cuando estan mostrando/ejecutando una funcion no le ponen los parametros esta no va a funcionar
console.log(persona.walk);