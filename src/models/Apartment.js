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
    priority: {
        type: String,
        required: true,
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
    addressEn: {
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
    },
    bedsQuantity: {
        type: String,
        required: true,
    },
    amenities: {
        type: Array,
    },
    description: {
        type: String,
        required: true,
    },
    descriptionEn: {
        type: String,
        required: true,
    },
},
    { timestamps: true },
)


//If the Apartment collection does not exist - create a new one.
export default mongoose.models.Apartment || mongoose.model("Apartment", apartmentSchema);