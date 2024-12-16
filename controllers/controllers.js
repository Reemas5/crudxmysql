const path = require('path')
const {pool} = require('../config/db')

const creating = async(req,res)=>{
    
    res.sendFile(path.join(__dirname , '..','/public/create.html')); 
}
const posting = async(req,res)=>{
    const {name,email} =req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';  
    const values = [name, email];  

    try {
        
        const [,result] = await pool.query(query, values);
        
       
        res.redirect('/read')
    }
     catch(err){   
        console.log(err);
        res.status(500).json({ error: 'Database error' });
    }

}

const reading = async(req,res)=>{
    try {
        const [resp] = await pool.query('select * from users')
        res.render('read.ejs',{resp})
        
    }
    catch(err){
        console.log(err)
    }  
}

const updating = async(req,res)=>{
    const {id} =req.query
    try{
       const [update]= await pool.query('select * from users where id=?',[id])
      
      
       
        res.render('update.ejs',{update})
    }
    catch(error){
        console.log(error)
    }
}

const posting_update =async(req,res)=>{
    const {hidden_id,name,email} = req.body
    try{
        await pool.query('UPDATE users SET name = ?, email = ? WHERE id = ?',[name,email,hidden_id])
        res.redirect('/read')
    }
    catch(err){
        console.log(err.message)
    }
}

const deleting = async(req,res)=>{
    const {id}= req.query
    try{
        const [del] = await pool.query('delete from users where id=?',[id])
        res.redirect('/read')

    }
    catch(err){
        console.log(err.message)
    }
}

module.exports={
    creating,
    posting,
    reading,
    updating,
    posting_update,
    deleting
}

