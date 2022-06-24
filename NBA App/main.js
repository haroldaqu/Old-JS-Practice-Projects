
// const getBballData = ( () => {
//     const playerPoints = document.querySelector('.ppg')
//     // custom api key
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
//             'X-RapidAPI-Key': '0aa98e4d75mshcd524deb6e7dce3p1d3190jsn21eb5d67de6a'
// 	    }
//     };

//     // STEP 1 -> Grab nba data
//     const fetchTeam = async () => {
//         // 1. fetch api
//         // 2. grab data and use json()
//         // 3. run data into a function
//         const response = await fetch('https://api-nba-v1.p.rapidapi.com/players/statistics?team=17&season=2020', options)
//         const nbaData = await response.json()
//         return grabNames(nbaData.response)
//     }

//     // STEP 2 -> Grab names
//     const grabNames = (data) => {
//         nameArray = []
//         const name = data.forEach(array => {
//             if (!nameArray.includes(array.player.firstname)) {
//                 nameArray.push(array.player.firstname)
//             }
//         })
//         // console.log(nameArray)
//         return mapNames(data, nameArray)

//     }

//     // STEP 3 -> map name array
//     const mapNames = (data, nameArray) => {
//         const map = nameArray.map((array) => {
//             return {  firstname : array ,stats : {
//                 ppg: [],
//                 apg: [], 
//                 rpg: [], 
//                 spg: [], 
//                 bpg: []
//             }}
//         })

//         const filter = data.forEach(array => {
//             nameArray.forEach(name => {
//                 if (name === array.player.firstname) {
//                     const index = map.findIndex(x => Object.values(x).includes(name))
//                     map[index].stats.ppg.push(array.points)
//                     map[index].stats.apg.push(array.assists)
//                     map[index].stats.rpg.push(array.totReb)
//                     map[index].stats.spg.push(array.steals)
//                     map[index].stats.bpg.push(array.blocks)
//                 }
//             })
//         })
//         map.forEach((array, i) => {
//             const reducePPG = (array.stats.ppg.reduce((a, b) => a + b, 0))/(array.stats.ppg.length)
//             const reduceAPG = (array.stats.apg.reduce((a, b) => a + b, 0))/(array.stats.apg.length)
//             const reduceRPG = (array.stats.rpg.reduce((a, b) => a + b, 0))/(array.stats.rpg.length)
//             const reduceSPG = (array.stats.spg.reduce((a, b) => a + b, 0))/(array.stats.spg.length)
//             const reduceBPG = (array.stats.bpg.reduce((a, b) => a + b, 0))/(array.stats.bpg.length)
//             map[i].stats.ppg.splice(0, array.stats.ppg.length)
//             map[i].stats.apg.splice(0, array.stats.apg.length)
//             map[i].stats.rpg.splice(0, array.stats.rpg.length)
//             map[i].stats.spg.splice(0, array.stats.spg.length)
//             map[i].stats.bpg.splice(0, array.stats.bpg.length)
//             map[i].stats.ppg.push(parseFloat(reducePPG.toFixed(2)))
//             map[i].stats.apg.push(parseFloat(reduceAPG.toFixed(2)))
//             map[i].stats.rpg.push(parseFloat(reduceRPG.toFixed(2)))
//             map[i].stats.spg.push(parseFloat(reduceSPG.toFixed(2)))
//             map[i].stats.bpg.push(parseFloat(reduceBPG.toFixed(2)))
            
//         })
//     console.log(map)
//     return domManipulation(map)
//     }
//     const domManipulation = (map) => {
//         playerPoints.innerText = map[0].stats.apg
//     }



    
//     return {
//         fetchTeam
    
//     }
// })()

// getBballData.fetchTeam()


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'nba-stats4.p.rapidapi.com',
		'X-RapidAPI-Key': '0aa98e4d75mshcd524deb6e7dce3p1d3190jsn21eb5d67de6a'
	}
};

fetch('https://data.nba.net/data/10s/prod/v1/2020/schedule.json', {mode: 'cors'})
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


    0011900020

    20191008