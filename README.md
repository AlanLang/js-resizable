## Demo
[click here](http://47.106.144.239:8080/)

## Example
####Browser Script tag
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>resizable-dom</title>
</head>
<body>
<div id="demo"
     style="width: 200px; height: 200px;border: solid 2px red;bottom: 50px;left: 50px;">
  <div style="width: 100%; height: 100%; background-color: #ddd">我可以改变尺寸~</div>
</div>
<script>
  window.onload = function () {
    const demo = document.getElementById('demo')
    const callback = function () {
      console.log('ok')
    }
    new Resizable.Resizable(demo, {
      handles: ['e', 'w', 'n', 's', 'nw', 'ne', 'sw', 'se'],
      initSize: {
        maxWidth: 500,
        maxHeight: 500,
        minWidth: 100,
        minHeight: 100
      }
    }, callback)
  }
</script>
<script type="text/javascript" src="resizable.js"></script></body>
</html>
```

####Babel import
```js
import { Resizable } from 'resizable-dom'

let node = document.querySelector('demo')

new Resizable(node,{
    handles: ['e', 'w', 'n', 's', 'nw', 'ne', 'sw', 'se'],
    initSize: {
      maxWidth: 1000,
      maxHeight: 1000,
      minWidth: 200,
      minHeight: 200,
    }
  }, () => {
    console.log('handle callback')
  })
```

## Parameter
```ts
export declare class Resizable {
    private element;
    private options;
    private document;
    private callback;
    private w;
    private h;
    constructor(el: HTMLElement, options?: OptionsType, callback?: Function);
    setPosition(top: number, left: number): void;
    private createHandles;
    private createHandle;
    private getChilds;
    private resize;
    private getStyleByDirection;
}
export interface OptionsType {
    handles?: string[];
    threshold?: number;
    initSize?: DomSize;
}
export interface DomSize {
    maxWidth: number;
    maxHeight: number;
    minWidth: number;
    minHeight: number;
}
export interface ConfigType {
    baseX: number;
    baseY: number;
    width: string;
    height: string;
    x: number;
    y: number;
    offsetTop: number;
    offsetLeft: number;
}
```
