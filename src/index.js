
function displayPoem (event){
  event.preventDefault();
  new Typewriter("#poem", {
    strings: ["La tombe dit à la rose"],
    autoStart: true,
    delay: 50,
    pauseFor: 500,
    cursor: "",
    deleteSpeed: 0,
    pauseFor: 10000,
    
  });


}


let poemElement = document.getElementById('poem-searchForm');
poemElement.addEventListener('submit', displayPoem);