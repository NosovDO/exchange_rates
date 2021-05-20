const quotesField = document.querySelector('.quotes');
const btnSearch = document.querySelector('.search__btn');
const inputSearch = document.querySelector('.search__input');
const examples = document.querySelector('.examples');

class FetchServices {
    static shared = new FetchServices();

    getСurrency() {
        return fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
            .then(data => data.json())
    }
}

btnSearch.addEventListener('click', () => {
    let valueSearch = inputSearch.value.toUpperCase();
    FetchServices.shared.getСurrency().then(quotes => {
        for (key in quotes.Valute) {
            if (key === valueSearch) {
                quotesField.innerHTML +=
                    `<li>
                        <h1>${quotes.Valute[`${valueSearch}`].Name}</h1>
                        <p>${quotes.Valute[`${valueSearch}`].Value.toFixed(2)}руб.</p>
                    </li>`;
            }
        }
    });
});

function currencyFormation() {
    FetchServices.shared.getСurrency().then(quotes => {
        for (key in quotes.Valute) {
            examples.innerHTML +=
                `<tr>
                    <td>${key.toLowerCase()}</td>
                    <td>${quotes.Valute[`${key}`].Name}</td>
                </tr>`;
        }
    });
}

currencyFormation();