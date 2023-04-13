const btn= document.getElementById('btnRandom');
btn.addEventListener('click',fetchImageShow);


function fetchImageShow(){
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10').then((response)=>{
        const urlImage=response.data[1].url
        const content= document.getElementById('content');
        content.innerHTML=`<img src="${urlImage}"style="max-width: 300px; max-height: 300px;">`;
    }).catch(function(error){
        console.log(error);
    });
}


