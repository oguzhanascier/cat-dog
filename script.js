const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');

cat_btn.addEventListener('click', getRandomCat)
dog_btn.addEventListener('click', getRandomDog)



//!             CAT


function getRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data =>
            cat_result.innerHTML = `<img src=${data.file} alt="cat">`)

    // if (data.file.includes('gif')) {
    //     cat_result.innerHTML = `<img src=${data.file} alt="cat">`  ///sadece gifleri alacağız ancak böyle biraz fazla zaman alıyor gerçekte 1 saat olur herhalde 
    // } else {
    //     getRandomCat()
    // }



}



//!             DOG


function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) { //-data url eğer mp4 içeriyorsa getRandomDogu çağır eğer içermiyorsa yaz demek olan bir açıklama
                getRandomDog()
            } else {
                dog_result.innerHTML = `<img src=${data.url} alt="dog">`
            }
        })


}



// function getRandomCat() {
//     fetch('https://aws.random.cat/meow')
//         .then(res => res.json())
//         .then(data => {
//             cat_result.innerHTML = `<img src= ${data.file} alt="cat"/> `
//         })
// }



// //!             DOG


// function getRandomDog() {
//     fetch('https://random.dog/woof.json')
//         .then(res => res.json())
//         .then(data => {
//             if (data.url.includes('.mp4')) {
//                 getRandomDog()
//             } else {
//                 dog_result.innerHTML = `<img src= ${data.url} alt="dog"/>`
//             }

//         })

// }