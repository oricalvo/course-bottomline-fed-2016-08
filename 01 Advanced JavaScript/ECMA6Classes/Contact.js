class Contact {
    constructor(name) {
        this.name = name;

        setTimeout(() => {
            this.dump();
        }, 1000);
    }

    dump() {
        console.log(this.name);
    }
}

var c1 = new Contact("Ori");

