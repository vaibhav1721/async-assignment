
let Promise = require('bluebird');

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
                console.log("err", err);
                reject(err);
            }
            resolve(result)
        }
    })
}


