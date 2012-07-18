Drupal.behaviors.MarqueeBlock = function(context) {
  var blocks = $('marquee.marquee-block');
  if (blocks.length > 0) {
    blocks.marquee();
  }
};