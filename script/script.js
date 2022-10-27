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
    getShibe()
        .then(data => {

            clearPhotos()

            shibe_photos = [...data]

            shibe_photos.map(photo => {
                const image = document.createElement('img')
                image.src = photo
                image.classList = 'image'
                shibe_gallery.appendChild(image)
            })
        })
        .catch(err => console.log(err))
})

let shibe_photos = []

async function getShibe() {
    const number_requested = years_remaining.value
    
    const response = await fetch(`http://shibe.online/api/shibes?count=${number_requested}&urls=true&httpsUrls=true`)

    return response.json()
}
async function getQuote() {
   
    const response = await fetch('https://api.goprogram.ai/inspiration')

    return response.json()
}

function clearPhotos() {
    if (shibe_photos.length) {
        shibe_photos.length = 0
    }
}