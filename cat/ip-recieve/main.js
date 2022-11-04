let hasEnteredPasswordCorrectly = false;
let ips = "ip of ppl that u trolled epically: ";

function passwordSubmit()
{
    var input = document.getElementsByName("password")[0].value;
    if (input.toLowerCase().includes("omg bro got the yee ass haircut"))
    {
        hasEnteredPasswordCorrectly = true;
    }
}

socket.addEventListener('message', (event) => 
{
    if (hasEnteredPasswordCorrectly == true)
    {
        console.log("new ip", event.data);
        ips += event.data + " ";
        document.getElementById("ip").innerHTML = ips;
    }
});
