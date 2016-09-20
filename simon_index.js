var arr1 = [];
var count = 0;
var pos;
var pback;
var c1 = 0;
var ck;
var a;
var strict = false;
var start = false;
var checking = false;
var greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

function button(butNum, sound) {
  if (sound == 1) {
    greenSound.play();
  } else {
    sound.play();
  }

}
var playback = function(arr) {
  //greenSound.play();
  if (arr == 1) {
    greenSound.play();
    $(".green").toggleClass("active-class");
    setTimeout(function() {
      $(".green").toggleClass("active-class");
    }, 400);
  } else if (arr == 2) {
    redSound.play();
    $(".red").toggleClass("active-class");
    setTimeout(function() {
      $(".red").toggleClass("active-class");
    }, 400);
  } else if (arr == 3) {
    yellowSound.play();
    $(".yellow").toggleClass("active-class");
    setTimeout(function() {
      $(".yellow").toggleClass("active-class");
    }, 400);
  } else if (arr == 4) {
    blueSound.play();
    $(".blue").toggleClass("active-class");
    setTimeout(function() {
      $(".blue").toggleClass("active-class");
    }, 400);
  }

};

function player() {
  $(".box1").attr("disabled", true);
  a = Math.floor(Math.random() * 4 + 1);
  arr1.push(a);
  var len = arr1.length;
  var c = 0;
  clearInterval(ck);
  /*for (var i = 0; i< len; i++){
    setTimeout(function(){playback();},1000);
  } */
  
  pback = setInterval(function() {
    playback(arr1[c]);

    c++;
    if (c === len) {
      clearInterval(pback);
      pos = 0;
      timer();
    }
  }, 1000);

  

}

function failed() {
  var len = arr1.length;
  var c = 0;
  clearInterval(ck);
  pback = setInterval(function() {
    $(".box1").attr("disabled", true);
    playback(arr1[c]);

    c++;
    if (c === len) {
      clearInterval(pback);
      pos = 0;
      timer();
    }
  }, 1000);
}

function timer() {
  
  ck = setInterval(function() {
    $(".box1").attr("disabled", false);
    checking = true;
    $(".test").text(pos);
    $(".test2").text(c1);
    // $(".test3").text(c2);
    //var len =arr1.length;
    if (c1 >= 100) {
      clearInterval(ck);
      $(".count").text("Fail");
      failed();
      pos = 0;
      c1 = 0;
    }
    /*else if(pos >= len){
                    clearInterval(ck);
                    $(".count").text("Perfect");
                    player();
                    pos = 0;
                    c1=0;
                    
                  }*/

    c1++;
  }, 100);
checking = false;
  $(".box1").attr("disabled", true);
}
function win(){
  $(".status").text("Winner");
  arr1 = [];
  clearInterval(ck);
  c1 = 0;
  pos = 0;
  
}
function check(posit, num) {
  //if(checking == false){return 0;}
   
  var check = arr1[posit];
  var len = arr1.length;
  if (len == (posit + 1)) {
    if (check == num) {
      if (count == 20){
    win();
  } else {
      c1 = 0;
      $(".status").text("Perfect");
      count++;
      $(".counter").text("Count : " + count);
      player();}
    } else if (check != num) {
      c1 = 0;
      pos = 0;
      if (strict == true){
        $(".status").text("Game Over");
        arr1 = [];
        $(".box1").attr("disabled", true);
      } else if (strict == false){
      $(".status").text("Incorrect");
      failed();}
    }

  } else {
    if (check == num) {
      $(".Status").text("Good");
      c1 = 0;
    } else if (check != num) {
      c1 = 0;
      if(strict == true){
        $(".Status").text("Game Over");
        arr1 = [];
        $(".box1").attr("disabled", true);
      } else if (strict == false){
      $(".status").text("Incorrect");
      failed();}
    }
  }
}

/*var c2;
  var pos = posit;
   ck = setInterval(function(){
    var len = arr1.length;
     $(".test").text(pos);
    $(".test2").text(c1);
    $(".test3").text(c2);
    c2 = arr1[pos];
    $(".test3").text(c2);
   
    if (c1 >= 100){clearInterval(ck);
              $(".count").text("Fail");
                  pos = 0;
                  c1=0;
              }else if(pos >= len){
                clearInterval(ck);
                $(".count").text("Perfect");
                player();
                pos = 0;
                c1=0;
                
              }
     
     
     
     
  c1++;
  },100); */

/*$(".box1").click(function(){
var clicked = this.id;
$(".count").text("0"+clicked);
   if(clicked == c2){
    $(".count").text("Good");
    
    
    pos++;
    clearInterval(ck);
    check(pos);
     
    c1 = 0;
  } else if (clicked != c2){
    $(".count").text("Wrong");
    
    c1 = 0;
    pos =0;
    //clearInterval(ck);
    //player();
  }
 });
   
  
*/
//  });

$(document).ready(function() {
  $(".start").click(function() {
    
    $(".counter").text("Count : " + count);
    
      arr1 = [];
      count = 1;
      clearInterval(ck);
      c1 = 0;
      player();
    
  });
  $(".strict").click(function() {
    if (strict == false){
      $(".test").text("strict on");
      $(".strict").toggleClass("strict1");
    strict = true;}
    else if (strict == true){
      $(".test").text("strict off");
      $(".strict").toggleClass("strict1");
      strict = false;
    }
  });
  $(".green").click(function() {
    button(1, greenSound);
    check(pos, 1);
    pos++;
  });
  $(".red").click(function() {
    button(2, redSound);
    check(pos, 2);
    pos++;
  });
  $(".yellow").click(function() {
    button(3, yellowSound);
    check(pos, 3);
    pos++;
  });
  $(".blue").click(function() {
    button(5, blueSound);
    check(pos, 4);
    pos++;
  });

});

