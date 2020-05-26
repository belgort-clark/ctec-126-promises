const userLeft = false
const userWatchingCatMeme = false

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User watching cat meme',
                message: 'Cat > Bruce'
            })
        } else {
            resolve('Click like and subscribe to my great channel!')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log('Failure: ' + error.name + ' ' + error.message)
})