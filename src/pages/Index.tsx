import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import AppointmentForm from "@/components/AppointmentForm";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <AppointmentForm />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
