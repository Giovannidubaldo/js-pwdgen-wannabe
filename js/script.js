document.getElementById('subtitle').innerHTML = 'Benvenuto' 

let name = prompt('Inserisci il tuo nome')

let surname = prompt('Inserisci il tuo congome')

let colore_preferito = prompt('Inserisci il tuo colore preferito')

let persona = name + surname + colore_preferito;

document.getElementById('subtitle').innerHTML = document.getElementById('subtitle').innerHTML + ' ' + name +
" la tua password è: " +persona + "23";

