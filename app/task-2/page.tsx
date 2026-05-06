export default function Task2(){
    return (
        <div className="bg-white h-235 w-335 flex gap-4 justify-center items-center flex-col">

        <div className="flex gap-5 justify-center">
            <div className="bg-cyan-100 h-77 w-113 flex flex-col justify-between p-9 rounded-4xl text-cyan-950">
                <div className="flex gap-4">
                    <img src="/palette.svg" />
                    <p>Design</p>
                </div>

                <div>
                    <h1 className="text-3xl font-bold">Adobe Photoshop</h1>
                     <br />

                    <div className="flex justify-between">
                        <p className="text-lg">in 3 days</p>
                            <div className="flex -space-x-3 items-center">
                                <img src="/img1.jpg" className="w-6 h-6 rounded-full border-2 border-white" />
                                <img src="/img2.jpg" className="w-6 h-6 rounded-full border-2 border-white" />
                                <img src="/img3.jpg" className="w-6 h-6 rounded-full border-2 border-white" />

                                <div className="flex items-center w-6 h-6 rounded-full bg-white px-1.5 text-xs">
                                +3
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        


            <div className="bg-green-100 h-77 w-113 flex flex-col justify-between p-9 rounded-4xl text-green-950">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <img src="/terminal-2.svg" />
                        <p>AI</p>
                    </div>
                        <img className="h-4 w-4" src="/star.svg" />
                    </div>
                        <div>
                        <h1 className="text-3xl font-bold">DALL•E 2, Midjourney, Stable Diffusion</h1>
                        <br />
                        
                    <div className="flex justify-between">
                        <p className="text-lg">in 5 days</p>

                        <div className="flex -space-x-3 items-center">
                            <img src="/img4.jpg" className="w-6 h-6 rounded-full border-2 border-white" />
                            <img src="/img5.jpg" className="w-6 h-6 rounded-full border-2 border-white" />
                            <img src="/img6.jpg" className="w-6 h-6 rounded-full border-2 border-white" />

                        <div className="flex items-center w-6 h-6 rounded-full bg-white px-1.5 text-xs">
                            +3
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


<div className="flex gap-4">
            <div className="bg-purple-100 h-67 w-73 flex flex-col justify-between p-9 rounded-4xl text-purple-950">
                <div className="flex gap-4">
                    <img src="/palette.svg" />
                    <p>Design</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Figma</h1>
                    <p className="text-lg"> 8 hours ago</p>
                </div>
            </div>

            <div className="bg-orange-100 h-67 w-73 flex flex-col justify-between p-9 rounded-4xl text-orange-950">
                <div className="flex gap-4">
                    <img src="/code.svg" />
                    <p>Coding</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Python</h1>
                    <p className="text-lg"> 2 days ago</p>
                </div>
            </div>

            <div className="bg-red-100 h-67 w-73 flex flex-col justify-between p-9 rounded-4xl text-red-950">
                <div className="flex gap-4">
                    <img src="/palette.svg" />
                    <p>Design</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Sketch</h1>
                    <p className="text-lg"> 4 days ago</p>
                </div>
            </div>
        </div>
</div>

    )
}