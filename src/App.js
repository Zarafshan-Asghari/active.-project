import Home from "./pages/home/home";
import About from "./pages/about/about";
import Services from "./pages/services/services";
import BlogPosts from "./pages/blogPosts/blogPosts";
import Feature from "./pages/features/feature";
import Community from "./components/community/Community";
function App() {
  return (
    <>
      {/* home page */}
      <Home />

      {/* About & service*/}
      <div className="bg-gray-100 p-20">
        <About />
        <Services />
      </div>
      {/* blog post */}
      <BlogPosts />

      {/* features */}
      <div className="bg-gray-100 p-20">
        <Feature />
      </div>
      <Community />
    </>
  );
}
export default App;
