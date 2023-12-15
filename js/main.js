//quotes content
var quotes = [
  {
    quote:
      "“Only when we're drowning do we understand how fierce our feet can kick.”",
    author: "― Amanda Gorman",
  },
  {
    quote:
      "“It is better to fail in originality than to succeed in imitation.”",
    author: "— Herman Melville",
  },
  {
    quote: "“Creativity is not a talent. It is a way of operating.”",
    author: "— John Cleese",
  },
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "― Dr. Seuss",
  },
  {
    quote: "“Do not let anyone ever tell you who you are.”",
    author: "— Kamala Harris",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
  },
  {
    quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever”",
    author: "― Albert Einstein",
  },
  {
    quote:
      "“Build your own dreams or someone else will hire you to build theirs.”",
    author: " — Farrah Gray",
  },
  {
    quote: "“You can get what you want or you can just get old.”",
    author: "― Billy Joel",
  },
];

// Function to display a random quote
function displayRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-container").innerHTML =
    quotes[randomIndex].quote;
  document.getElementById("quote-author").innerHTML =
    quotes[randomIndex].author;
}

displayRandomQuote();
