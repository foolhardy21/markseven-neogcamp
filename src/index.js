import './style.css'
import { headerDiv } from './Header'
import { contentDiv } from './MainSection'

const mainDiv = document.querySelector('#maindiv')
mainDiv.appendChild(headerDiv)
mainDiv.appendChild(contentDiv)

function isInputEmpty(input) {
    return (input.length < 1) ? false : true
}
function getUrl(input) {
    return `https://api.funtranslations.com/translate/navi.json?text=${input}`
}

function showTranslation(output) {
    document.querySelector('.outputarea').innerText = output
}

function translateText(e) {
    e.preventDefault()
    const input = document.querySelector('.inputarea').value
    if( !isInputEmpty(input) ) {
        window.alert('Enter something')
    } else {
        fetch(getUrl(input))
            .then(response => {
                return response.json()
            })
            .then(data => {
                showTranslation(data.contents.translated)
            })
            .catch(e => {
                console.log(e)
            })
    }
}

document.querySelector('.btn').addEventListener('click', translateText)