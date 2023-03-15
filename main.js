// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    obtDetalles() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Género: ${this.genero}`);
    }
}

const persona1 = new Persona("Juan", 17, "masculino");
persona1.obtDetalles();



// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar() {
        console.log(`El estudiante ${this.nombre}, de ${this.edad} años y género ${this.genero}, es del curso ${this.curso} grupo ${this.grupo}.`);
    }
}

let estudiante1 = new Estudiante("Juan", 17, "masculino", "2º Bachillerato", "A");
estudiante1.registrar();

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    asignar() {
        console.log(`El profesor ${this.nombre}, de ${this.edad} años y género ${this.genero} , es el que enseña la asignatura de ${this.asignatura} a nivel ${this.nivel}.`);
    }
}
let profesor1 = new Profesor("Carlos", 40, "masculino", "Matemáticas", "avanzado");
profesor1.asignar();

// Construye las siguientes clases:

// Warrior:
// constructor(life, power): Establece el valor de las propiedades life y power
// attack: Devuelve el valor de power del guerrero
// defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

// Maya: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.
// drinkColaCao: Suma 10 al poder.

// Aztec: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.
// drinkNesquik: Suma 10 a la vida.

// Realiza la siguiente cadena de intercambio de golpes.

// Azteca bebe nesquik
// Maya bebe Cola Cao
// Maya ataca a azteca. Azteca defiende.
// Azteca ataca a maya. Maya defiende.

class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }

    attack() {
        return this.power;
    }

    defend(damage) {
        this.life -= damage;
        console.log(`Vida restante: ${this.life}`);
    }
}

class Maya extends Warrior {
    constructor(life, power) {
        super(life, power);
    }

    drinkColaCao() {
        this.power += 10;
    }
}

class Aztec extends Warrior {
    constructor(life, power) {
        super(life, power);
    }

    drinkNesquik() {
        this.life += 10;
    }
}

let maya = new Maya(50, 20);
let aztec = new Aztec(60, 15);

console.log("Azteca bebe Nesquik.");
aztec.drinkNesquik();
console.log(`Vida del Azteca: ${aztec.life}`);

console.log("Maya bebe Cola Cao.");
maya.drinkColaCao();
console.log(`Poder de Maya: ${maya.power}`);

console.log("Maya ataca a Azteca.");
let damage = maya.attack();
aztec.defend(damage);

console.log("Azteca ataca a Maya.");
damage = aztec.attack();
maya.defend(damage);

// El de los aviones no lo entiendo muy bien, ya lo veré cuando subáis el archivo de soluciones, y si lo podéis explicar en clase os lo agradecería.