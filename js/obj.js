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
    }    
  },
  begin:{
    get story() 
    { return (
      "Well Then, As you have chosen to play our Adventure...... \n\
      Lets Begin.....\n \
      ....\n \
      ..\n \
      .\n\n \
      Morning, well so it seems, with your sleep patterns it could just as easily be early afternoon.\
      You open your eyes to a brightly lit room, the room looks vaguely familiar but it's hard to tell\
      from the pain pulsing from your head.\n\n\
      You roll to your side and your stomache lets you know that it too, is unhappy with whatever\
      activites you undertook last night.\n\n \
      You notice some pills on the nightstand next to you."
    )},
    options:{
      option1: "Take Pills",
      option2: "Dont Take Pills"
    }
  },
  firstSteps:{
    get story() 
    { return (
      "You stand up off your bed and your vision flickers between a blur and satisfaction as your body sways\
      backward and forward, as if this was your first time using your legs.\n\
      Your stomache growls at you and you look up to see two doorways. \nOne leads to the ensuite bathroom and the other\
      leads to the hallway. \n\
      You can't determine if your stomache is screaming for food or if further attention is required.\n"
    )},
    options:{
      option1: "Go to the Bathroom",
      option2: "Exit to the Hallway"
    }
  },
  bathroom:{
    get story() 
    { return (
      "You think about it for a while and decide that maybe a shower is all you need. You remember that the shower in your ensuite is\
      not working so you will need to use the main bathroom at the end of the hallway. You are about to open the door to the hallway when\
      you feel a familiar rumbling from within. The rumbling gets worse follwed by loud noises and you feel your insides burning.\
      The burning makes it's way through your body and before it's too late, you dash across the room ripping your clothes off and slam shut\
      the bathroom Door.\n \
      You take your seat on your beloved throne, sweat pouring from your brow as the greatest explosion or all time errupts from within!!!!\n\n\
      After what feels like an eternity, you reach for the paper to discover it gone, not one piece, just an empty roll.\n\
      You search the room with your eyes realizing there are only two options. The sock on the bathroom floor or a mad dash down the hall to\
      the bathroom with the only working shower."
    )},
    options:{
      option1: "The sock",
      option2: "Mad Dash"
    }
  },  
  
  hallway:{
    get story() 
    { return (
      "You take no time to determine that it is definitely just hunger causing the growling and you step out into the hall.\n\n\
      The hallway is narrow and on the second floor of the building. To your right you can see another bedroom, a stairway opposite on \
      the left and a bathroom at the end of the hall.\n\n\
      Your stomache growls, alot louder than before and causes a slight burning feeling inside. You feel you may have been wrong and \
      perhaps it was not just hunger causing your stomache to be upset afterall. Your thoughts are disrupted as at that moment \
      you hear a noise.... a noise you have never heard before but heard only \
      rumors.. the sound......\n .....of a women being pleasured.\n\n\
      You want to investigate the noise but feel your stomache should not go unanswered.. what do you do?"
    )},
    options:{
      option1: "Answer nature\'s call",
      option2: "Investigate the sound"
    }
  },    

  sock:{
    get story() 
    { return (
      ""
    )},
    options:{
      option1: "",
      option2: ""
    }
  },    

  dash:{
    get story() 
    { return (
      ""
    )},
    options:{
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

