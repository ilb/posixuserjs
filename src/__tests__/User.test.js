import User from '../User';

const user = new User(process.env.USER);
test('contains group', () => {
  expect(user.hasGroup(process.env.USER)).toStrictEqual(true);
});

test('contains group users', () => {
  expect(user.hasGroup('users')).toStrictEqual(true);
});

test('not contains group nonexistent', () => {
  expect(user.hasGroup('nonexistent')).toStrictEqual(false);
});
