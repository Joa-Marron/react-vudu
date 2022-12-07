let product = [{
        ID: '1',
        nombre: 'FUNKO POP SPIDERMAN 287',
        categoria: 'Marvel',
        stock: 100,
        precio: 8000,
        foto: '../public/assets/marvel/spiderman287.jpg'

    }, {
        ID: '2',
        nombre: 'FUNKO POP VIUDA NEGRA 132',
        categoria: 'Marvel',
        stock: 100,
        precio: 7500,
        foto: '../public/assets/marvel/blackwidow132.jpg'

    },
    {
        ID: '3',
        nombre: 'FUNKO POP IRON MAN 626',
        categoria: 'Marvel',
        stock: 100,
        precio: 7500,
        foto: '../public/assets/marvel/ironman626.jpg'
    },
    {
        ID: '4',
        nombre: 'FUNKO POP THOR 69',
        categoria: 'Marvel',
        stock: 100,
        precio: 6000,
        foto: '../public/assets/marvel/thor69.jpg'
    },
    {
        ID: '5',

        nombre: 'FUNKO POP HAWKEYE 1211',
        categoria: 'Marvel',
        stock: 100,
        precio: 6000,
        foto: '../public/assets/marvel/hawkeye1211.jpg'
    },
    {
        ID: '6',
        nombre: 'FUNKO POP CAPITAN AMERICA 288',
        categoria: 'Marvel',
        stock: 100,
        precio: 8000,
        foto: '../public/assets/marvel/capitan288.jpg'
    }, {
        ID: '7',
        nombre: 'FUNKO POP HULK 68',
        categoria: 'Marvel',
        stock: 100,
        precio: 6500,
        foto: '../public/assets/marvel/hulk68.jpg'
    },
    {
        ID: '8',
        nombre: 'FUNKO POP BATMAN 144',
        categoria: 'DC',
        stock: 100,
        precio: 7200,
        foto: '../public/assets/dc/batman144.jpg'
    },
    {
        ID: '9',
        nombre: 'FUNKO POP CATWOMAN 338',
        categoria: 'DC',
        stock: 100,
        precio: 7200,
        foto: '../public/assets/dc/catwoman338.jpg'
    }, {
        ID: '10',
        nombre: 'FUNKO POP THE FLASH 213',
        categoria: 'DC',
        stock: 100,
        precio: 5999,
        foto: '../public/assets/dc/flash213.jpg'
    },
    {
        ID: '11',
        nombre: 'FUNKO POP HARLEY QUINN 54',
        categoria: 'DC',
        stock: 100,
        precio: 5999,
        foto: '../public/assets/dc/harley54.jpg'
    },
    {
        ID: '12',
        nombre: 'FUNKO POP THE JOKER 334',
        categoria: 'DC',
        stock: 100,
        precio: 5999,
        foto: '../public/assets/dc/joker334.jpg'
    },
    {
        ID: '13',
        nombre: 'FUNKO POP SUPERMAN 207',
        categoria: 'DC',
        stock: 100,
        precio: 6999,
        foto: '../public/assets/dc/superman207.jpg'
    },
    {
        ID: '14',
        nombre: 'FUNKO POP WONDER WOMAN 406',
        categoria: 'DC',
        stock: 100,
        precio: 6999,
        foto: '../public/assets/dc/wonder406.jpg'
    },
    {
        ID: '15',
        nombre: 'FUNKO POP TATE LANGDON AHS 168',
        categoria: 'Series',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/series/tate168.jpg'
    },
    {
        ID: '16',
        nombre: 'FUNKO POP DAENERYS TARGARYEN GOT 24',
        categoria: 'Series',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/series/daenerys24.jpg'
    },
    {
        ID: '17',
        nombre: 'FUNKO POP DARYL DIXON TWD 391',
        categoria: 'Series',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/series/daryl391.jpg'
    },
    {
        ID: '18',
        nombre: 'FUNKO POP ELEVEN ST 421',
        categoria: 'Series',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/series/eleven421.jpg'
    },
    {
        ID: '19',
        nombre: 'FUNKO POP MEREDITH GREY GA 1074',
        categoria: 'Series',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/series/meredith1074.jpg'
    },
    {
        ID: '20',
        nombre: 'FUNKO POP SAWYER LOST 416',
        categoria: 'Series',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/series/sawyer416.jpg'
    },
    {
        ID: '21',
        nombre: 'FUNKO POP WALTER WITHE BB 158',
        categoria: 'Series',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/series/walter158.jpg'
    },
    {
        ID: '22',
        nombre: 'FUNKO POP Elliott & ET 1252',
        categoria: 'Peliculas',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/peliculas/elliott1252.jpg'
    },
    {
        ID: '23',
        nombre: 'FUNKO HARRY POTTER 08',
        categoria: 'Peliculas',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/peliculas/harry08.jpg'
    },
    {
        ID: '24',
        nombre: 'FUNKO KING JARETH LABERINTO 364',
        categoria: 'Peliculas',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/peliculas/jareth364.jpg'
    },
    {
        ID: '25',
        nombre: 'FUNKO OBI-WAN KENOBI STAR WARS 270',
        categoria: 'Peliculas',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/peliculas/obi270.jpg'
    },
    {
        ID: '26',
        nombre: 'FUNKO TYLER FIGHT CLUB 919',
        categoria: 'Peliculas',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/peliculas/tyler919.jpg'
    },
    {
        ID: '27',
        nombre: 'FUNKO DARTH VADER STAR WARS 01',
        categoria: 'Peliculas',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/peliculas/vader01.jpg'
    }
]


export const gFetch = (ID) => {

    return new Promise((resuelto, rechazado) => {

        setTimeout(() => {
            resuelto(ID ? product.find(item => item.ID === ID) : product)
        }, 2000)
    })
}