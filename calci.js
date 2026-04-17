const Add=() => {
    event.preventDefault()

    let val1=Number(document.getElementById("value1").value)
    let val2=Number(document.getElementById("value2").value)
    let display=document.getElementById("display")
    let res=val1+val2
    display.innerHTML=`The sum of ${val1} and ${val2} is ${res}`

    }


const Sub=() => {
    event.preventDefault()

    let val1=Number(document.getElementById("value1").value)
    let val2=Number(document.getElementById("value2").value)
    let display=document.getElementById("display")
    let res=val1-val2
    display.innerHTML=`The sum of ${val1} and ${val2} is ${res}`

    }

const Mul=() => {
    event.preventDefault()

    let val1=Number(document.getElementById("value1").value)
    let val2=Number(document.getElementById("value2").value)
    let display=document.getElementById("display")
    let res=val1*val2
    display.innerHTML=`The sum of ${val1} and ${val2} is ${res}`
   

    }

const Div=() => {
    event.preventDefault()

    let val1=Number(document.getElementById("value1").value)
    let val2=Number(document.getElementById("value2").value)
    let display=document.getElementById("display")
    let res=val1/val2
    display.innerHTML=`The sum of ${val1} and ${val2} is ${res}`


    }