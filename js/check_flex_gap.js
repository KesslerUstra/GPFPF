function checkFlexGap() {
    //Codigo copiado (https://edrodrigues.com.br/blog/como-detectar-o-suporte-do-navegador-para-flexbox-gap)
    // create flex container with row-gap set
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    // create two, elements inside it
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    // append to the DOM (needed to obtain scrollHeight)
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
    flex.parentNode.removeChild(flex);

    return isSupported;
}


function testeGap(){
    if (checkFlexGap()) {
        document.documentElement.classList.add("flexbox_gap");
      } else {
        document.documentElement.classList.add("no_flexbox_gap");
      }
}

window.addEventListener("load",testeGap);