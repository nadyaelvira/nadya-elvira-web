export default function HeaderM({title} : {title:string}) {
    return (
        <div>
            <h1 className="text-sm font-bold text-white">{title}</h1>
        </div>
    )
}