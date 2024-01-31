let num = -10000
let numArray = [1, 3, 4, 6, 7, 9]

// console.log(Math.abs(num))
// console.log(Math.pow(9, 2))
// console.log(Math.sqrt(30))
// console.log(Math.min(10, 3, 50, 30, 1, -10))
// console.log(Math.max(10, 3, 50, 30, 1, -10))
// console.log(Math.max(...numArray))

//Pembulatan
//Floor
let numNew = 9.679917827
// console.log(Math.floor(numNew), 'floor')
// console.log(Math.ceil(numNew), 'ceil')
// console.log(Math.round(numNew), 'round')
// console.log(numNew.toFixed(3))

//0<1
// console.log(Math.floor(Math.random() * 100))
// console.log(Math.floor(Math.random() * 4 + 20), 'math random 20-23')
// console.log(Math.floor(Math.random() * (24 - 20) + 20), 'math random')
// console.log(Math.floor((Math.random() * 23) + 20), 'math random')

let username = "John"
let midname = "halo"

let lastname = " Doe"
// console.log(negara[negara.length - 1])
console.log(username.concat(lastname))
console.log(username + ' ' + midname + '' + lastname)
//string literal
console.log(`${username} ${midname} ${lastname}`)

let belajar = " Belajar Javascript Sekarang "

console.log(belajar.toLowerCase().indexOf('javascript'))
console.log(belajar.toUpperCase())
console.log(belajar.length)
console.log(belajar.trim().length)
console.log(belajar.trim())

let buah = "pisang,nanas,apel,semangka"
let arrayBuah = buah.split(',')
console.log(arrayBuah[2])

// console.log(belajar.replace('Javascript', 'HTML'))
// console.log(belajar.slice(19, belajar.length))

// let mobil = {
//     merk: "Honda",
//     tipe: "jazz",
//     warna: "merah",
//     tahun: 2000,
//     'lampu depan': 2
// }

// console.log(mobil.warna, 'mobil')
// console.log(mobil['warna'], 'mobil')
// console.log(mobil['lampu depan'])

// let hari = ['Senin', 'Selasa', 'Rabu']

// console.log(hari[2])

const dataMahasiswa = [
    {
        nama: 'John',
        usia: 20,
        nilai: [{
            matkul: 'matematika',
            nilai: 10
        }, {
            matkul: 'b.indo',
            nilai: 80
        }]
    },
    {
        nama: 'Doe',
        usia: 21,
        nilai: [{
            matkul: 'matematika',
            nilai: 90
        }, {
            matkul: 'b.indo',
            nilai: 80
        }]
    },
    {
        nama: 'Michle',
        usia: 22,
        nilai: [{
            matkul: 'matematika',
            nilai: 90
        }, {
            matkul: 'b.indo',
            nilai: 80
        }]
    }
]

const dataMahasiswaNew = dataMahasiswa.map((item) => {
    return {
        nama: item.nama,
        'matkul_matematika': item.nilai[0].nilai
    }
})

console.log(dataMahasiswaNew)

// console.log(dataMahasiswa[1].nilai)
// console.log(dataMahasiswa[1]['nilai'])
// console.log(dataMahasiswa[2].usia)


