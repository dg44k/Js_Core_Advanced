class Book {
	constructor (name, author, year) {
		this.name = name;
		this.author = author;
		this.year = year;
	}

	showInfo() {
		console.log("Имя: " + this.name + '\n' + 
								"Автор: " + this.author + '\n' + 
								"Год: " + this.year + '\n'
							);
	}
}

class EBook extends Book {
	constructor (name, author, year, price) {
		super(name, author, year);
		this.price = price;
	}

	showInfo() {
		console.log("Имя: " + this.name + '\n' + 
								"Автор: " + this.author + '\n' + 
								"Год: " + this.year + '\n' +
								"Цена: " + this.price + '\n'
							);
	}
}

const warAndPeace = new EBook('War and Peace', 'Tolstoy', 1867, 100);
warAndPeace.showInfo();