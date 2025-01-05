function BlogItem({ img, date, title, text, writerImg, writerName }) {
  return (
    <div className="flex flex-col space-y-2 ">
      {/* img */}
      <img className="rounded-md mb-2 " src={img} alt="" />
      {/* contents */}
      <div className="flex flex-col  space-y-2 py-2 px-6 ">
        {/* Date */}
        <span className="px-2 uppercase text-sm  tracking-wide">
          development:
          <span className="text-xs"> {date}</span>
        </span>

        {/* title */}

        <h3 className="text-[18px] text-gray-600  transition duration-300 hover:text-green-500  font-medium ">
          {title}
        </h3>
        <p className="  max-w-sm">{text}</p>

        {/* text */}
        <div className="flex items-center  space-x-6 pt-4">
          <img
            src={writerImg}
            className="w-12 h-12 rounded-full shadow-md"
            alt=""
          />
          <p className="capitalize text-base text-gray-700">
            {writerName} <br />{" "}
            <span className="text-xs text-gray-500">lead product designer</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
