module.exports= (mysql,async)=>{
    //console.log(req_type);
        global.connection= mysql.createConnection({
        host     : 'localhost', 
        user     : 'root', 
        password : 'qwerty', 
        database : 'nodejs',
        port : 3306
      })
      connection.connect(function(err) {
        if (err) throw err
        console.log('You are now connected...')
      });
    
    }
    
   