import React from "react";

const AddPicture = (props: any) => {
  const { picture } = props;
  return (
    <img
      style={{
        height: "100%",
        borderRadius: "16px 30px 30px 16px",
        border: "2px solid #3F3979",
        marginLeft: "50%",
        transform: "translateX(-50%)",
      }}
      src={picture}
      alt="camion"
    />
  );
};

export default AddPicture;
