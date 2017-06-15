var table =
    [
        {
            "customerName": "kevin",
            "phoneNumber": "9113294713947832",
            "customerEmail": "kevin@kevin.com",
            "customerID": "420"
        },
        {
            "customerName": "Test",
            "phoneNumber": "(123)456-7890",
            "customerEmail": "Test", "customerID": "1",
            "customerID": "test"
        }
    ]
    
var tableModel = {
    push(data) {
        table.push(data);
    },
    get() {
        return table;
    }
}

module.exports = tableModel;