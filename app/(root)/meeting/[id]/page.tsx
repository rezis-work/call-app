import React from "react";

const Meeeting = ({ params }: { params: { id: string } }) => {
  return <div>Meeeting Room: #{params.id}</div>;
};

export default Meeeting;
