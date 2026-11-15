
class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }

    printTicket() {
        console.log("Movie:", this.movieName);
        console.log("Seat:", this.seatNo);
        console.log("Price:", this.price);
    }
}

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

let ticket1 = new OnlineTicket("Avengers", "A1", 200, 30);
let ticket2 = new OnlineTicket("Avatar", "B2", 250, 40);

ticket1.printTicket();
console.log("Total Amount:", ticket1.getTotalAmount());

console.log("----------------");

ticket2.printTicket();
console.log("Total Amount:", ticket2.getTotalAmount());
