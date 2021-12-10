document.addEventListener("DOMContedLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
       buttons.addEventListener("click", function(){
           if(this.getAttribute("data-type") === "submit"){
               alert("you clicked submit!");
           } else {
               let dayType = this.getAttribute("data-type");
               alert(`you clicked on ${dayType}`);
           }
       })
})

function getRandomQuote(){
    let quotes = ["Be positive. Be true. Be kind.Roy T. Bennett",
    "You cannot have a positive life and a negative mind.Joyce Meyer",
    "If you are positive, you’ll see opportunities instead of obstacles.Widad Akrawi",
    "Write it on your heart that every day is the best day in the year.Ralph Waldo Emerson",
    "Accentuate the positive, Eliminate the Negative, latch onto the affirmative.Bing Crosby",
    "Positive anything is better than negative nothing.Elbert Hubbard",
    "Miracles happen to those who believe in them.Bernhard Berenson",
    "One small positive thought can change your whole day.Zig Ziglar"];
   }
   
}