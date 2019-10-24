function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5WwO2mX0Ljb":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var Answer= player.GetVar("problemsforcust");
var numChars= Answer.length;
player.SetVar("answerlength1",numChars);
}

