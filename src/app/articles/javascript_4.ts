export const innerHtml = `
<div class="markdown-body">
<h2 class="article-title">The Iterator Pattern</h2>

<p>
The Iterator is a design pattern where iterators (objects that allow us to traverse
     through all the elements of a collection) access the elements of
 an aggregate object sequentially without needing to expose its underlying form..
</p>
<p>Iterators encapsulate the internal structure of how that particular iteration occurs.
 In the case of jQuery's <code class="code">jQuery.fn.each()</code> iterator, we are actually able to use the underlying
  code behind <code class="code">jQuery.each()</code> to iterate through a collection,
 without needing to see or understand the code working behind the scenes providing this capability.</p>

<p>
This is a pattern that could be considered a special case of the facade, where we explicitly deal with problems related to iteration.</p>
<pre><code mwlHighlightJs [source]="source[0]" language="javascript"></code></pre>
<p>Here we can see the code for <code class="code">jQuery.fn.each()</code>:</p>
<pre><code mwlHighlightJs [source]="source[1]" language="javascript"></code></pre>
<p>Followed by the code behind <code class="code">jQuery.each()</code> which handles two ways of iterating through objects:</p>
<pre><code mwlHighlightJs [source]="source[2]" language="javascript"></code></pre>
`;

export const source: Array<string> = [`
$.each( ["john","dave","rick","julian"], function( index, value ) {
    console.log( index + ": " + value);
  });

$( "li" ).each( function ( index ) {
    console.log( index + ": " + $( this ).text());
});
  `.trim(),
   `
// Execute a callback for every element in the matched set.
each: function( callback, args ) {
    return jQuery.each( this, callback, args );
}`.trim(),
   `
   each: function( object, callback, args ) {
    var name, i = 0,
    length = object.length,
    isObj = length === undefined || jQuery.isFunction( object );

    if ( args ) {
      if ( isObj ) {
        for ( name in object ) {
          if ( callback.apply( object[ name ], args ) === false ) {
            break;
          }
        }
      } else {
        for ( ; i < length; ) {
          if ( callback.apply( object[ i++ ], args ) === false ) {
            break;
          }
        }
      }

    // A special, fast, case for the most common use of each
    } else {
      if ( isObj ) {
        for ( name in object ) {
          if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
            break;
          }
        }
      } else {
        for ( ; i < length; ) {
          if ( callback.call( object[ i ], i, object[ i++ ] ) === false ) {
            break;
          }
        }
      }
    }

    return object;
  };
`.trim()];
