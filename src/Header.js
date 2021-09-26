const header = (() => {

    let header = document.createElement('header')

    function makeHeader() {
        header.className = 'headerdiv'
        header.innerText = 'navi talk'
    }
    function getHeader() {
        makeHeader()
        return header
    }
    return { getHeader }
})()

const headerDiv = header.getHeader()

export { headerDiv }

