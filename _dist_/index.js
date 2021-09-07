import { registerImg, reportLoadImg, clearCounter } from "./lazy.js"

/* https://randomfox.ca/images/2.jpg */

const BASEURLIMG = 'https://randomfox.ca/images/'
const MOUNTNODE = document.getElementById('images')
const ADDBUTTON = document.getElementById('btnAdd')
const REMOVEBUTTON = document.getElementById('btnRm')

let counterAddImg = 0

const createImgNode = () => {
    const container = document.createElement('div')
    container.className = 'p-4'
    
    const img = document.createElement('img')
    img.dataset.src = `${BASEURLIMG}${Math.round(Math.random() * (123 - 1) + 1)}.jpg`
    img.className = 'mx-auto'
    img.style = 'width: 320px'

    const wrapperImg = document.createElement('div')
    wrapperImg.className = 'bg-gray-200'
    wrapperImg.style.minHeight = '150px'
    wrapperImg.style.display = 'inline-block'
    wrapperImg.appendChild(img)
    
    container.append(wrapperImg)
    
    counterAddImg++
    reportAddImg()
    reportLoadImg()

    return container
}

const addImg = () => {
    const newImg = createImgNode()
    MOUNTNODE.append(newImg)
    registerImg(newImg)
}

export const reportAddImg = () => {
    console.log('-----------------')
    console.log(`Imagenes agregadas: ${counterAddImg}`)
}

const removeImg = () => {
    MOUNTNODE.innerHTML = ""
    counterAddImg = 0
    clearCounter()
    console.clear()
}

ADDBUTTON.addEventListener('click', addImg)
REMOVEBUTTON.addEventListener('click', removeImg)