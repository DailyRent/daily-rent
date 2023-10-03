import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Apartment from "@/models/Apartment";


export const GET = async (request, { params }) => {

  const { id } = params;
  try {
    await connect();

    const data = await Apartment.findById(id);

    return new NextResponse(JSON.stringify(data), { status: 200 })

  } catch (error) {
    return new NextResponse(error, { status: 500 })
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


export const PUT = async (request, { params }) => {
  const { id } = params;
  const incomingData = await request.json();

  try {
    await connect();

    const updatedApartment = await Apartment.findByIdAndUpdate(id, incomingData);

    if (!updatedApartment) {
      return new NextResponse("Apartment not found", { status: 404 });
    }

    return new NextResponse("Apartment has been updated", { status: 200 });

  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};