export const innerHtml = `
<div class="markdown-body">
<h2 class="article-title">Promise简介</h2>
<h3>描述</h3>

<p>
Promise 对象是一个代理对象（代理一个值），被代理的值在Promise对象创建时可能是未知的。它允许你为异步操作的成功和失败分别绑定相应的处理方法（handlers）。 这让异步方法可以像同步方法那样返回值，但并不是立即返回最终执行结果，而是一个能代表未来出现的结果的promise对象
</p>
<p>一个 Promise有以下几种状态:</p>
<ul class="list">
<li>pending: 初始状态，既不是成功，也不是失败状态。</li>
<li>fulfilled: 意味着操作成功完成。</li>
<li>rejected: 意味着操作失败。</li>
</ul>
<p>
pending 状态的 Promise 对象可能触发fulfilled 状态并传递一个值给相应的状态处理方法，也可能触发失败状态（rejected）并传递失败信息。当其中任一种情况出现时，Promise 对象的 then 方法绑定的处理方法（handlers ）就会被调用（then方法包含两个参数：onfulfilled 和 onrejected，它们都是 Function 类型。当Promise状态为fulfilled时，调用 then 的 onfulfilled 方法，当Promise状态为rejected时，调用 then 的 onrejected 方法， 所以在异步操作的完成和绑定处理方法之间不存在竞争）。
</p>
<p>
因为 Promise.prototype.then 和  Promise.prototype.catch 方法返回promise 对象， 所以它们可以被链式调用。
</p>
<img src="https://mdn.mozillademos.org/files/8633/promises.png" />
<h3>
创建Promise
</h3>
<p>
Promise 对象是由关键字 new 及其构造函数来创建的。该构造函数会?把一个叫做“处理器函数”（executor function）的函数作为它的参数。这个“处理器函数”接受两个函数——resolve 和 reject ——作为其参数。当异步任务顺利完成且返回结果值时，会调用 resolve 函数；而当异步任务失败且返回失败原因（通常是一个错误对象）时，会调用reject 函数。
</p>
<pre><code mwlHighlightJs [source]="source[0]" language="javascript"></code></pre>
<p>想要某个函数?拥有promise功能，只需让其返回一个promise即可。</p>
<pre><code mwlHighlightJs [source]="source[1]" language="javascript"></code></pre>
<h3>示例</h3>
<p>非常简单的例子</p>
<pre><code mwlHighlightJs [source]="source[2]" language="javascript"></code></pre>
</div>
`;

export const source: Array<string> = [`
const myFirstPromise = new Promise((resolve, reject) => {
    // ?做一些异步操作，最终会调用下面两者之一:
    //
    //   resolve(someValue); // fulfilled
    // ?或
    //   reject("failure reason"); // rejected
  });
  `.trim(), `function myAsyncFunction(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  };`.trim(), `?let myFirstPromise = new Promise(function(resolve, reject){
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    setTimeout(function(){
        resolve("成功!"); //代码正常执行！
    }, 250);
});

myFirstPromise.then(function(successMessage){
    //successMessage的值是上面调用resolve(...)方法传入的值.
    //successMessage参数不一定非要是字符串类型，这里只是举个例子
    console.log("Yay! " + successMessage);
});`];
