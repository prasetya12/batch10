import Badge from "./Badge";

export default function Card(props) {
  const data = props.product;
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col mt-5">
        <div>
          <img className="rounded-t-lg" src={data.thumbnail} alt="" />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div>{data.title}</div>
            <Badge active={true} title={data.category} />
          </div>
          <div className="font-semibold mt-5">{data.price}</div>
        </div>
      </div>
    </>
  );
}
