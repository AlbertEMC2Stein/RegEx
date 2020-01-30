class RegEx {
  constructor(regX) {
    this.regex = regX;
  }
}


class Epsilon extends RegEx {
  constructor() {
  }
}

class EmptyLang extends RegEx {
  constructor() {
  }
}

class Symbol extends RegEx {
  constructor(symbol) {
    this.s = symbol;
  }
}

class Sequence extends RegEx {
  constructor(regX1, regX2) {
    this.regex1 = regX1;
    this.regex2 = regX2;
  }
}

class Alternative extends RegEx {
  constructor(regX1, regX2) {
    this.regex1 = regX1;
    this.regex2 = regX2;
  }
}

class Repetition extends RegEx {
  constructor(regX) {
    this.regex = regX;
  }
}
