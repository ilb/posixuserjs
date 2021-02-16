import posix from 'posix';

export default class User {
  constructor(code) {
    this.code = code;
    const entry = posix.getpwnam(code);
    this.name = entry.gecos;
  }

  /*eslint no-unused-vars: ["error", { "args": "none" }]*/
  hasGroup(groupName) {
    throw new Error('not implemented');
  }
}
