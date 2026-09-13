import HomePropertyPanel from "./HomePropertyPanel";
import HomePublicationPanel from "./HomePublicationPanel";

import type { HomeCarrusel } from "./types/homeCarrusel";

interface Props {

    item: HomeCarrusel;

}

const HomeCarouselSlide = ({
    item,
}: Props) => {

    return (

        <article
            className="
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-sm
                border
                border-gray-100/80
                transition-shadow
                duration-300
                hover:shadow-md
                min-h-[580px]
                grid
                lg:grid-cols-2
            "
        >

            {/* Mitad izquierda — imagen del inmueble */}
            <HomePropertyPanel
                item={item}
            />

            {/* Mitad derecha — información editorial */}
            <HomePublicationPanel
                item={item}
            />

        </article>

    );

};

export default HomeCarouselSlide;