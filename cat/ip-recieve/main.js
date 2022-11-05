let hasEnteredPasswordCorrectly = false;
let ips = "ip of ppl that u trolled epically: ";
var xhr = new XMLHttpRequest();
xhr.open("GET", 'https://cookiedoesstuff.github.io/cat/vid');

function passwordSubmit()
{
    var input = document.getElementsByName("password")[0].value;
    if (input.toLowerCase().includes("omg bro got the yee ass haircut"))
    {
        hasEnteredPasswordCorrectly = true;
        document.getElementById("ip").innerHTML = "correct password";
    }
    else
    {
        document.getElementById("ip").innerHTML = "wrong password";
    }
}

xhr.onreadystatechange = (e) => 
{
    if (hasEnteredPasswordCorrectly == true)
    {
        ips += xhr.responseText + " ";
        document.getElementById("ip").innerHTML = ips;
    }
  }
