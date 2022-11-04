let hasEnteredPasswordCorrectly = false;

function passwordSubmit()
{
    var input = document.getElementsByName("password")[0].value;
    if (input.toLowerCase().includes("omg bro got the yee ass haircut"))
    {
        hasEnteredPasswordCorrectly = true;
    }
}
