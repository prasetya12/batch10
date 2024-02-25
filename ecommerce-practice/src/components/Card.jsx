import Badge from "./Badge";

export default function Card() {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col mt-5">
        <div>
          <img
            className="rounded-t-lg"
            src="https://res.cloudinary.com/dthrfgcan/image/upload/v1689470153/cld-sample-4.jpg"
            alt=""
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div>Iphone 9</div>
            <Badge active={true} />
          </div>
          <div className="font-semibold mt-5">Rp.1000</div>
        </div>
      </div>
    </>
  );
}
