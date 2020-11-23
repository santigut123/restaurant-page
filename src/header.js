function makeHeader()
{
    const headerOptions=["home","menu","contact","location"];
    const logoImgLocation="";
    const name="local-bowl";
    let header=document.createElement("div");
    header.setAttribute("id","header");
    let logo= document.createElement("div");
    logo.setAttribute("src",logoImgLocation);
    logo.setAttribute("id","logo");
    let nameDiv=document.createElement("div");
    nameDiv.setAttribute("id","name");
    nameDiv.textContent=name;
    header.appendChild(logo);
    header.appendChild(nameDiv);

    



    for(let i=0;i<headerOptions.length;i++)
    {
        let headerOption=document.createElement("div");
        headerOption.textContent=headerOptions[i];
        headerOption.setAttribute("class","headerOption");
        headerOption.setAttribute("id",headerOptions[i]);
        header.appendChild(headerOption);
    }   

    return header;
}
export default makeHeader;
        
    
    
    
