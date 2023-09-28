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
    // ??? насколько необходимо,и как видим его работу 
    googleMapLocation: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    // это можно реализовать на форме с помощью radio button
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
    // airCond: bool,
    // smartTV: bool,
    // bath: bool,
    // shower: bool,
    // jacuzzi: bool,
    // microwave: bool,
    // washingMachine: bool,
    // balcony: bool,
    // boiler: bool,
    // waterHeater: bool,
    // parking: bool,

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