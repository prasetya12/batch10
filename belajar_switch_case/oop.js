// class Mobil {
//     constructor(merk, warna) {
//         this.merk = merk
//         this.warna = warna
//     }

//     berjalan() {
//         console.log(this.merk + 'Jalan')
//     }
// }

// const mobil = {
//     merk: 'Toyota',
//     warna: 'Merah'
// }

// const mobil2 = {
//     merk: 'Honda',
//     warna: 'kuning'
// }

// const mobil = new Mobil('Toyota', 'Merah')
// const mobil2 = new Mobil('Honda', 'kuning')

// mobil2.berjalan()
// console.log(mobil)
// console.log(mobil2)

class Counter {
    constructor(buttonId, displayId) {
        this.count = 0

        this.button = document.getElementById(buttonId)
        this.display = document.getElementById(displayId)


        this.button.addEventListener('click', () => this.increment())
    }

    increment() {
        this.count++
        this.updateDisplay()
    }

    updateDisplay() {
        this.display.innerHTML = `Count : ${this.count}`
    }
}

const jumlah = new Counter('button1', 'display1')
const jumlah1 = new Counter('button2', 'display2')

