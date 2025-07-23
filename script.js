async function searchManga(){
    let inputText = document.querySelector("#searchInput").value;
    
    const getApiInfo = await fetch(`https://consumet-import.vercel.app/manga/mangadex/${inputText}`)

    const data = await getApiInfo.json();
    
    return data;
   
}

async function createCard(){
     const data = await searchManga()
    
    document.querySelector("#card-body").innerHTML=""
    for(let i = 0;i< 10; i++){
        const Title = data.results[i].title;
        const image = data.results[i].image;

        let bodydiv = document.createElement("div")
        bodydiv.setAttribute("class","card-style")

        let Imagecard = document.createElement("img")
        Imagecard.setAttribute("src",image)
        Imagecard.setAttribute("class","image")

        let Titlecard = document.createElement("h2")
        Titlecard.innerHTML= Title
        Imagecard.setAttribute("class","textme")

        bodydiv.appendChild(Imagecard)
        bodydiv.appendChild(Titlecard)
        
        document.querySelector("#card-body").appendChild(bodydiv)
    }
    


}