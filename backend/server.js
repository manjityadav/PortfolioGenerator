const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const Portfolio = require("./models/Portfolio");

// ✅ Allow both local and deployed frontends
const allowedOrigins = [
  "http://localhost:5173",
  "https://portfoliogenerator-1-2sdn.onrender.com"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("Mongo Error:", err));

app.post("/api/portfolio", async (req, res) => {
  try {
    const newPortfolio = new Portfolio(req.body);
    console.log(newPortfolio);
    await newPortfolio.save();
    res.status(201).json({ message: "Portfolio saved successfully", id: newPortfolio._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save portfolio" });
  }
});

app.get("/api/portfolio", async (req, res) => {
  try {
    const data = await Portfolio.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch portfolios" });
  }
});

app.listen(8080, () => console.log("🚀 Server running on http://localhost:8080"));
