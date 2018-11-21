module.exports.async= (async)=>{
  
 
exports.list=function(req,res){
  console.log('hello')
  let  response = {
    FIRST_NAME:req.query.FIRST_NAME,
    LAST_NAME:req.query.LAST_NAME,
    FULL_NAME:req.query.FULL_NAME,
    EMAIL:req.query.EMAIL,
    PASSWORD:req.query.PASSWORD
 };
 async.waterfall([
  function(callback){
      connection.query('SELECT * FROM CUSTOMER ', function (err, result) {
          if (err) throw err;
          
          callback(null,result)
      })
  }
],
  function(err,result){
      if(err){console.log(err)}
      else{//console.log(result);
      res.send(result);
     console.log('All Rows Printed')} 
  }
); 
}
}