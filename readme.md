## Subtract elements from an array in JS, but that returns several results

`Example: var arrayExemplo = [2, 5, 9, 10, 15];`<br/>
I want to subtract the array element as if the suspected result is: [3, 4, 1, 5];
Ans:

```js
var arrayExemplo = [2, 5, 9, 10, 15];
var novoArray = [];
for (i = 0; i < arrayExemplo.length - 1; i++) {
  novoArray[i] = arrayExemplo[i + 1] - arrayExemplo[i];
}
console.log(novoArray);
```
