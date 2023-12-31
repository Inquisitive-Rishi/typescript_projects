// const em = '🪨 🧻 ✂️' 

const introSection = document.querySelector('.intro-page')
const opponentSection = document.querySelector('.opponent-page')
const detailSection = document.querySelector('.details-page')
const playgroundSection = document.querySelector('.playground-page')

const introBtn = document.querySelector('.intro-page button')
const playBtn = document.querySelector('.details-page button')

const hideSection = (...x) => {
    x.forEach(el => el.style.display = 'none')
}

const logger = (msg) => {
    console.log(msg)
}

introBtn.addEventListener('click', () => hideSection(introSection, detailSection, playgroundSection))
playBtn.addEventListener('click', (e) => {
    e.preventDefault()
    hideSection(introSection,opponentSection,detailSection)
})