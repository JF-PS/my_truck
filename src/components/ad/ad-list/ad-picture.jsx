const imgStyle = {
  height: "100%",
  borderRadius: "16px 30px 30px 16px",
  border: "2px solid #3F3979",
  marginLeft: "50%",
  transform: "translateX(-50%)",
};

/**
 *
 * ## Usage
 * ```jsx
 *
 *  <AddPicture picture="https://mypicture.jpg"  />
 *
 * ```
 */

const AddPicture = (props) => {
  const { picture } = props;
  return <img style={imgStyle} src={picture} alt="camion" />;
};

export default AddPicture;
