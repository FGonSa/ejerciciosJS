const Fran = {
    nombre: "Fran", //atributos
    edad: 26,
    pasatiempos: ["dibujar", "tirarle la caña a la Imma", "cantar"], //array dentro de objeto
    soltero: false,
    contacto: { //objeto dentro de objeto
        mail: "fran@mail.com",
        twitter: "@canallita"
    },
    saludar: function () { //función
        console.log("Hola")
    },

    decirNombre: function () {
        console.log(`Me llamo ${this.nombre}.`) //This sirve para indicar que nos movemos dentro del ámbito del objeto.
    }
}

//Imprimir objeto
console.log(Fran);

//Acceder a atributos
console.log(Fran.pasatiempos); // me imprime todo el array
console.log(Fran.pasatiempos[2]); //imprime sólo esa posición del array
console.log(Fran.contacto); //imprime todo el objeto interno
console.log(Fran.contacto.twitter); //imprime solo ese atributo del objeto interno

//Invocar método del objeto
Fran.saludar();
Fran.decirNombre();
