function satu() {
    console.log("muncul angka 1")
}

function dua() {
    setTimeout(function () {
        console.log("muncul angka 2")
    }, 2000)
    // console.log("muncul angka 2")

}

function tiga() {
    console.log("muncul angka 3")
}



satu()
dua()
tiga()

function login(username, password, funCall) {
    let token = "123456"
    console.log('Loading Login ...')
    if (username) {
        setTimeout(() => {
            // return { token, username }
            console.log("Login Berhasil")

            funCall({ token, username })
        }, 2000)
    }
}

function getUser(token, callback) {
    console.log('Loading get User ...')

    let apiKey = "xkey9090"
    if (token) {
        console.log('get token Berhasil ...')

        setTimeout(() => {
            // return apiKey
            callback({ apiKey })
        }, 1000)
    }
}

function getUserProfile(apiKey, callback) {
    let picture = "image.com/img.jpg"

    if (apiKey) {
        setTimeout(() => {
            // return picture
            callback({ picture })
        }, 1000)
    }
}

//Callback
login('prasetya', '123', function (response) {
    getUser(response.token, function (dataToken) {
        const { apiKey } = dataToken
        getUserProfile(apiKey, function (resData) {
            console.log(resData, 'dataPicture')
        })
    })
})


// const getDataUser = getUser(getToken.token)
// const getUserDataProfile = getUserProfile(getToken.token)

// console.log(getUserDataProfile, 'token')

//Callback

//Promise
//Async Await