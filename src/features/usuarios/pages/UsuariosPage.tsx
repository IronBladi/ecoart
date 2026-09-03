import {
    useNavigate,
} from "react-router-dom";

import {
    useUsuarios,
} from "../hooks/useUsuarios";

import UsuarioList from "../components/UsuarioList";

import {
    useAuth,
} from "../../auth/hooks/useAuth";


const UsuariosPage = () => {


    const navigate = useNavigate();


    const {
        usuario: usuarioActual,
    } = useAuth();


    const {
        usuarios,
        loading,
        cambiarEstado,
    } = useUsuarios();





    const editarUsuario = (
        id: number
    ) => {

        navigate(
            `/usuarios/editar/${id}`
        );

    };











    if (loading) {

        return (

            <p className="p-10">

                Cargando usuarios...

            </p>

        );

    }











    return (

        <div className="mx-auto max-w-7xl p-10">



            {/* =========================
                ENCABEZADO
            ========================== */}



            <div
                className="
                    mb-8
                    flex
                    items-center
                    justify-between
                "
            >


                <h1
                    className="
                        text-3xl
                        font-bold
                    "
                >

                    Administración de usuarios


                </h1>





                <button

                    onClick={() =>
                        navigate(
                            "/usuarios/nuevo"
                        )
                    }

                    className="
                        rounded
                        bg-emerald-600
                        px-4
                        py-2
                        text-white
                        transition
                        hover:bg-emerald-700
                    "

                >

                    Nuevo usuario


                </button>



            </div>











            {/* =========================
                LISTADO DE USUARIOS
            ========================== */}



            <UsuarioList

                usuarios={usuarios}

                usuarioActualId={
                    usuarioActual
                        ? Number(usuarioActual.id)
                        : null
                }

                onCambiarEstado={
                    cambiarEstado
                }

                onEditar={
                    editarUsuario
                }

            />




        </div>


    );

};


export default UsuariosPage;