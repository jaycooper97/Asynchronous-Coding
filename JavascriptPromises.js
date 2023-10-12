//JavaScript Promises
//A promise means to commit to something "I promise to do something", and has two results: resolved and failed or rejected.
// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1   /*this is what the promise will do when resolved*/
//     if(a == 2) {
//         resolve('Success!')
//     } else {
//         reject('Failed')
//     }
// })

// //Then is called when Promise resolved
// //Catch is called when Promise failed
// p.then((message) => {      /*resolve promise 'then' do something*/
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('This is in the catch ' + message)
// })



//Callback Function: Success and Error
//Check two variables are true; true= error, false= success

// const userLeft = false
// const userWatchingCatMeme = false

// function watchTutorialCallback(callback, errorCallback) {
//     if(userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up and Subscribe')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success: ' + message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message)
// })


//Promise (use .then() for every Promise)
// function watchTutorialPromise() {
//     return new Promise((resolved, reject) => {
//         if (userLeft) {
//             reject({
//                 name: 'User Left',
//                 message: ':('
//             })
//         } else if (userWatchingCatMeme) {
//             reject({
//                 name: 'User Watching Cat Meme',
//                 message: 'WebDevSimplified < Cat'
//             })
//         } else {
//             resolve('Thumbs up and Subscribe')
//         }
//     })
// }

// watchTutorialPromise().then((message) => {
//     console.log('Success: ' + message)
// }).catch((error) => {
//     console.log(error.name + ' ' + error.message)
// })




// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 Recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 Recorded')
// })

// //Promise.race() as soon as 1st promise is completed; returns single message
// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages)
// })