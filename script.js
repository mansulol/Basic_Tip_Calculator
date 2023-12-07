let comida = document.getElementsByClassName('comida');
let plato = document.getElementsByClassName('plato');
let precio;

let salidaConPropina = document.getElementById('salidaConPropina');
let salidaSinPropina = document.getElementById('salidaSinPropina');
let PorcentajePropina;
let lista = document.getElementById('lista');


let btnagregar = document.getElementById('btnagregar').addEventListener('click', agregar);
let btneliminar = document.getElementById('btneliminar').addEventListener('click', eliminar);
let btncalcular = document.getElementById('btncalcular').addEventListener('click', calcular);

function agregar(){

    let div = document.createElement('div');
    let input_1 = document.createElement('input');
    let input_2 = document.createElement('input');

    div.className='comida';

    input_1.className='plato';
    input_1.placeholder='Producto'

    input_2.className='precio';
    input_2.placeholder='PRECIO';

    div.appendChild(input_1);
    div.appendChild(input_2);
    lista.appendChild(div);
}
function eliminar(){

    if(comida.length-1 > 0){
        lista.removeChild(comida[comida.length-1]);

    }
}
function calcular(){
    let total = 0;
    let porcentaje = 0;
    precio =  document.getElementsByClassName('precio');
    PorcentajePropina = document.getElementById('porcentajePropina').value;

    for(i=0; i<=precio.length-1; i++){
        total += parseInt(precio[i].value);
    }


    porcentaje = (total*PorcentajePropina)/100 ;

    salidaConPropina.innerHTML = total;
    salidaSinPropina.innerHTML = porcentaje;
}

