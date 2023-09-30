import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Apartment from "@/models/Apartment";


export const GET = async (request) => {
    try {
        await connect();

        const data = await Apartment.find();

        return new NextResponse(JSON.stringify(data), { status: 200 })

    } catch (error) {
        return new NextResponse("Database Error.", { status: 500 })
    }
}

export const POST = async (request) => {
    const body = await request.json();

    const newApartment = new Apartment(body);

    try {
        await connect();
        await newApartment.save();

        return new NextResponse("Apartment has been created.", { status: 201 })
    } catch (err) {
        return new NextResponse(err, { status: 500 })
    }
}