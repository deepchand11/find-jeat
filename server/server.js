import express from "express";
import cors from "cors";
import axios from "axios";
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Find-A-JEat server!");
});
app.get("/api/:postCode", async (req, res) => {
  try {
    const postCode = req.params.postCode;
    const apiResult = await axios.get(
      `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postCode}`
    );
    res.status(200).json(apiResult.data);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.listen(PORT, () => {
  console.log("Server Listening at ", PORT);
});
