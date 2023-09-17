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