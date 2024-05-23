import NavBar from "../components/nav-bar";
import Footer from "../components/footer";

const About = () => {
    return (
        <main className="flex min-h-screen flex-col bg-[#070707]">
            <NavBar />
            <div className="container mx-auto p-12 mt-20">
                About Me
            </div>
            <Footer /> 
        </main>
   );
};

export default About;