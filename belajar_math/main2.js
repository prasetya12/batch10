const dataMahasiswa = [
    {
        id: 1,
        nama: "Alice",
        usia: 20,
        jurusan: "Informatika"
    },
    {
        id: 2,
        nama: "Bob",
        usia: 22,
        jurusan: "Teknik Elektro"
    },
    {
        id: 3,
        nama: "Carol",
        usia: 21,
        jurusan: "Desain Grafis"
    },
    {
        id: 4,
        nama: "Balmon",
        usia: 21,
        jurusan: "Informatika"
    }
]

const num = [1, 2, 3, 4]
const numArr = num.map(item => `absen ${item}`)
console.log(numArr, 'numarr')



//1. Buatkan data diatas menjadi seperti ini ["Alice","Bob","Carol"]
//Kak Dwi
const answerTask1 = dataMahasiswa
    .filter((data) => data.nama !== "Balmon")
    .map((data) => data.nama);

console.log(answerTask1, 'answer');


//2. Buatkan array object yang hanya menampilkan nama dan usia saja
// [{
//     nama:'Balmon',
//     usia:20
// },{
//     nama:'Alice',
//     usia:21
// }]
const outputElement = document.getElementById('output');

const namaDanUsiaMahasiswa = dataMahasiswa.map(({ nama, usia }) => ({ nama, usia }));
// const namaDanUsiaMahasiswa = dataMahasiswa.map(({ nama, usia }, key) => {
//     return {
//         nama,
//         usia
//     }
// })

// const namaDanUsiaMahasiswa = dataMahasiswa.map(({ nama, usia }) => (
//     {
//         nama,
//         usia
//     }
// ))


// console.log(namaDanUsiaMahasiswa, 'halo')


// namaDanUsiaMahasiswa.forEach((mahasiswa, index) => {
//     const data = document.createElement('p');
//     data.textContent = `${index + 1}. nama: ${mahasiswa.nama} - usia: ${mahasiswa.usia}`;
//     outputElement.appendChild(data);
// });
//3. Tampilkan pada html dengan tampilan seperti ini
// 1. nama: Alice - 20
// 2. nama: Bob - 20
const data = document.getElementById("Data");
// const showData = dataMahasiswa
//     .map((mahasiswa, index) => {
//         return `<p>${index + 1}. nama : ${mahasiswa.nama} - ${mahasiswa.usia}</p>`;
//     })
//     .join("");

// dataMahasiswa.forEach((item, key) => {
//     data.innerHTML += `<li>${item.id}. nama:${item.nama}-${item.usia}</li>`
// })

// data.innerHTML = showData;

//4. Tampilkan pada html dari data mahasiswa yang HANYA jurusan Informatika
// 1. nama:Alice-20-Informatika
// 2. nama:Balmon-21-Informatika

const newArrayInformatika = dataMahasiswa.filter(item => item.jurusan == 'Informatika')
console.log(newArrayInformatika, 'info')

