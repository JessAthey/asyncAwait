//first problem

// function getRandomNumber() {
//     return new Promise((resolve)=> {
//         setTimeout(() => {
//             resolve(Math.random());
//         }, 500);

        
//     });
// }

// async function printRandomNumber() {
//     const randomNum = await getRandomNumber();
//     console.log(randomNum);
//     }
    
//     printRandomNumber();


//second problem

async function getCityData(city){
    const url = `https://geocode.xyz/${city}?json=1`;
    const response = await import('node-fetch');
    const data = await response.default(url).then(res => res.json());
    console.log(`Lat: ${data.latt}, Long: ${data.longt}`);
}

//getCityData('seattle');
//getCityData('charlotte');
getCityData('boston');