export default function tes() {
    return (
        <div className="bg-gray-300 h-screen flex justify-center items-center">
            <div className="bg-white h-90 w-80 flex gap-3 flex-col rounded-2xl p-4">

                <div className="flex justify-between">
                    <p className="text-l font-bold">Client details</p>
                    <img src="/x.svg" className="h-4 w-4" />
                </div>

                <div className="flex gap-3">
                    <div>
                        <img src="/img4.jpg" className="h-10 w-10 rounded-full" />
                    </div>
                    
                    <div>
                        <p className="text-sm font-semibold">Cornelius Greenfelder</p>
                            <div className="bg-green-300 rounded-full w-18 flex justify-center items-center gap-1">
                                <img src="/star.svg" className="h-2.5 w-2.5" />
                                <p className="text-[10px] font-bold">Verified</p>
                            </div>  
                    </div>    
                </div>

                <div className="bg-purple-100 h-22 w-72 rounded-2xl">

                    <div className="flex flex-col p-2 gap-2">
                        <h1 className="font-bold">Project</h1>

                        <div className="flex gap-20">
                            <div>
                                <div className="flex gap-1">
                                    <img src="hourglass.svg" className="h-3 w-3" />
                                    <p className="text-xs">Ongoing</p>
                                </div>
                                <p>2($3.8k)</p>
                            </div>
                            <div>
                                <div className="flex gap-1">
                                    <img src="hourglass.svg" className="h-3 w-3"/>
                                    <p className="text-xs">Completed</p>
                                </div>
                                <p>25($54k)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    
                </div>

            </div>
        </div>
    )
}