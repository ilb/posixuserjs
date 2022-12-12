import User from '../User';
import RuUser from '../RuUser.js';

const root = new User('root');
const user = new RuUser('testuser1');

test('root name is root', () => {
  expect(root.getName()).toStrictEqual('root');
});

test('contains group', () => {
  expect(user.hasGroup('testgroup')).toStrictEqual(true);
});

test('not contains group nonexistent', () => {
  expect(user.hasGroup('nonexistent')).toStrictEqual(false);
});
