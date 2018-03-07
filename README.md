![slurry](https://imgur.com/7t0qBGD.jpg)

# slurry    [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

> automagically curry function arguments

Slurrified functions can be chain-called indefinitely to accumulate the passed arguments.

Calling with no arguments ends the chain, runs the initial function with all the arguments and returns the result.

## Install

```shell
$ npm install slurry
```

## Usage

```javascript
const func = (...args) => args;
const s = slurry(func);

s(0)(1)(2)();   //=> [0 1 2]
s(0, 1, 2)();   //=> [0 1 2]
s(0, 1)(2)();   //=> [0 1 2]

let s1 =  s(1);
let s2 = s1(2);
let s3 = s1(3);
s2();           //=> [1, 2]
s3();           //=> [1, 3]
```
