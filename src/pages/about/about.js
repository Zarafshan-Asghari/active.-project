import img from "./image/img_v_3.jpg";
import Title from "../../components/title";
import Button from "../../components/button";
function About() {
  return (
    <section className="max-w-6xl mx-auto bg-white ">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center p-12">
        {/* content */}
        <div className="flex flex-col space-y-6 max-w-md p-4">
          <Title
            text1="Our Mission"
            text2="
               The Big Oxmox advised her not to do so, because there were thousands."
          />
          <p className="mt-6 max-w-sm">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country.
          </p>
          <p className="mb-6 max-w-sm">
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli.
          </p>

          <Button BtnText="get started" />
        </div>
        {/* image */}
        <div className="w-full md:w-1/2  flex justify-center">
          <img src={img} className="w-full md:w-2/3" alt="" />
        </div>
      </div>
    </section>
  );
}
export default About;
