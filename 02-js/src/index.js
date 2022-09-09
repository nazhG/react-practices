import { createElement } from 'react';
import heroes, {owners} from './heroes';

// variables

const nombre = 'fernando';
let saludos = 'saludos';

const saludo = (modismo = saludos) => modismo;

console.log(`${saludo()} ${nombre}`);
console.log(`${saludo('greetings')} ${nombre}`);

// obj literal

const numeros = [1,2,3,4];

console.log([...numeros,5]);

const persona = {
    edad: 47,
    saludos: 'may the force be with you',
    nombre: 'fernando',
}
const persona2 = {
    edad: 28,
    nombre: 'pablo',
};

const personas = [
    persona,
    persona2,
];

personas.map( (i) => console.log(`${saludo()} ${i.nombre}`) );

const getAge = ({edad}) => ({edad}); // = {edad:edad}
const {edad} = getAge(persona);

console.log(edad);

const {c : {a, b}} = {c : {a: 1, b: 2}};

console.table(a, b);

const [uno, , tres] = numeros;

console.log(uno, tres);

const getHero = (id) => heroes.find((hero) => hero.id === id);
const getHero2 = (owner) => heroes.filter((hero) => hero.owner === owner);

console.log(getHero(2));
console.log(getHero2(owners[0]));

// promesas

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve(getHero(2)), 2000)
});

promesa.then( console.log ).catch( console.warn );

const key = 'A07HrU4mpwd3QJrQOpxFzc263Qivb8YH';

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${key}`);
// console.log(peticion);

// peticion
//     .then( resp => resp.json() )
//     .then( ({data}) => {
//         const {url} = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch( console.warn );

const getImage = async() => {
    try {
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${key}`)
        const {data:{images:{original:{url}}}} = await resp.json();
        console.log(url);
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        
    }
    
}
getImage();