function displayPoem(response) {
  let poem = response.data.answer;

  // Clean up accidental trailing backticks or extra markdown
  poem = poem.replace(/```+$/g, "").trim();


  let tempDiv = document.createElement("div");
  tempDiv.innerHTML = poem;

  let lines = [];
  let title = tempDiv.querySelector("h3");
  if (title) lines.push(title.outerHTML);

  let rawLines = tempDiv.innerHTML.split("<br>");
  rawLines.forEach(line => {
    if (!line.includes("<h3>") && line.trim()) {
      lines.push(line.trim());
    }
  });

  let typewriter = new Typewriter("#poem", {
    autoStart: true,
    delay: 50,
    cursor: "",
    deleteSpeed: 0,
    parseHTML: true,
  });

  lines.forEach((line, index) => {
    typewriter.typeString(line);
    if (index !== lines.length - 1) {
      typewriter.typeString("<br>");
    }
  });

  typewriter.start();
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
  poemElement.innerHTML = `⏳ Generating a French poem about ${instructionsInput.value}`;

  axios.get(apiURL).then(displayPoem);
}



let poemElement = document.getElementById('poem-searchForm');
poemElement.addEventListener('submit', generatePoem);
