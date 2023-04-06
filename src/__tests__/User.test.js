import os from 'os';
import RuUser from '../RuUser.js';

const getUserForTesting = () => {
  switch (os.platform()) {
    case 'win32':
    case 'darwin':
      return process.env.USER;
    default:
      return 'root';
  }
};

const getGroupForTesting = () => {
  switch (os.platform()) {
    case 'darwin':
      return 'admin';
    case 'win32':
      return 'Users';
    default:
      return 'root';
  }
};

const user = new RuUser(getUserForTesting());

test('returns correct user name', () => {
  expect(user.getName()).toStrictEqual(getUserForTesting());
});

test('contains group', () => {
  expect(user.hasGroup(getGroupForTesting())).toStrictEqual(true);
});

test('not contains group nonexistent', () => {
  expect(user.hasGroup('nonexistent')).toStrictEqual(false);
});
