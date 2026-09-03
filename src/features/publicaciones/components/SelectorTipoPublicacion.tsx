interface Props {

    value:number;

    onChange:(value:number)=>void;

    error?:string;

}


const SelectorTipoPublicacion = ({
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

Tipo de publicación

</label>



<select


value={value}


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


<option value={1}>
Facebook
</option>


<option value={2}>
Instagram
</option>


<option value={3}>
TikTok
</option>


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


export default SelectorTipoPublicacion;