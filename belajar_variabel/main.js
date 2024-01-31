
//TIDAK BOLEH 
// let location = 'Bandung'//tidak boleh
// let const = 'let'//tidak boleh
// let function = 'let' //tidak boleh
// let 1a = 10 //tidak boleh
// let $ = 10 //boleh

// let a1 = 10

//CAMEL CASE
let middleName = 'John Doe'
//SNAKE CASE
let middle_name = 'John Doe'





//TIPE PRIMITIF
//STRING
var nama = "John Doen"
console.log(typeof nama)
//NUMBER
let usia = 20 //Nan (Not A Number)
console.log(typeof usia)

usia = ""
//BOOLEAN 
let isActive = true //false
// console.log(typeof isActive)

isActive = false

//TIPE NON PRIMITIF
//OBJECT
let user = {
    //key : //value
    nama: 'Messi',
    jenis_kelamin: 'laki-laki',
    usia: 20
}
// console.log(typeof user)


user.nama = 'Ronaldo'



//ARRAY [0,1,2,3,4,5,...]

let buah = ["nanas", "apel", "melon"]

// console.log(Array.isArray(user))

buah[0] = "semangka"
let num = [9, 10, 11]

let firstName = 'Rizal'
let lastName = 'Prasetya'

// console.log(firstName + lastName)
// console.log(`${firstName} ${lastName}`)


//String to Number
//parseInt('80') or Number('80')
//Number to String
//String(80)

//String to Boolean
//0 1
//"0" "1"
//Boolean(1)

//OPERATOR
//1. Opeartor Aritmatika
let num1 = 20
let num2 = 6  // float ,double
let num3 = '10a'
let num4 = '20.400003'

let hasilPenjumlahan = num1 + num2
let hasilPengurangan = num2 - num1
let hasilPerkalian = num1 * num2
let hasilPembagian = num2 / num1
let hasilSisaBagi = num1 % num2

// let inputNum1 = prompt('Masukan Angka Pertama')
// let inputNum2 = prompt('Masukan Angka Kedua')
// let hasilPenjumlahanInput = Number(inputNum1) + Number(inputNum2)

// alert("Hasil Penjumlahan nya adalah :" + hasilPenjumlahanInput)


//OPERATOR
//2. Opeartor PERBANDINGAN
//Lebih Besar > b
let numPertama = 5
let numKedua = 20
// console.log(numPertama >= numKedua)
//Lebih Kecil < k
// console.log(numPertama < numKedua)
//sama dengan 
//==
//===
// let username = 'admin'
// let password = '123456'

// console.log(username == 'admin', 'ini persama sama dengan')
// console.log(password == 123456, 'ini persama sama dengan')

//3. Opeartor Logika
//Logika AND (&&)
// console.log(username == 'admin' && password == '1234567')

//Logika OR (||)
// console.log(username == 'admin' || password == '123')

let username = 'admin'
let password = '12345'

// let usernameInput = prompt('Masukan Username Anda ?')
// let passwordInput = prompt('Masukan Password Anda ?')

// if (usernameInput == username && passwordInput == password) {
//     document.write('Anda Berhasil Login')
// } else {
//     document.write('Anda Gagal Login')
// }


// let titleId = document.getElementById('title')
let titleId = document.querySelector('#title')
console.log(titleId, 'id')

// let menuMakanan = document.getElementsByClassName('menu')
let menuMakanan = document.querySelectorAll('.menu')

menuMakanan[1].style.color = 'red'
menuMakanan[1].style.backgroundColor = 'pink'



let tagMakanan = document.querySelectorAll('li')
console.log(tagMakanan, 'TAG')


// titleId.textContent = "Menu Rumah Makan"
// titleId.innerHTML = "<h1>Menu Rumah Makan</h1>"



















