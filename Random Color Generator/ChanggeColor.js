const changeColor =() => {
    let display= document.getElementById("display");
    let color = "#" 
    let codes= [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

    for(let i=0;i<6;i++)
    {
        let random=Math.floor(Math.random()*16)
        color += codes[random]

    }
    display.style.backgroundColor = color

}
changeColor()