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
        player.location = "nostory"
        player.items.push("Pills");
      }else if (option == 'option2'){
        player.location = "nostory";
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