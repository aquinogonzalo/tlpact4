let persona = {
    nombre: 'Alejandro',
    edad: 20,
    profesion: 'Desarrollador Web' 
}

function presentarPersona(nombre, edad, profesion){
    presentacion = `Hola mi nombre es ${nombre}, soy ${profesion} y tengo ${edad} años.`;
    
    return presentacion;
}

console.log(presentarPersona(persona.nombre, persona.edad, persona.profesion))