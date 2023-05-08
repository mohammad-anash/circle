let bodyel = document.querySelector('body');

let letter = "123456789ABCDEF";

function randomcolor() {
    let hash = '#';
    for (let index = 0; index < 6; index++) {
        hash += letter[Math.floor(Math.random() * letter.length)];
    }
    return hash
}



function createcircles() {
    let div = document.createElement('div');
    div.classList.add('circle');
    div.style.backgroundColor = randomcolor()
    bodyel.appendChild(div);
}

let currentcircle = createcircles();

document.body.appendChild(currentcircle)


document.addEventListener('click', (e) => {
    currentcircle = createcircles()

    currentcircle.style.top = `${e.clientX - currentcircle.offsetWidth / 2}px`
    currentcircle.style.left = `${e.clientY - currentcircle.offsetHeight / 2}px`
})

function newFunction() {
    console.log(currentcircle);
}
