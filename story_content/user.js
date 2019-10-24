function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6cevLViDOwJ":
        Script1();
        break;
      case "69fFSBqTb7M":
        Script2();
        break;
      case "6hDBt5a94tw":
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

