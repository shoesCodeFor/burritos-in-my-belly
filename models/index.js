const db = require('./connection');

const testConn = ()=>{
    db.query('SELECT 1+1 as test1', function (err, res) {
        //
        console.log(err, res);
        db.end();
        return (err ? false: true); 
        
    });
}


const create = (burrito, serve = null) => {
    db.query('insert into burrito (text, eaten) values(?, false)', burrito, function (err, res) {
        //
        if(!err){
            console.log(res);
            return (serve? serve.json(res):true);
        }
        else{
            console.log(err);
        }
        
        db.end();
    });
}

const consume = (serve=null) => {
    db.query('update burrito SET eaten=true where id=?', id, function (err, res) {
       if(err){
        db.end();
       } 
       else{
        getAll(serve);
       }
    });
    
}

const getAll = (serve = null) => {
    db.query('SELECT * FROM BURRITO', function (err, res) {
        //
        if(!err){
            console.log(res);
            return (serve? serve.json(res):true);
        }
        else{
            console.log(err);
        }
        
        db.end();
    });
}

getAll();