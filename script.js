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

/*
<div id="b2">
                        <div>
                            <p>Over the past, there has been significant shifts in the gender wage gap. Historical data reveals a gradual reduction in the wage gap influenced by societal changes, legal reforms, and increased awareness. However, it remains a complex issue. Recognizing this complexity, society and individuals must draw attention to addressing the gender wage gap. A well-rounded approach is necessary, involving advocacy for equal pay legislation, challenging gender biases, and cultivating a workplace culture that values diversity and equity. It is a shared responsibility that everyone should contribute to, requiring active efforts to uplift society and work towards gender equality. 
                            </p>
                        </div>
                        <div>
                            <div class="quote-start">“</div>
                            <p>Across all workers in the United States in
                                2022, including those working part-time
                                or part of the year, women were
                                typically paid just 78 cents for every
                                dollar paid to a man - adding up to a
                                difference of $11,450 over the course
                                of the year.
                                1</p>
                        </div>
                    </div>
                    */