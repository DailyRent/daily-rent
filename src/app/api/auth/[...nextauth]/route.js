import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";


const handler = NextAuth({
    providers: [
        // при использовании провайдеров, в которых заранее нужно прописать разрешения
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // при использовании различных провайдеров в реальном времени
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                await connect();

                try {
                    // ищет пользователя по имэйлу в БД
                    const user = await User.findOne({ email: credentials.email })

                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            throw new Error("Wrong Credentials.");
                        }

                    } else {
                        throw new Error("User not found.");
                    }

                } catch (err) {
                    throw new Error(err);
                }
            }
        })
    ],
    pages: {
        // про ошибке при логине переходит на указанную ниже страницу (в нашем случае остается на той же)
        error: "/dashboard/login"
    },
})


export { handler as GET, handler as POST };