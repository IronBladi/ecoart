import PublicacionCard from "./PublicacionCard";

import type {
    Publicacion,
} from "../types";


interface Props {


    publicaciones: Publicacion[];


    onCambiarEstado: (

        id:number,

        activo:boolean

    )=>void;


}



const PublicacionList = ({

    publicaciones,

    onCambiarEstado,

}:Props)=>{



if(
    !publicaciones ||
    publicaciones.length === 0
){


return (


<div

className="
rounded-xl
bg-white
p-10
text-center
shadow
"

>


<h2

className="
text-xl
font-semibold
text-gray-600
"

>


No existen publicaciones registradas.


</h2>



<p className="
mt-3
text-gray-500
">


Cuando se cree una publicación aparecerá aquí.


</p>



</div>


);


}




return (



<div

className="
grid
gap-6
md:grid-cols-2
xl:grid-cols-3
"

>


{


publicaciones.map((publicacion)=>(



<PublicacionCard


key={
    publicacion.id
}


publicacion={
    publicacion
}


onCambiarEstado={
    onCambiarEstado
}


/>



))


}



</div>



);



};



export default PublicacionList;