let player = {
  name: "",
  location: "",
  items: []
};



/*-------Room Template--------

 ROOMNAME:{
    get story() 
    { return (
      ""
    )},
    options:{
      option1: "",
      option2: ""
    }
  }
-------END Room Template------ */


let rooms = {
  start: {
    get story() 
    { return (
      "Welcome " + player.name + 
      ",\n \
       I knew it was you, I could smell your unforgettable foul stench as you approached.\n\n \
       I suppose you\'re here because of the rumors that the worlds greatest text adventure game has been created???\n\n \
       Well, the rumors are true, the Worlds greatest text adventure game has indeed been created........\n\n\
       .......Would you like to play???"
    )},
    options:{
      option1: "YES, LETS BEGIN!",
      option2: "NO THANKS"
    },
    completed: false,
    get completedStory() 
    { return (
      ""
    )},
    completedOptions:{
      option1: "",
      option2: ""
    }
  },
  nogame:{
    get story() 
    { return (
      "I too, would love to play the worlds greatest text adventure game! \n\n \
      Should you find it... do me a favour and pass on it's location to me???\n\n \
      Until then..... \n\n \
      Would you like to play OUR adventure game instead?\n "
    )},
    options:{
      option1: "I'll Give it a go",
      option2: "Nah, no point really"
    },
    completed: false
  },
  begin:{
    get story() 
    { return (
      "Well Then, As you have chosen to play our Adventure...... \n\
      Lets Begin.....\n \
      ....\n \
      ..\n \
      .\n\n \
      Morning, well so it seems. You open your eyes to a brightly lit room. The room looks vaguly familiar but it's hard to tell\
      from the thumping pain pulsing from your head.\n\
      You roll to your side and notice some pills on the nightstand, your stomache also lets you know that it's unhappy with whatever\
      activites you undertook last night."
    )},
    options:{
      option1: "Take Pills",
      option2: "Dont Take Pills"
    },
    completed: false,
    get completedStory() 
    { return (
      "you've taken the pills!"
    )},
    completedOptions:{
      option1: "",
      option2: ""
    }
    
  },
  nostory:{
    get story() 
    { return (
      "No Story Created Yet"
    )},
    options:{
      option1: "Back",
      option2: "Back"
    },
    completed: false
  }



}

