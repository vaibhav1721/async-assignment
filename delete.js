// // module.exports.async= (async)=>{

// //     exports.delete=function(req,res){
//         console.log('hello')
//         const EMAIL=req.query.EMAIL;

        
//         async.series([
//             function(callback){
//                 connection.query('delete from CUSTOMER where EMAIL = ? ',[EMAIL], function (err, result) {
//                     if (err) throw err;
                    
//                     callback(null,result)
//                 })
//             }
//         ],
//             function(err,result)
//             {
//                 if(err) throw err;
//                 else{res.send(result);
//             res.end();}
//             }   
//             )
          
       
// //     }
// // }

var Promise = require('bluebird');

exports.delete = delete;
function delete(req,res){
    Promise.coroutine(function*(){
        console.log('hello')
        const EMAIL=req.query.EMAIL;
        const deleteResult = yield deleteUser(EMAIL);

        if(!deleteResult){
            res.send("Some err occured while deleting user")
        }
        res.send("Delete Successfull",deleteResult);
    })
}

function deleteUser(email){
    return new Promise((resolve, reject)=>{
        connection.query('delete from CUSTOMER where EMAIL = ? ',[email], function (err, result) {
            if(err){
                reject(err);
            }
            resolve(result)
        }
    })
}
