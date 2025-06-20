const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show" ,entry.isIntersecting)
    })

}, {
    rootMargin: "100px",
     threshold: 1
    
})

const lastCardObserver = new IntersectionObserver(entries => {
    const lastCard = entries[0]
    if (!lastCard.isIntersecting) return
    loadNewCards()
    lastCardObserver.unobserve(lastCard.target)
    lastCardObserver.observe(document.querySelector(".card:last-child"))
}, {})

lastCardObserver.observe(document.querySelector(".card:last-child"))


cards.forEach(card =>  {
    observer.observe(card)
})

const cardContainer = document.querySelector(".card-container")

const images = [
    "fotos/afbeelding2.jpg",
   "fotos/afbeelding3.jpg",
   "fotos/afbeelding4.jpg",
   "fotos/afbeelding1.jpg",
   "fotos/afbeelding5.jpg",
   "fotos/afbeelding6.jpg",
   "fotos/afbeelding7.jpg",
   "fotos/afbeelding8.jpg",
   "fotos/afbeelding9.jpg",
   "fotos/afbeelding10.jpg",
   "fotos/afbeelding11.jpg",
   "fotos/afbeelding12.jpg",
   "fotos/afbeelding13.jpg"
];



function loadNewCards() {
    for (let i = 0; i < 10; i++){
        const card = document.createElement("div")
        card.classList.add("card")

        const img = document.createElement("img")
        img.src = images[Math.floor(Math.random() * images.length)]
        card.appendChild(img)
        observer.observe(card)
        cardContainer.append(card)
    }
}
