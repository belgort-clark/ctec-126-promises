const userLeft = false
const userWatchingCatMeme = false

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User watching cat meme',
            message: 'Cat > Bruce'
        })
    } else {
        callback('Click like and subscribe to my great channel!')
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log('Failure: ' + error.name + ' ' + error.message)
})