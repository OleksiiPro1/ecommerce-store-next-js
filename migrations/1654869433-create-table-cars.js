exports.up = async (sql) => {
  await sql`
    CREATE TABLE cars (
id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
model varchar(40) NOT NULL,
price varchar(40) NOT NULL,
type varchar(40) NOT NULL,
description varchar(850) NOT NULL
)
  `;
};

exports.down = async (sql) => {
  await sql`
    DROP TABLE cars
  `;
};