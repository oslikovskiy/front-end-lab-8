const max = process.argv[2];

let FizzBuzz = {
    [Symbol.iterator]() {
        let value = 1;

        return {
            next() {
                let el = value;

                if (value > max) {
                    return {
                        done: true
                    };
                }
                if (el % 15 === 0) {
                    el = "FizBuzz";
                } else if (el % 3 === 0) {
                    el = "Fizz";
                } else if (el % 5 === 0) {
                    el = "Buzz";
                }

                value++;

                return {
                    done: false,
                    value: el
                };
            }
        }
    }
}


for (var x of FizzBuzz) {
    console.log(x);
}