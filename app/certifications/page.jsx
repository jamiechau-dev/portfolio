import NavBar from "../components/nav-bar";
import Footer from "../components/footer";
import YouTubeEmbed from "./components/youtube";

const Certifications = () => {
    return (
        <main className="flex min-h-screen flex-col bg-[#070707]">
            <NavBar />
            <div className="container mx-auto mt-20 mb-10">
                <YouTubeEmbed
                    src="https://www.youtube.com/embed/0eKgUN9csFw?si=zTg0zkFXlIH6OpG5&start=610"
                />
            </div>
            <Footer />
        </main>
    );
};

export default Certifications;