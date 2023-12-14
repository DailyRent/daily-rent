// удаляет фото из Cloudinary
// publicId - автоматически сгенерированный by Cloudinary адрес фото
import crypto from "crypto";


export const handleDeleteImgFromCloudinary = async (publicId) => {

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const apiSecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;
    const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
    
    // генерирует подпись
    const generateSignature = () => {
        return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
    };

    // шифрует для клоудинари сгенерированную подпись
    const generateSHA1 = (data) => {
        const hash = crypto.createHash("sha1");
        hash.update(data);
        return hash.digest("hex");
    };
    
    const timestamp = new Date().getTime();

    const signature = generateSHA1(generateSignature());

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

    try {
         await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                public_id: publicId,
                signature,
                api_key: apiKey,
                timestamp,
            }),
        });
        
        // console.log("Picture was deleted from Сloudinary");
    } catch (error) {
        console.error("error", error);
    }
}