function addUser () {
   player1_name= document.getElementById ("Player1_name").value;
   player2_name= document.getElementById ("Player2_name").value;

   localStorage.setItem ("Jugador_1", player1_name);
   localStorage.setItem ("Jugador_2", player2_name);
   
   window.location= "game.html";
}