import {
    useEffect,
    useState,
} from "react";


import {
    useNavigate,
    useParams,
} from "react-router-dom";


import UsuarioForm from "../components/UsuarioForm";


import {
    useUsuarios,
} from "../hooks/useUsuarios";


import type {
    ActualizarUsuarioRequest,
    UsuarioFormData,
} from "../types";



const EditarUsuarioPage = () => {


    const { id } = useParams();



    const navigate = useNavigate();




    const {
        obtenerPorId,
        actualizar,
    } = useUsuarios();





    const [
        usuario,
        setUsuario,
    ] = useState<ActualizarUsuarioRequest>();





    const [
        loading,
        setLoading,
    ] = useState(true);









    useEffect(() => {


        const cargarUsuario = async () => {


            if (!id) return;




            try {


                const data =

                    await obtenerPorId(
                        Number(id)
                    );





                setUsuario({



                    nombre: data.nombre,



                    apellido: data.apellido,



                    correo: data.correo,



                    telefono: data.telefono,



                    idRol: data.idRol,



                });




            }
            finally {


                setLoading(false);


            }



        };




        cargarUsuario();




    }, [

        id,

        obtenerPorId,

    ]);









    const handleSubmit = async (

        data: UsuarioFormData

    ) => {



        if (!id) return;





        const usuarioActualizado:
            ActualizarUsuarioRequest = {



                nombre:

                    data.nombre ?? "",




                apellido:

                    data.apellido,




                correo:

                    data.correo ?? "",




                telefono:

                    data.telefono,




                idRol:

                    data.idRol ?? 0,



            };







        await actualizar(


            Number(id),


            usuarioActualizado


        );





        navigate("/usuarios");



    };









    if (loading) {



        return (


            <p className="p-10">


                Cargando usuario...


            </p>


        );



    }









    return (



        <div className="mx-auto max-w-5xl p-10">





            <h1 className="mb-8 text-3xl font-bold">


                Editar usuario



            </h1>







            {

                usuario && (



                    <UsuarioForm


                        defaultValues={usuario}


                        onSubmit={handleSubmit}



                    />



                )


            }







        </div>



    );



};




export default EditarUsuarioPage;