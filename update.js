import Database from "better-sqlite3";

const db = new Database("database.db");

db.prepare(
  "UPDATE messages SET message = 'Helloooo' WHERE name = 'Loren'"
).run();
