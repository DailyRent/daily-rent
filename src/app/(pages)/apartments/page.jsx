import ApartmentsComponent from "@/components/ApartmentsComponent/ApartmentsComponent";

export const metadata = {
  title: "Квартири подобово Daily Rent ⭐ оренда квартири Суми",
  description:
    "Оренда квартир подобово або погодинно Суми ⭐ Зняти квартиру на добу, день або ніч ✔️ Безліч варіантів в широкому ціновому діапазоні на Daily Rent",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}apartments`,
  },
};

const Apartments = () => {
  return <ApartmentsComponent />;
};

export default Apartments;
