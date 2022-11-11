let arrayList = [{
    ID: '1',
    nombre: 'FUNKO POP BATMAN 144',
    descripción: 'Traje clásico negro',
    stock: 9,
    precio: 7200,
    foto: 'https://m.media-amazon.com/images/I/71HylK-J5yL._AC_SX569_.jpg'
}, {
    ID: '2',
    nombre: 'FUNKO POP SPIDERMAN 287',
    descripción: 'Serie Avengers Infinity War',
    stock: 8,
    precio: 8000,
    foto: 'https://m.media-amazon.com/images/I/71ukgidlWqL._AC_SX569_.jpg'
},
{
    ID: '3',
    nombre: 'FUNKO POP IRON MAN 626',
    descripción: 'Serie Avenger End Game',
    stock: 5,
    precio: 7500,
    foto: 'https://http2.mlstatic.com/D_NQ_NP_662318-MLA43508370111_092020-O.jpg'
},
{
    ID: '4',
    nombre: 'FUNKO POP THOR 69',
    descripción: 'Serie Era de Ultron',
    stock: 8,
    precio: 6000,
    foto: 'https://m.media-amazon.com/images/I/61Dnoh5EXdS._AC_SX425_.jpg'
},
{
    ID: '5',
    nombre: 'FUNKO POP HAWKEYE 1211',
    descripción: 'Cabeza oscilante',
    stock: 11,
    precio: 6000,
    foto: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/002/087/383/products/funko-pop-hawkeye-11211-641a58d479795bd7e216495324967078-640-0.jpg'
},
{
    ID: '6',
    nombre: 'FUNKO POP CAPITAN AMERICA 288',
    descripción: 'Serie Avengers Infinity War',
    stock: 8,
    precio: 8000,
    foto: 'https://kamehouse.com.ar/wp-content/uploads/2022/03/funko_pop_capitanamerica288.png'
}, {
    ID: '7',
    nombre: 'FUNKO POP HULK 68',
    descripción: 'Serie los Vengadores se reunen',
    stock: 10,
    precio: 6500,
    foto: 'http://d2r9epyceweg5n.cloudfront.net/stores/001/287/783/products/8d8265d0-5b05-4431-85ac-575f0adff18a1-6e0ba747e74010ec6016177386680799-640-0.jpg'
}, {
    ID: '8',
    nombre: 'FUNKO POP VIUDA NEGRA 132',
    descripción: 'Serie Civil War',
    stock: 6,
    precio: 7500,
    foto: 'https://http2.mlstatic.com/D_NQ_NP_929505-MLA25039378911_092016-O.jpg'
}]


export const gFetch = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(arrayList)
        
    }, 2000);

})