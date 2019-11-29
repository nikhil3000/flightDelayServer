const express = require('express');
const app = express();

var map1 = new Map([["1" , "8"], ["2" ,"7" ] ,["3", "15"],["4" , "20"], ["5" ,"35" ] ,["6", "25"]]); 
  


app.get('/delay/:params',(req,res)=>{       // params include flight id and time stamp
    var params = req.params.params.split(',');
    console.log(params);
    var id = params[0];
    var timestamp = params[1];          //not used anywhere becuase the data is hardcoded
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

app.get('/',(req,res)=>{
    res.send('Flight delay api server with hardcoded values ["1" , "8"], ["2" ,"7" ] ,["3", "15"],["4" , "20"], ["5" ,"35" ] ,["6", "25"] ');
})

var port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log("listening at port" + port);
})