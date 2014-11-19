/**
 * @license lyradesigns.com v1
 * Updated: Nov 18, 2014
 * Add facebook style accellerometer tilt viewing to landscape images in portrait mode
 * Copyright (c) 2014 Jonas Goslow - Lyra Designs
 * Released under the MIT license
 * https://github.com/timmywil/jquery.panzoom/blob/master/MIT-License.txt
 */
(function( $ ){
 $.fn.imageTilt = function( options ) {
    
    // Extend our default options with those provided.
    // Note that the first argument to extend is an empty
    // object – this is to keep from overriding our "defaults" object.
    var opts = $.extend( {}, $.fn.imgTilt.defaults, options );

    var defaults = {
        rotationMultiplier: 3
      }

    if (!window.DeviceOrientationEvent) { return false; } // Check for Accelerometer Support
    $.getScript('ajax/test.js', function() {});

    return this.each(function() {

        var elem = $( this );

        window.ondevicemotion = function(event) {
          // Also available: event.accelerationIncludingGravity.x, (y) and (z)
          var a = Math.round(event.rotationRate.alpha*10)/10,
            b = Math.round(event.rotationRate.beta*10)/10,
            g = Math.round(event.rotationRate.gamma*10)/10;

          if ((Math.abs(b) > Math.abs(g) + Math.abs(a)) && (Math.abs(b) > 10)) {
            tiltImage('#modalImage', b);
          }
        }

    }


    function tiltImage(container, rotateBeta) {
            var box = $(container),
              boxW = box.width(),
              boxH = box.height(),
              img = box.find('img'),
              imgW = img.width(),
              imgH = img.height(),
              imgL = img.css('left'),
              w = $(window).width();

            var min = 0,
              max = (imgW - w)/2,
              invertedYRotate = rotateBeta * -1,
              rotationMultiplier = 3,
              zoomScale = (boxH/boxW) * (imgH/imgW),
              interpXOffset = parseInt(imgL) + (rotateBeta * rotationMultiplier);

            // Limit Offset
            var maxOffset = max,
              minOffset = -max,
              limitedOffset = Math.max(minOffset, Math.min(interpXOffset, maxOffset)),
              imgL = limitedOffset;
            TweenLite.to( img, .5, {left: limitedOffset});
        }


    return this;
 };

})( jQuery );
