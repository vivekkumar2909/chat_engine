const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put("https://api.chatengine.io/users/",{
      username :username ,secret : username ,first_name : username
    },
    {
      headers : {"private-key" :"52f7f997-fa4b-4566-b30b-b3e4cdd83edf"}
    })
    console.log(r.data);
    // res.send('hii');
    return res.status(r.status).json(r.data);
  }
  catch (e){
    return res.status(e.response.status).json(e.response.data);
  }

  
  
});

app.listen(3001);