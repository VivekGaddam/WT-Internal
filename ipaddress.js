function isip() {
    let a = prompt("Enter an IP address", "0.0.0.0");
    let express = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;

    if (!express.test(a)) {
        alert("wrong ip address");
        return 
    }
    let parts = a.split(".");
    for (let i of parts) {
        let num = parseInt(i, 10);

        if (num < 0 || num > 255) {
            alert ("Not Matched (Out of Range)");
            return 
        }
    }
    alert("Updated")
}