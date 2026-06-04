export default function ButtonM () {
    return (
        <button className="flex justify-between">
            <div className="flex gap-3">
                <img src=" /heart.svg"/>
                <p className="text-xs font-bold text-white">Dashboard</p>
            </div>
            <div>
                <img src=" /star.svg" className="h-4 w-4 flex justify-center items-center"/>
            </div>
        </button>
    )
}