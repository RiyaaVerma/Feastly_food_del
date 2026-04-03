import mongoose from "mongoose";
import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected");
    } catch (error) {
        console.log("DB Error:", error);
    }
};
