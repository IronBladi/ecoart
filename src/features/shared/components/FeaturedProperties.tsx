import {
    FiMapPin,
    FiHome,
    FiArrowRight,
} from "react-icons/fi";

const propiedades = [
    {
        id: 1,
        titulo: "Casa Moderna",
        ciudad: "Tarija",
        precio: "$120.000",
        imagen: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900",
    },
    {
        id: 2,
        titulo: "Departamento Familiar",
        ciudad: "Tarija",
        precio: "$85.000",
        imagen: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900",
    },
    {
        id: 3,
        titulo: "Terreno Urbano",
        ciudad: "Tarija",
        precio: "$45.000",
        imagen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900",
    },
];

const FeaturedProperties = () => {

    return (

        <section className="bg-[#F8F8F6] py-20">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-12 flex items-center justify-between">

                    <div>

                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#6A994E]">

                            Destacados

                        </p>

                        <h2 className="text-4xl font-bold text-[#1F1F1F]">

                            Inmuebles destacados

                        </h2>

                    </div>

                    <button
                        className="
                            hidden
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-[#386641]
                            px-5
                            py-3
                            font-semibold
                            text-[#386641]
                            transition
                            hover:bg-[#386641]
                            hover:text-white
                            md:flex
                        "
                    >

                        Ver todos

                        <FiArrowRight />

                    </button>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {propiedades.map((item) => (

                        <article
                            key={item.id}
                            className="
                                overflow-hidden
                                rounded-3xl
                                bg-white
                                shadow-md
                                transition
                                duration-300
                                hover:-translate-y-2
                                hover:shadow-xl
                            "
                        >

                            <img
                                src={item.imagen}
                                alt={item.titulo}
                                className="h-64 w-full object-cover"
                            />

                            <div className="space-y-4 p-6">

                                <div className="flex items-center justify-between">

                                    <span
                                        className="
                                            rounded-full
                                            bg-[#386641]/10
                                            px-3
                                            py-1
                                            text-xs
                                            font-semibold
                                            text-[#386641]
                                        "
                                    >

                                        Venta

                                    </span>

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-1
                                            text-[#6A994E]
                                        "
                                    >

                                        <FiHome />

                                        Casa

                                    </div>

                                </div>

                                <h3
                                    className="
                                        text-2xl
                                        font-bold
                                        text-[#1F1F1F]
                                    "
                                >

                                    {item.titulo}

                                </h3>

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        text-gray-500
                                    "
                                >

                                    <FiMapPin />

                                    {item.ciudad}

                                </div>

                                <div className="flex items-center justify-between">

                                    <span
                                        className="
                                            text-2xl
                                            font-bold
                                            text-[#386641]
                                        "
                                    >

                                        {item.precio}

                                    </span>

                                    <button
                                        className="
                                            rounded-xl
                                            bg-[#386641]
                                            px-4
                                            py-2
                                            text-white
                                            transition
                                            hover:bg-[#2F5536]
                                        "
                                    >

                                        Ver detalle

                                    </button>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default FeaturedProperties;