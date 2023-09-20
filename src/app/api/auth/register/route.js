import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export const POST = async (request) => {
    const { name, email, password } = await request.json();

    // подключается к БД
    await connect();

    // шифрует пароль
    const hashedPassword = await bcrypt.hash(password, 5);

    // создает нового пользователя с зашифрованным паролем
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });


    try {
        // сохраняет нового пользователя в БД
        await newUser.save();

        return new NextResponse("User has been created", {
            status: 201,
        })

    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        })
    }
}