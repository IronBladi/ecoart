import { useNavigate } from "react-router-dom";

import UsuarioForm from "../components/UsuarioForm";

import { useUsuarios } from "../hooks/useUsuarios";

import type {
    CrearUsuarioRequest,
} from "../types";

const CrearUsuarioPage = () => {

    const navigate = useNavigate();

    const {
        crear,
    } = useUsuarios();

    const handleSubmit = async (
        data: CrearUsuarioRequest
    ) => {

        await crear(data);

        navigate("/usuarios");

    };

    return (

        <div className="mx-auto max-w-5xl p-10">

            <h1 className="mb-8 text-3xl font-bold">

                Registrar usuario

            </h1>

            <UsuarioForm
                onSubmit={handleSubmit}
            />

        </div>

    );

};

export default CrearUsuarioPage;