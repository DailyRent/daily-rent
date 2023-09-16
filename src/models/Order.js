// мысли набудущее
import mongoose, { Schema } from "mongoose";


const orderSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
    },
    phone: {
        type: String, /// ???? or number
    },
    dateFrom: {
        type: Number,
    },
    dateTo: {
        type: Number,
    },
    apartment: {
        type: String,  // подтягивать данные из модели Apartment
    },
},
    { timestamps: true },
)


export default mongoose.model("Order", orderSchema);