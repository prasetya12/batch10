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

//async

async function flowLogin() {
    try {
        let loginData = await login('rizal')

        console.log(loginData)
    } catch (err) {
        alert(err.message)
    }
    // let getUserData = await getUser(loginData.token)
    // let getProfileData = await getUserProfile(getUserData.apiKey)

    // console.log(getProfileData, 'datauser')
}

flowLogin()