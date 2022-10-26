let shibPhotos

fetch('https://shibe.online/api/shibes?count=5&urls=true&httpsUrls=true')
    .then(res => {
        shibPhotos = […res]
    }).catch(err => console.log(err))