const mongoose=require('mongoose')
const PORT = process.env.PORT || 8080;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to the database"))
.catch((err) => console.log(err));

const db= mongoose.connection;
module.export=db