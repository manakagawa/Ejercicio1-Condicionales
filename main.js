//Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”

let bellisimo = prompt("¿Me contestarías si eres Bellaka con un si o no?");

if (bellisimo == "si"){
    alert("Hermosa bellaka");
    }else if (bellisimo == "no"){
        alert("¿Que es ser una bellaka?")
    }

//Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

let numero = prompt("¿Si me das un número, te responderé si se divide en entre 2");

function numeroDivisible(numero){
    return numero 
    }

    if(numero %2 == 0){
        alert( "número " + numero + " si lo es 2")
    }else if(numero %2 == 1){
        alert( "número " + numero + " no lo es 2")
    }

//Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

    let espar = prompt("Me indicarías un número par");

    function esPar(espar){
        return espar 
        }

        if(espar %2 == 0){
            alert( "acertaste " + espar + " es un # par")
        }else if(espar %2 == 1){
            alert( "estas equivocado " + espar + " no es # par")
        }
//Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
            
let numerocliente = prompt("nos indicarías tu número de cliente");

function sorteo(numerocliente){
return numerocliente
}
if(numerocliente == 1000){
    alert("ganaste un gansito")
}else if(numerocliente != 1000)
    alert("no ganaste nada, suerte para la otra")

//Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.   

let auto = prompt(" cuantas llantas tiene un auto?:")
let trailer = prompt("cuantas llantas tiene un trailer?:")

function menor(auto, trailer){
return auto;
return trailer;
}

if(auto < trailer){

    console.log(" el auto tiene menos llantas " + auto + " el trailer tiene " + trailer)
}

//Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let numero1 = Number(prompt("dame un número entre el 10 y el 30"));
let numero2 = Number(prompt("dame otro número entre el 10 y el 30"));
let numero3 = Number(prompt("otra vez regalame un número entre el 10 y el 30"));

function numeromayor(uno, dos, tres){
    return numero1;
    return numero2;
    return numero3;
}

if(numero1 >= numero2 && numero1 >= numero3){
    document.write("el número mayor es #" + numero1);
}else if(numero2>=numero1 && numero2 >=numero3){document.write("el número mayor es 3" + numero2);}
    else if(numero3>=numero1 && numero3>=numero2){document.write("el número mayor es #" + numero3)
}

//Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let dia = prompt("¿qué día de la semana es?")

function diaSemana(monday, tuesday, wednesday, thursday, friday, saturday, sunday){
return diaSemana;

}
if(dia == "monday"){
    document.write("inicia la semana con todo");
}else if(dia == "friday"){document.write("diviertete y descansa el fin de semana")}
else if(dia == "saturday"){document.write("duermeeeee")}
else if(dia == "sunday"){document.write("ponte de esperancita")}
else if(dia == "tuesday" || "wednesday" || "thursday"){document.write("ya casi es fin de semana")}

//Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.



