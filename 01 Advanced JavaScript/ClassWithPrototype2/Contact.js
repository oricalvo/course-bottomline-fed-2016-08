var Contact = (function() {
    "use strict";

    var nextId = 1000;

    function Contact(name, email) {
        this.name = name;
        this.email = email;
        this.id = ++nextId;
    }

    Contact.prototype.dump = function () {
        console.log(this.id + ", " + this.name + ", " + this.email);
    }

    Contact.prototype.sendMail = function () {
        console.log("Sending mail to: " + this.email);
    }

    return Contact;
})();

var ori = new Contact("Ori", "ori@gmail.com");
var roni = new Contact("Roni", "roni@gmail.com");

ori.dump();
roni.dump();
