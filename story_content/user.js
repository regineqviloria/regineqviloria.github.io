function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6EZufc6lLUJ":
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

