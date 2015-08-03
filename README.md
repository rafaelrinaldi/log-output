# write.js

> Normalized `stdout.write()` that works on both Node.js and PhantomJS.

## Install

```sh
$ npm install --save write.js
```

## API

### `write(message)`

#### `message`

*Required*
Type: `string`  

Output message.

## Motivation

I wanted to persist a log message on the REPL but it seems like there's a bunch of weird tricks to simply append a new log entry keeping the line clean at the same time, that's why I came up with this module. 

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
