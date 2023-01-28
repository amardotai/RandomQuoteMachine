let quote = [
    "'To live is the rarest thing in the world. Most people exist, that is all.'",
    "'That it will never come again is what makes life so sweet.'",
    "'It is never too late to be what you might have been.'",
    "'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'",
    "'Pain is inevitable. Suffering is optional.'" ,
    "All the world's a stage, and all the men and women merely players.",
    "'Be kind, for everyone you meet is fighting a hard battle.'",
    "'Unable are the loved to die for love is immortality.'",
    "'Let me live, love, and say it well in good sentences.'",
    "'Don't let your happiness depend on something you may lose.' "
];
let author = [
    "Oscar Wilde",
    "Emily Dickinson",
    "George Eliot",
    "Ralph Waldo Emerson",
    "Haruki Murakami",
    "William Shakespeare",
    "Plato",
    "Emily Dickinson",
    "Sylvia Plath",
    "C.S. Lewis"
];

genrateQuote = ()=>{
    let newQuote = Math.floor(Math.random()*10);
    $("#text").text(quote[newQuote]);
    $("#author").text(author[newQuote]);
}

genrateQuote();





