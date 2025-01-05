function FeatureItem(icon, title, text) {
  return (
    <div className="flex space-y-4 p-2 rounded-md hover:bg-gray-50 transition duration-150 ">
      {/* icon */}
      <span className="rounded-md p-2 text-green-500 bg-gray-200 hover:bg-green-500 hover:text-gray-100 ">
        {icon}
      </span>
      {/* content */}
      <div className="flex flex-col space-y-2">
        {/* title */}
        <h6>{title}</h6>
        {/* text */}
        <p>{text}</p>
      </div>
    </div>
  );
}
export default FeatureItem;
