import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("cryptoApp.db");

export const createTable = (name) => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS ${name} (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
         amount REAL,
         src NUMBER, 
         name TEXT, 
         checked INTEGER, 
         price REAL)`
    ),
      [],
      (_, result) => {
        console.log("Таблиця створена");
      },
      (_, error) => {
        console.error("Помилка створення таблиці", error);
      };
  });
};

export const insertData = (dataArr) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO crypto(amount, src, name, checked, price) VALUES(?, ?, ?, ?, ?)",
      dataArr,
      (_, result) => {
        console.log("Запис успішно створено");
      },
      (_, error) => {
        console.error("Помилка додавання запису:", error);
      }
    );
  });
};

export const fetchData = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM crypto",
        [],
        (_, { rows: { _array } }) => {
          resolve(_array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const deleteTable = (name) => {
  db.transaction((tx) => {
    tx.executeSql(
      `DROP TABLE IF EXISTS ${name}`,
      [],
      (_, result) => {
        console.log("Таблиця успішно видалена");
      },
      (_, error) => {
        console.log("Таблиця не видалилась", error);
      }
    );
  });
};
