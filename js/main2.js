const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show" ,entry.isIntersecting)
    })

}, {
    rootMargin: "100px"
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
    "https://historiek.net/wp-content/uploads-phistor1/2007/11/De-bestorming-van-de-Bastille-e1455033936131.jpg",
    "https://historiek.net/wp-content/uploads-phistor1/2017/12/Lodewijk-XIV-1638-1715-De-Zonnekoning-van-Frankrijk.jpeg",
    "https://www.mayfairgallery.com/media/wysiwyg/Marie-Antoinette_en_grand_habit_de_cour_-_1778_-_Elisabeth_Louise_Vig_e_Le_Brun__2_.jpg",
    "https://www.geschiedenisvandaag.nu/wp-content/uploads/2018/01/Hinrichtung_Ludwig_des_XVI-e1517690566473.png",
    "https://www.historischnieuwsblad.nl/app/uploads/2020/03/Franse-Revolutie-cropped.jpg",
    "https://www.meisterdrucke.nl/kunstwerke/1260px/Isidore_Stanislas_Helman_-_French_Revolution_On_the_13th_of_the_year_IV_General_Bonaparte_%28Napoleon_I_Bonap_-_%28MeisterDrucke-960671%29.jpg",
    "https://www.historischnieuwsblad.nl/app/uploads/2020/03/franse-revolutie-coverbeeld.jpg",
    "https://images.nrc.nl/zeIpw7mXAZldBYIZyN317T0Reug=/1280x/filters:no_upscale()/s3/static.nrc.nl/bvhw/files/2024/01/data110428699-a08e71.jpg",
    "https://images.pzc.nl/ZGVmMDNjNGNmZDQ5MjE5OTgxYzQvZGlvLzIzMzU2NTk3MC9maWxsLzczNi81MjQ/dit-19e-eeuwse-schilderij-romantiseert-de-slag-bij-jemappes-bij-bergen-tussen-franse-troepen-geleid-door-generaal-dumouriez-tegen-een-oostenrijks-zuid-nederlands-leger",
    "https://franse-revolutie.weebly.com/uploads/2/0/3/2/20329273/620598.jpg",
    "https://www.meisterdrucke.nl/kunstwerke/400px/Elisabeth%20Louise%20Vigee%20Lebrun%20-%20Marie-Antoinette%20(1755-93)%20and%20her%20Four%20Children%201787%20%20(detail%20of%203822)%20-%20(MeisterDrucke-60072).jpg",
    "https://www.meisterdrucke.nl/kunstwerke/1260px/French_School_-_French_Revolution_Cartoon_against_Queen_Marie_Antoinette_%281755-1793%29_fell_to_the_-_%28MeisterDrucke-1046306%29.jpg",
    "https://images.bonnier.cloud/files/his/production/2021/05/25132938/Frankrijk-Nationale-Vergadering.jpeg",
    "https://www.meisterdrucke.nl/kunstwerke/1260px/Anonymous_Anonymous_-_French_Revolution_1789_-_1799_political_womens_club_-_%28MeisterDrucke-923065%29.jpg",
    "https://www.meisterdrucke.be/kunstwerke/1260px/Lesueur_Brothers_-_French_Revolution_of_1789_The_Childrens_Oath_Gouache_des_freres_Lesueur_%2818th_ce_-_%28MeisterDrucke-973712%29.jpg",
    "https://www.meisterdrucke.be/kunstwerke/300px/pseudonym_for_Onfray_de_Breville_Jacques_-_Destruction_(demolition_demantelement)_of_the_Bastille_-_(MeisterDrucke-1496366).jpg",
    "https://greyhistory.com/wp-content/uploads/2021/01/Awakening_of_the_third_estate-scaled-e1610845083836-1024x839.jpg",
    "https://media.istockphoto.com/id/504739581/nl/vector/french-revolutionists.jpg?s=612x612&w=0&k=20&c=HiAHR-Y0qVuLLcwcDwaM6f7FhQgZBCqr9bBLAr6UO5k="
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
