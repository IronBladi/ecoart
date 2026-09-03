import CatalogCard from "./CatalogCard";
import CatalogLoading from "./CatalogLoading";
import CatalogEmpty from "./CatalogEmpty";

import type {
    CatalogoInmueble,
} from "../types";

interface Props {

    inmuebles: CatalogoInmueble[];

    loading: boolean;

}

const CatalogGrid = ({
    inmuebles,
    loading,
}: Props) => {

    if (loading) {

        return <CatalogLoading />;

    }

    if (inmuebles.length === 0) {

        return <CatalogEmpty />;

    }

    return (

        <section
            className="
                mx-auto
                max-w-7xl
                px-6
                py-14
            "
        >

            <div
                className="
                    mb-10
                    flex
                    items-center
                    justify-between
                "
            >

                <div>

                    <h2
                        className="
                            text-3xl
                            font-bold
                            text-[#386641]
                        "
                    >

                        Inmuebles disponibles

                    </h2>

                    <p
                        className="
                            mt-2
                            text-gray-500
                        "
                    >

                        {inmuebles.length} inmueble{inmuebles.length !== 1 ? "s" : ""} encontrado{inmuebles.length !== 1 ? "s" : ""}

                    </p>

                </div>

            </div>

            <div
                className="
                    grid
                    gap-8
                    sm:grid-cols-2
                    xl:grid-cols-3
                "
            >

                {inmuebles.map((inmueble) => (

                    <CatalogCard
                        key={inmueble.id}
                        inmueble={inmueble}
                    />

                ))}

            </div>

        </section>

    );

};

export default CatalogGrid;