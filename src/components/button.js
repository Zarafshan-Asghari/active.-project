function Button(props) {
  return (
    <>
      <button className="px-4 py-2  w-40 rounded-[100px] capitalize  transition duration-300 bg-green-500 border-2 border-green-500 text-lg font-simibold hover:bg-white text-white hover:text-green-500">
        {props.BtnText}
      </button>
    </>
  );
}
export default Button;
