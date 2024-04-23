// мысли на будущее
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
    // возможно не apartment, а только apartmentId
    apartment: {
        type: String,  // подтягивать данные из модели Apartment
    },
},
    { timestamps: true },
)


//If the Order collection does not exist - create a new one.
export default mongoose.models.Order || mongoose.model("Order", orderSchema);