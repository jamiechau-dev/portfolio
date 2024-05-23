import HeroSection from "./components/hero-section";
import NavBar from "./components/nav-bar";
import LandingCard from "./components/landing-card"
import SocialCard from "./components/social-card"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#070707]">
      <NavBar />
        <div className="container mx-auto py-4 px-12 mt-20">
            <HeroSection />
        </div>
        {/* <div className="">
            <SocialCard />
        </div> */}
        <div className="container mx-auto p-12">
            <LandingCard />
        </div>
        <Footer />
    </main>
  );
}