// const  mongoose = require('mongoose');

// mongoose.set('strictQuery', false);
const mongoURI =
  "mongodb+srv://goFoodApplication44:goFoodApplication44@cluster0.9bocpkf.mongodb.net/goFood?retryWrites=true&w=majority";

// const mongoConnection = async () =>{
//     const connectionResult = await mongoose.connect(mongoURI, {useNewUrlParser: true});
//     if(connectionResult){
//         console.log('Database connection successfull..');

//     }else{
//         console.log('something went wrong');
//     }

// }

// mongoConnection();

const mongoose = require("mongoose");

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Database connection successfull..");
    const db = mongoose.connection.db;
    const collection = db.collection("foodData");
    const data = await collection.find({}).toArray();

    const collection2 = db.collection("foodCategory");
    const foodCategoryData = await collection2.find({}).toArray();

    global.food_category = foodCategoryData;
    global.food_items = data;
  })
  .catch((error) => console.error(error));
