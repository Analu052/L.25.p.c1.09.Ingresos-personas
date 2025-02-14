/* INGRESOS PERSONAS 
Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso 
menor y el ingreso promedio. 
Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150), 
(José, 135), (Carlos, 160), (Pedro, 75) 
Monto del ingreso menor: 75$ 
Ingreso promedio: 130$*/ 

import Cl_grupo from "./Cl_grupo.js";
import Cl_persona from "./Cl_persona.js";

let persona1 = new Cl_persona("Mary", 150);
let persona2 = new Cl_persona("Jose", 135);
let persona3 = new Cl_persona("Carlos", 160);
let persona4 = new Cl_persona("Pedro", 75);

let grupo = new Cl_grupo();
grupo.procesarPersona(persona1);
grupo.procesarPersona(persona2);
grupo.procesarPersona(persona3);
grupo.procesarPersona(persona4);   

let salida=document.getElementById("salida");

salida.innerHTML= `Resultados:
<br> Monto del ingreso menor: ${grupo.menorI()}$
<br> Ingreso promedio: ${grupo.promI()}$`; 