import UsuarioCard from "./UsuarioCard";

import type {
    Usuario,
} from "../types";


interface Props {

    usuarios: Usuario[];

    usuarioActualId: number | null;

    onCambiarEstado: (
        id: number,
        activo: boolean
    ) => void | Promise<void>;

    onEditar: (
        id: number
    ) => void;

}



const UsuarioList = ({
    usuarios,
    usuarioActualId,
    onCambiarEstado,
    onEditar,
}: Props) => {


    const usuariosVisibles =
        usuarios.filter(
            (usuario) =>
                usuario.id !== usuarioActualId
        );


    return (

        <div
            className="
                grid
                gap-6
            "
        >

            {
                usuariosVisibles.map(
                    (usuario) => (

                        <UsuarioCard

                            key={usuario.id}

                            usuario={usuario}

                            esUsuarioActual={
                                usuario.id ===
                                usuarioActualId
                            }

                            onCambiarEstado={
                                onCambiarEstado
                            }

                            onEditar={
                                onEditar
                            }

                        />

                    )
                )
            }


        </div>

    );

};


export default UsuarioList;