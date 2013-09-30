;(function(window, $){

  // Copyright Brian Gonzalez - 2013
  // jquery.arbitrary-anchor.js
  // Arbitrary anchors for any element on your page using a little jQuery magic.
  // briangonzalez.org/arbitrary-anchor
  // @brianmgonzalez

  "use strict";

  var $window, $document, $body, $html, $bodhtml;

  // Initialize the defaults
  window.AA_CONFIG = window.AA_CONFIG || {};
  window.AA_CONFIG = $.extend({
    animationLength:  750,
    easingFunction:   'linear'
  }, window.AA_CONFIG );

  // Document ready?
  // Well then do the magic.
  $(document).ready(function(){

    // Grab our elements.
    $window   = $(window);
    $document = $(this);
    $body     = $(document.body);
    $html     = $(document.documentElement);
    $bodhtml  = $body.add( $html );  

    // Scroll to the anchor on initial page load.
    scrollToHash();

    // Select all anchors that have an href 
    // that contains `#`.
    $document.find('a[href^="#"], a[href^="."]').on('click', function(){
      var href = $(this).attr('href');

      if( href.charAt(0) === '.' ){
        href = href.split('#');
        href.shift();
        href = '#' + href.join('#');
      }

      // only scroll to element if href is equal 
      // to hash; we'll let hashchange event 
      // handle everything else
      if ( href === location.hash )
        scrollToHash( href )
    })

    // Scroll to the object when hashchange event
    // is triggered on the window.
    $window.on('hashchange', function(){
      scrollToHash();
    })

    // Cancel scroll if user interacts with page.
    $window.on('mousewheel DOMMouseScroll touchstart mousedown MSPointerDown', function(ev){
      // the true clears the queue
      // the false disables jump-to-end 
      $bodhtml.stop(true, false);  
    });

  })

  function scrollToHash(rawHash){
    var rawHash       = rawHash || location.hash;
    var anchorTuple   = rawHash.substring(1)
                               .split("|");

    var hash          = anchorTuple[0];
    var animationTime = anchorTuple[1] || window.AA_CONFIG.animationLength;

    // What are valid values for the id attribute?
    // http://stackoverflow.com/questions/70579/what-are-valid-values-for-the-id-attribute-in-html
    if ( hash.charAt(0).search(/[A-Za-z]/) > -1 )
      var $actualID         = $document.find( "#" + hash );

    var $actualAnchor     = $document.find('a[name="'+ hash +'"]');

    // Let the browser handle the default types of anchors.
    // http://stackoverflow.com/questions/484719/html-anchors-with-name-or-id
    if ( ( $actualAnchor && $actualAnchor.length ) || ( $actualID && $actualID.length ) )
      return;

    // Store the arbitrary anchor element.
    var $arbitraryAnchor  = $(hash).first();
    if ( $arbitraryAnchor && $arbitraryAnchor.length ) {
      var $el = $arbitraryAnchor;      
    } else {
      return;
    }

    // Scroll to $el.
    if ( $el && $el.length ) {
      var top = $el.offset().top;

      $bodhtml.stop(true, false)
              .animate({ scrollTop: top },  parseInt(animationTime), window.AA_CONFIG.easingFunction );

    }
  }

})(window, jQuery)