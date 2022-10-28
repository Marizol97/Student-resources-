const main_content = document.getElementById('main_content')
const years_remaining = document.getElementById('years_remaining')
const shibe_gallery = document.getElementById('shibe_gallery')

document.querySelector('.get_started').addEventListener('click', () => {
    main_content.scrollIntoView({
        behavior: 'smooth',
        block: "start",
    })
})

document.querySelector('.get_photos').addEventListener('click', (event) => {
    event.preventDefault()
    console.log('getting photos')
    getShibe()
        .then(data => {
console.log('called get shibe')
 //   if (shibe_photos.length) {
 //   shibe_photos.length = 0
//}

           const shibe_photos = [...data]
           console.log('shibe photos', shibe_photos)
            // shibe_photos.map(photo => {
            //     const image = document.createElement('img')
            //     image.src = photo
            //     image.classList = 'image'
            //     shibe_gallery.appendChild(image)
            // })
            shibe_gallery.innerHTML=''
            for (let i = 0; i < shibe_photos.length; i++) {
                const photoSrc = shibe_photos[i];
                console.log('photSrc',photoSrc)
                const image = document.createElement('img')
                image.src = photoSrc
                console.log('shibe gallery', shibe_gallery)
                image.classList = 'image'
                console.log('image', image)
                shibe_gallery.appendChild(image)
            }
            console.log('shibe photos', shibe_photos)
        })
        .catch(err => console.log(err))
console.log('getting quote')
    getQuote()
        .then(res => {
        console.log('got quote')
            document.getElementById('motivational_quote').innerHTML =
                `<blockquote>${res.quote}</blockquote><caption>${res.author}</caption>`
        })
        .catch(err => console.log(err))
})

// document.querySelector('.get_quote').addEventListener('click', (event) => {
//     event.preventDefault()
//     getQuote()
//         .then(data => {
//         }
//         )
// })

//let shibe_photos = []

async function getShibe() {
    const number_requested = years_remaining.value

    const response = await fetch(`http://shibe.online/api/shibes?count=${number_requested}&urls=true&httpsUrls=true`)

    return response.json()
}

async function getQuote() {

    const response = await fetch('https://api.goprogram.ai/inspiration')

    return response.json()
}
getQuote().then((res) => console.log(res))

function clearPhotos() {
}
