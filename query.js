import Database from "better-sqlite3";

const db = new Database("database.db");

//logs all data within the messages table in an array
const messages = db.prepare("SELECT * FROM messages").all();
console.log("messages", messages);

//logs all messages from those with 'Hooch' in the name column
const message1 = db
  .prepare(`SELECT * FROM messages WHERE name = 'Hooch'`)
  .all();
console.log("messages", message1);

//logs all messages that contain the specific word 'whining' from the messages column
const message2 = db
  .prepare(`SELECT * FROM messages WHERE message LIKE '%whining%'`)
  .all();
console.log("messages", message2);
