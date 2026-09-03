import { useNavigate } from "react-router-dom";

import UsuarioForm from "../components/UsuarioForm";

import { useUsuarios } from "../hooks/useUsuarios";

import type {
    CrearUsuarioRequest,
    UsuarioFormData,
} from "../types";

const CrearUsuarioPage = () => {

    const navigate = useNavigate();

    const {
        crear,
    } = useUsuarios();

    const handleSubmit = async (
        data: UsuarioFormData
    ) => {

        // Validación de seguridad para TypeScript.
        // Estos campos son obligatorios al crear un usuario.
        if (
            !data.nombre ||
            !data.correo ||
            !data.password ||
            data.idRol === undefined
        ) {
            return;
        }

        const usuario: CrearUsuarioRequest = {

            nombre: data.nombre,

            apellido: data.apellido,

            correo: data.correo,

            telefono: data.telefono,

            password: data.password,

            idRol: data.idRol,

        };

        await crear(usuario);

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