import express from "express";
import cors from "cors";
import axios from "axios";

import "dotenv/config";
const app = express();
const PORT = process.env.VITE_SERVER_PORT;
const API_BASE_URL = process.env.API_BASE_URL;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Find-A-JEat server!");
});
app.get("/api/:postCode", async (req, res) => {
  try {
    const postCode = req.params.postCode;
    const apiResult = await axios.get(`${API_BASE_URL}/${postCode}`);
    const first10Restaurants = apiResult.data.restaurants.slice(0, 10);
    res.status(200).json(first10Restaurants);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.listen(PORT, () => {
  console.log("Server Listening at ", PORT);
});
