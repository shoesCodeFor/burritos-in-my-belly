const db = require('./connection');

const testConn = ()=>{
    db.query('SELECT 1+1 as test1', function (err, res) {
        //
        if(err){
            console.log(err)    
        }
        else{
            console.log(res);
        }
        
        return (err ? false: true); 
        
    });
}


const insertOne = (burrito, serve = null) => {
    db.query('insert into burrito (text, eaten) values(?, false)', burrito, function (err, res) {
        //
        if(!err){
            console.log(res);
            return (serve? selectAll(res):true);
        }
        else{
            console.log(err);
        }
    });
}

const selectAll = (serve = null) => {
    db.query('SELECT * FROM `BURRITO`', function (err, res) {
        //
        if(!err){
            console.log(res);
            return (serve? serve.json(res):true);
        }
        else{
            console.log(err);
        }
        
    });
}

const updateOne = (id, serve=null) => {
    db.query('update `burrito` SET eaten=true where id=?', id, function (err, res) {
       if(err){
           console.log(err);
       } 
       else{
        console.log(`Updating burrito ${id}......`);   
        selectAll(serve);
       }
    }); 
}
const deleteOne = (id, serve=null) => {
    db.query('delete from burrito where id=?', id, function (err, res) {
       if(err){
        console.log(err)   
       } 
       else{
        console.log(`Deleting burrito ${id}......`);   
        selectAll(serve);
       }
    }); 
}

module.exports = {
    insertOne: insertOne,
    selectAll: selectAll,
    updateOne: updateOne,
    deleteOne: deleteOne
}