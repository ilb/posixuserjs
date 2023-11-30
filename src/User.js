import createDebug from 'debug';
import posix from '@maximumquiet/posix';

const debug = createDebug('posixuserjs');

export default class User {
  constructor(code) {
    debug('gathering user by getpwnam: %s', code);
    this.entry = posix.getpwnam(code);
    debug('gathered user by getpwnam, uid: %s', this.entry.uid);
  }

  hasGroup(groupName) {
    try {
      debug('gathering group by getgrnam: %s', groupName);
      const groupInfo = posix.getgrnam(groupName);
      debug('gathered group by getgrnam: %j', {
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
