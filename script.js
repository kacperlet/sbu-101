// Play CSS animations
const options = {
    root: null,
    threshold: 0.3,
    rootMargin: "0px",
  }
for (let e of document.querySelectorAll(".frombelow")) {
    new IntersectionObserver(entries => {
        if (entries[0].isIntersecting){
            e.style.animation = "frombelow 1s ease 0s 1 normal both"
        }
    }, options).observe(e)
}

for (let e of document.querySelectorAll(".fadein")) {
    new IntersectionObserver(entries => {
        if (entries[0].isIntersecting){
            e.style.animation = "fadein 1.7s ease 0s 1 normal both"
        }
    }, options).observe(e)
}

for (let e of document.querySelectorAll(".fromright")) {
    new IntersectionObserver(entries => {
        if (entries[0].isIntersecting){
            e.style.animation = "fromright 1.7s ease 0s 1 normal both"
        }
    }, options).observe(e)
}

const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const bar4 = document.getElementById("bar4");

new IntersectionObserver(entries => {
    if (entries[0].isIntersecting){
        bar1.style.animation = "bar1-anim 1.7s ease 0s 1 normal both"
        bar2.style.animation = "bar2-anim 1.7s ease 0.2s 1 normal both"
        bar3.style.animation = "bar3-anim 1.7s ease 0.4s 1 normal both"
        bar4.style.animation = "bar4-anim 1.7s ease 0.6s 1 normal both"
    }
}, options).observe(document.getElementById("data"))


function changeSection(index) {
    for (let i = 1; i < 5; i++) {
        let e = document.querySelector(`nav > a:nth-child(${i})`)
        console.log(e)
        if (i == index) {
            e.className = "selected";
            console.log(e)
        }
        else {
            e.className = "";
        }
    }
}

const sections = ['overview', 'background', 'involved', 'implementations']

const options2 = {
    root: null,
    threshold: 0,
    rootMargin: "0px",
  }

for (let i = 0; i < sections.length; i++) {
    console.log(document.getElementById(sections[i]))
    new IntersectionObserver(entries => {
        if (entries[0].isIntersecting){
            changeSection(i+1)
        }
    }, options2).observe(document.getElementById(sections[i]))
}
