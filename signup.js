module.exports.async= (async)=>{

    exports.add=function(req,res){
        var  response = {
          FIRST_NAME:req.query.FIRST_NAME,
          LAST_NAME:req.query.LAST_NAME,
          FULL_NAME:req.query.FULL_NAME,
          EMAIL:req.query.EMAIL,
          PASSWORD:req.query.PASSWORD
       };

    async.waterfall([
        function(callback){
            connection.query('select EMAIL from CUSTOMER where EMAIL = ?',[response.EMAIL], function (err, result) {
                if (err) throw err;
                
                callback(null,result)
            })
        },
        function(result,callback)
        {
            if(result.length!=0){
                
                console.log("Email Already Exist !!!");
                res.end()
            }
            else{
            callback(null)}
        },
        function(callback)
        {
            var query = `insert into CUSTOMER values("${response.FIRST_NAME}",
            "${response.LAST_NAME}",
            "${response.FIRST_NAME}",
            "${response.EMAIL}",
            "${response.PASSWORD}")`;
            let email=`${response.EMAIL}`
            connection.query( query ,function (err, email) {
              if (err) throw err;
              
              
              console.log(`1 Row Added ${email}`);
          })
          callback(null,email)
        },
        function(email,callback)
        {
            connection.query('select * from CUSTOMER where EMAIL = ?',[email],function (err, result) {
                if (err) throw err;
                
                callback(null,result)
            }) 
        }
      ],
      function(err,result){
        if(err){console.log(err)}
        else{console.log(result);res.end()} 
    })
}
}