import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
export default function ListCard() {
  const { data } = useSelector((state) => state.product);
  return (
    <>
      data dari component lain
      <div className=" grid grid-cols-4 gap-2">
        {data.map((item, index) => (
          <Card product={item} key={index} />
        ))}
      </div>
    </>
  );
}
