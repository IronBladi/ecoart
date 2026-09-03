interface Props {

    estado:string;

}



const EstadoBadge = ({
    estado,
}:Props)=>{


const publicada =
    estado.toLowerCase() === "publicada";



return (

<span

className={`

rounded-full

px-3

py-1

text-sm

font-semibold


${

publicada

?

"bg-green-100 text-green-700"

:

"bg-gray-200 text-gray-700"

}

`}

>

{

publicada

?

"Publicada"

:

"Archivada"

}


</span>


);


};



export default EstadoBadge;