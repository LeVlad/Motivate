const quoteArea = document.getElementById("quote-box");
const buttons = document.getElementsByTagName("button");

    
    for (let button of buttons){
       button.addEventListener("click", function(){
           let dayType =this.getAttribute("data-day");
           let quoteIndex = Math.floor(Math.random() * 30);
           let imageIndex = Math.floor(Math.random() * 14);
        displayQuote(dayType,getRandomQuote(quoteIndex),getRandomImage(imageIndex));
         });
}
  /**
   * @param {number} index Random number value to get quote item
   * @returns string  
   * */  
function getRandomQuote(index){

    let quotes = ["Be positive. Be true. Be kind.Roy T. Bennett",
    "You cannot have a positive life and a negative mind.Joyce Meyer",
    "If you are positive, you'll see opportunities instead of obstacles.Widad Akrawi",
    "Write it on your heart that every day is the best day in the year.Ralph Waldo Emerson",
    "Accentuate the positive, Eliminate the Negative, latch onto the affirmative.Bing Crosby",
    "Positive anything is better than negative nothing.Elbert Hubbard",
    "Miracles happen to those who believe in them.Bernhard Berenson",
    "One small positive thought can change your whole day.Zig Ziglar","We become what we think about Earl Nightingale", "People who are crazy enough to think they can change the world, are the ones who do.- Rob Siltanen", "Optimism is the one quality more associated with success and happiness than any other.- Brian Tracy", "Happiness is not something readymade. It comes from your own actions.-Dalai Lama", "All our dreams can come true if we have the courage to pursue them.- Walt Disney","Success is not final, failure is not fatal: it is the courage to continue that counts. Winston Churchill", "Believe you can and you're halfway there.Theodore Roosevelt",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. Jimmy Dean", "Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.- Brian Tracy", "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome. William James", "You are never too old to set another goal or to dream a new dream. C.S. Lewis", "We must be willing to let go of the life we planned so as to have the life that is waiting for us. Joseph Campbell","Everything you've ever wanted is on the other side of fear.- George Addair", "You get what you give.  Jennifer Lopez", "Your life only gets better when you get better.- Brian Tracy", "Happiness is not by chance, but by choice.  Jim Rohn",
   "Be the change that you wish to see in the world.- Mahatma Ghandi",
   "If I cannot do great things, I can do small things in a great way. Martin Luther King Jr.",
    "We generate fears while we sit. We overcome them by action. Dr. Henry Link",
     "Today's accomplishments were yesterday's impossibilities.Robert H. Schuller",
      "Light tomorrow with today! Elizabeth Barrett Browning", 
      "The only limit to our realization of tomorrow will be our doubts of today. Franklin D. Roosevelt",
       "Keep your face always toward the sunshine, and shadows will fall behind you. Walt Whitman",
        "The bad news is time flies. The good news is you're the pilot. Michael Altshuler",
        "Never limit yourself because of others' limited imagination, never limit others because of your own limited imagination. Mae Jemison",
        "Let us make our future now, and let us make our dreams tomorrow's reality. Malala Yousafzai",
         "Don't Let Yesterday Take Up Too Much Of Today. Will Rogers",
          "For every reason it's not possible, there are hundreds of people who have faced the same circumstances and succeeded. Jack Canfield",
          "We may encounter many defeats but we must not be defeated.  Maya Angelou",
           "You only live once, but if you do it right, once is enough. Mae West", "In three words I can sum up everything I've learned about life: it goes on. Robert Frost","Life is what happens to us while we are making other plans. Allen Saunders","I may not have gone where I intended to go, but I think I have ended up where I needed to be.  Douglas Adams","Life isn't about finding yourself. Life is about creating yourself.― George Bernard Shaw","Life is like riding a bicycle. To keep your balance, you must keep moving.― Albert Einstein","Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.  Marie Curie","You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot, it's all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive.― Maya Angelou","The best way to get started is to quit talking and begin doing. Walt Disney","Leaders never use the word failure. They look upon setbacks as learning experiences.  Brian Tracy", "There are no limits to what you can accomplish, except the limits you place on your own thinking. Brian Tracy", "Someone is sitting in the shade today because someone planted a tree a long time ago.  Warren Buffet","The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.  Winston Churchill","You learn more from failure than from success. Don't let it stop you. Failure builds character.  Unknown","If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.  Steve Jobs", "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That's the classic entrepreneur.  Mohnish Pabrai", "The man who has confidence in himself gains the confidence of others. Hasidic Proverb","What you lack in talent can be made up with desire, hustle and giving 110% all the time.  Don Zimmer","Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality. Brian Tracy","I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time.  Michael Phelps","The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. Steve Jobs","Leaders think and talk about the solutions. Followers think and talk about the problems.  Brian Tracy"];
   
           return quotes[index];
   
}

/**
   * @param {number} index Random number value to get image item
   * @returns string  
   * */  
function getRandomImage(index) {
    let images=['Happiness','Hope','Impact','Believe','Focus','Take action', 'Positive','Yes','Net-Positive','NewDay','Smile','ThinkBig','Stay positive','PositiveCan'];
    return images[index];
/**
   * Displays quote to user
   * @param {string} day
   * @param {string} quote
   * @param {string} image
   * */  
}
function displayQuote(day, quote, image){
    Swal.fire({
        title: day,
        text: quote,
        imageUrl: `/assets/images/${image}.png`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Be positive',
      });


}