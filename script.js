const body = document.querySelector('body')
const absolute = document.querySelector('.absolute')
const link = document.querySelector('.link')
link.addEventListener('click',()=>{
    alert("Yeb qo'ydin")
})
absolute.addEventListener('mouseover', () => {
    absolute.style.left = `${rand(0, 1400)}px`
    absolute.style.top = `${rand(0, 700)}px`
})

function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}