
Player1_name = localStorage.getItem("Jugador_1");
Player2_name = localStorage.getItem("Jugador_2");

Player1_score = 0;
Player2_score = 0;

document.getElementById ("player1_name").innerHTML = Player1_name + ": ";
document.getElementById ("player2_name").innerHTML = Player2_name + ": ";

document.getElementById ("player1_score").innerHTML = Player1_score;
document.getElementById ("player2_score").innerHTML = Player2_score;

document.getElementById ("player_question").innerHTML = "turno de preguntar: " + Player1_name;
document.getElementById ("player_answer").innerHTML = "turno para responder: " + Player2_name;

function Enviar () {
    get_Word = document.getElementById("word").value;
    word = get_Word.toLowerCase();
    console.log("Palabra en minuscula: " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 =word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace (charAt2, "_");
    remove_charAt3 = remove_charAt2.replace (charAt3, "_");
    console.log (remove_charAt3);
    console.log (remove_charAt2);
    console.log (remove_charAt1);

    question_word = "<h4> palabra: " + remove_charAt3 + "</h4>";
    input_box = "<br> respuesta: <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'>Comprobar</button>"
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}

question_turn = "Player1";
answer_turn = "Player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log ("respuesta en minusculas: " + answer)

    if (answer == word) {
        if (answer_turn == "Player1") {
            player1_score = Player1 + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        
        if(question_turn == "Player1")
        { question_turn = "Player2"
        document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player2_name ; } 
        else { question_turn = "Player1" 
        document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name ; } 
        if(answer_turn == "Player1") { answer_turn = "Player2" 
        document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2_name ; } 
        else { answer_turn = "Player1" 
        document.getElementById("player_answer").innerHTML = "Turno para responder - " + player1_name ; } 
        document.getElementById("output").innerHTML = "";
    } 

    
};