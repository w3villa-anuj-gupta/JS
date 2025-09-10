const URL = "https://dog.ceo/api/breeds/image/random"
const img = document.createElement("img");

const getData = async ()=>{
    let response = await fetch(URL);
    let data = await response.json();
    img.src = data['message'];
    document.body.appendChild(img); 
}