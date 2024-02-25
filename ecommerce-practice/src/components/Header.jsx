export default function Header() {
  return (
    <>
      <div className="flex justify-between px-10 py-5 border-b border-gray-200 items-center">
        <div>
          <img className="w-60" src="/images/logo/logo1.svg" />
        </div>
        <div className="font-semibold">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
          </ul>
        </div>
      </div>
    </>
  );
}
