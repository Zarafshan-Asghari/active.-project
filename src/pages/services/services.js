import ServiceItem from "../../components/serviceItem";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineWebAsset } from "react-icons/md";
import { GiFlexibleLamp } from "react-icons/gi";
import img from "./img_v_1.jpg";
import Formattednumber from "../../components/formattedNumber";
import Title from "../../components/title";

function Services() {
  const serviceData = [
    {
      icon: <GrTechnology />,
      header: "technology",
      text: " Separated they live in Bookmarksgrove right at the coast",
    },
    {
      icon: <MdOutlineWebAsset />,
      header: "branding",
      text: "  Separated they live in Bookmarksgrove right at the coast",
    },
    {
      icon: <GiFlexibleLamp />,
      header: "Brilliant Ideas",
      text: "  Separated they live in Bookmarksgrove right at the coast",
    },
  ];
  // stattictics
  const data = [
    { number1: 1, number2: 234, text: "coffee" },
    { number1: 6, number2: 204, text: "project" },
    { number1: 3, number2: 530, text: "codes" },
  ];

  return (
    <section className="max-w-6xl mx-auto">
      <div className="flex flex-col  gap-16 items-center justify-center p-12">
        {/* service items */}
        <div className="flex flex-col gap-6 md:flex-row">
          {serviceData.map((service) => (
            <ServiceItem key={service.header} {...service} />
          ))}
        </div>
        {/* service  */}
        <div className="flex flex-col md:flex-row gap-8 p-8 items-start  justify-start ">
          {/* image */}
          <div className="w-full md:w-1/2">
            <img src={img} alt="" />
          </div>
          {/* contents */}
          <div className="flex flex-col space-y-4">
            <Title text1="why us" text2="for far away behined mountains" />
            <p className="max-w-sm mb-6 text-lg font-thin">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium rem iure voluptatibus, explicabo ab quas. Eveniet,
              laboriosam iure harum corrupti aut illum, eius odio quasi esse
              sapiente saepe nulla alias.
            </p>
            <p className="max-w-sm mb-6 text-lg font-thin">
              Laudantium rem iure voluptatibus, explicabo ab quas. Eveniet,
              laboriosam iure harum corrupti aut illum, eius odio quasi esse
              sapiente saepe nulla alias.
            </p>

            {/* statictics */}
            <div className="flex gap-4 items-center justify-between ">
              {data.map((item, index) => (
                <Formattednumber
                  key={index}
                  number1={item.number1}
                  number2={item.number2}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
