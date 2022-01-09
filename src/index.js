import './style.css'
import headerDiv from './Header'
import contentDiv from './MainSection'

const mainDiv = document.querySelector('#maindiv')
mainDiv.appendChild(headerDiv)
mainDiv.appendChild(contentDiv)

const isInputEmpty = input => input.length < 1 ? false : true

const getUrl = input => `https://api.funtranslations.com/translate/navi.json?text=${input}`

const showTranslation = output => {
    document.querySelector('.outputarea').innerText = output
}

const translateText = e => {
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