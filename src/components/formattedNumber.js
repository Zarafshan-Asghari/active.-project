function Formattednumber({ number1, number2, text }) {
  return (
    <div className="flex flex-col space-y-4">
      {/* Number  */}
      <span className="text-3xl  font-semibold text-gray-500">
        <span className="border-b-2 border-green-500 pb-2"> {number1}</span>,
        {number2}
      </span>
      {/* text */}
      <p className="capitalize">{text}</p>
    </div>
  );
}
export default Formattednumber;
