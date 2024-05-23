import NavBar from "../components/nav-bar";
import Footer from "../components/footer";
import TechCard from "./components/tech-card";

const TechStack = () => {
    return (
        <main className="flex min-h-screen flex-col bg-[#070707]">
            <NavBar />
            <div className="container mx-auto p-12 mt-20">
                <TechCard />
            </div>
            <Footer />
        </main>
   );
};

export default TechStack;