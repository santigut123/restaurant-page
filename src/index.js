import makeHeader from './header'
import makeHome from './home'
import makeMenu from './menu'
import makediv from './makediv'
import makeContactUs from './contact';
function createWebsite(){
    initialContent();
    // add event listeners for buttons
    const menuNames=["home","menu","contact","location"];
    addEventListeners(menuNames);

    
    
   

}
function addEventListeners(names){
    const pageDiv=document.querySelector(".pageDiv");
    
    let menuOptions=[];
    for(let i=0;i<names.length;i++){
        menuOptions[i]=document.querySelector("#"+names[i]);
        menuOptions[i].addEventListener("click",()=>switchTab(menuOptions[i],pageDiv));
        
    }
    
}
function initialContent()
{
    const content=document.querySelector("#content");
    content.appendChild(makeHeader());
    const pageDiv=makediv("div","pageDiv");
    pageDiv.appendChild(makeHome());
    content.appendChild(pageDiv);

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
    if(pageName=="contact")
    {
        content.appendChild(makeContactUs());
    }
    

    
    
    
}
createWebsite();
