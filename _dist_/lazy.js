import { reportAddImg } from "./index.js"

let counterLoadImg = 0

const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const loadImg = (entry) => {
    const container = entry.target
    const image = container.querySelector('img')
    const url = image.dataset.src

    image.src = url

    counterLoadImg++
    reportAddImg()
    reportLoadImg()

    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImg)
})

export const registerImg = (image) => {
    /* Intersection -> observer (image) */
    observer.observe(image)
}

export const reportLoadImg = () => {
    console.log(`Imagenes cargadas: ${counterLoadImg}`)
    console.log('-----------------')
}

export const clearCounter = () => {
    counterLoadImg = 0
}