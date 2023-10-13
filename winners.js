
let data = async(url) =>{
    let responce = await fetch(url)
    let data = await responce.text()
    document.getElementById("div1").innerHTML = data
}

let button = document.getElementById("button")
button.onclick = ()=>{
    const input1 = document.getElementById("number1").value
    const input2 = document.getElementById("number2").value
    if (input1 > input2) {
        let url = (`https://www.random.org/integers/?num=${input2}&min=0&max=${input1}&col=2&base=10&format=plain&rnd=yes&quot`)
        data(url)
    } else {
        document.getElementById("div1").innerHTML = "Competitors must be more then winners"
    }
}