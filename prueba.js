const btn= document.getElementById('btnRandom'); //recuperamos el botón 
btn.addEventListener('click',fetchImageShow); //añadimos la funcion click para que al pulsar ejecute la function fetchImageShow


function fetchImageShow(){
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10').then((response)=>{ //recuperamos la respuesta
        const urlImage=response.data[1].url //filtramos los datos y al primer resultado
        const content= document.getElementById('content');
        content.innerHTML=`<img src="${urlImage}"style="max-width: 300px; max-height: 300px;">`; //añadimos a la sección
    }).catch(function(error){
        console.log(error);
    });
}


