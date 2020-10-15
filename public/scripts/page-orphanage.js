const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map

const map = L.map('mapid', options).setView([-23.6943865,-46.4940838], 16);

// create and title layer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//  create icon 

const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58,68],
    inconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


// create and add marker
L
    .marker([-23.6943865,-46.4940838], {icon})
    .addTo(map)


//image galery

function selectImage(event) {
    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button") 
    buttons.forEach((button) => {
        button.classList.remove('active')
    })

    const image = button.children[0]
    const imageConatainer = document.querySelector(".orphanage-details > img ")
    imageConatainer.src = image.src

    button.classList.add('active')
}