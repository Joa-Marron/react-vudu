let product = [{
        ID: '1',
        categoria: 'Marvel',
        nombre: 'FUNKO POP SPIDERMAN 287',
        stock: 100,
        precio: 8000,
        foto: '../public/assets/marvel/spiderman287.jpg'

    }, {
        ID: '2',
    categoria: 'Marvel',
    nombre: 'FUNKO POP VIUDA NEGRA 132',
    stock: 100,
    precio: 7500,
    foto: '../public/assets/marvel/blackwidow132.jpg'

    },
    {
        ID: '3',
        categoria: 'Marvel',
        nombre: 'FUNKO POP IRON MAN 626',
        stock: 100,
        precio: 7500,
        foto: '../public/assets/marvel/ironman626.jpg'
    },
    {
        ID: '4',
        categoria: 'Marvel',
        nombre: 'FUNKO POP THOR 69',
        stock: 100,
        precio: 6000,
        foto: '../public/assets/marvel/thor69.jpg'
    },
    {
        ID: '5',
        categoria: 'Marvel',
        nombre: 'FUNKO POP HAWKEYE 1211',
        stock: 100,
        precio: 6000,
        foto: '../public/assets/marvel/hawkeye1211.jpg'
    },
    {
        ID: '6',
        categoria: 'Marvel',
        nombre: 'FUNKO POP CAPITAN AMERICA 288',
        stock: 100,
        precio: 8000,
        foto: '../public/assets/marvel/capitan288.jpg'
    }, {
        ID: '7',
        categoria: 'Marvel',
        nombre: 'FUNKO POP HULK 68',
        stock: 100,
        precio: 6500,
        foto: '../public/assets/marvel/hulk68.jpg'
    }, {
        
    }, {
        ID: '8',
        categoria: 'DC',
        nombre: 'FUNKO POP BATMAN 144',
        stock: 100,
        precio: 7200,
        foto: '../public/assets/dc/batman144.jpg'
    },
    {
        ID: '9',
        categoria: 'DC',
        nombre: 'FUNKO POP CATWOMAN 338',
        stock: 100,
        precio: 7200,
        foto: '../public/assets/dc/catwoman338.jpg'
    },{
        ID: '10',
        categoria: 'DC',
        nombre: 'FUNKO POP THE FLASH 213',
        stock: 100,
        precio: 5999,
        foto: '../public/assets/dc/flash213.jpg'
    },
    {
        ID: '11',
        categoria: 'DC',
        nombre: 'FUNKO POP HARLEY QUINN 54',
        stock: 100,
        precio: 5999,
        foto: '../public/assets/dc/harley54.jpg'
    },
    {
        ID: '12',
        categoria: 'DC',
        nombre: 'FUNKO POP THE JOKER 334',
        stock: 100,
        precio: 5999,
        foto: '../public/assets/dc/joker334.jpg'
    },
    {
        ID: '13',
        categoria: 'DC',
        nombre: 'FUNKO POP SUPERMAN 207',
        stock: 100,
        precio: 6999,
        foto: '../public/assets/dc/superman207.jpg'
    },
    {
        ID: '14',
        categoria: 'DC',
        nombre: 'FUNKO POP WONDER WOMAN 406',
        stock: 100,
        precio: 6999,
        foto: '../public/assets/dc/wonder406.jpg'
    },
    {
        ID: '15',
        categoria: 'Series',
        nombre: 'FUNKO POP TATE LANGDON AHS 168',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/series/tate168.jpg'
    },
    {
        ID: '16',
        categoria: 'Series',
        nombre: 'FUNKO POP DAENERYS TARGARYEN GOT 24',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/series/daenerys24.jpg'
    },
    {
        ID: '17',
        categoria: 'Series',
        nombre: 'FUNKO POP DARYL DIXON TWD 391',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/series/daryl391.jpg'
    },
    {
        ID: '18',
        categoria: 'Series',
        nombre: 'FUNKO POP ELEVEN ST 421',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/series/eleven421.jpg'
    },
    {
        ID: '19',
        categoria: 'Series',
        nombre: 'FUNKO POP MEREDITH GREY GA 1074',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/series/meredith1074.jpg'
    },
    {
        ID: '20',
        categoria: 'Series',
        nombre: 'FUNKO POP SWAYER LOST 416',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/series/swayer416.jpg'
    },
    {
        ID: '21',
        categoria: 'Series',
        nombre: 'FUNKO POP WALTER WITHE BB 158',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/series/walter158.jpg'
    },
    {
        ID: '22',
        categoria: 'Peliculas',
        nombre: 'FUNKO POP Elliott & ET 1252',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/peliculas/elliott1252.jpg'
    },
    {
        ID: '23',
        categoria: 'Peliculas',
        nombre: 'FUNKO HARRY POTTER 08',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/peliculas/harry08.jpg'
    },
    {
        ID: '24',
        categoria: 'Peliculas',
        nombre: 'FUNKO KING JARETH LABERINTO 364',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/peliculas/jareth364.jpg'
    },
    {
        ID: '23',
        categoria: 'Peliculas',
        nombre: 'FUNKO OBI-WAN KENOBI STAR WARS 270',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/peliculas/obi270.jpg'
    },
    {
        ID: '24',
        categoria: 'Peliculas',
        nombre: 'FUNKO TYLER FIGHT CLUB 919',
        stock: 100,
        precio: 7999,
        foto: '../public/assets/peliculas/tyler919.jpg'
    },
    {
        ID: '24',
        categoria: 'Peliculas',
        nombre: 'FUNKO DARTH VADER STAR WARS 01',
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