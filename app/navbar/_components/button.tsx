export default function Button({icon, title} : {icon : string, title : string}) {
    return (
        <button className="flex gap-3">
            <img src={icon} className="h-5 w-5"/>
            <p className="text-m font-bold">{title}</p>
        </button>
    )
}