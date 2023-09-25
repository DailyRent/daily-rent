import React from "react";

const page = ({ params }) => {
  console.log(params.id);
  return <div>page {params.id}</div>;
};

export default page;
