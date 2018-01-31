export const innerHtml = `
<div class="markdown-body">
  <h1>The Reactive Extensions for JavaScript (RxJS) 4.0...<small>latest update on 2018-01-24</small></h1>
  <p>
    <i>...is a set of libraries to compose asynchronous and event-based programs using observable collections and Array#extras style composition in JavaScript</i>
  </p>
  <p>
    The project is actively developed by Microsoft, in collaboration with a community of open source developers.
  </p>
  <h2>
    The Need to go Reactive
  </h2>
  <p>
    Applications, especially on the web have changed over the years from being a simple static page, to DHTML with animations, to the Ajax revolution. Each time, we're adding more complexity, more data, and asynchronous behavior to our applications. How do we manage it all? How do we scale it? By moving towards "Reactive Architectures" which are event-driven, resilient and responsive. With the Reactive Extensions, you have all the tools you need to help build these systems.
  </p>
  <h2>
    About the Reactive Extensions
  </h2>
  <p>
    The Reactive Extensions for JavaScript (RxJS) is a set of libraries for composing asynchronous and event-based programs using observable sequences and fluent query operators that many of you already know by
    <a href="">Array#extras</a> in JavaScript. Using RxJS, developers represent asynchronous data streams with Observables, query asynchronous data streams using our many operators, and parameterize the concurrency in the asynchronous data streams using Schedulers. Simply put, RxJS = Observables + Operators + Schedulers.
  </p>
  <p>
    Whether you are authoring a web-based application in JavaScript or a server-side application in Node.js, you have to deal with asynchronous and event-based programming. Although some patterns are emerging such as the Promise pattern, handling exceptions, cancellation, and synchronization is difficult and error-prone.
  </p>
  <p>
    Using RxJS, you can represent multiple asynchronous data streams (that come from diverse sources, e.g., stock quote, tweets, computer events, web service requests, etc.), and subscribe to the event stream using the Observer object. The Observable notifies the subscribed Observer instance whenever an event occurs.
  </p>
  <p>
    Because observable sequences are data streams, you can query them using standard query operators implemented by the Observable type. Thus you can filter, project, aggregate, compose and perform time-based operations on multiple events easily by using these operators. In addition, there are a number of other reactive stream specific operators that allow powerful queries to be written. Cancellation, exceptions, and synchronization are also handled gracefully by using the methods on the Observable object.
  </p>
  <p>
    But the best news of all is that you already know how to program like this. Take for example the following JavaScript code, where we get some stock data and then manipulate and iterate the results.
  </p>
  <pre><code mwlHighlightJs [source]="source[0]" language="javascript"></code></pre>
  <p>
    Now what if this data were to come as some sort of event, for example a stream, such as a WebSocket? Then we could pretty much write the same query to iterate our data, with very little change.
  </p>
  <pre><code mwlHighlightJs [source]="source[1]" language="javascript"></code></pre>
  <p>
    The only difference is that we can handle the errors inline with our subscription. And when we're no longer interested in receiving the data as it comes streaming in, we call <code class="code">dispose</code> on our subscription. Note the use of subscribe instead of forEach. We could also use forEach which is an alias for subscribe but we highly suggest you use subscribe.
  </p>
</div>
`;

export const source: Array<string> = [`
  /* Get stock data somehow */
const source = getAsyncStockData();

const subscription = source
  .filter(quote => quote.price > 30)
  .map(quote => quote.price)
  .forEach(price => console.log(\`Prices higher than $30: \${price}\`));
  `.trim(), `
/* Get stock data somehow */
const source = getAsyncStockData();

const subscription = source
  .filter(quote => quote.price > 30)
  .map(quote => quote.price)
  .subscribe(
    price => console.log(\`Prices higher than $30: \${price}\`),
    err => console.log(\`Something went wrong: \${err.message}\`)
  );

/* When we're done */
subscription.dispose();
  `.trim()];
