import makediv from './makediv'
function makeContactUs(){
    let contactUsElements=[];
    let contactUsPage = makediv("div","","contactUs");
    let title="Contact Us";
    let telNumber="513-245-3123";
    let titleDiv=makediv("h1","","",title);
    let telNumberDiv=makediv("div","big-text","",telNumber);
    contactUsPage.appendChild(titleDiv);
    contactUsPage.appendChild(telNumberDiv);
    return contactUsPage;



    
    
}
export default makeContactUs;