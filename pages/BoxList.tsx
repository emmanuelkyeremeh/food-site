import Image from "next/image";

const BoxList = ({ Img, text }) => {
  return (
    <div className="box-list">
      <Image
        src={Img}
        alt=""
        width="400"
        height="200"
        className="box-list-image"
      />
      <p className="box-text">{text}</p>
    </div>
  );
};

export default BoxList;
