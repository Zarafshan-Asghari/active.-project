import "./Card.css";
function Card() {
  return (
    <div className="relative group overflow-hidden w-[20.0625rem] h-[14.04881rem] p-4 flex shrink-0  flex-col gap-6 items-start border-[0.809px] border-neutral-500 bg-[#141416] rounded-[1.51606rem] shadow-sm  hover:scale-105 transition duration-500 ease-in">
      {/* card header */}
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-1">
          <span>name</span>
          <span>position</span>
        </div>
        {/* <img src="" alt="image" /> */}
        <div>img</div>
      </div>
      {/* card content */}

      <p className="font-Inter text-[0.60644rem] font-normal not-italic leading-[0.90963rem]">
        Sarah has contributed significantly to our open-source projects,
        mentoring new developers along the way. Her recent project on enhancing
        site performance has resulted in a 50% reduction in load times,
        benefiting all users.
      </p>

      {/* card footer */}
      <div className="flex gap-[1rem] items-center group">
        {/* arrow */}
        {/* transform: rotate(-2.121deg); */}
        <div className="group-hover:translate-x-1 hover:cursor-pointer transition duration-500 rotate-[-2.121deg]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.68269rem"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
          >
            <path
              d="M11.861 3.79708C12.013 3.63346 12.0035 3.37766 11.8399 3.22573L9.17358 0.749884C9.00997 0.597954 8.75416 0.607428 8.60223 0.771045C8.4503 0.934663 8.45978 1.19046 8.6234 1.34239L10.9934 3.54315L8.79268 5.91319C8.64075 6.07681 8.65023 6.33261 8.81384 6.48454C8.97746 6.63647 9.23326 6.627 9.38519 6.46338L11.861 3.79708ZM0.664133 4.33027L11.5798 3.92599L11.5498 3.11798L0.634207 3.52226L0.664133 4.33027Z"
              fill="#6366F1"
            />
          </svg>
        </div>

        <a className="hover:cursor-pointer text-xs leading-[0.7075rem] font-normal">
          view more
        </a>
      </div>
      {/* absolut baground behind the card when it is active or hover */}
      {/* group-hover:absolute group-hover:top-0 group-hover:right-0 group-hover:rounded-t-[1.51606rem] group-hover:w-[7.75rem] group-hover:h-[6.75rem] group-hover:bg-gradient-to-bl  group-hover:from-[#6366F1] group-hover:to-[#141416] group-hover:roundedTop */}
      <div className=" group-hover:absolute group-hover:top-0 group-hover:right-0 group-hover:rounded-t-[1.51606rem] group-hover:w-[7.75rem] group-hover:h-[6.75rem] group-hover:bg-gradient-to-bl  group-hover:from-[#6366F1] group-hover:to-[#141416] group-hover:roundedTop customStyle"></div>

      <div className="group-hover:absolute group-hover:bottom-0 group-hover:left-0  group-hover:w-[7.75rem] group-hover:h-[6.75rem] group-hover:bg-gradient-to-tr group-hover:from-[#6366F1] group-hover:to-[#141416] group-hover:roundedBottom customStyle"></div>
    </div>
  );
}

export default Card;
