var result = document.getElementById("result");
var saveBtn = document.getElementById("save");
var resetBtn = document.getElementById("reset");
var incrementBtn = document.getElementById("increment");
var showResult = document.getElementById("showResults");
var printTotal = document.getElementById("total")
var count = 0
var total = 0;
//increment 
incrementBtn.onclick = function(){
    count++
    result.innerText= count
}
//save num
var mainUl;
saveBtn.onclick = function(){
    if(count==0){ //empty
        alert("enter a value")
    } else{
        if(!showResult.innerText){
            mainUl =document.createElement("ul");
        }
        var myLi = document.createElement("li");
        myLi.innerText =count
        mainUl.appendChild(myLi)
        showResult.appendChild(mainUl)
        total +=count;
        printTotal.innerText = `total is:${total}`;
        //reeset for new number
        result.innerText = 0;
        count =0;  
    }
}
// 
resetBtn.onclick = function(){
    printTotal.innerText = " 0 ";
    showResult.innerText = ""

}
