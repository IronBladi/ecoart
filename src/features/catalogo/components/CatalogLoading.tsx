const CatalogLoading = () => {

    return (

        <div
            className="
                py-16
                text-center
            "
        >

            <div
                className="
                    mx-auto
                    h-12
                    w-12
                    animate-spin
                    rounded-full
                    border-4
                    border-[#6A994E]
                    border-t-transparent
                "
            />

            <p
                className="
                    mt-5
                    text-lg
                    text-gray-500
                "
            >

                Cargando inmuebles...

            </p>

        </div>

    );

};

export default CatalogLoading;