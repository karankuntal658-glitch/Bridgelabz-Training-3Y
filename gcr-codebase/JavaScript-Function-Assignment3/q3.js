
const user = {
    name: "Karan",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

// Fix using a normal function
user.showName = function() {
    console.log(this.name);
};

user.showName();
