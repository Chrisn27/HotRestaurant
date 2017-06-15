var wait =
    [
        {
            "customerName": "wait",
            "phoneNumber": "9113294713947832",
            "customerEmail": "kevin@kevin.com",
            "customerID": "wait"
        },
        {
            "customerName": "Test",
            "phoneNumber": "(123)456-7890",
            "customerEmail": "Test", "customerID": "1",
            "customerID": "list"
        }
    ]

var tableModel = {
    push(data) {
        wait.push(data);
    },
    get() {
        return wait;
    }
}

module.exports = tableModel;