/**
 * @license lyradesigns.com v1
 * Updated: Nov 18, 2014
 * Add facebook style accellerometer tilt viewing to landscape images in portrait mode
 * Copyright (c) 2014 Jonas Goslow - Lyra Designs
 * Released under the MIT license
 * https://github.com/timmywil/jquery.panzoom/blob/master/MIT-License.txt
 */
(function( $ ){
 $.fn.tilter = function( options ) {


    // Extend our default options with those provided.
    // Note that the first argument to extend is an empty
    // object – this is to keep from overriding our "defaults" object.
    var opts = $.extend( {}, $.fn.tilter.defaults, options );


    if (!window.DeviceOrientationEvent) { return false; } // Check for Accelerometer Support

    return this.each(function() {

        var elem = $( this ),
			box = elem.parent(),
            boxW = box.width(),
            boxH = box.height(),
            img = elem,
            imgW = img.width(),
            imgH = img.height(),
            imgL = img.offsetLeft,
			imgML = -(imgW-boxW)/2,
            w = $(window).width();

		TweenMax.set( $('#container img'), { height: boxH, left: 0, marginLeft: imgML });

		console.log(box, boxW, boxH);
		console.log(img, imgW, imgH, imgL, imgML, w);
		//$('body').append('<div id="message" style="position:fixed;top:0;right:0;background:rgba(255,255,255,.8); width: 50px;text-align: right;"><div>max: <span class="max"></span></div><div>rotate: <span class="rotate"></span></div><div>left: <span class="left"></span></div></div>"');

        window.ondevicemotion = function(event) {
          // Also available: event.accelerationIncludingGravity.x, (y) and (z)
          var a = Math.round(event.rotationRate.alpha*10)/10,
            b = Math.round(event.rotationRate.beta*10)/10,
            g = Math.round(event.rotationRate.gamma*10)/10;

		  var img = elem,
		      imgW = elem.width(),
		      imgH = elem.height(),
			  imgL = img.css('left'),
		      box = elem.parent(),
		      boxH = box.height(),
		      boxW = box.width();

          if ((Math.abs(b) > Math.abs(g) + Math.abs(a)) && (Math.abs(b) > 10)) {

            var min = 0,
              max = (imgW - w)/2,
              invertedYRotate = b * -1,
              sensitivity = 3,
              zoomScale = (boxH/boxW) * (imgH/imgW),
              interpXOffset = parseInt(imgL) + (b * sensitivity);

            // Limit Offset
            var maxOffset = max,
              minOffset = -max,
              limitedOffset = Math.max(minOffset, Math.min(interpXOffset, maxOffset));

			/*$('#messages .max').html(max);
			$('#messages .rotate').html(b);
			$('#messages .left').html(limitedOffset);*/
            TweenMax.to( img, .5, {left: limitedOffset});
          }
        }

    });
  }
  // Plugin defaults – added as a property on our plugin function.
  $.fn.tilter.defaults = {
    sensitivity: 3,

  };
})( jQuery );
