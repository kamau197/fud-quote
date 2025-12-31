const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (to) => {
  const msg = {
    to,
    from: process.env.FROM_EMAIL,
    subject: "Welcome to FoodQuote 🍽️",
    text: "Thanks for subscribing! You'll receive food inspiration soon."
  };

  await sgMail.send(msg);
};