import type { Plantilla } from "../../plantillas/types";


interface Props {

    plantillas: Plantilla[];

    value: number | null;

    onChange: (
        value: number | null
    ) => void;

    error?: string;

}



const SelectorPlantilla = ({
    plantillas,
    value,
    onChange,
    error,
}: Props) => {


    return (

        <div>


            <label
                className="
                    mb-2
                    block
                    font-medium
                "
            >

                Plantilla

            </label>



            <select

                value={
                    value ?? ""
                }


                onChange={(e) => {


                    const nuevoValor =
                        e.target.value === ""
                            ? null
                            : Number(
                                e.target.value
                            );


                    onChange(
                        nuevoValor
                    );


                }}


                className="
                    w-full
                    rounded-lg
                    border
                    p-3
                "

            >


                <option value="">

                    Sin plantilla

                </option>



                {


                    plantillas

                        .filter(
                            (x) =>
                                x.activa
                        )


                        .map(
                            (plantilla) => (

                                <option

                                    key={
                                        plantilla.id
                                    }

                                    value={
                                        plantilla.id
                                    }

                                >

                                    {
                                        plantilla.nombre
                                    }


                                </option>

                            )

                        )


                }


            </select>




            {

                error && (

                    <p
                        className="
                            mt-1
                            text-sm
                            text-red-600
                        "
                    >

                        {error}

                    </p>

                )

            }



        </div>

    );

};


export default SelectorPlantilla;