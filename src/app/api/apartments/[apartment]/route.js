// будет редактироваться в процессе работы с БД
import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Apartment from "@/models/Apartment";


export const GET = async (request, { params }) => {
    try {
        await connect();

        const data = await Apartment.find(params);

        return new NextResponse(JSON.stringify(data), { status: 200 })

    } catch (error) {
        return new NextResponse("Database Error.", { status: 500 })
    }
}


export const POST = async (request) => {
    const body = await request.json();
    console.log("body in POST", body)

    const newApartment = new Apartment(body);
    console.log("newApartment", newApartment)

    try {
        await connect();
        console.log("after connect()")
        await newApartment.save();
        console.log("after newApartment.save()")

        return new NextResponse("Apartment has been created.", { status: 201 })
    } catch (err) {
        return new NextResponse(err, { status: 500 })
    }
}