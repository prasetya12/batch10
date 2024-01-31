// let date = new Date()

// let timestampDate = new Date(123456789013)
let stringDate = new Date('Januari 01 2024 17:00')
// let customDate = new Date(year,month,day,hours,minutes,seconds, ms)

// let customDate = new Date(2024, 2, 1)

function convertDate(time) {
    // if (time < 10) {
    //     return `0${time}`
    // } else {
    //     return time
    // }
    //operator ternary
    return time < 10 ? `0${time}` : time
}

// Minggu, 28 Januari 2024 13:56
const dataMonth = ['Januari', 'Februari', 'Maret', 'April']
const dataHari = ['Minggu', 'Senin', 'Selasa', 'Rabu']


// let getYear = stringDate.getFullYear()
// let getMonth = stringDate.getMonth()
// let getDate = stringDate.getDate()
// let getDay = stringDate.getDay()
// let getHours = stringDate.getHours()
// let getMinutes = stringDate.getMinutes()
// let getSeconds = stringDate.getSeconds()

// let convertTanggal = `${dataHari[getDay]}, ${convertDate(getDate)} ${dataMonth[getMonth]} ${getYear} ${getHours}:${convertDate(getMinutes)}`

// let dateElm = document.getElementById('date')
// dateElm.innerHTML = convertTanggal

let dataString = "2022-02-01 17:43"

let convDateString = dataString.split(' ')
let dateString = convDateString[0]
let timeString = convDateString[1]

let splitDate = dateString.split('-')
console.log(splitDate, 'con')

let splitTime = timeString.split(':')

let dateNew = new Date(splitDate[0], splitDate[1] - 1, splitDate[2], splitTime[0], splitTime[1])


let getYear = dateNew.getFullYear()
let getMonth = dateNew.getMonth()
let getDate = dateNew.getDate()
let getDay = dateNew.getDay()
let getHours = dateNew.getHours()
let getMinutes = dateNew.getMinutes()
let getSeconds = dateNew.getSeconds()

let convertTanggal = `${dataHari[getDay]}, ${convertDate(getDate)} ${dataMonth[getMonth]} ${getYear} ${getHours}:${convertDate(getMinutes)}`
console.log(convertTanggal, 'con')

//Minggu, 28 Januari 2024 13:56


// console.log(date, 'year')

// console.log(getYear, 'year')
// console.log(getMonth, 'month')
// console.log(getDate, 'getdate')
// console.log(getDay, 'getday')
// console.log(getHours, 'gethours')
// console.log(getMinutes, 'getminutes')


