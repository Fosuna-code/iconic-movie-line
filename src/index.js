let messages = [
    "¡Hasta la vista, baby! - Terminator 2: Judgment Day",
    "Here's looking at you, kid. - Casablanca",
    "May the Force be with you. - Star Wars",
    "You can't handle the truth! - A Few Good Men",
    "I'll be back. - The Terminator",
    "Bond. James Bond. - Dr. No",
    "Here's Johnny! - The Shining",
    "E.T. phone home. - E.T. the Extra-Terrestrial",
    "Houston, we have a problem. - Apollo 13",
    "Life is like a box of chocolates; you never know what you're gonna get. - Forrest Gump",
    "Why so serious? - The Dark Knight",
    "I'm king of the world! - Titanic",
    "My precious. - The Lord of the Rings: The Two Towers",
    "Nobody puts Baby in a corner. - Dirty Dancing",
    "Keep your friends close, but your enemies closer. - The Godfather II",
    "I feel the need...the need for speed! - Top Gun",
    "Say 'hello' to my little friend! - Scarface",
    "I see dead people. - The Sixth Sense",
    "There's no place like home. - The Wizard of Oz",
    "I'm not bad. I'm just drawn that way. - Who Framed Roger Rabbit?",
    "Mama always said life was like a box of chocolates. - Forrest Gump",
    "I'm walking here! - Midnight Cowboy",
    "Go ahead, make my day. - Sudden Impact",
    "You had me at hello. - Jerry Maguire",
    "Toto, I've got a feeling we're not in Kansas anymore. - The Wizard of Oz",
    "I love the smell of napalm in the morning. - Apocalypse Now",
    "You talking to me? - Taxi Driver",
    "I'm too old for this shit. - Lethal Weapon",
    "I am serious...and don't call me Shirley. - Airplane!",
    "Frankly, my dear, I don't give a damn. - Gone with the Wind",
    "Greed, for lack of a better word, is good. - Wall Street",
    "You're gonna need a bigger boat. - Jaws",
    "Here's to looking at you, kid. - Casablanca",
    "I'll have what she's having. - When Harry Met Sally",
    "You're gonna eat lightning and crap thunder! - Rocky II",
    "I see you. - Avatar",
    "That'll do, pig. That'll do. - Babe",
    "Yippee-ki-yay, motherfucker! - Die Hard",
    "You don't understand! I coulda had class. I coulda been a contender. - On the Waterfront",
    "I drink your milkshake! - There Will Be Blood",
    "I'll be back. - Terminator 2: Judgment Day",
    "It's alive! It's alive! - Frankenstein",
    "I'm the king of the world! - Titanic",
    "It's not the years, honey. It's the mileage. - Raiders of the Lost Ark",
    "They may take our lives, but they'll never take our freedom! - Braveheart",
    "To infinity and beyond! - Toy Story"
  ];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  funnyCommit
};