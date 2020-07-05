function clockinit(){

  var date = new Date;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    // Create an object with each hand and it's angle in degrees
    var hands = [
      {
        hand: 'hour',
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minute',
        angle: (minutes * 6)
      },
      {
        hand: 'second',
        angle: (seconds * 6)
      }
    ];
    // Loop through each of these hands to set their angle
    for (var j = 0; j < hands.length; j++) {
      var elements = document.querySelectorAll('.' + hands[j].hand);
      for (var k = 0; k < elements.length; k++) {
          elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
          elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
          // If this is a minute hand, note the seconds position (to calculate minute position later)
          if (hands[j].hand === 'minute') {
            elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
          }
      }
    }
  }
