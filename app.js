//  https://api.dictionaryapi.dev/api/v2/entries/en/

const searchInput =  document.querySelector('#search'),
      resultContent = document.querySelector('.result-output');


searchInput.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${e.target.value}`)
        .then(res => console.log(res.data))
})