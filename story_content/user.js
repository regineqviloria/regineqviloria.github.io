function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5wq205ikH7C":
        Script1();
        break;
      case "69wxY4NUdJB":
        Script2();
        break;
      case "6Gh36MVZXdD":
        Script3();
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

function Script2()
{
  var player = GetPlayer();
var Answer= player.GetVar("problemsforworkers");
var numChars= Answer.length;
player.SetVar("answerlength1",numChars);
}

function Script3()
{
  var player = GetPlayer();
var Answer= player.GetVar("problemsforelectro");
var numChars= Answer.length;
player.SetVar("answerlength1",numChars);
}

