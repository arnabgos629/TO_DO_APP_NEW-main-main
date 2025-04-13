const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose.connect("mongodb+srv://arnabgos629:BOPSshiaZFeUFgYt@cluster0.1giys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
      console.log("Connected");
    });
  } catch (error) {
    console.log(error);
  }
};
conn();
