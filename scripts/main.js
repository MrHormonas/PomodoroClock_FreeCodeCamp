$( document ).ready(function() {
  var STOP = 0;
  var WORK = 1;
  var BREAK = 2;
  var PAUSE = 3;
  var stopMessage = "Come On, Click To Start Working... You Can do It!";
  var workMessage = "Put your hands to work... Work Hard!";
  var breakMessage = "Time to Relax... You deserve it";
  var pauseMessage = "Work Paused";

  var state = STOP;

  var clock = $('.clock').FlipClock({
  	  clockFace: 'MinuteCounter',
      countdown: true,
      stop: function(){
        if ( state == WORK && clock.getTime() == 0)
        {
          state = BREAK;
          this.setTime(document.getElementById("breakLength").innerHTML*60);
          this.start();
          $('#message').html(breakMessage);
        }
        else if ( state == BREAK && clock.getTime() == 0)
        {
          state = WORK;
          this.setTime(document.getElementById("workLength").innerHTML*60);
          this.start();
          $('#message').html(workMessage);
        }
      }
  	});

  clock.setTime(25*60);

  $( ".changeWork" ).click(function(){
    if (document.getElementById("workLength").innerHTML > 1)
    {
      var t = document.getElementById("workLength").innerHTML + this.innerHTML + "1";
      if ( state == STOP)
        clock.setTime(eval(t)*60);
      document.getElementById("workLength").innerHTML = eval(t);
    }
  });

  $( ".changeBreak" ).click(function(){
    if (document.getElementById("breakLength").innerHTML > 1)
    {
      var t = document.getElementById("breakLength").innerHTML + this.innerHTML + "1";
      document.getElementById("breakLength").innerHTML = eval(t);
    }
  });

  $( ".buttonplay" ).click(function(){
    if (state == STOP || state == PAUSE)
    {
      state = WORK;
      clock.start();
      $(".buttonplay").addClass("hidden");
      $(".buttonpause").removeClass("hidden");
      $('#message').html(workMessage);
    }
  });

  $( ".buttonpause" ).click(function(){
    if (state == WORK)
    {
      state = PAUSE;
      $(".buttonplay").removeClass("hidden");
      $(".buttonpause").addClass("hidden");
      $('#message').html(pauseMessage);
      clock.stop();
    }
  });

    $( ".buttonreset" ).click(function(){
      if ( state !== STOP )
      {
        state = STOP;
        clock.reset();
        clock.setTime(document.getElementById("workLength").innerHTML*60);
        $(".buttonplay").removeClass("hidden");
        $(".buttonpause").addClass("hidden");
        $('#message').html(stopMessage);
      }
    });
});
