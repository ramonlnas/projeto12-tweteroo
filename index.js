import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());


const users = []
const tweets = []
let saveAvatar;


tweets["avatar"] = saveAvatar;

console.log(tweets)
console.log(saveAvatar)


app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;


  if (!username || !avatar ) {
    return res.status(400).send({message: "Insira todos os campos!"})
  }

  const newUser = {
    username,
    avatar,
  }
  saveAvatar = avatar;
  users.push(newUser)

  res.status(201).send("Ok")
});

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body

    if( !username || !tweet ) {
        return res.status(400).send({message: "Verifique se preencheu todos os campos!"})
    }

    const newTweet = {
        username,
        tweet
    }

    tweets.push(newTweet)

    res.status(201).send("Ok")
})

app.get("/tweets", (req, res) => {
    res.send(tweets)
})

app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
