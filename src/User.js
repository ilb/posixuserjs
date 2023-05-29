import createDebug from 'debug';
import posix from '@maximumquiet/posix';

const debug = createDebug('posixuserjs');

export default class User {
  constructor(code) {
    this.entry = posix.getpwnam(code);
    debug('gathered user by getpwnam: %s', this.entry.name);
  }

  hasGroup(groupName) {
    try {
      const groupInfo = posix.getgrnam(groupName);
      debug('gathered group by getgrnam: %o,', {
        name: groupInfo.name,
        members: groupInfo.members
      });
      return groupInfo.members.indexOf(this.entry.name) !== -1;
    } catch (err) {
      console.trace(err);
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
