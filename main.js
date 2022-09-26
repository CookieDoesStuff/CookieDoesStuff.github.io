function commandSubmit()
{
    var input = document.getElementsByName('commandInputBox')[0].value;
    if (input.toLowerCase() == "whoami")
    {
        document.getElementById("cmdText").innerHTML = "I am an 8th grade student, my hobbies are programming and listening to music. " +
        "My favourite languages are: C++, C, C#, JavaScript. " +
        "I will document my programming adventures here in this website. " +
        "Also my favourite font is consolas(god i love this font so much, maybe too much even). ";
    }
    if (input.toLowerCase().includes("goto"))
    {
        var url = "https://cookiedoesstuff.github.io/cookies/";
        var arg1 = input.split(" ");
        url = arg1[1]
        document.getElementById("cmdText").innerHTML = "opening: " + url;
        window.open(url);
    }
    if (input.toLowerCase().includes("echo"))
    {
        var text = "";
        var arg1 = input.split(" ");
        text = arg1[1]
        if (text == null)
        {
            document.getElementById("cmdText").innerHTML = "Never gonna give you up " +
            "Never gonna let you down " +
            "Never gonna run around and desert you " +
            "Never gonna make you cry " +
            "Never gonna say goodbye " +
            "Never gonna tell a lie and hurt you";
        }
        else
        {
            document.getElementById("cmdText").innerHTML = text;
        }
    }
    if (input.toLowerCase() == "help")
    {
        document.getElementById("cmdText").innerHTML = "COMMANDS: whoami, goto *sites URL*, echo";
    }
}