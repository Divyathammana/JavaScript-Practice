//DAY 3
//events

function changeText() {
    let display = document.getElementById("display");
    //display.innerHTML= display.innerHTML==="HELLO"? "Bye" : "HELLO"; //to change the html of the element with id "display" when the button is clicked

    if (display.innerHTML === "HELLO") {
        display.innerHTML = "Bye";
        display.style.color = "red"; //to change the color of the text of the element with id "display" to red when the button is clicked

    }
    else {
        display.innerHTML = "HELLO";
        display.style.color = "blue"; //to change the color of the text of the element with id "display" to red when the button is clicked

    }


    

    // display.style.color= display.style.color==="red"? "blue" : "red"; //to change the color of the text of the element with id "display" to red when the button is clicked
}; //to change the html of the element with id "display" when the button is clicked
//onclick is an event that is triggered when the button is clicked

let first=true;
function changeImage()
{
    let img=document.getElementById("myImage");
    if(first)
    {
        img.src="P2.jpg";
    }
    else
    {
        img.src="P1.jpg";
    }
    first=!first;

}

