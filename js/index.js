$( document ).ready(function() {
  //var time = new Date().getTime();

  function breaktime(t)
  {
    var newtime = Number(document.getElementById("break").innerText) + t;
    document.getElementById("break").innerText = newtime;
  };
  function worktime(t)
  {
    var newtime = Number(document.getElementById("work").innerText) + t;
    document.getElementById("work").innerText = newtime;
  };

  function pomodoro()
  {
    alert("yeeessss!");
  };
});
