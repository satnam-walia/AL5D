
	
          $(function () {
			  $("input").change(function(){
			  startAd();
				});
			});
 

startAd = function ()
{
  var wholearm, elbowsection, wristsection, pincerright, pincerleft, germanybox, germanyboxmoveoff, germanyboxrise,number;

  var cog, robotanimation;
  var germanymoveoffanifunc;
	
  var elbow=$("#elbow").val();
  var shoulder=$("#shoulder").val();
  var wrist=$("#wrist").val();
  var gripper=$("#gripper").val();
  
  wholearm = document.getElementById("wholearm");
  elbowsection = document.getElementById("elbowsection");
  wristsection = document.getElementById("wristsection");
  pincerright = document.getElementById("pincerright");
  pincerleft = document.getElementById("pincerleft");
  germanybox = document.getElementById("germanybox");
  germanyboxmoveoff = document.getElementById("germanyboxmoveoff");
  germanyboxrise = document.getElementById("germanyboxrise");

  cog = document.getElementById("cog");

  TweenMax.set(wholearm, { transformOrigin: "49px 157px" });
  TweenMax.set(elbowsection, { transformOrigin: "40px 40px" });
  TweenMax.set(wristsection, { transformOrigin: "54px 19px" });
  TweenMax.set(pincerright, { transformOrigin: "19px 19px" });
  TweenMax.set(pincerleft, { transformOrigin: "54px 19px" });
  TweenMax.set([germanybox], { rotation: 0 });


  TweenMax.set(germanyboxmoveoff, { display: "none" });
  TweenMax.set(cog, { transformOrigin: "18px 18px" });
  TweenMax.set(cog, { transformOrigin: "18px 18px" });


  var robotanimation = new TimelineMax({ repeat: 0 });
  

  
  

  //pickup germany
  robotanimation.to(germanybox, 0.2, { display: "block" }).
  to(wholearm, 1.5, { rotation: -shoulder, ease: Back.easeOut.config(1) }).
  to(elbowsection, 1.5, { rotation: -elbow, ease: Back.easeOut.config(1) }, "-=1.5").
  to(wristsection, 1.5, { rotation: wrist, ease: Back.easeOut.config(1) }, "-=1.5").
  to(pincerright, 0.2, { rotation: (-gripper/3.75), ease: Back.easeOut.config(1) }).
  to(pincerleft, 0.2, { rotation: (gripper/3.75), ease: Back.easeOut.config(1) }, "-=0.2").

  //cog animation	
  TweenMax.to(cog, 1.5, { rotation: 360, repeat: -1, ease: Linear.easeNone });


  //moveoff functions	
  function germanymoveoffanifunc() {
    germanymoveoffani.play();
  }


  //moveoff animations	
  var germanymoveoffani = new TimelineMax({ paused: true, onComplete: function () {this.pause(0);} });
  germanymoveoffani.from(germanyboxmoveoff, 0.1, { display: "none" }).
  to(germanyboxmoveoff, 20, { x: "+=340px", ease: Power0.easeNone, onComplete: resetgermany }).
  from( 1, { y: "+=65px", ease: Power0.easeNone }, "-=18");

};
