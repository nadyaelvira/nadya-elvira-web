export default function Header({icon, title} : {icon : string, title : string})
{
    return (
        <button className="flex gap-3">
            <img src={icon} />
            <p className="text-m font-semibold">{title}</p>
        </button>
    )
}