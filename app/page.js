import Navbar from "./components/navbar/page";
import Hero from "./components/hero/page";
import FeaturedBlogs from "./components/featured-blogs/page";
import Features from "./components/features/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <Navbar />
      <main>
        <Hero />
        <FeaturedBlogs />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
