import mongoose from "mongoose";
import 'dotenv/config'

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URL);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;