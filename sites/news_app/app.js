console.log("Starting App!!");

const URL = 'https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true';

const getNewsArticles = async () => {
    let response = await fetch(URL);
    let data = response.json();
    return data;
}

const dashBoard = document.querySelector('#dashboard');

const states = document.querySelector('#states');

getNewsArticles().then(data => {
    console.log(data);
    
    const colors = [
        'primary', 'warning', 'danger', 'success', 'secondary'
    ];


    const totalCases = dashBoard.querySelector('#totalCases');

    totalCases.innerHTML = `
        <h2>Total Cases  : ${data.totalCases} </h2>
    `;
    
    const activeCases = dashBoard.querySelector('#activeCases');
    const recoveredCases = dashBoard.querySelector('#recovered');
    const deaths = dashBoard.querySelector('#deaths');

    const activeCasesNew = dashBoard.querySelector('#activeCasesNew');
    const recoveredCasesNew = dashBoard.querySelector('#recoveredNew');
    const deathsNew = dashBoard.querySelector('#deathsNew');

    activeCases.innerHTML = `
        <h4>Active Cases</h4>
        <p>${data.activeCases}</p>
    `;

    recoveredCases.innerHTML = `
        <h4>Recovered</h4>
        <p>${data.recovered}</p>
    `;

    deaths.innerHTML = `
        <h4>Deaths</h4>
        <p>${data.deaths}</p>
    `;


    activeCasesNew.innerHTML = `
        <h4>Active Cases(New)</h4>
        <p>${data.activeCasesNew}<p>
    `;

    recoveredCasesNew.innerHTML = `
        <h4>Recovered (New)</h4>
        <p>${data.recoveredNew}</p>
    `;

    deathsNew.innerHTML = `
        <h4>Deaths (New)</h4>
        <p>${data.deathsNew}</p>
    `;

    const lastUpdated = dashBoard.querySelector('#lastUpdated');

    lastUpdated.innerHTML = `
        <p>Last Updated : ${data.lastUpdatedAtApify}</p>
    `;

    const regionalData = data.regionData;

    const states_elements = states.querySelector('#states_data');

    regionalData.forEach((element, index)=> {
        states_elements.innerHTML += `
            <div id="state_info" class="card border-${colors[index%colors.length]} mb-3">
                <div class="card-header"><h5>${element.region}</h5></div>
                <div class="card-body text-${colors[index%colors.length]}">
                    <p>Recovered : ${element.recovered}</p>
                    <p>Deceased : ${element.deceased}</p>
                </div>
            </div>
        `;
    });

});


