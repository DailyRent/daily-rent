export const getMetaById = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/apartments/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};