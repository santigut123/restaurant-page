import makediv from './makediv'
function makeMenu(){
    let menu= makediv("div","","menu");
    let header=makediv("h1","","","Today's Bowl");
    menu.appendChild(header);
    return menu;

}
export default makeMenu;