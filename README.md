# print

> Normalized standard output that works on both Node.js and PhantomJS environments.

## Install

```sh
$ npm install --save print
```

## API

### `print(message)`

#### `message`

*Required*
Type: `string`  

Output message.

## Motivation

I wanted to persist a log message on the REPL (both Node.js and PhantomJS). It seems like there's a bunch of weird tricks to simply output a log entry keeping the line clean at the same time, that's why I came up with this module. 

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
