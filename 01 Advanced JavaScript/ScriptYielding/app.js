var label = $(".label");

var counter = 1;

step();

function step() {
    if(counter == 10) {
        return;
    }

    setTimeout(step, 0);

    execute(500);

    label.text(counter++);
}

function execute(timeout) {
    var before = new Date();

    while(true) {
        var now = new Date();
        if(now - before > timeout) {
            break;
        }
    }
}
