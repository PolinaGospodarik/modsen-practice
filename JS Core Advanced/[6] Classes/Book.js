"use strict";

class Book{
    constructor(title, author, year,) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    displayInfo(){
        console.log(`Название: ${this.title}, автор: ${this.author}, год публикации: ${this.year}`);
    }
}
class Ebook extends Book{
    constructor(title, author, year, price,){
        super(title, author, year);
        this.price = price;
    }

    displayInfo(){
        console.log(`Название: ${this.title}, автор: ${this.author}, год публикации: ${this.year}, цена: ${this.price} р.`);
    }
}

const Ebook1  = new Ebook("11/22/63", "Stephen Edwin King", 2011, 38.77 );
Ebook1.displayInfo();