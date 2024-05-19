// Array containing media details
let mediaList = [
  // Games
  {
    type: "game",
    title: "Dishonored 2",
    image: "../img/dishonored.jpg",
    details: {
      genre: "Action & adventure",
      release: "November 10, 2016",
      company: "Bethesda Softworks",
      likes: "30k",
      platforms: ["PC", "PlayStation 4/5", "Xbox Series X/S"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/32LDc_66r5U?si=b1KKGzGBLMpYj_OX",
    },
  },
  {
    type: "game",
    title: "Elden Ring",
    image: "../img/elden ring.jpg",
    details: {
      genre: "Action & adventure ~ Role playing",
      company: "BANDAI NAMCO Entertainment",
      likes: "30k",
      platforms: ["PC", "PlayStation 4/5", "Xbox Series X/S"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/K_03kFqWfqs?si=qamMUdH40fi8Jdt-",
    },
  },
  {
    type: "game",
    title: "Red Dead Redemption 2",
    image: "../img/red redemption.jpg",
    details: {
      genre: "Action & adventure",
      company: "Rockstar Games",
      likes: "30k",
      platforms: ["PC", "PlayStation 4/5", "Xbox Series X/S"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/gmA6MrX81z4?si=E5O94GCR-nHV6FP9",
    },
  },
  {
    type: "game",
    title: "God Of War Ragnarok",
    image: "../img/god of war.jpg",
    details: {
      genre: "Action & adventure",
      company: "Santa Monica Studio",
      likes: "30k",
      platforms: ["PC", "PlayStation 4/5"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/hfJ4Km46A-0?si=D05UfAxH0EXwKIVy",
    },
  },
  {
    type: "game",
    title: "Gran Turismo 7",
    image: "../img/gran turismo.jpg",
    details: {
      genre: "Sports",
      company: "Polyphony Digital",
      likes: "30k",
      platforms: ["PC", "PlayStation 4/5"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/IEzOZfu32Cw?si=c8wYTlf4wEHV-C-z",
    },
  },
  {
    type: "game",
    title: "Forza Horizon 5",
    image: "../img/forza-horizon-5-cover.webp",
    details: {
      genre: "Racing & flying",
      company: "Xbox Game Studios",
      likes: "30k",
      platforms: ["PC", "Xbox Series X/S"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/FYH9n37B7Yw?si=gcyyCOnOHbGibr0h",
    },
  },
  {
    type: "game",
    title: "Forza Motorsport",
    image: "../img/forza-motorsport-cover.webp",
    details: {
      genre: "Racing & flying",
      company: "Xbox Game Studios",
      likes: "30k",
      platforms: ["PC", "Xbox Series X/S"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/em4gv1Ietko?si=Nf7RCjhDM2tXC1SZ",
    },
  },
  {
    type: "game",
    title: "Apex Legends",
    image: "../img/games/trending/apex-legends.jpg",
    details: {
      genre: "Shooter",
      company: "EA",
      likes: "30k",
      platforms: ["PC", "PlayStation 4/5", "Xbox Series X/S"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/oQtHENM_GZU?si=BDg1dQLGyN5GH2qM",
    },
  },
  {
    type: "game",
    title: "Fortnite",
    image: "../img/games/trending/fortnite.jpg",
    details: {
      genre: "Action & adventure ~ Other ~ Shooter ~ Simulation ~ Strategy",
      company: "Epic Games Inc",
      likes: "30k",
      platforms: ["PC", "PlayStation 4/5", "Xbox Series X/S"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/WJW-bzXZM8M?si=aFsLzTc33dcQCKdR",
    },
  },
  {
    type: "game",
    title: "Roblox",
    image: "../img/games/trending/roblox.jpg",
    details: {
      genre: "Action & adventure ~ Other ~ Racing & flying ~ Simulation ~ Strategy",
      company: "UBISOFT",
      likes: "30k",
      platforms: ["PC", "PlayStation 4/5", "Xbox Series X/S"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/eAvXhNlO-rA?si=I5bqLRYptePruF7l",
    },
  },
  {
    type: "game",
    title: "Assasin's Creed Valhalla",
    image: "../img/valhalla.jpg",
    details: {
      genre: "Action & adventure",
      company: "UBISOFT",
      likes: "30k",
      platforms: ["PC", "PlayStation 4/5", "Xbox Series X/S"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/L0Fr3cS3MtY?si=5ZrWOEV41LXjmVDr",
    },
  },
  {
    type: "game",
    title: "The Witcher 3: Wild Hunt",
    image: "../img/witcher.jpg",
    details: {
      genre: "Action & adventure ~ Role playing",
      company: "CD PROJECKT S.A.",
      likes: "30k",
      platforms: ["PC", "PlayStation 4/5", "Xbox Series X/S Series X/S"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/c0i88t0Kacs?si=qEYz2ybDE4WnhEev",
    },
  },
  {
    type: "game",
    title: "Horizon",
    image: "../img/horizon.jpg",
    details: {
      genre: "Action ~ Role playing",
      company: "Guerrilla Games",
      likes: "30k",
      platforms: ["PC", "PlayStation 4/5"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/u4-FCsiF5x4?si=woU-QJInJDAV0Glh",
    },
  },
  {
    type: "game",
    title: "The Last of Us 2",
    image: "../img/last of us 2.jpg",
    details: {
      genre: "Action & adventure",
      company: "Naughty Dog",
      likes: "30k",
      platforms: ["PC", "PlayStation 4/5"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/vhII1qlcZ4E?si=SnuTVJhGk7sNUOkX",
    },
  },
  {
    type: "game",
    title: "Spiderman 2",
    image: "../img/spiderman 2.jpg",
    details: {
      genre: "Action & adventure",
      company: "Insomniac Games",
      likes: "30k",
      platforms: ["PC", "PlayStation 4/5"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/9fVYKsEmuRo?si=eXBrHNJJLuCzyFtm",
    },
  },
  {
    type: "game",
    title: "Gears 5",
    image: "../img/gears-5-cover.cover_small.jpg",
    details: {
      genre: "Action",
      company: "UBISOFT",
      likes: "30k",
      platforms: ["PC", "PlayStation 4/5", "Xbox Series X/S"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/APqBWniRQbQ?si=Ugp1M7fPGy8BN0Ia",
    },
  },
  {
    type: "game",
    title: "Microsoft Flight Simulator",
    image: "../img/microsoft-flight-simulator-cover.cover_small.jpg",
    details: {
      genre: "Action",
      company: "UBISOFT",
      likes: "30k",
      platforms: ["PC", "Xbox Series X/S"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/BTETsm79D3A?si=HTm6dlo_gzmAt9xU",
    },
  },
  {
    type: "game",
    title: "Quantum Break",
    image: "../img/quantum-break-cover.webp",
    details: {
      genre: "Action",
      company: "UBISOFT",
      likes: "30k",
      platforms: ["PC", "Xbox Series X/S"],
      description: "Description of Dishonored 2...",
      trailerUrl: "https://www.youtube.com/embed/ruY1eT9bXiw?si=gThH7ehfahVi-ITi",
    },
  },

  //   Movies
  {
    type: "movie",
    title: "Abigail",
    image: "../img/Abigail_Official_Poster.jpg",
    details: {
      genre: "Action / Horror / Thriller",
      releaseDate: "2024",
      ratings: "5/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "A group of criminals kidnaps a teenage ballet dancer, the daughter of a notorious gang leader, in order to obtain a ransom of $50 million, but over time, they discover that she is not just an ordinary girl. After the kidnappers begin to diminish, one by one, they discover, to their increasing horror, that they are locked inside with an unusual girl",
      trailerUrl:
        "https://www.youtube.com/embed/3PsP8MFH8p0?si=3cEABuVvpVmqYOzM",
    },
  },
  {
    type: "movie",
    title: "Dune: Part Two",
    image: "../img/dune.jpg",
    details: {
      genre: "Action / Adventure / Drama / Sci-Fi",
      releaseDate: "2024",
      ratings: "5/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
      trailerUrl:
        "https://www.youtube.com/embed/_YUzQa_1RCE?si=RxqLbf8a-_BUBIku",
    },
  },
  {
    type: "movie",
    title: "Damsel",
    image: "../img/Damsel.jpg",
    details: {
      genre: "Action / Adventure / Fantasy",
      releaseDate: "2024",
      ratings: "5/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon",
      trailerUrl:
        "https://www.youtube.com/embed/iM150ZWovZM?si=Eomar3fP6gDd20fo",
    },
  },
  {
    type: "movie",
    title: "Friday",
    image: "../img/friday.jpg",
    details: {
      genre: "Action / Comedy / Drama",
      releaseDate: "1995",
      ratings: "5/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "Craig and Smokey are two guys in Los Angeles hanging out on their porch on a Friday afternoon, smoking and drinking, looking for something to do.",
      trailerUrl:
        "https://www.youtube.com/embed/umvFBoLOOgo?si=WItDYjGDtRTb7Juv",
    },
  },

  {
    type: "movie",
    title: "Home Alone",
    image: "../img/home alone.jpg",
    details: {
      genre: "Action / Comedy / Family",
      releaseDate: "1990",
      ratings: "5/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "Eight-year-old Kevin McCallister makes the most of the situation after his family unwittingly leaves him behind when they go on Christmas vacation. But when a pair of bungling burglars set their sights on Kevin's house, the plucky kid stands ready to defend his territory. By planting booby traps galore, adorably mischievous Kevin stands his ground as his frantic mother attempts to race home before Christmas Day.",
      trailerUrl:
        "https://www.youtube.com/embed/jEDaVHmw7r4?si=yyk1VF7JY75EccGR",
    },
  },

  {
    type: "movie",
    title: "Batman Returns",
    image: "../img/batman returns.jpg",
    details: {
      genre: "Action / Adventure / Crime / Fantasy",
      releaseDate: "1992",
      ratings: "5/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "While Batman deals with a deformed man calling himself the Penguin, an employee of a corrupt businessman transforms into the Catwoman",
      trailerUrl:
        "https://www.youtube.com/embed/Too3qgNaYBE?si=3L0zYN1lY-trkm4I",
    },
  },

  {
    type: "movie",
    title: "The Baby-Sitters Club",
    image: "../img/babysitter club.jpg",
    details: {
      genre: "Action / Comedy / Drama / Family",
      releaseDate: "1995",
      ratings: "5/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "Seven junior-high-school girls organize a daycare camp for children while at the same time experiencing classic adolescent growing pains",
      trailerUrl:
        "https://www.youtube.com/embed/FGG_TKydPsM?si=6z7D2foSuMDTsvbP",
    },
  },

  {
    type: "movie",
    title: "Madame Web",
    image: "../img/madame web.jpg",
    details: {
      genre: "Action / Adventure / Sci-Fi / Thriller",
      releaseDate: "2024",
      ratings: "5/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present",
      trailerUrl:
        "https://www.youtube.com/embed/s_76M4c4LTo?si=8tyO_0Nji_7VwGdw",
    },
  },

  {
    type: "movie",
    title: "Inside Out",
    image: "../img/inside out.jpeg",
    details: {
      genre:
        "Action / Adventure / Animation / Comedy / Drama / Family / Fantasy",
      releaseDate: "2015",
      ratings: "5/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "From an adventurous balloon ride above the clouds to a monster-filled metropolis, Academy Award®-winning director Pete Docter (“Monsters, Inc.,” “Up”) has taken audiences to unique and imaginative places. In Disney and Pixar’s original movie “ Inside Out,” he will take us to the most extraordinary location of all—inside the mind",
      trailerUrl:
        "https://www.youtube.com/embed/LEjhY15eCx0?si=wFnUiJSFXvA7QEpC",
    },
  },

  {
    type: "movie",
    title: "Boyz N The Hood",
    image: "../img/boys-n-the-hood.jpg",
    details: {
      genre: "Action / Crime / Drama",
      releaseDate: "1991",
      ratings: "5/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "Boyz n the Hood is the popular and successful film and social criticism from John Singleton about the conditions in South Central Los Angeles where teenagers are involved in gun fights and drug dealing on a daily basis",
      trailerUrl:
        "https://www.youtube.com/embed/sLgCCdLbQNc?si=5CXmZeuPy1jrq8gn",
    },
  },

  //   Shows
  {
    type: "tv show",
    title: "The Boys",
    image: "../img/the-boys-tv-show-poster.avif",
    details: {
      genre: " Action / Black comedy / Drama / Satire / Superhero",
      airings: "2019 - Present",
      seasons: "4",
      ratings: "8.7/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "Superheroes are often as popular as celebrities, as influential as politicians, and sometimes even as revered as gods. But that's when they're using their powers for good. What happens when the heroes go rogue and start abusing their powers? When it's the powerless against the super powerful, the Boys head out on a heroic quest to expose the truth about the Seven and Vought, the multibillion-dollar conglomerate that manages the superheroes and covers up their dirty secrets. Based on the comic book series of the same name",
      trailerUrl: "https://www.youtube.com/embed/lNFtACeifcU",
    },
  },

  {
    type: "tv show",
    title: "The Last Of Us",
    image: "../img/the-last-of-us.jpg",
    details: {
      genre: "Action",
      airings: "2023 - Present",
      seasons: "1",
      ratings: "8.7/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "DTasked with escorting a teenager across a post-apocalyptic world, a dreaded smuggler joins hands with a young apprentice to fulfil the mission unscathed",
      trailerUrl: "https://www.youtube.com/embed/lNFtACeifcU",
    },
  },

  {
    type: "tv show",
    title: "Doom Patrol",
    image: "../img/doom-patrol.webp",
    details: {
      genre: "Superhero / Science fiction / Black comedy / Comedy drama",
      airings: "2019 - 2023",
      seasons: "4",
      ratings: "7.7/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "A scientist assembles a team of extraordinary people who endured deadly accidents that gave them superhuman abilities. Together, they investigate strange occurrences to protect the Earth from evil",
      trailerUrl: "https://www.youtube.com/embed/lNFtACeifcU",
    },
  },

  {
    type: "tv show",
    title: "Ted Lasso",
    image: "../img/ted-lasso-apple-tv-poster.avif",
    details: {
      genre: "Drama",
      airings: "2020 - 2023",
      seasons: "3",
      ratings: "8.8/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "An American football coach is hired to manage a British soccer team; what he lacks in knowledge, he makes up for in optimism, determination and biscuits",
      trailerUrl: "https://www.youtube.com/embed/lNFtACeifcU",
    },
  },

  {
    type: "tv show",
    title: "The Originals",
    image: "../img/originals.jpg",
    details: {
      genre: "Horror / Fantasy / Supernatural",
      airings: "2013 - 2018",
      seasons: "5",
      ratings: "8.3/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "The Original family of vampires settle down in the city of New Orleans that they helped to construct several decades ago. They encounter old buddies and confront new foes",
      trailerUrl:
        "https://www.youtube.com/embed/A7o5b-K4V40?si=d2YO2yaHInmR1Iwt",
    },
  },

  {
    type: "tv show",
    title: "1923",
    image: "../img/1923-tv-series-poster.avif",
    details: {
      genre: "Crime drama / Western",
      airings: "2022 - 2023",
      seasons: "1",
      ratings: "8.3/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "The Duttons face a new set of challenges in the early 20th century, including the rise of Western expansion, Prohibition, and the Great Depression",
      trailerUrl:
        "https://www.youtube.com/embed/v88e9Dwnqo0?si=45vJ3BaZcpdqM_pv",
    },
  },

  {
    type: "tv show",
    title: "The Bear",
    image: "../img/the-bear-tv-show-poster.avif",
    details: {
      genre: "Drama",
      airings: "2022 - Present",
      seasons: "2",
      ratings: "8.6/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "A young chef from the fine dining world comes home to Chicago to run his family sandwich shop after a heartbreaking death in his family. A world away from what he's used to, Carmy must balance the soul-crushing realities of small business ownership, his strong-willed and recalcitrant kitchen staff and his strained familial relationships, all while grappling with the impact of his brother's suicide. As Carmy fights to transform both the shop and himself, he works alongside a rough-around-the-edges kitchen crew that ultimately reveals itself as his chosen family.",
      trailerUrl:
        "https://www.youtube.com/embed/gBmkI4jlaIo?si=vFlEF-Ci-aqFMLrn",
    },
  },

  {
    type: "tv show",
    title: "Only Murders in the Building",
    image:
      "../img/only-murders-in-the-building-tv-show-poster.avif",
    details: {
      genre: "Comedy-drama / Mystery",
      airings: "2021 - Present",
      seasons: "3",
      ratings: "8.1/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "Three strangers share an obsession with true crime and suddenly find themselves wrapped up in one. When a grisly death occurs inside their exclusive Upper West Side apartment building, the trio suspects murder and employs their precise knowledge of true crime to investigate the truth. Perhaps even more explosive are the lies they tell one another. Soon, the endangered trio comes to realize a killer might be living among them as they race to decipher the mounting clues before it's too late",
      trailerUrl:
        "https://www.youtube.com/embed/uTtaNEy3PDw?si=-DJ0CMLZtW3L35dq",
    },
  },

  {
    type: "tv show",
    title: "Everybody Loves Raymond",
    image: "../img/shows/all-time/Everybody_Loves_Raymond_.webp",
    details: {
      genre: "Sitcom",
      airings: "1996 - 2005",
      seasons: "9",
      ratings: "7.3/10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "Raymond Barone, a successful sportswriter, has obnoxious parents and a jealous brother. Nevertheless, he manages to keep a bright outlook and a sense of humour as he balances his family and work life",
      trailerUrl:
        "https://www.youtube.com/embed/hm7wa68zNUU?si=mwP7aLASpTadBggk",
    },
  },

  {
    type: "tv show",
    title: "Fresh Prince Of Bel Air",
    image: "../img/shows/all-time/fresh prince.jpg",
    details: {
      genre: "Sitcom",
      airings: "1990 - 1996",
      ratings: "7.9/10",
      seasons: "6",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "Things take a hilarious turn when an inner-city teenager from Philadelphia is sent to live with his wealthy aunt and uncle at their Bel-Air mansion",
      trailerUrl:
        "https://www.youtube.com/embed/_u6vYpbfCmQ?si=wyVISaBNw0vRldDn",
    },
  },

  {
    type: "tv show",
    title: "Friends",
    image: "../img/shows/all-time/friends.webp",
    details: {
      genre: "Sitcom",
      airings: "1994 - 2004",
      ratings: "8.9/10",
      seasons: "10",
      platforms: ["Tubi", "Netflix", "Hulu"],
      description:
        "Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening",
      trailerUrl:
        "https://www.youtube.com/embed/IEEbUzffzrk?si=5Yl7P_IDkME3bYpk",
    },
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const itemLinks = document.querySelectorAll(
    'a[href^="Movie.html?id="], a[href^="Show.html?id="], a[href^="Game.html?id="]'
  );

  itemLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      const urlParams = new URLSearchParams(window.location.search);
      const itemId = urlParams.get("id");

      // Find the media item by title
      const media = mediaList.find(
        (item) => item.title === link.textContent.trim()
      );

      if (media) {
        localStorage.setItem("media", JSON.stringify(media)); // Store media details in localStorage
        window.location.href = link.getAttribute("href");
      } else {
        console.error("Media not found.");
      }
    });
  });
});
