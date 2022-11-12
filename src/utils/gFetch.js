let arrayList = [{
    ID: '1',
    categoria: 'DC',
    nombre: 'FUNKO POP BATMAN 144',
    descripción: 'Traje clásico negro',
    stock: 100,
    precio: 7200,
    foto: '../public/assets/dc/batman144.jpg'
}, {
    ID: '2',
    categoria: 'Marvel',
    nombre: 'FUNKO POP SPIDERMAN 287',
    descripción: 'Serie Avengers Infinity War',
    stock: 100,
    precio: 8000,
    foto: '../public/assets/marvel/spiderman287.jpg'
},
{
    ID: '3',
    categoria: 'Marvel',
    nombre: 'FUNKO POP IRON MAN 626',
    descripción: 'Serie Avenger End Game',
    stock: 100,
    precio: 7500,
    foto: '../public/assets/marvel/ironman626.jpg'
},
{
    ID: '4',
    categoria: 'Marvel',
    nombre: 'FUNKO POP THOR 69',
    descripción: 'Serie Era de Ultron',
    stock: 100,
    precio: 6000,
    foto: '../public/assets/marvel/thor69.jpg'
},
{
    ID: '5',
    categoria: 'Marvel',
    nombre: 'FUNKO POP HAWKEYE 1211',
    descripción: 'Cabeza oscilante',
    stock: 100,
    precio: 6000,
    foto: '../public/assets/marvel/hawkeye1211.jpg'
},
{
    ID: '6',
    categoria: 'Marvel',
    nombre: 'FUNKO POP CAPITAN AMERICA 288',
    descripción: 'Serie Avengers Infinity War',
    stock: 100,
    precio: 8000,
    foto: '../public/assets/marvel/capitan288.jpg'
}, {
    ID: '7',
    categoria: 'Marvel',
    nombre: 'FUNKO POP HULK 68',
    descripción: 'Serie los Vengadores se reunen',
    stock: 100,
    precio: 6500,
    foto: '../public/assets/marvel/hulk68.jpg'
}, {
    ID: '8',
    categoria: 'Marvel',
    nombre: 'FUNKO POP VIUDA NEGRA 132',
    descripción: 'Serie Civil War',
    stock: 100,
    precio: 7500,
    foto: '../public/assets/marvel/blackwidow132.jpg'
}]


export const gFetch = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(arrayList)
        
    }, 2000);

})

