/* ------ DOM {Document Object Model}============== */
/*
What is the DOM?n A representation for the specific page,  It 
// is used to find and modidy HTML on a webpage

What can we do with DOM?
-- Find elements
-- Make new elements
-- Update elements
-- Change properties on elements
-- Listen for event

*/

//const h1 = document.querySelector('h1')
//h1.classList.add('color-change')
//console.log(h1)

// Example to show username with button click
function displayUserInfo(user_info) {
    element = document.getElementById('sampleText');
    element.innerHTML = user_info
}

// Create an Element
let button = document.createElement('button');
button.innerHTML = 'I am Alive!';
document.body.append(button);

// // Getting Elements by querying for a specific selector
// let buttonElement = document.querySelectorAll('button')[1];
//   // event listener and function on JS
// buttonElement.onclick = showRandomText = () => {
//   let showText = 'Coding is fun';
//   let text = document.createElement('h3');
//   text.innerHTML = showText;
//   document.body.append(text);
// }

// Grab from from HTML using ID
const form = document.getElementById('testForm');
form.onsubmit = submitForm;
// Function to grab form data
function submitForm(event) {
event.preventDefault(); // so the page won't load until input is done

console.log(document.getElementById('first-name').value);
console.log(document.querySelector('#last-name').value);
}
// Submit form with regular button
function submitButtonForm() {
console.log(document.querySelector('#username').value);
console.log(document.querySelector('#password').value);
}



/* Steps to work with the DOM
    1)  Selectors
    2)  Event Listeners
    3)  Function.
*/

// Seletors
const colorSection = document.querySelector('#colors');

//Function
const changeColor = (event) =>  {
    console.log(event.target)
    document.body.style.backgroundColor = event.target.dataset.hex;
}

// Event Listeners
colorSection.addEventListener('click', changeColor);



/* =========================API============================
/*
    Reading API documentation
    1, Find base url
    2. Look for endpoints (after slashes)
    3. Look for data I can query in the url
    */

    // 2 queries: season and rounds

    function getJson() {  // run this function in the console, to get it to run
        let season = document.querySelector('#season').value;
        let round = document.querySelector('#round').value;

        fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
        .then(response => response.json())
        .then(data => {
          console.log(data)

        // Create HTL element and place givenNamme on page
        let Sebastian = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.Sebastian
        let Sebastian_text = document.createElement('h3')
        Sebastian_text.innerHTML = Sebastian
        document.body.append(Sebastian_text)

        let Lewis = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.Lewis
        let Lewis_text = document.createElement('h3')
        Lewis_text.innerHTML = Lewis
        document.body.append(Lewis_text)

        let Valetteri = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.Valetteri
        let Valetteri_text = document.createElement('h3')
        Valetteri_text.innerHTML = Valetteri
        document.body.append(Valetteri_text)

        let Fernando = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.Fernando
        let Fernando_text = document.createElement('h3')
        Fernando_text.innerHTML = Fernando
        document.body.append(Fernando_text)

        let Kimi = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.Kimi
        let Kimi_text = document.createElement('h3')
        Kimi_text.innerHTML = Kimi
        document.body.append(Kimi_text)

        let Nico = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.Nico
        let Nico_text = document.createElement('h3')
        Nico_text.innerHTML = Nico
        document.body.append(Nico_text)

        let Pierre = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.Pierre
        let Pierre_text = document.createElement('h3')
        Pierre_text.innerHTML = Pierre
        document.body.append(Pierre_text)

        //place familyName on page
        let Vettel = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.Vettel
        let Vettel_text = document.querySelector('#Vettel')
        Vettel_text.innerHTML= Vettel

        let Hamilton = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.Hamilton
        let Hamilton_text = document.querySelector('#Hamilton')
        Hamilton_text.innerHTML= Hamilton

        let Bottas = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.Bottas
        let Bottas_text = document.querySelector('#Bottas')
        Bottas_text.innerHTML= Bottas

        let Alonso = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.Alonso
        let Alonso_text = document.querySelector('#Alonso')
        Alonso_text.innerHTML= Alonso

        let Raikkonen = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.Raikkonen
        let Raikkonen_text = document.querySelector('#Raikkonen')
        Raikkonen_text.innerHTML= Raikkonen

        let Hulkenberg = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.Hulkenberg
        let Hulkenberg_text = document.querySelector('#Hulkenberg')
        Hulkenberg_text.innerHTML= Hulkenberg

        let Gasley = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.Gasley
        let Gasley_text = document.querySelector('#Gasley')
        Gasley_text.innerHTML= Gasley


    // Get first three Constructors for F1 Cars
    for (let i=0; i<3; i++) {
        let Ferarri = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Ferarri[0].name
        let display_Ferarri = document.createElement('h1')
        display_Ferrari.innerHTML = Ferrari_name
        document.body.append(display_Ferrari)

    for (let i=0; i<3; i++) 
        let Mercedes_name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Mercedes[0].name
        let display_Mercedes = document.createElement('h1')
        display_Mercedes.innerHTML = Mercedes_name
        document.body.append(display_Mercedes)

    for (let i=0; i<3; i++) 
        let Mercedes_name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Mercedes[0].name
        let display_Mercedes = document.createElement('h1')
        display_Mercedes.innerHTML = Mercedes_name
        document.body.append(display_Mercedes)
    
    for (let i=0; i<3; i++) 
        let McLaren_name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].McLaren[0].name
        let display_McLaren = document.createElement('h1')
        display_McLaren.innerHTML = McLaren_name
        document.body.append(display_McLaren)

    for (let i=0; i<3; i++) 
        let Ferrari_name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Ferrari[0].name
        let display_Ferrari = document.createElement('h1')
        display_Ferarri.innerHTML = Ferrari_name
        document.body.append(display_Ferrari)

    for (let i=0; i<3; i++) 
        let Renault_name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Renault[0].name
        let display_Renault = document.createElement('h1')
        display_Renault.innerHTML = Renault_name
        document.body.append(display_Renault)

    for (let i=0; i<3; i++) 
        let Toro_Rosso_name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Toro_Rosso[0].name
        let display_Toro_Rosso = document.createElement('h1')
        display_Toro_Rosso.innerHTML = Toro_Rosso_name
        document.body.append(display_Toro_Rosso) 


    }

})
}
   
