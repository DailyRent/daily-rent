import { v2 as cloudinary } from "cloudinary";

export const POST = async (req, res) => {
    console.log("req", req);
    console.log("response", res);

    try {
        console.log("try");
        const signature = cloudinary.utils.api_sign_request(
            paramsToSign,
            process.env.CLOUDINARY_API_SECRET
        );
        res.status(200).json({
            signature,
        });
    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            error: e.message,
        });
    }
}