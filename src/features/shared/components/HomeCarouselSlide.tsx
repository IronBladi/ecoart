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
                grid
                min-h-[650px]
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-xl
                lg:grid-cols-2
            "
        >

            {/* Mitad izquierda */}
            <HomePropertyPanel
                item={item}
            />

            {/* Mitad derecha */}
            <HomePublicationPanel
                item={item}
            />

        </article>

    );

};

export default HomeCarouselSlide;