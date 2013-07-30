## jquery.arbitrary-anchor.js

This plugin allows the page to scroll to any arbitrary object on the page based on jQuery/CSS selector. 

## On the web

Visit us at [http://briangonzalez.org/arbitrary-anchor](http://briangonzalez.org/arbitrary-anchor)

### Usage

Usage is simple. Just drop it into your page's `head` after jQuery is loaded. Then it just works.

__Add to your page:__
```html
  <script type="text/javascript" src="jquery.arbitrary-anchor.js"></script>
```
__Use:__

Then you can add any valid jQuery/CSS selector after the hash (`#`) in your page's URL, and it will automatically be scrolled to. 
If the selector returns more than 1 element, the first element found will be scrolled to.


### Example URLs

 URL                           | Scrolls To                                                                              
-------------------------------|-----------------------------------------------------------------------------------------
 `http://example.com#raptor`   | element with ID of or anchor with name of raptor                                        
 `http://example.com#p`        | element with ID of or anchor with name of raptor, if none, scroll to first `<p>`        
 `http://example.com##yo-man`  | first element with ID of `yo-man`                                                       
 `http://example.com#.brah`    | first element with class of `brah`                                                      
 `http://example.com#.sup.brah`| first element with class of `sup` and `brah`                                            
 `http://example.com#footer`   | element with ID of or anchor with name of footer, or first `footer`  
 
