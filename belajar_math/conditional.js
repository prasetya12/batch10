let username = 'admin123' //negatif,positif,netral
let isActive = true

// if (num > 0) {
//     alert('Positif')
// } else if (num < 0) {
//     alert('Negatif')
// } else {
//     alert('Netral')
// }

// if (isActive) {
//     if (username == 'admin') {
//         alert('Anda Berhasil Login')
//     } else {
//         alert('Anda Gagal Login')
//     }
// } else {
//     alert('User Anda Tidak Aktif')
// }

const score = prompt('Masukan Nilai?')
const convertScore = Number(score)

if (convertScore >= 90 && convertScore <= 100) {
    alert('A')
} else if (convertScore >= 80 && convertScore <= 90) {
    alert('B')
} else if (convertScore >= 70 && convertScore <= 80) {
    alert('C')
} else if (convertScore >= 60 && convertScore <= 70) {
    alert('D')
} else if (convertScore >= 0 && convertScore <= 60) {
    alert('E')
} else {
    alert('Score Anda Masukan Tidak Sesuai')
}

console.log(score)
