const express = require('express');
const app = express();

var map1 = new Map([["1" , "8"], ["2" ,"7" ] ,["3", "15"],["4" , "20"], ["5" ,"35" ] ,["6", "25"]]); 
  


app.get('/:flightId',(req,res)=>{
    var id = req.params.flightId;
    if(map1.has(id))
    {
        console.log(map1.get(id));
        res.send({
            'status' : 'found',
            'delay' : map1.get(id),
            'timestamp' : Date.now()
        });
    }
    else{
        res.send({'status': 'not found'});
    }
})

var port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log("listening at port" + port);
})