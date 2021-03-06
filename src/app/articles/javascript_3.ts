export const innerHtml = `
<div class="markdown-body">
<h2 class="article-title">The Command Pattern</h2>

<p>
The Command pattern aims to encapsulate method invocation,
 requests or operations into a single object and gives us the ability to both parameterize and
  pass method calls around that can be executed at our discretion.
  In addition, it enables us to decouple objects invoking the action from the objects which implement them,
   giving us a greater degree of overall flexibility in swapping out concrete classes (objects).
</p>
<p>Concrete classes are best explained in terms of class-based programming languages and are related
 to the idea of abstract classes. An abstract class defines an interface, but doesn't necessarily
  provide implementations for all of its member functions. It acts as a base class from which others are derived.
 A derived class which implements the missing functionality is called a concrete class</p>


<p>
The general idea behind the Command pattern is that it provides us a means to separate the responsibilities of issuing
 commands from anything executing commands,
 delegating this responsibility to different objects instead.</p>

<p>
Implementation wise, simple command objects bind together both an action and the object wishing to invoke the action.
 They consistently include an execution operation (such as run() or execute()).
 All Command objects with the same interface can easily be swapped as needed and this is considered one of the larger
  benefits of the pattern.
</p>

<p>
To demonstrate the Command pattern we're going to create a simple car purchasing service.
</p>
<pre><code mwlHighlightJs [source]="source[0]" language="javascript"></code></pre>

<p>
Taking a look at the above code, it would be trivial to invoke our carManager methods by directly accessing the object. We would all be forgiven for thinking there is nothing wrong with this - technically, it's completely valid JavaScript. There are however scenarios where this may be disadvantageous.
</p>

<p>
For example, imagine if the core API behind the carManager changed. This would require all objects directly accessing these methods within our application to also be modified. This could be viewed as a layer of coupling which effectively goes against the OOP methodology of loosely coupling objects as much as possible. Instead, we could solve this problem by abstracting the API away further.
</p>
<p>
Let's now expand on our carManager so that our application of the Command pattern results in the following: accept any named methods that can be performed on the carManager object, passing along any data that might be used such as the Car model and ID.
</p>

<p>
Here is what we would like to be able to achieve:
</p>
<pre><code mwlHighlightJs [source]="source[1]" language="javascript"></code></pre>

<p>As per this structure we should now add a definition for the carManager.execute method as follows:</p>
<pre><code mwlHighlightJs [source]="source[2]" language="javascript"></code></pre>

<p>Our final sample calls would thus look as follows:</p>
<pre><code mwlHighlightJs [source]="source[3]" language="javascript"></code></pre>

`;

export const source: Array<string> = [`
(function(){

    var carManager = {

      // request information
      requestInfo: function( model, id ){
        return "The information for " + model + " with ID " + id + " is foobar";
      },

      // purchase the car
      buyVehicle: function( model, id ){
        return "You have successfully purchased Item " + id + ", a " + model;
      },

      // arrange a viewing
      arrangeViewing: function( model, id ){
        return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
      }

    };

  })();
  `.trim(),
   `carManager.execute( "buyVehicle", "Ford Escort", "453543" );`.trim(),
   `
carManager.execute = function ( name ) {
    return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1) );
};
`.trim(), `
carManager.execute( "arrangeViewing", "Ferrari", "14523" );
carManager.execute( "requestInfo", "Ford Mondeo", "54323" );
carManager.execute( "requestInfo", "Ford Escort", "34232" );
carManager.execute( "buyVehicle", "Ford Escort", "34232" );
`.trim()];
