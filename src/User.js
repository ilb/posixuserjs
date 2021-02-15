import posix from 'posix';

export default class User {
  constructor(uid) {
    this.uid = uid;
    const entry = posix.getpwnam(uid);
    this.name = entry.gecos;
  }

  /*eslint no-unused-vars: ["error", { "args": "none" }]*/
  hasGroup(groupName) {
    throw new Error('not implemented');
  }
}
