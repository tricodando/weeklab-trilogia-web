const bodyjs = document.getElementsByClassName("body-js")[0]
const bodyhtml = document.getElementsByClassName("body-html")[0]
const bodycss = document.getElementsByClassName("body-css")[0]
let current = 1

document.getElementById("arrowleft").addEventListener("click", () => {
  setTimeout(() => {
    bodyhtml.style.animation = "none"
    bodycss.style.animation = "none"
    bodyjs.style.animation = "none"
    if (current == 1) {
      bodyjs.style.zIndex = "8"
      bodyhtml.style.animation = "centerToLeftHTML 2s forwards"
      bodyjs.style.animation = "leftToRightJS 2s forwards"
      bodycss.style.animation = "rightToCenterCSS 2s forwards"
    }
    if (current == 2) {
      bodyhtml.style.zIndex = "12"
      bodyjs.style.zIndex = "10"
      bodyhtml.style.animation = "rightToCenterHTML 2s forwards"
      bodyjs.style.animation = "centerToLeftJS 2s forwards"
      bodycss.style.animation = "leftToRightCSS 2s forwards"
    }
    if (current == 3) {
      bodyhtml.style.zIndex = "8"
      bodyjs.style.zIndex = "10"
      bodyhtml.style.animation = "leftToRightHTML 2s forwards"
      bodyjs.style.animation = "rightToCenterJS 2s forwards"
      bodycss.style.animation = "centerToLeftCSS 2s forwards"
    }
    prev()
  }, 1)
}, false)

function prev() {
  if (current > 1) { current-- }
  else { current = 3 }
}

document.getElementById("arrowright").addEventListener("click", () => {
  setTimeout(() => {
    bodyhtml.style.animation = "none"
    bodycss.style.animation = "none"
    bodyjs.style.animation = "none"
    if (current == 1) {
      bodycss.style.zIndex = "8"
      bodyjs.style.zIndex = "10"
      bodyhtml.style.animation = "centerToRightHTML 2s forwards"
      bodycss.style.animation = "rightToLeftCSS 2s forwards"
      bodyjs.style.animation = "leftToCenterJS 2s forwards"
    }
    if (current == 2) {
      bodyhtml.style.zIndex = "8"
      bodyhtml.style.animation = "rightToLeftHTML 2s forwards"
      bodycss.style.animation = "leftToCenterCSS 2s forwards"
      bodyjs.style.animation = "centerToRightJS 2s forwards"
    }
    if (current == 3) {
      bodyjs.style.zIndex = "8"
      bodyhtml.style.zIndex = "12"
      bodycss.style.zIndex = "10"
      bodyhtml.style.animation = "leftToCenterHTML 2s forwards"
      bodycss.style.animation = "centerToRightCSS 2s forwards"
      bodyjs.style.animation = "rightToLeftJS 2s forwards"
    }
    next()
  }, 1)
}, false)

function next() {
  if (current < 3) { current++ }
  else { current = 1 }
}