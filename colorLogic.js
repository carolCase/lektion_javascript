
function changeColor() {
    document.getElementById("my-Color-Id").style.color="red"
    
}
function variables(){

    var name = ""
    var age=0
    var cm=0

     name= "Carolina "
     age= 41
     cm= 158.00
    alert(name+age+cm);
    console.log(name+age+cm);
}
function arrays() {
    var score = [100, 150 ,250 ,1000]
    alert(score)
    
}
function userLogin() 
{
    var result = prompt()
    alert("Well hello" + result+ "how you doing")
}
function loopExercise() 
{
    var index= 10
    for (var index = 0; index <10; index++) { alert(index) }
}
function calculateScore() {
    var playerScore = [150, 275, 600, 123, 834]
    var sum= 0
    for (let index = 0; index < playerScore.length; index++) {
       sum += playerScore [index]
       alert(sum)
        
    }
}
function ifSats() {
    var greeting="Good day!"
    var time=0
    var time=prompt("what time is it?");
    
    if (time <= 12.00) {
    alert(greeting)
         }
      else {
       alert( greeting="good evening")
      }
    
}    



