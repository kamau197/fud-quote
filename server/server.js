require("dotenv").config();
const express = require("express");
const path = require("path");
const sendEmail = require("./sendgrid");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.json({ message: "Email is required." });
  }

  try {
    await sendEmail(email);
    res.json({ message: "Subscription successful. Check your inbox!" });
  } catch (err) {
    res.json({ message: "Email received. Confirmation pending." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`FoodQuote running on port ${PORT}`);
});