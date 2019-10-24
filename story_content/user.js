function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KS4jlZg76Z":
        Script1();
        break;
      case "6bB2yWiSLiM":
        Script2();
        break;
      case "66zqa2zj8bU":
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

