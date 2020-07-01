// document.body.style.backgroundColor =
//   "background: radial-gradient(circle, rgba(174,238,181,1) 0%, rgba(233,148,148,1) 100%)"; // background color

var quotes = [
  "You are amazing. ❤",
  "Viata este asa cum o facem noi.",
  "Negativity needs to be be mastered.",
  "YOU ARE ENOUGH! ❤",
  "You rock! ❤",
  "Ana are intotdeauna dreptate.",
  "It's not happiness that makes us grateful. It's gratefulness that makes us happy.",
  "Without a struggle, there can be no progress.",
  "You are imperfect, permanently and inevitably flawed. And you are beautiful.",
  "You can't change other people, but you can change yourself.",
  "Happiness is not found outside of us. It's found within.",
  "Those who know they have enough are truly wealthy.",
  "We sat in silence, letting the green in the air heal what it could.",
  "Life is a series of building, testing, changing and iterating.",
  "The inspiration you seek is already within you. Be silent and listen.",
  "Things work out best for those who make the best of how things work out.",
  "I survived because the fire within me was stronger than the fire around me.",
  "May your choices reflect your hopes, not your fears.",
  "'Orice viaţă este un miracol.' -> Micul Print",
  "Sunt singur… sunt singur… sunt singur… – răspunse ecoul.",
  "Whatever you think your identity is, you will operate accordinly.",
  "Dacă cineva are propriul 'de ce' al vieții, se împacă aproape cu orice 'cum'.",
  "Poate ca fericirea se găsește întotdeauna in călătoria ascendenta, nu în senzația trecătoare.",
  "Impossible is just a big word thrown around by small men and women who find it easier to live in the world they've been given than to explore the power they have to change it.",
  "See: it's a never-ending upward spiral. And if you think at any point you're allowed to stop climbing, I'm afraid you're missing the point. Because the joy is in the climb itself.",
  "Was it a bad day? Or was it a five bad minutes that you milked all day?",
  "Follow your bliss and the universe will open doors where there were only walls.",
  "The death of a dream is the day that you stop believing in the work it takes to get there.",
  "Tell your fucking truth to someone – it might just save your life, heal you from deep within, and connect you to humanity in ways you never imagined.",
  "Compara-te cu cine ai fost tu ieri, nu cu cine este altcineva astazi.",
  "Poarta-te ca si cand ceea ce faci conteaza. Pentru ca asa si este.",
  "Cel care muta un munte incepe intotdeauna prin a indrepta pietrele mai mici.",
  "Nu fa rau si acesta va inceta sa mai existe.",
  "Be kind! 💕",
  "We become what we think about most of the time, and that's the strangest secret.",
]; // the default quotes which will randomly change

var quote_container = document.querySelector("#quote-container"); // grab the div in which the main quote will be placed
var quotesBtn = document.querySelector("#quotes-list-btn"); // grab the button which will show all the quotes
var quotesDiv = document.querySelector("#quotesDiv"); // grab the div in which the quotes will be put
// quotesLis = document.querySelectorAll("li[class='quotes-class'");

// MAIN QUOTE
var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; // the "main" quote which will randomly channge
var quote_p = document.createElement("p"); // creates paragragraph for the random quote
quote_container.appendChild(quote_p); // appends the paragraph to the div
quote_p.textContent += randomQuote; // appends the quote to the paragraph
quote_p.setAttribute("id", "quoteId"); // adds id to main quote


