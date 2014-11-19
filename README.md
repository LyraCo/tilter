#Tilter <a href='#/master/CHANGELOG.md' class='version' title='Whats New?'>v1.0</a>

###Add mobile accelerometer tilt-viewing to images on your website (like on Facebook)

Tilter is a jQuery plugin that let's you reveal image overflow using the tilt functionality on a mobile device.
It's designed to:
* - item 1
* - item 2

Check out [the demo page](#), browse [examples](#) or read [the documentation](#) to get started.

## Installation
Aside from [jQuery](http://jquery.com/) make sure you have loaded the [Greensock Animation Plattform (TweenMax)](http://www.greensock.com/gsap-js/). Tilter has been tested on [Jquery version 1.11](//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js) and [GSAP TweenLite version 1.14.2](//cdnjs.cloudflare.com/ajax/libs/gsap/1.14.2/TweenLite.min.js);  
To use ScrollMagic in your project simply include the plugin js file.
```html
<script type="text/javascript" src="js/jquery.tilter.js"></script>
```

For deployment use the minified version __instead__:
```html
<script type="text/javascript" src="js/jquery.tilter.min.js"></script>
```

##Usage
Tilter can be used on images inside of any container div with a set height and style overflow:hidden, assuming the image width is greater than the width of the container element (when full height).  The image will be given the height of the container, and center aligned initially.

###Note
* Any "margin-left" or "left" rule applied to the image in your CSS will be overridden.  If you have any "margin-left" or "left" rules with "!important" applied to the image the plugin won't work.




##Acknowledgements
* Thank you to [ScrollMagic](https://github.com/janpaepke/ScrollMagic/blob/master/README.md) for use of your lovely README Formatting, and to ...
