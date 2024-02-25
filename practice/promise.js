function login(username, password) {
    let token = "123456"
    if (username) {
        return new Promise((success, failed) => {
            setTimeout(() => {
                // return { token, username }
                // console.log("Login Berhasil")

                // funCall({ token, username })

                if (password) {
                    success({ token, username })

                } else {
                    failed({ message: "'Login Gagal'" })
                }

            }, 2000)
        })
    }
}

function getUser(token, callback) {
    console.log('Loading get User ...')

    let apiKey = "xkey9090"
    if (token) {
        return new Promise((success, failed) => {
            console.log('get token Berhasil ...')

            setTimeout(() => {
                // return apiKey
                success({ apiKey })
            }, 1000)
        })
    }
}

function getUserProfile(apiKey, callback) {
    let picture = "image.com/img.jpg"

    if (apiKey) {
        return new Promise((success, failed) => {
            setTimeout(() => {
                // return picture
                success({ picture })
            }, 1000)
        })
    }
}

login('prasetya').then((res) => {
    console.log(res, 'halo')
    // getUser(res.token).then((dataUser) => {
    //     getUserProfile(dataUser.apiKey).then((dataProfile) => {
    //         console.log(dataProfile)
    //     })
    // })
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('completed')
})

//PROMISE
//1.PENDING
//2.FULFILLED
//3.REJECTED
// console.log(loginData, 'halo')