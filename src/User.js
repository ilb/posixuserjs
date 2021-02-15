export default class User {
  constructor(uid) {
    this.uid = uid;
  }

  /*eslint no-unused-vars: ["error", { "args": "none" }]*/
  hasGroup(groupName) {
    throw new Error('not implemented');
  }
}
