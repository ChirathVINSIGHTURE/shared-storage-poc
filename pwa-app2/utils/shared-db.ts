import Dexie from 'dexie';

const db = new Dexie('sharedDB');
db.version(1).stores({
  items: '++id, name, value'
});

export default db;
