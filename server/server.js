const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");

const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");

const commonFeatureRouter = require("./routes/common/feature-routes");

const Razorpay = require("razorpay");

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose
  .connect("mongodb+srv://mohitmuley:mohitmuley1204@cluster0.tnyel.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// API Routes
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);

app.use("/api/common/feature", commonFeatureRouter);

// Razorpay setup
const razorpay = new Razorpay({
  key_id: "rzp_test_tpclvUbIpO4uPB",        
  key_secret: "J5tQGML8uDH3MbwKCMZiw7Uf", 
});

// Razorpay order creation route
app.post("/api/create-order", async (req, res) => {
  const { totalAmount } = req.body;

  const options = {
    amount: totalAmount * 100, // amount in paise
    currency: "INR",
    receipt: "receipt_order_" + Math.floor(Math.random() * 1000000),
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json({ order });
  } catch (err) {
    console.error("Razorpay Error:", err);
    res.status(500).json({ error: "Failed to create Razorpay order" });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
