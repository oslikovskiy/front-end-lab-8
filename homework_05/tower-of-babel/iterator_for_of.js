const max = process.argv[2];
    let FizzBuzz = {
      [Symbol.iterator]() {
        // here belongs the FizzBuzz logic
        // Hint：
        // When it's finished you have to return an object
        // with the property `done: true` but before you
        // have to set `done: false`
      }
    }

    for (var n of FizzBuzz) {
      console.log(n);
    }