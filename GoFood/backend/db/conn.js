// const  mongoose = require('mongoose');

// mongoose.set('strictQuery', false);
 const mongoURI = 'mongodb+srv://goFoodApplication44:goFoodApplication44@cluster0.9bocpkf.mongodb.net/goFood?retryWrites=true&w=majority';

// const mongoConnection = async () =>{
//     const connectionResult = await mongoose.connect(mongoURI, {useNewUrlParser: true});
//     if(connectionResult){
//         console.log('Database connection successfull..');

  
//     }else{
//         console.log('something went wrong');
//     }



           
// }


// mongoConnection();



const mongoose = require('mongoose');

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('Database connection successfull..');
  const db = mongoose.connection.db;
  const collection = db.collection('foodCategory');
  const data = await collection.find({}).toArray();
//   console.log(data); // it will print your collection data
//   mongoose.connection.close(); // close the connection when done
})
.catch((error) => console.error(error));
