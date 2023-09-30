'use strict';

// JSON

const obj = {
  number: 1,
  bigint: 10n,
  string: 'string',
  array: [1, 2, false],
  boolean: true,
  null: null,
  plainObject: { prop: 10 },
  // метод не => JSON
  getNumber() {
    return this.number;
  },
  // undefined => JSON
  undefined: undefined,
};

// obj => JSON серіалізація
const objJson = JSON.stringify(obj);

// JSON => obj десеріалізація
const parseObj = JSON.parse(objJson);
