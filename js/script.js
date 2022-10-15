$(function() {

  var vw = $(window).width(),
      vh = $(window).height();


  // init controller
  var controller = new ScrollMagic.Controller();



  // Scrollytelling
  $(".scrollytelling").each(function(is, ns) {
    var scenes = $(ns).find(".scene");
    for(var i=0; i<scenes.length; i++) {
      var showScene = new ScrollMagic.Scene({
          triggerElement: ns,
          duration: vh * 0.2,
          offset: vh * $(scenes[i]).data("offset")
        })
        .setTween($(scenes[i]), {opacity: 1})
        .addTo(controller);
    }
  });

})
