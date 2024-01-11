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
        get();
    });
}

export async function get() {
    const db = new sqlite3.Database('todo.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
        (err: any) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Connected to the todo database.');
        });
    const selectSql = 'SELECT * FROM todo';

    db.all(selectSql, [], (err: any, rows: any) => {
        if (err) {
            throw err;
        }
        rows.forEach((row: any) => {
            console.log(row.task);
        });
    });
}

//delete task by id
export async function del(formData: FormData) {
    const db = new sqlite3.Database('todo.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
        (err: any) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Connected to the todo database.');
        });

    const deleteSql = 'DELETE FROM todo WHERE task = ?';

    const rawFormData = {
        taskName: formData.get('task')
    }

    db.run(deleteSql, rawFormData.taskName,
        function (err: any) {
            if (err) {
                return console.error(err.message);
            }
            console.log(`Row(s) deleted ${this.changes}`);
            get();
        });
}
