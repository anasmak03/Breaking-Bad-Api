// fetch("https://www.breakingbadapi.com/api/charcters/5")
// .then(function (response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data)
// })

// async function get(){
//     const response = await fetch("https://www.breakingbadapi.com/api/charcters/1")
//     const data = await response.json();
//     console.log(data)
// }

// get()

const api = "https://www.breakingbadapi.com/api/characters";

 async function get(){
    try{
        const response = await fetch(api)
        const data = await response.json();
       paraData(data)
    }catch(e){
        console.log('Error :',e.message)
    }
 }

    function paraData(data){
      
        const header = document.getElementById('header');
        const content = document.getElementById('content');
        header.innerHTML += `
        <select class="form-control" onchange="getchar(this.value)"> 
        <option><h5>Please choose name</h5></option>
        ${data.map(character => `<option>${character.name}</option>`)}
        
        </select>
        `
    }





 async function getchar(name){
 
    if (name != 'Please choose name') {
        const response = await fetch(`${api}?name=${name}`)
        const data = await response.json();
       
        content.innerHTML = `
        <h2 style="margin-top: 20px; text-align: center;" >${data[0].name} (${data[0].nickname})</h2> <br>
        <h5 style="text-align: center;">${data[0].portrayed}</h5> <br>
        <img src="${data[0].img}" alt"picture" width="250px"  style="margin: 0 auto; display: block;">
        
        `
    }   
    
}

 get()




