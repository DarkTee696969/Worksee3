con.connect(function(err) {

    if (err) throw err;

    console.log("Connected!");

     var sql = "INSERT INTO Customers (yourusername, yourpassword) VALUES ('Jason','Highway 37')";



    con.query(sql, function (err, result) {

          if (err) throw err; 

          console.log(`Customer Created.`);

    });

});