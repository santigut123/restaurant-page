import makeHeader from './header'
import makeHome from './home'
import makeMenu from './menu'
function createWebsite(){
    const content=document.querySelector("#content");
    content.appendChild(makeHeader());
    const pageDiv=document.createElement("div","pageDiv");
    pageDiv.appendChild(makeHome());
    content.appendChild(pageDiv);
    // add event listeners for buttons
    const home=document.querySelector("#home");
    const menu=document.querySelector("#menu");
    const contact=document.querySelector("#contact");
    const location=document.querySelector("#location");
    let menuOptions=[home,menu,contact,location];
    //
    for(let i=0;i<4;i++){
        menuOptions[i].addEventListener("click",()=>switchTab(menuOptions[i],pageDiv));
        
    }

}
function switchTab(currentPage,content)
{
    console.log("test");
    let pageName=currentPage.id;
    content.textContent="";
    
    if(pageName=="menu")
    {
        content.appendChild(makeMenu());
    }
    if(pageName=="home"){
        content.appendChild(makeHome())
    }
    

    
    
    
}
createWebsite();
