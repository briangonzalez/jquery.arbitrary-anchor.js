# jquery.arbitrary-anchor.js

This plugin allows the page to scroll to any arbitrary object on the page based on jQuery/CSS selector. 

Visit us [on the web](http://briangonzalez.org/arbitrary-anchor) or follow me on Twitter for updates: [@brianmgonzalez](http://twitter.com/brianmgonzalez).

### Usage

Usage is simple. Just drop it into your page's `head` after jQuery. Then it just works.

__Add to your page:__
```html
<script type="text/javascript" src="jquery.arbitrary-anchor.js"></script>
```

Then you can add any valid jQuery/CSS selector after the hash (`#`) in your page's URL, and it will automatically be scrolled to. 
If the selector returns more than 1 element, the first element found will be scrolled to. You can also place a pipe (`|`) with a value in milliseconds after the selector to change the 
time it takes to scroll to the given element, e.g. `#.mydiv|200` would scroll to the first element with a class of `mydiv` and it would scroll to it
in 200ms.

### Example URLs

 URL                                | Scrolls To                                                                              
------------------------------------|-----------------------------------------------------------------------------------------
 `http://example.com#raptor`        | element with ID of or anchor with name of `raptor`, if none, scroll to first `<raptor>` element (is that even a thing?)                                       
 `http://example.com#p`             | element with ID of or anchor with name of `p`, if none, scroll to first `<p>` element        
 `http://example.com##yo-man`       | first element with ID of `yo-man`                                                       
 `http://example.com#.brah`         | first element with class of `brah`                                                      
 `http://example.com#.sup.brah`     | first element with class of `sup` and `brah`                                            
 `http://example.com#.sup.brah｜100` | first element with class of `sup` and `brah`, scrolled to in 100ms (default is 750ms)                                             
 `http://example.com#footer`        | element with ID of or anchor with name of `footer`, or first `<footer>` element  
 `http://example.com#footer｜200`    | same as above, scrolled to in 200ms 
 

### Custom Easing Functions
You can easily change arbitrary anchor's easing function, which defaults to `linear`. Once you've added the [jquery easing plugin](http://gsgd.co.uk/sandbox/jquery/easing/) to your page, change the easing function by setting the global configuration variable:

```javascript
AA_CONFIG.easingFunction = 'easeOutBounce';
```

### Other options
Here are the options, with their defaults:

```javascript
AA_CONFIG = {
  animationLength:  750,
  easingFunction:   'linear',
  scrollOffset:     0
};
```

### License

MIT

### Author

| ![twitter/brianmgonzalez](http://gravatar.com/avatar/f6363fe1d9aadb1c3f07ba7867f0e854?s=70](http://twitter.com/brianmgonzalez "Follow @brianmgonzalez on Twitter") |
|---|
| [Brian Gonzalez](http://briangonzalez.org) |
