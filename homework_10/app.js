class Input {
  constructor(placeHolder) {
    this.placeHolder = placeHolder || "Type...";
    this._value = "";
  }

  get value() {
    return this._value;
  }

  setValue(newValue) {
    this._value = newValue;
  }
}

class NumberInput extends Input {
  constructor(placeHolder) {
    super(placeHolder);
    this.type = "number";
  }
}

// 1
function AddRequiredValidation(input) {
  if (input.value) {
    console.log("Your value is valid, all validators passed!");
    input.valid = true;
  } else {
    console.log("Validation faild, please enter a number!");
    input.valid = false;
  }
};

//2
function AddMaxLengthValidation(input, max) {
  if (input.value.toString().length > max) {
    input.valid = false;
    console.log(`Validation faild, the input value length is more than ${max}`);
  } else if ("valid" in input) {
    if (input.valid) {
      input.valid = true;
    } else {
      input.valid = false;
    }
  }
};

//3
function AddNumberValidation(input) {
  if (typeof input.value !== "number") {
    input.valid = false;
    console.log("Validation faild, input value is not a number");
  } else if ("valid" in input) {
    if (input.valid) {
      input.valid = true;
    } else {
      input.valid = false;
    }
  }
}

let numberInput = new NumberInput("Type numbers...");

AddRequiredValidation(numberInput);
console.log(numberInput.valid);

numberInput.setValue("1");
AddNumberValidation(numberInput);
console.log(numberInput.valid)

numberInput.setValue(1);
AddRequiredValidation(numberInput);
AddMaxLengthValidation(numberInput, 7);
AddNumberValidation(numberInput);
console.log(numberInput.valid);

numberInput.setValue(1111111111111111111111111111);
AddMaxLengthValidation(numberInput, 7);
console.log(numberInput.valid);
