const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// for steps counter
let currentActive = 1;

next.addEventListener('click', () => {
    if (currentActive < 4) {
        currentActive++;
        prev.disabled = false;
        update();
    }
    if (currentActive == 4) {
        //next button will be disable if all steps complete
        next.disabled = true;
    }


})
prev.addEventListener('click', () => {

    if (currentActive >= 1) {
        currentActive--;
        update();
    } if (currentActive == 1) {
        prev.disabled = true;
        next.disabled = false;

    }

})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100)+"%"
  
}