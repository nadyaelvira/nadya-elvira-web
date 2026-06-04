export default function Button({icon, title} : {icon : string, title : string}) {
    return (
        <button className="flex justify-center items-center gap-3">
            <img src={icon}/>
            <p className="text-m font-bold">{title}</p>
        </button>
    )
}