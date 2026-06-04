export default function Button({imgSrc, title}: {imgSrc: string, title:string}) 

{
    return (
        <button className="flex items-center gap-3">
            <img src={imgSrc}/>
            <p className="text-xs font-bold text-white">{title}</p>
        </button>        
    )
}