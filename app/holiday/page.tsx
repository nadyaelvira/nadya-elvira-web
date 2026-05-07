export default function HolidayPage() {
    return (
        <div className="bg-gray-300 h-screen flex justify-center items-center">
            
            <div className="bg-white h-95 w-60 rounded-4xl flex flex-col p-3 gap-3">
                <div>
                    <img src="/imageSan.jpg" className="h-55 rounded-4xl" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">San Francisco</h1>
                    <p className="text-xs text-gray-400">Premium economy</p>
                </div>

                <div className="flex gap-5">
                    <div className="flex items-center gap-1">
                        <img src=" /tag.svg" className="h-4 w-4" />
                        <p className="text-sm font-semibold">from $240</p>
                    </div>
                    <div className=" flex items-center gap-1">
                        <img src=" /plane-tilt.svg" className="h-4 w-4" />
                        <p className="text-sm font-semibold">SFO</p>
                    </div>
                </div>

                <div className="flex gap-2 justify-center items-center">
                    <div className="bg-black h-8 w-43 rounded-full flex justify-center items-center">
                        <button className="text-white">Search flight</button>
                    </div>

                    <div>
                    <button className="flex justify-center items-center rounded-full h-8 w-8 bg-white border-2 border-gray-300">
                        <img src="/heart.svg" className="h-5 w-5"/>
                    </button>
                    </div>
                </div>

            </div>

        </div>
    )
}