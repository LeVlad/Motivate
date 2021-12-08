function getRandomQuote(){
    let quoteOne = document.getElementById("quote-1");
    let quoteTwo = document.getElementById("quote-2");
    let quoteThree = document.getElementById("quote-3");
    let quoteFour = document.getElementById("quote-4");
    let quoteFive = document.getElementById("quote-5");
    let quoteSix = document.getElementById("quote-6");
    let quoteSeven = document.getElementById("quote-7");

    quoteOne.addEventListener("click", displayRandomQuote);

}

function displayRandomQuote(){

     let positiveQuotes = ["Be positive. Be true. Be kind.Roy T. Bennett","You cannot have a positive life and a negative mind.Joyce Meyer",
       "If you are positive, you’ll see opportunities instead of obstacles.Widad Akrawi",
        "Write it on your heart that every day is the best day in the year.Ralph Waldo Emerson","Accentuate the positive, Eliminate the Negative, latch onto the affirmative.Bing Crosby"]

    if(data-type === 1) {
        return positiveQuotes[2]
    } else {
        alert(`"today is not" ${day}`)
    }
}