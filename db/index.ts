import mongoose from 'mongoose';

export const connectToDatabase = async () => {
    try{
      if(mongoose.connections && mongoose.connections[0].readyState){
        return
      }
      const {connection} = await mongoose.connect(process.env.MONGODB_URI!, {
        dbName: "main"
      })
      console.log("Db Connected")
    } catch(e){
      throw new Error("Error connecting to db")
    }
  }