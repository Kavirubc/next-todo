const sqlite3 = require('sqlite3').verbose();

export default async function Todo() {
//create new database
const db = new sqlite3.Database('todo.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err:any) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the todo database.');
});
db.run('CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY,task TEXT');
}

//create table