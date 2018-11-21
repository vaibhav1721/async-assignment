module.exports.async= (async)=>{
    exports.login=function(req,res){
      console.log('hello')
      let  response = {
        EMAIL:req.query.EMAIL,
        PASSWORD:req.query.PASSWORD
     };
     async.waterfall([
      function(callback){
        connection.query('select * from CUSTOMER where EMAIL = ?',[response.EMAIL], function (err, result) {
            if (err) throw err;
            
            callback(null,result)
        })
    },
    function(result,callback)
    {
        if(result.length>0)
        {
            if(result[0].PASSWORD==response.PASSWORD)
            {
            console.log("Login Successfully !!!");
            callback(null,result)
            }
            else{
            console.log('Email and Password does not match!!')
            }
            res.end();
         }
        else{
            console.log('Email  does not match!!')
        }
    }
     ],
     function(err,result){
        if(err){console.log(err)}
       else{ res.send(result);res.end();} 
     });  
    }
    }