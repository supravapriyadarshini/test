var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "suprava",
  password: "tiger",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT candidate.name AS candi,test_score.name AS sc FROM candidate JOIN test_score ON candidate.email = test_score.score";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});