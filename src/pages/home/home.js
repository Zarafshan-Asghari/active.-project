import Hero from "../../components/hero/hero";
import MyNavbar from "../../components/navbar";
function Home() {
  return (
    <>
      {/* Navbar & Hero section*/}
      <div className="max-w-6xl mx-auto">
        <MyNavbar />
        <Hero />
      </div>
    </>
  );
}

export default Home;
