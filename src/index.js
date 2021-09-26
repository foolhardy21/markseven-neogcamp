import './style.css'
import { headerDiv } from './Header'
import { contentDiv } from './MainSection'

const mainDiv = document.querySelector('#maindiv')
mainDiv.appendChild(headerDiv)
mainDiv.appendChild(contentDiv)

// document.querySelector('.btn').addEventListener('click', translateText)