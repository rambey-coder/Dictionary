const btn = document.querySelector('.submit');
const resultContent = document.querySelector('.result-output');
const searchInput =  document.querySelector('#search');



btn.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(` https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput.value} `)
        .then(res => res.json())
        .then(data => {
            // let output = '';
            // setData(data)

            resultContent.innerHTML = `
            <div>
                <h1>${data[0].word}</h1>
                <div>
                    <p>${data[0].phonetic}</p>
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                </div>
            </div>
            `;

        })

        // const setData = (results, output) => {
        //     results.forEach(element => {
        //         console.log(element);
        //         resultContent.innerHTML = `
                    // <div>
                    //     <h1>${element.word}</h1>
                    //     <div>
                    //         <p>${element.phonetic}</p>
                    //         <p>${element.meanings.antonyms}</p>
                    //     </div>
                    // </div>
        //         `;
        //     });
        // }
})
