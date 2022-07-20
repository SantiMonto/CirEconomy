import { GoogleSpreadsheet } from 'google-spreadsheet';
import GA from '../googleAuth.js'

class Db {
  document
  _keys = GA

  constructor () {
    this.document = new GoogleSpreadsheet('1TASQsKSjhgkNS55i-4SP3ZqPDyUhYhkWSbYBaCXWfXM');
  }

  async connect () {
    this.document.useServiceAccountAuth(this._keys);
  }
}

const DbInstance = new Db()
export { DbInstance }
