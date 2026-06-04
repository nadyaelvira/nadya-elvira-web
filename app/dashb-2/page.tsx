import HeaderM from "./_components/headerM"

export default function PageDashboard2 () {
    return (
        <div className="bg-gray-700 h-screen w-50 p-4 flex flex-col gap-8">
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <img src=" /ikn.jpg" className="h-10 w-10 rounded-xl" />
                <div>
                    <h1 className="text-white font-semibold">Acme Inc</h1>
                    <p className="text-white text-xs">Enterprise</p>
                </div>
                </div>
                <div>
                    <img src=" /star.svg" className="h-4 w-4 flex justify-center items-center"/>
                </div>
            </div>

            <div className="flex-col flex gap-3">
                <HeaderM title="Platfrom" />

                <div className="flex justify-between">
                <div className="flex gap-3">
                    <img src=" /heart.svg"/>
                    <p className="text-xs font-bold text-white">Dashboard</p>
                </div>
                <div>
                    <img src=" /a-arrow-down.svg" className="h-4 w-4 flex justify-center items-center"/>
                </div>
                </div>

                <div className="flex justify-between">
                <div className="flex gap-3">
                    <img src=" /heart.svg"/>
                    <p className="text-xs font-bold text-white">Dashboard</p>
                </div>
                <div>
                    <img src=" /star.svg" className="h-4 w-4 flex justify-center items-center"/>
                </div>
                </div>

                <div className="flex justify-between">
                <div className="flex gap-3">
                    <img src=" /heart.svg"/>
                    <p className="text-xs font-bold text-white">Dashboard</p>
                </div>
                <div>
                    <img src=" /star.svg" className="h-4 w-4 flex justify-center items-center"/>
                </div>
                </div>

                <div className="flex justify-between">
                <div className="flex gap-3">
                    <img src=" /heart.svg"/>
                    <p className="text-xs font-bold text-white">Dashboard</p>
                </div>
                <div>
                    <img src=" /star.svg" className="h-4 w-4 flex justify-center items-center"/>
                </div>
                </div>
            </div>

        </div>
    )
}