import User from './User.js';
import Transliterator from './Transliterator.js';

export default class RuUser extends User {
  constructor(code) {
    super(code);
    this.transliterator = new Transliterator();
  }
  getDisplayName() {
    const name = this.getName();

    if (!this.entry.gecos || this.entry.gecos === name) {
      return name;
    }

    return this.transliterator.enToRu(this.entry.gecos);
  }
}
