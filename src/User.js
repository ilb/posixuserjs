import posix from '@maximumquiet/posix';

export default class User {
  constructor(code) {
    this.entry = posix.getpwnam(code);
  }

  hasGroup(groupName) {
    try {
      const groupInfo = posix.getgrnam(groupName);

      return groupInfo.members.indexOf(this.entry.name) !== -1;
    } catch (err) {
      return false;
    }
  }

  getName() {
    return this.entry.name;
  }

  getDisplayName() {
    const name = this.getName();
    if (!this.entry.gecos || this.entry.gecos === name) {
      return name;
    }

    return this.entry.gecos;
  }
}
