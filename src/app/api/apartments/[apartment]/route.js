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

// export const GET = async (request, { params }) => {
//     const { id } = params;
//     try {
//         await connect();

//         const data = await Apartment.find(id);

//         return new NextResponse(JSON.stringify(data), { status: 200 })

//     } catch (error) {
//         return new NextResponse(error, { status: 500 })
//     }
// }

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


export const DELETE = async (request, { params }) => {
    const { id } = params;
    try {
        await connect();

        await Apartment.findByIdAndDelete(id);

        return new NextResponse("Apartment has been deleted.", { status: 200 })

    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}