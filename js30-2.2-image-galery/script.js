const galleryPictures = document.querySelector('#grid_of_pictures');
const searchPictureWithInput = document.querySelector('#search_input');
const searchWithLupa = document.querySelector('#lupa');

let url= `https://api.unsplash.com/search/photos?query=tree&&per_page=15&orientation=landscape&client_id=I3amGQw79Fcdi4TbdxHuszZj-y7ZJXoi6B6fwQ5KaFw`;

// поиск картинок полем инпут и энтер
searchPictureWithInput.addEventListener("keydown", (event)=>{
    const wordForSearch = event.target.value.trim();
    
    if (event.key === "Enter" && wordForSearch != ""){
        galleryPictures.innerHTML ="";
        url = `https://api.unsplash.com/search/photos?query=${wordForSearch}&per_page=15&orientation=landscape&client_id=I3amGQw79Fcdi4TbdxHuszZj-y7ZJXoi6B6fwQ5KaFw`;
        getDataImages();
        showDataImages();
    }
})

// поиск картинок лупой
searchWithLupa.addEventListener("click", () => {
 const element = searchPictureWithInput.value.trim();
 if(element.length !=0){
    galleryPictures.innerHTML ="";
        url = `https://api.unsplash.com/search/photos?query=${element}&per_page=15&orientation=landscape&client_id=I3amGQw79Fcdi4TbdxHuszZj-y7ZJXoi6B6fwQ5KaFw`;
        getDataImages();
        showDataImages();
 }
})

// асинхронная функция позволяющая получить данные от api
async function getDataImages() {
    // переменная с сохраненным запросом к api
  const urlImages = await fetch(url);  
  const data = await urlImages.json();
  // путь доступа к данным
  return data.results;
}


// отображение картинок на странице
async function showDataImages(){
    const pictures = await getDataImages();
    for (let i=0; i<pictures.length; i++){
        const picture = document.createElement('img');
        picture.classList.add('gallery-picture')
        picture.src = pictures[i].urls.regular;
        picture.alt = `picture`;
        galleryPictures.appendChild(picture);
    }
}
showDataImages();


