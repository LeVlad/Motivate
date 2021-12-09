document.addEventListener("DOMContedLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
       button.addEventListener("click", function(){
           if(this.getAttribute("data-type") === "submit"){
               alert("you clicked submit!");
           } else {
               let dayType = this.getAttribute("data-type");
               alert(`you clicked on ${dayType}`);
           }
       })
})