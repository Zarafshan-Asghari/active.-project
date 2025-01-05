function ServiceItem({ icon, header, text }) {
  return (
    <div className="flex flex-col p-4 space-y-2">
      <span className="text-3xl text-green-500 font-bold ">{icon}</span>
      <h4 className="capitalize text-lg">{header}</h4>
      <p className="capitalize text-base max-w-xs ">{text}</p>
    </div>
  );
}
export default ServiceItem;
