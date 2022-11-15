player1_name=localStorage.getItem("player_1name");
player2_name=localStorage.getItem("player_2name");
player1_score=0;
player2_score=0;
answer_turn="player2";
question_turn="player1";
document.getElementById("player_1name").innerHTML=player1_name;
document.getElementById("player_2name").innerHTML=player2_name;
document.getElementById("player_1score").innerHTML=player1_score;
document.getElementById("player_2score").innerHTML=player2_score;
document.getElementById("playerquestion").innerHTML="Question Turn "+player1_name;
document.getElementById("playeranswer").innerHTML="Answer Turn "+player2_name;
function send(){
getword=document.getElementById("word").value.toLowerCase();
console.log(getword);
word1=getword.charAt(1);
word2=getword.charAt(getword.length/2);
word3=getword.charAt(getword.length-1);
console.log(word1);
console.log(word2);
console.log(word3);
word4=getword.replace(word1,"_");
word5=word4.replace(word2,"_");
word6=word5.replace(word3,"_");
console.log(word6);
question_word = "<h4 id='word_display'> Q."+word6+"</h4>";
input_box ="<br> Answer : <input type='text' id='input_check_box'>";
check_button ="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
}
function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    if(answer==getword){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player_1score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player_2score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("playerquestion").innerHTML="question turn "+player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("playerquestion").innerHTML="question turn "+player1_name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("playeranswer").innerHTML="answer turn "+player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("playeranswer").innerHTML="answer turn "+player1_name;
    }
}

