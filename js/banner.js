 $(function(){
  // WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.flashAdImpressionTrack('banner-ad')");
  // WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideTimeSeconds(20)");

  $("#pi").on("click", function(){
    console.log("pi button clicked");
          window.open("http://enstilar.com/pdf/enstilar-pi.pdf");
     WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('https://www.regeneron.com/sites/default/files/Dupixent_FPI.pdf', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");

  });
     
      $("#ppi").on("click", function(){
    console.log("pi button clicked");
              window.open("http://enstilar.com/pdf/enstilar-pi.pdf");
     WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('https://www.regeneron.com/sites/default/files/Dupixent_FPI.pdf', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");

  });
            $("#BottomBar").on("click", function BorderAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
   .to(BottomBar1, 1, { width:1080,height:60,top:0,zIndex:8,opacity:1})
    .to(isi, 1, { width: 1080,height:1400,top:0,zIndex:7,marginTop:40}, '-=1')
      .to(BottomBar, 1, { opacity:0}, '-=1')
  });
     $("#BottomBar1").on("click", function Border1Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .to(BottomBar1 , 1, {top:1218})
 .to(isi, 1, { width: 1080,height:564,top:1210,zIndex:9}, '-=1')
  .to(BottomBar , 1, { width: 1080,height:40,top:1218,zIndex:10,opacity:1}, '-=1') 
  });

  var pressTimer;

  $("#overall_mask").on("touchend", function(){
    clearTimeout(pressTimer);
    return false;
  }).on("touchstart", function(){
    pressTimer = window.setTimeout(function(){
      WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideActivateLauncherPanel('100', '700')");
    },1000)
    return false;
  });

});

function startScrolling(waitTime){
  delayScrollingStart = waitTime;
  setTimeout(function autoScroll(delayScrollingStart){
    ascroll = setInterval(function(){
      elem = $("#isi")[0];
      if (elem.scrollTop != 3200){
        elem.scrollTop += 1;
      }
    }, 28);
  }, delayScrollingStart);
}

// Begin non-ISI animation code

function ArmFade(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .to(mainBanner, 35, {opacity:0})
}
function ArmFade1(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .to(Arm, 20, {opacity:1})
}
function ArmAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(Arm, 1, {opacity:0}, '-=0.5')
}
function headline2Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  
   .to(headline1, 1, {opacity:0}, '-=0.5')
    .from(headline2, 1, {opacity:0}, '-=0.5')
     .to(disclaimer, 1, {opacity:0}, '-=0.5')
}
function headline3Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .to(headline2, 1, {opacity:0}, '-=0.5')
    .from(headline3, 1, {opacity:0}, '-=0.5')
    .from(product, 1, {left:-1080, opacity:1}, '-=0.5')
      .to(disclaimer, 0, {css:{marginLeft:270,opacity:1}});
}

function headline4Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl 
      .to(headline3, 1, {opacity:0}, '-=0.5')
    .from(headline4, 1, {opacity:0}, '-=0.5')
}

function headline5Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
   .to(headline4, 1, {opacity:0}, '-=0.5')  
    .from(headline5, 1, {opacity:0}, '-=0.5')
    .to(disclaimer, 0, {css:{marginLeft:310,marginTop:-150,opacity:1}})
      .from(offer_footnote, 1, {opacity:0}, '-=1')
     .from(offer, 1, {opacity:0}, '-=0.5')
     .from(cta, 2, {opacity:0}, '+=0.5')
}
function headline6Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .to(headline5, 1, {opacity:0}, '-=0.5')
    .from(headline6, 1, {opacity:0}, '-=0.5')     
}
function ArmZoom(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
   
    .to(Arm, 2, {width:1080,height:1198,scale:1.03, right:-1060})
      .to(Arm, 2, {width:1080,height:1198,scale:1.05,right:-1040})
         .to(Arm,2,{width:1080,height:1198,scale:1,right:-1080})
}

function animate(){
   startScrolling(5000);
    ArmAppear(1);
    ArmFade(4);
        ArmFade1(2);
    headline2Appear(4);
    headline3Appear(8);
    headline4Appear(12);
    headline5Appear(16);
    headline6Appear(20);
    ArmZoom(13);
}
// End non-ISI animation code

$(document).on("touchstart", "#isi", function(){
 clearInterval(ascroll);
 WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideTimeSeconds(15)"); 
});

function onWallboardIdleSlideDisplay(){
  console.log("onWallboardIdleSlideDisplay");
}

function onWallboardIdleSlideTimerStart(){
  console.log("onWallboardIdleSlideTimerStart");
}

function onWallboardIdleSlideTimerStop(){
  clearInterval(ascroll);
}

animate();
