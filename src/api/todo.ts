"use server"
const sqlite3 = require('sqlite3').verbose();



export async function send(formData: FormData) {


    const db = new sqlite3.Database('todo.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err: any) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the todo database.');
    });
    db.run('CREATE TABLE IF NOT EXISTS todo (task TEXT)', (err: any) => {
        if (err) {
            console.error(err.message);
        }
    });

    const rawFormData = {
        task: formData.get('todo'), // Renamed to 'task'
    };
    
    const insertSql = 'INSERT INTO todo (task) VALUES (?)';

    db.run(insertSql, [rawFormData.task], function (err: any) {
        if (err) {
            return console.log(err.message);
        }
        // Accessing 'this.lastID' within the callback function
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
}

