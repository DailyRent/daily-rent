import mongoose, { Schema } from "mongoose";


const apartmentSchema = new Schema({
    objNumber: {
        type: String,
        unique: true,
        required: true,
    },
    top: {
        type: Boolean,
    },
    titleImg: {
        type: String,
        required: true,
    },
    imgs: {
        type: Array,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    flatNumber: {
        type: String,
        required: true,
    },
    googleMapLocation: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    roomsQuantity: {
        type: String,
        required: true,
    },
    bookingUrl: {
        type: String,
        unique: true,
    },
    amenities: {
        type: Array,
    },
    // эти свойства будут заходить в amenities, благодаря checkbox
    // Air conditioning: bool,
    // SmartTV: bool,
    // WiFi: bool,
    // Bath: bool,
    // Shower: bool,
    // Jacuzzi: bool,
    // Microwave: bool,
    // Washing machine: bool,
    // Balcony: bool,
    // Boiler: bool,  -  котел
    // Water heater: bool,
    // Parking: bool,

    description: {
        type: String,
        required: true,
    },
},
    { timestamps: true },
)


// export default mongoose.model("Apartment", apartmentSchema);
//If the Apartment collection does not exist - create a new one.
export default mongoose.models.Apartment || mongoose.model("Apartment", apartmentSchema);