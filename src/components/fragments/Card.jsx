import React from "react";

function Card({ children }) {
  return (
    <div className="bg-green-300 flex gap-3 m-2 rounded-md ">{children}</div>
  );
}
Card.img = ({ children, img }) => {
  return (
    <div className="relative border-green-100 flex justify-center items-center gap-2 flex-col m-2 p-2">
      <div className=" top-0">
        <img
          src={img.link}
          className="rounded-full border-2 border-green-50 p-2"
          alt={img.alt || "img"}
        />
      </div>
      <div className="mt-3 bottom-0"> {children} </div>
    </div>
  );
};

Card.body = ({ children }) => {
  return (
    <Card>
      <div className="flex-col mb-3 h-full">{children}</div>
    </Card>
  );
};

Card.title = ({ children }) => {
  return (
    <Card>
      <div className="text-2xl font-bold"> {children} </div>
    </Card>
  );
};

export default Card;
