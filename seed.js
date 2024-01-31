import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS messages (
    name TEXT,
    message TEXT
)
`);

//use prepare statement with placeholder values, and then pass in the variables when we run the insert command to avoid using user input in SQL code.
// db.prepare(
//   `INSERT INTO messages (name, message)
// VALUES
// (?, ?)
// `
// ).run("Loren", "HI :)");

//can instead save the prepared query into a variable, and run it multiple times with different values using insert statement.
const insertStatement = db.prepare(`INSERT INTO messages (name, message)
VALUES 
(?, ?)
`);

insertStatement.run("Loren", "Hiiiii");
insertStatement.run("Hooch", "Woof");
insertStatement.run("Blu", "Constant whining....");
