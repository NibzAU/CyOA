function updateGame(option){
  switch (player.location){

    case 'start':
      if (option == 'option1'){
        player.location = "nogame"
      }else if (option == 'option2'){
        player.location = "begin"
      }
    break;
    
    case "nogame":        
      if (option == 'option1'){
        player.location = "begin"
      }else if (option == 'option2'){
        player.location = "nostory";
      }
    break;
    
    case "begin":
            
      if (option == 'option1'){
        player.location = "firstSteps"
        if (!player.items.includes("Pills")){
          player.items.push("Pills");
        }
      }else if (option == 'option2'){
        player.location = "firstSteps";
      }
    break;
    
    case "firstSteps":        
      if (option == 'option1'){
        player.location = "bathroom"
      }else if (option == 'option2'){
        player.location = "hallway";
      }
    break;

    case "bathroom":        
      if (option == 'option1'){
        player.location = "sock"
      }else if (option == 'option2'){
        player.location = "dash";
      }
    break;

    case "nostory":        
      if (option == 'option1'){
        player.location = "start"
      }else if (option == 'option2'){
        player.location = "start";
      }
    break;
  }
}