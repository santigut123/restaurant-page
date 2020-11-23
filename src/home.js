function makeHome(){
    // Editable media on page
    const imageLocation="https://images.unsplash.com/photo-1530153382845-fdcb2aa7c74e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
    const headerText="Our Mission";
    const homeInfoText="We strive to use local ingredients to make delicious food that you would feel good about eating everyday.";
    const homeInfo=document.createElement("div");
    let home= document.createElement("div");
    homeInfo.setAttribute("id","home-info");
    let homeInfoP=document.createElement("p");
    homeInfoP.textContent=homeInfoText;

    
    
    home.setAttribute("id","home-content");
    let homepageImage=document.createElement("img");
    homepageImage.setAttribute("src",imageLocation);
    homepageImage.setAttribute("id","homepageImage");
    home.appendChild(homepageImage);
    let header=document.createElement("h1");

   

    header.textContent=headerText;
    homeInfo.appendChild(header);
    homeInfo.appendChild(homeInfoP);
    home.appendChild(homeInfo);

    

    
    return home;
    
    

}
export default makeHome;