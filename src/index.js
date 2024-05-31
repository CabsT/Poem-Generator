
function displayPoem (response){
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    pauseFor: 500,
    cursor: "",
    deleteSpeed: 0,
    pauseFor: 10000,
    
  });


}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector(".search");
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 6 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Include a title to the poem within a <h3>. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}



let poemElement = document.getElementById('poem-searchForm');
poemElement.addEventListener('submit', generatePoem);