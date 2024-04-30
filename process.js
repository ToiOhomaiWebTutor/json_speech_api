function DisplayData()
{
    // fetch our JSON Data
    fetch('data.json')
    .then(response => response.json())
    .then(

            data => {
                // create a reference to our display div
                const displayDiv = document.getElementById("display");
                // iterate through our JSON data, all display code goes inside here.
                data.forEach(
                    jsonObject => {
                        // create our div element for each monster object
                        const div = document.createElement('div');
                        div.classList.add('display');
                        const content = `
                            <h1>${jsonObject.name}</h2>
                            <p><strong>Location: </strong>${jsonObject.location}</p>
                            <p><strong>Films: </strong>${jsonObject.films}</p>
                            <button onclick="speakText('${jsonObject.name}')">Read Name</button>
                        `;

                        div.innerHTML = content;
                        displayDiv.appendChild(div);
                    }
                );
            }


    )
    .catch(error => console.error("Error fetching and displaying data: ", error))
}

function speakText(text)
{
    // Create a new SpeechSynthesis Utterance object
    const speech = new SpeechSynthesisUtterance();
    // set the text to be spoken
    speech.text = text;
    // set voice
    speech.voice = speechSynthesis.getVoices()[0];
    // speak the text
    speechSynthesis.speak(speech);
}