const climateSelect = document.getElementById('climate-select');
const climateImage = document.getElementById('climate-img');

const architectureSelect = document.getElementById('architecture-select');
const architectureImage = document.getElementById('architecture-img');

const sloganBtn = document.getElementById('slogan-btn');
const sloganInput = document.getElementById('slogan-input');
const sloganList = document.getElementById('slogan-list');

let slogans = [];
let climateCounter = 0;
let architectureCounter = 0;

climateSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    climateImage.src = `./assets/climate-${value}.jpeg`;
    climateCounter++;
});

architectureSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    architectureImage.src = `./assets/architecture-${value}.jpeg`;
    architectureCounter++;
});

function displaySlogans() {
    sloganList.textContent = '';
    for (let slogan of slogans) {
        const p = document.createElement('p');
        p.textContent = slogan;
        sloganList.append(p);
    }
}

sloganBtn.addEventListener('click', (e) => {
    slogans.push(sloganInput.value);
    displaySlogans();
});
