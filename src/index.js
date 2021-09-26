import './style.css'
import { headerDiv } from './Header'
import { contentSection } from './MainSection'

const mainDiv = document.querySelector('#maindiv')
mainDiv.appendChild(headerDiv)
mainDiv.appendChild(contentSection)

// document.querySelector('.btn').addEventListener('click', translateText)