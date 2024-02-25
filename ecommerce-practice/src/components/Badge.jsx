export default function Badge({ active }) {
  return (
    <>
      <div
        style={{ paddingTop: "0.1em", paddingBottom: "0.1rem" }}
        className={`text-xs px-3 rounded-full ${
          active ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-800"
        }`}
      >
        Smartphone
      </div>
    </>
  );
}
