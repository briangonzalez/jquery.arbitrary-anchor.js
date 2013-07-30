;(function(window, $){

  // Copyright Brian Gonzalez - 2013
  // jquery.arbitrary-anchor.js
  // Arbitrary anchors for any element on your page using a little jQuery magic.
  // briangonzalez.org
  // @brianmgonzalez

  "use strict";

  var $window, $document, $body;
  var animationLength = 750;

  // Document ready?
  // Well then do the magic.
  $(document).ready(function(){

    // Grab our elements.
    $window   = $(window);
    $document = $(this);
    $body     = $document.find('body');

    // Scroll to the anchor on initial page load.
    scrollToHash();
    $window.on('hashchange', function(){ scrollToHash(); })

  })

  function scrollToHash(){
    var hash    = window.location.hash.substring(1);

    // What are valid values for the id attribute.
    // http://stackoverflow.com/questions/70579/what-are-valid-values-for-the-id-attribute-in-html
    if ( hash.charAt(0).search(/[A-Za-z]/) > -1 )
      var $actualID         = $( "#" + hash);

    var $actualAnchor     = $('a[name="'+ hash +'"]');

    // Let the browser handle the default types of anchors.
    if ( ($actualAnchor && $actualAnchor.length > 0) || ($actualID && $actualID.length > 0) )
      return;

    // Store the arbitrary anchor element.
    var $arbitraryAnchor  = $(hash).first();
    if ( $arbitraryAnchor && $arbitraryAnchor.length > 0 ) {
      $el = $arbitraryAnchor;      
    } else {
      return;
    }

    // Scroll to $el
    if ( $el.length > 0 ) {
      var top = $el.offset().top;
      $body.animate({ scrollTop: top }, 750)
    }
  }

})(window, jQuery)