import { useNavigate } from "react-router-dom";

import PropietarioForm from "../components/PropietarioForm";

import { propietarioService } from "../services/propietarioService";

import type { CrearPropietarioRequest } from "../types";

const CrearPropietarioPage = () => {

    const navigate = useNavigate();

    const handleCrear = async (
        data: CrearPropietarioRequest
    ) => {

        await propietarioService.crear(data);

        navigate("/propietarios");

    };

    return (

        <div className="mx-auto max-w-5xl p-10">

            <div className="mb-8">

                <h1 className="text-3xl font-bold text-[#386641]">

                    Registrar propietario

                </h1>

                <p className="mt-2 text-gray-500">

                    Complete la información del propietario.

                </p>

            </div>

            <PropietarioForm
                onSubmit={handleCrear}
            />

        </div>

    );

};

export default CrearPropietarioPage;