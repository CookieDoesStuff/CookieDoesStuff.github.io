let hasEnteredPasswordCorrectly = false;
let ips = "ip of ppl that u trolled epically: ";
var xhr = new XMLHttpRequest();

function passwordSubmit()
{
    var input = document.getElementsByName("password")[0].value;
    if (input.toLowerCase().includes("omg bro got the yee ass haircut"))
    {
        hasEnteredPasswordCorrectly = true;
    }
}

function refresh()
{
    if (hasEnteredPasswordCorrectly == true)
    {
        let json = xhr.open('GET', "https://CookieDoesStuff.github.io/cat/vid/", true);
        ips += json.ip + " ";
        document.getElementById("ip").innerHTML = ips;
    }
}
