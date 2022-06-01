const btn = document.querySelector('.submit');
const resultContent = document.querySelector('.result-output');
const searchInput =  document.querySelector('#search');



btn.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(` https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput.value} `)
        .then(res => res.json())
        .then(data => {
            setData(data)
        })

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

                        <div>
                            <p>${element.meanings[i].definitions[0].example || ''}</p>
                        </div>
                    </div>
                `;
            });
        }
})
