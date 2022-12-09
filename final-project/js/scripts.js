const sections = document.querySelectorAll(".content-description")
const name = document.getElementById("name");
const subname = document.getElementById("subname");
const description = document.getElementById("description");
const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(subname);
            name.innerText = entry.target.dataset.name;
            subname.innerText = entry.target.dataset.subname;
            description.innerText = entry.target.dataset.description;
        }
    });
};

const options = {
    threshold: 1,
};

let observer = new IntersectionObserver(callback, options);

sections.forEach((section) => observer.observe(section));
