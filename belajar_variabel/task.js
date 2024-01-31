// alert('halo')
let onClickDisini = document.getElementById('clickdisini')

onClickDisini.addEventListener('click', function () {
    onClickDisini.style.color = 'red'
})

let btnResult = document.getElementById('btn_result')

btnResult.addEventListener('click', function () {
    //lebar panjang
    let lebarDom = document.getElementById('lebar')
    let panjangDom = document.getElementById('panjang')

    let hasilDom = document.getElementById('hasil')

    let result = Number(lebarDom.value) * Number(panjangDom.value)

    hasilDom.innerHTML = result
})


const menuData = ['Home', 'About', 'Profile', 'Shop']

const menuElm = document.getElementById('menu-list')

menuData.forEach(item => {

    const menuItem = document.createElement('li')
    //<li class="menu-item" onClick={}>Home</li>
    menuItem.textContent = item
    menuItem.classList.add('menu-item')

    //action click nambah class active
    menuItem.addEventListener('click', function () {
        // const menuAllClassItem = document.getElementsByClassName('menu-item')
        const menuAllClassItem = document.querySelectorAll('.menu-item')
        console.log(menuAllClassItem, 'halo')

        // menuAllClassItem.forEach((item) => item.classList.remove('active'))
        // menuElm.forEach((item) => {
        //     console.log(item, 'halo')
        // })
        menuAllClassItem.forEach((item) => item.classList.remove('active'))


        menuItem.classList.add('active')
        // menuItem.classList.toggle('active')

    })


    menuElm.appendChild(menuItem)
})

// const title = '<h1>Element Tambahan</h1>'
// menuElm.innerHTML = title

// const h1Elm = document.createElement('h1')
// h1Elm.textContent = "Element Baru"
// menuElm.appendChild(h1Elm)

// console.log(menuElm)