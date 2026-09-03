import {
    Navbar,
    Hero,
    HomeCarousel,
    Footer,
} from "../components";

import {
    CatalogSearchSection,
} from "../../catalogo";

import {
    TipoCambioCard,
} from "../../tipoCambio";

const HomePage = () => {

    return (

        <div className="min-h-screen bg-[#F8F9FA]">

            <Navbar />

            <main>

                <Hero />

                <TipoCambioCard />

                <HomeCarousel />

                <CatalogSearchSection />

            </main>

            <Footer />

        </div>

    );

};

export default HomePage;