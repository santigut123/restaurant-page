let makediv = (type="div",classDef="",id="",textContent="")=>{
    let div = document.createElement(type);
    div.setAttribute("class",classDef);
    div.setAttribute("id",id);
    div.textContent=textContent;
    return div;


}
export default makediv;