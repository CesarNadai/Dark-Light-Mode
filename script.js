const body = document.querySelector("body")
const button = document.querySelector("button")

//--light-button-background-color: white;
light = true

function invert() {
    if (light) {
        body.style.backgroundColor = "var(--dark-background-color)"
        button.style.borderColor = "var(--dark-border-color)"
        button.style.backgroundColor = "var(--dark-button-background-color)"
        light = false 
    } else {
        body.style.backgroundColor = "var(--light-background-color)"
        button.style.borderColor = "var(--light-border-color)"
        button.style.backgroundColor = "var(--light-button-background-color)"
        light = true
    }
}