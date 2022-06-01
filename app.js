const btn = document.querySelector('.submit');
const resultContent = document.querySelector('.result-output');
const searchInput =  document.querySelector('#search');



btn.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(` https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput.value} `)
        .then(res => res.json())
        .then(data => {
            setData(data)

            // console.log(data);

            // resultContent.innerHTML = `
            // <div>
            //     <h1>${data[0].word}</h1>
            //     <div>
            //         <p>${data[0].phonetic}</p>
            //         <p>${data[0].meanings[0].partOfSpeech}</p>
            //         <p>${data[0].meanings[0].definitions[0].definition}</p>
            //         <p>${data[1].meanings[0].definitions[0].definition}</p>
            //     </div>
            // </div>
            // `;

        })

        // <p>${element.meanings[i, 1].definitions[0].definition}</p>


        const setData = (results) => {
            results.forEach((element, i) => {
                console.log(element);
                resultContent.innerHTML = `
                    <div>
                        <h1>${element.word}</h1>
                        <div class='result-meaning'>
                            <p>${element.phonetic}</p>
                            <p>${element.meanings[i].partOfSpeech}</p>
                            <p>${element.meanings[i].definitions[0].definition}</p>
                            <p>${element.meanings[i].definitions[3].definition}</p>
                        </div>

                        <div class='related-meaning'>
                            <div class='synonyms'>
                                <h1>Synonyms:</h1>
                                <ul>
                                    <li>${element.meanings[i].synonyms[0]}</li>
                                    <li>${element.meanings[i].synonyms[1]}</li>
                                </ul>
                            </div>
                            <div class='antonyms'>
                                <h1>Antonyms:</h1>
                                <ul>
                                    <li>${element.meanings[i].antonyms[0]}</li>
                                    <li>${element.meanings[i].antonyms[1]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
})
