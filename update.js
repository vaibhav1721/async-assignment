module.exports.async= (async)=>{

    exports.update=function(req,res){
        console.log('hello')
        let response = {
          FIRST_NAME:req.query.FIRST_NAME,
          LAST_NAME:req.query.LAST_NAME,
          FULL_NAME:req.query.FULL_NAME,
          EMAIL:req.query.EMAIL,
          PASSWORD:req.query.PASSWORD
       };

    async.waterfall([
        function(callback){
            connection.query('update CUSTOMER set ? where EMAIL = ? ',[response, response.EMAIL], function (err, result) {
                if (err) throw err;
                
                callback(null,result)
            })
        },
        function(result,callback)
        {
            connection.query('select * from CUSTOMER where EMAIL = ? ',[response.EMAIL], function (err, result) {
                if (err) throw err;
            })
            callback(null,result)
        }
    ],
        function(err,result)
        {
            if(err) throw err;
            else{console.log('Update Successfully!!' +result);
        res.end();}
        }   
        )
    }
}
