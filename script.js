let quotee = [];

function getquotee() {
    let searchValue = document.getElementById("searchInput").value;

    fetch(`https://api-wisdom.deontex.com/api/v1/quotes?search=${searchValue}`)
        .then(response => response.json())
        .then(data => {
           quotee = data.quotes || []; 

            if (quotee.length === 0) {
                document.getElementById('authore').textContent = "No results";
                document.getElementById('Quotes').textContent = "Try another word";
                return;
            }

            printequotee();
        });
}

function printequotee() {
    let quoteeIndex = Math.floor(Math.random() * quotee.length);
    let quote = quotee[quoteeIndex];

    document.getElementById('authore').textContent = quote.philosopher_name;
    document.getElementById('Quotes').textContent = quote.quote_text;
}