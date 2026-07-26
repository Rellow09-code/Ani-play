import { Portfolio } from "./Portfolio.js"
import about from "./Components/About.js"
import achievements from "./Components/Achivements.js"
import contact from "./Components/Contact.js"
import bdo from "./Components/Experience.js"
import { dungeonRun, neuralNetwork, requestHQ, studyBuddy } from "./Components/Projects.js"
import skills from "./Components/Tech.js"

const root = document.getElementById('root') as HTMLElement
if (!root){
    alert('Couldnt find root')
}
else{
    const portfolio = new Portfolio(root)

    portfolio.addCard(about)
    portfolio.addCard(skills)
    portfolio.addCard(requestHQ)
    portfolio.addCard(neuralNetwork)
    portfolio.addCard(dungeonRun)
    portfolio.addCard(studyBuddy)
    portfolio.addCard(achievements)
    portfolio.addCard(bdo)
    portfolio.addCard(contact)

    portfolio.gitterTailRender()
}

function setTheme(theme: string) {
    document.body.classList.remove(
        'light-theme',
        'dark-theme',
        'reading-theme'
    )

    document.body.classList.add(
        `${theme}-theme`
    )

    // Save the current theme
    localStorage.setItem('theme', theme)
}


function switchTheme() {

    const themeMap: Record<string, string> = {
        light: 'dark',
        dark: 'reading',
        reading: 'light'
    }

    // Get current theme
    const currentTheme =
        localStorage.getItem('theme') || 'light'

    // Determine next theme
    const nextTheme =
        themeMap[currentTheme] || 'light'

    // Apply and save next theme
    setTheme(nextTheme)
}

const themeButton =
    document.getElementById('theme-button')

themeButton?.addEventListener(
    'click',
    switchTheme
)