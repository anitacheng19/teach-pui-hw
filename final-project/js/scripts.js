document.addEventListener("DOMContentLoaded", function(event) { 

  const scrollList = document.querySelectorAll(".project")

  const callback = (entries, observer) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }
      })
  }
  
  const options = {}
  
  const myObserver = new IntersectionObserver(callback, options)

  scrollList.forEach(scrollItem => {
    myObserver.observe(scrollItem)
  })

});