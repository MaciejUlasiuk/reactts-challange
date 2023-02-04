interface IObject {
  x: Number;
  y: Number;
}
interface IProps {
  circles: IObject[];
}

const Circles: React.FC<IProps> = ({ circles }) => {
  console.log(circles);
  return (
    <>
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            left: `${circle.x}px`,
            top: `${circle.y}px`,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "red",
            position: "absolute",
          }}
        />
      ))}
    </>
  );
};

export default Circles;
