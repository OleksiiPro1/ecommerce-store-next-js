exports.up = async (sql) => {
  await sql`
	INSERT INTO cars
	(model, price, type, description)
	VALUES
	('Toyota Camry', '29999', 'Hybrid', 'The Toyota Camry is an automobile sold internationally by the Japanese auto manufacturer'),
	('Toyota Rav4', '24999', 'Hybrid', 'RAV4 was built to be driven and designed to stand out'),
	('Toyota LC Prado', '39999', 'Offroad', 'Land Cruiser Prado insurance'),
	('Toyota Highlander', '43999', 'Offroad', 'TOYOTA HIGHLANDER - A PREMIUM SUV'),
	('Toyota Proace City','19999', 'Commercial', 'Practical, agile and flexible'),
	('Toyota Proace Verso', '29999', 'Commercial', 'Practical, agile and flexible')
  `;
};

exports.down = async (sql) => {
  await sql`
    DROP TABLE cars
  `;

};
