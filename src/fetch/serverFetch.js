export const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/apartments`, {
    cache: "no-store",
  });
  console.log("getData", res);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getById = async (id) => {
  try {
    const res = await fetch(`/api/apartments/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// /components/Hero/Hero.jsx (server component)
// const Hero = async () => {
// const data = await getData();
// console.log("server fetch", data[0]);
// ......
// }

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
