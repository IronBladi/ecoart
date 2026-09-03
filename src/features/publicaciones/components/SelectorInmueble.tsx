import type { Inmueble } from "../../inmuebles/types";


interface Props {

    inmuebles: Inmueble[];

    value?: number;

    onChange: (
        value:number
    )=>void;

    error?:string;

}



const SelectorInmueble = ({
    inmuebles,
    value,
    onChange,
    error,
}:Props)=>{


return (

<div>


<label className="
mb-2
block
font-medium
">

Inmueble

</label>



<select

value={
    value ?? 0
}


onChange={(e)=>

    onChange(
        Number(
            e.target.value
        )
    )

}


className="
w-full
rounded-lg
border
p-3
"

>



<option value={0}>

Seleccione un inmueble

</option>



{

inmuebles.length === 0 && (

<option disabled>

No existen inmuebles disponibles

</option>

)

}





{

inmuebles.map((item)=>(


<option

key={
    item.id
}

value={
    item.id
}

>


{
    item.codigo
}

{" - "}


{
    item.titulo
}


</option>


))


}



</select>




{

error && (


<p className="
mt-1
text-sm
text-red-600
">


{error}


</p>


)


}



</div>


);


};


export default SelectorInmueble;