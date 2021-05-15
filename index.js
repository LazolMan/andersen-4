function concat() {
  let sep = "";

  const next = (...args) => {
    return (current, separator) => {
      sep = separator || sep;

      if ((!current || typeof current !== "string") && current !== "") {
        const result = args.join(sep);
        sep = "";
        return result;
      }

      return next(...args, current);
    };
  };

  return next();
}

const concatStrings = concat();

class Calculator {
  constructor(x, y) {
    if (
      typeof x === "undefined" ||
      typeof y === "undefined" ||
      !Number.isInteger(x) ||
      !Number.isInteger(y)
    ) {
      throw new Error("");
    }

    this.x = x;
    this.y = y;
  }

  setX = (num) => {
    if (typeof num === "undefined" || !Number.isInteger(num)) {
      throw new Error("");
    }

    this.x = num;
  };

  setY = (num) => {
    if (typeof num === "undefined" || !Number.isInteger(num)) {
      throw new Error("");
    }

    this.y = num;
  };

  logSum = () => {
    console.log(this.x + this.y);
  };

  logMul = () => {
    console.log(this.x * this.y);
  };

  logSub = () => {
    console.log(this.x - this.y);
  };

  logDiv = () => {
    if (this.y === 0) {
      throw new Error("");
    }

    console.log(this.x / this.y);
  };
}
