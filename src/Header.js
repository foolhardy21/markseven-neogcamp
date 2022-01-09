const header = (() => {

    let header = document.createElement('header')

    const makeHeader = () => {
        header.className = 'headerdiv'
        header.innerText = 'navi talk'
    }
    const getHeader = () => {
        makeHeader()
        return header
    }
    return { getHeader }
})()

const headerDiv = header.getHeader()

export default headerDiv 

