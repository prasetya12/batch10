// let status = "Jumat" //pending, done, on progress

// switch (hari) {
//     case "Senin":
//         alert("Hari ini Hari Senin , Hari Kerja");
//         break;
//     case "Selasa":
//         alert("Selasa Day , Hari Kerja");
//         break;
//     case "Rabu":
//         alert("Hari ini Hari Rabu , Hari Kerja");
//         break;
//     case "Kamis":
//         alert("Hari ini Hari Kamis , Hari Kerja");
//         break;
//     case "Jumat":
//         alert("Hari ini Hari Jumat , Udah mau weekend");
//         break;
//     case "Sabtu":
//         alert("Hari ini Hari Sabtu , Udah mau Weekend");
//         break;
//     default:
//         alert("Bukan Hari");
//         break;
// }

// let score = prompt("Masukan Nilai")

// let scoreConvert = Number(score)

// switch (true) {
//     case score >= 90 && score <= 100:
//         alert('A')
//         break;
//     case score >= 80 && score < 90:
//         alert('B')
//         break;
//     default:
//         alert('Score tidak ditemukan')
// }

let buah = ['Pisang', 'Nanas', 'Semangka', 'Durian']

let user = {
    //key:value
    username: 'John Doe',
    age: 20,
    location: 'London'
}

let users = [{
    username: 'John Doe',
    age: 20,
    location: 'London'
}, {
    username: 'Messi',
    age: 22,
    location: 'Spanyol'
}]

let containerElm = document.getElementById('container_list_buah')
let containerProfileElm = document.getElementById('container_profile')

// for (let i = 0; i < buah.length; i++) {
//     let divElm = document.createElement('div')
//     divElm.innerHTML = `Saya makan ${buah[i]}`

//     containerElm.append(divElm)
// }

// for (let z in user) {
//     let divElm = document.createElement('div')
//     divElm.innerHTML = `${z}: ${user[z]}`

//     containerProfileElm.append(divElm)
//     console.log(user[z])
// }

// for (let user of users) {
//     let divElm = document.createElement('div')
//     divElm.innerHTML = `username: ${user.username}`

//     containerProfileElm.appendChild(divElm)
// }

// users.forEach((user) => {
//     console.log(user)
// })

// let userGetUsername = users.map((user) => user.username)


//UNCOUNTED LOOP
// let counter = 0
// let ask = confirm("Apakah Anda mau mengulang Loop ini ?")

// while (ask) {
//     let jawab = confirm("Apakah Anda mau mengulang Loop ini ?")
//     counter++
//     if (jawab === false) {
//         ask = false
//     }
// }

// alert(counter)
// let numContainer = document.getElementById('container_num')
// let num = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// for (let i = 0; i < num.length; i++) {
//     for (let j = 0; j < num[i].length; j++) {
//         let divElm = document.createElement('div')
//         divElm.innerHTML = `Element ${num[i][j]} Position ${i}, ${j}`

//         numContainer.appendChild(divElm)
//     }
// }

let hewan = [
    {
        nama: "sapi",
        kaki: 4,
        makanan: {
            rumput: true,
            daun: true,
        },
    },
    {
        nama: "kuda",
        kaki: 4,
        makanan: {
            rumput: true,
            daun: true,
        },
    },
    {
        nama: "ular",
        kaki: 0,
        makanan: {
            rumput: false,
            daun: false,
        },
    },
    {
        nama: "ikan",
        kaki: 0,
        makanan: {
            daun: false,
        },
    },
];

//sapi rumput (ya) daun(tidak)

// let makananHewan = hewan.map((item) => item.makanan)
// console.log(makananHewan, 'makanan')
let conHewan = document.getElementById('container_hewan')

// hewan.forEach((item) => {
//     let divElm = document.createElement('div')
//     let isRumput = item.makanan.rumput ? 'Ya' : 'Tidak'
//     let isDaun = item.makanan.daun ? 'Ya' : 'Tidak'

//     // console.log(item.makanan, 'makanan')
//     divElm.innerHTML = `${item.nama} rumput (${isRumput}) daun(${isDaun})`

//     conHewan.appendChild(divElm)
// })

let sapiHewan = hewan.filter(item => item.nama == 'sapi')

for (key in sapiHewan[0].makanan) {
    console.log(key)
}

let userApp = {
    username: 'John Doe',
    age: 20
}

let userAppActive = {
    ...userApp,
    isActive: true
}

// console.log(userAppActive, 'userap')

function getLuasLingkaran(value) {
    let luasLingkaran = Math.PI * Math.pow(value, 2)

    return luasLingkaran
}

// function onClickButton() {
//     let valueElm = document.getElementById('value_jarijari').value
//     let conValueElm = Number(valueElm)
//     // let hasil = Math.PI * Math.pow(conValueElm, 2)
//     let hasil = getLuasLingkaran(conValueElm)
//     hasilElm.textContent = hasil
// }




let btnElm = document.getElementById('btn_hitung')
let hasilElm = document.getElementById('hasil')


// btnElm.addEventListener('click', function () {
//     let valueElm = document.getElementById('value_jarijari').value
//     let conValueElm = Number(valueElm)
//     // let hasil = Math.PI * Math.pow(conValueElm, 2)
//     let hasil = getLuasLingkaran(conValueElm)
//     hasilElm.textContent = hasil

// })

function showHtml(value, idElm) {
    let showElm = document.getElementById(idElm)
    showElm.textContent = value
}

function onShow() {
    let namaElm = document.getElementById('nama').value
    // let hasilNama = document.getElementById('hasil_nama')

    showHtml(namaElm, 'hasil_nama')
    // hasilNama.textContent = namaElm

}

const onClickButton = () => {
    let valueElm = document.getElementById('value_jarijari').value
    let conValueElm = Number(valueElm)
    // let hasil = Math.PI * Math.pow(conValueElm, 2)
    let hasil = getLuasLingkaran(conValueElm)
    showHtml(hasil, 'hasil')
    // hasilElm.textContent = hasil
}
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar
}

let panjang = 0;
let lebar = 0

console.log(luasPersegiPanjang(panjang, lebar))

//bikin 2 variabel, panjang lebar, kemudian bikin fungsi luas persegi panjang pxl , hasil ditampilkan








