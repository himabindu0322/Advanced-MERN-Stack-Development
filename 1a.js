const express =require('express');
const app=express();
//1.simple home route
app.get('/',(req,res) => {
    res.send('Hello you have reached the main dashboard');
});
//2.
app.get('/user/:id',(req,res)=> {
    const userId=req.params.id;
    res.send('fetching details for the user ${userId}')
});
//3.
app.get('/user/:userId/books/:bookId',(req,res) => {
    const {userId,bookId} =req.params;1app.js
    res.send('user ${userId} has selected Book #${bookId}');
});
//4.Query parameter example
app.get('/search',(req,res) => {
    const{keyword,limit}=req.query;
    res.send('searching for "${keyword}"-showing top ${limit} results.');
});
//5.display full URL
app.get('/url-info',(req,res) => {
    const fullurl=`${req.protocol}://${req.get('host')}${req.originalUrl}`;
    res.send('You accessed this endpoint via:${fullurl}');
});
//Start server
const PORT=4000;
app.listen(PORT,() => {
console.log(`Express server active at http://localhost:${PORT}`);
});