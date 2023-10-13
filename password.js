let data = async (url) => {
    try {
        let response = await fetch(url);
        let data = await response.text();
        document.getElementById("div").innerHTML = data;
    } catch (error) {
        crossOriginIsolated.log("restart page")
    }

}
const checkbox1 = document.getElementById("checkbox1")
const checkbox2 = document.getElementById("checkbox2")
const checkbox3 = document.getElementById("checkbox3")
const checkbox4 = document.getElementById("checkbox4")
const button = document.getElementById("start");
button.onclick = () => {
    var inputLength = document.getElementById("numbers").value;
    var url = `https://www.random.org/strings/?num=1&len=${inputLength}&digits=off&upperalpha=off&loweralpha=off&unique=off&format=plain&rnd=new`;
    var lower = document.getElementById("checkbox1").value
    if (checkbox1.checked) {
        lower = "on"
        url = `https://www.random.org/strings/?num=1&len=${inputLength}&digits=off&upperalpha=off&loweralpha=${lower}&unique=off&format=plain&rnd=new`
    }
    else{
        lower = "off"
    }
    var upper = document.getElementById("checkbox2").value
    if (checkbox2.checked){
        upper = "on"
        url = `https://www.random.org/strings/?num=1&len=${inputLength}&digits=off&upperalpha=${upper}&loweralpha=${lower}&unique=off&format=plain&rnd=new`
    }
    else{
        upper = "off"
    }
    var numbers = document.getElementById("checkbox3").value
    if(checkbox3.checked){
        numbers = "on"
        url = `https://www.random.org/strings/?num=1&len=${inputLength}&digits=${numbers}&upperalpha=${upper}&loweralpha=${lower}&unique=off&format=plain&rnd=new`
    }
    else{
        numbers = "off"
    }
    data(url);
}