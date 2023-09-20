import mongoose, { Schema } from "mongoose";


const apartmentSchema = new Schema({
    // id: number;
    id: {
        type: String,
        unique: true,
        required: true,
    },
    // для отображения в слайдере на HomePage !?!?!?!?!?
    top: {
        type: Boolean,
    },
    titleImg: {
        type: String,
        required: true,
    },
    // может упустить здесь titleImg, а размещать её в imgs с каким-то уникальным названием во всех массивах, напр: mainPhoto, или тоже titleImg
    imgs: {
        type: Array,
        required: true,
    },
    // возможно лучше разделить адрес на поля: город, улица, дом, квартира ?!??! по той причине,что мы не собираемся показывать номер квартиры
    address: {
        type: String,
        required: true,
    },
    // ??? насколько необходимо,и как видим его работу
    googleMapLocation: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    // это можно реализовать на форме с помощью radio button
    roomQuantity: {
        type: Number,
        required: true,
    },
    // ??? что это ????
    airbnbUrl: {
        type: String,
        unique: true,
        required: true,
    },
    // ????
    bookingUrl: {
        type: String,
        unique: true,
        required: true,
    },
    amenities: {
        type: Array,
    },
    // эти свойства будут заходить в conditions, благодаря checkbox
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