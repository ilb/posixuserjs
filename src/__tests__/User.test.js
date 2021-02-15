import User from '../User';

const root = new User('root');
const user = new User(process.env.USER);

test('root name is root', () => {
  expect(root.name).toStrictEqual('root');
});
test('contains group', () => {
  expect(user.hasGroup(process.env.USER)).toStrictEqual(true);
});

test('contains group users', () => {
  expect(user.hasGroup('users')).toStrictEqual(true);
});

test('not contains group nonexistent', () => {
  expect(user.hasGroup('nonexistent')).toStrictEqual(false);
});
