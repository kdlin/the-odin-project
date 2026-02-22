const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Lelouch', () => {
    expect(values.firstName).toEqual('Lelouch');
  });
  test('lastName is Vi', () => {
    expect(values.lastName).toEqual('Vi');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 1999', () => {
    expect(values.birthYear).toEqual(1999);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello my name is Lelouch Vi and I am 27 years old');
  });
});

describe('step 3', () => {
  test('fullName is Lelouch Vi', () => {
    expect(values.fullName).toEqual('Lelouch Vi');
  });
  test('age is 27', () => {
    expect(values.age).toEqual(27);
  });
});
