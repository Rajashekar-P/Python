
    var data = {
        name: "Rice", Quantity: 3, Price: 60,
        name: "Dal", Quantity: 2, Price: 30,
        name: "Salt", Quantity: 1, Price: 20,

        total: function () {

            console.log(this.Quantity * this.Price)
        }
    };
    data.total();


