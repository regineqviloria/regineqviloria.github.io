function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6lAis8pihIs":
        Script1();
        break;
      case "5paC3yGe9Pu":
        Script2();
        break;
      case "6Q8Z2Vj3aBs":
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

