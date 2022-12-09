const sections = document.querySelectorAll(".content-description")
const name = document.getElementById("name");
const subname = document.getElementById("subname");
const description = document.getElementById("description").querySelector('li');
const image = document.getElementById('image').querySelector('img');

const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            name.innerText = entry.target.dataset.name;
            subname.innerText = entry.target.dataset.subname;
            description.innerText = entry.target.dataset.description;
            image.src = entry.target.dataset.image;
            image.alt = entry.target.dataset.alt;
        }
    });
};
const options = {
    threshold: 0.1,
};

let observer = new IntersectionObserver(callback, options);

sections.forEach((section) => observer.observe(section));
