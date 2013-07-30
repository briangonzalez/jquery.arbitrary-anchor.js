## jquery.arbitrary-anchor.js

This plugin allows the page to scroll to any arbitrary object on the page base on jQuery/CSS selector.

### Usage

Usage is simple. Just drop it into your page's `head` after jQuery is loaded. Then it just works.

```html
  <script type="text/javascript" src="../jquery.arbitrary-anchor.js"></script>
```

### Example URLs

 URL                           | Scrolls To                                                                              
-------------------------------|-----------------------------------------------------------------------------------------
 `http://example.com#raptor`   | element with ID of or anchor with name of raptor                                        
 `http://example.com#p`        | element with ID of or anchor with name of raptor, if none, scroll to first `<p>`        
 `http://example.com##yo-man`  | first element with ID of `yo-man`                                                       
 `http://example.com#.brah`    | first element with class of `brah`                                                      
 `http://example.com#.sup.brah`| first element with class of `sup` and `brah`                                            
 `http://example.com#footer`   | element with ID of or anchor with name of footer, or first `footer`                     
