 **Event Bubbling in JavaScript**

**Introduction**

Event bubbling is a fundamental concept in JavaScript's event handling mechanism. It allows events to propagate through the DOM tree, from the innermost element to the outermost element. This enables developers to attach event listeners to parent elements and handle events that occur on their child elements.

**How Event Bubbling Works**

When an event occurs on an element, the browser first checks if the element has an event listener attached to it. If it does, the event listener is executed. If not, the event bubbles up to the parent element. This process continues until the event reaches the document object, which is the root of the DOM tree.

**Example**

To illustrate event bubbling, consider the following HTML code:

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

And the following JavaScript code:

```javascript
document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent element clicked");
});

document.getElementById("child").addEventListener("click", function() {
  console.log("Child element clicked");
});
```

When the user clicks on the "Click Me" button, the following sequence of events occurs:

1. The event is triggered on the "child" element.
2. Since there is no event listener attached to the "child" element, the event bubbles up to the "parent" element.
3. The event listener attached to the "parent" element is executed, and the message "Parent element clicked" is logged to the console.
4. The event listener attached to the "child" element is also executed, and the message "Child element clicked" is logged to the console.

**Event Bubbling vs. Event Capturing**

Event bubbling is the default behavior of event propagation in JavaScript. However, there is another event propagation mechanism called event capturing. Event capturing works in the opposite direction of event bubbling. It starts at the document object and propagates down to the innermost element.

Event capturing can be enabled by setting the third parameter of the `addEventListener()` method to `true`. For example:

```javascript
document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent element clicked");
}, true);
```

In this case, the event listener attached to the "parent" element will be executed before


refer for more :https://www.freecodecamp.org/news/event-bubbling-in-javascript/