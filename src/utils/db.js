import mongoose from "mongoose";


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("database connection was successfully completed!")
    } catch (error) {
        throw new Error("Connection failed.");
    }
}


export default connect;