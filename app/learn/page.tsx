export default function LearnPage(){
    return (
        <div className="bg-white h-screen flex gap-4 justify-center items-center flex-col">

<div className="flex gap-4">
        <div className="bg-cyan-100 h-72 w-115 flex flex-col justify-between p-12 rounded-4xl text-blue-950">
                <div className="flex gap-4">
                    <img src="/palette.svg" />
                    <p>Design</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Adobe Photoshop</h1>
                    <p className="text-lg">in 3 days</p>
                </div>
        </div>

        <div className="bg-green-100 h-72 w-115 flex flex-col justify-between p-12 rounded-4xl text-blue-950">
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <img src="/terminal-2.svg" />
                    <p>AI</p>
                </div>
                    <img src="/star.svg" />
            </div>
                <div>
                    <h1 className="text-3xl font-bold">DALL·E 2, Midjourney, Stable Diffusion</h1>
                    <p className="text-lg">in 5 days</p>
                </div>
                </div>
</div>


<div className="flex gap-4">
            <div className="bg-purple-100 h-72 w-96 flex flex-col justify-between p-12 rounded-4xl text-blue-950">
                <div className="flex gap-4">
                    <img src="/palette.svg" />
                    <p>Design</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Figma</h1>
                    <p className="text-lg"> 8 hours ago</p>
                </div>
            </div>

            <div className="bg-orange-100 h-72 w-96 flex flex-col justify-between p-12 rounded-4xl text-blue-950">
                <div className="flex gap-4">
                    <img src="/code.svg" />
                    <p>Coding</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Python</h1>
                    <p className="text-lg"> 2 days ago</p>
                </div>
            </div>

            <div className="bg-red-100 h-72 w-96 flex flex-col justify-between p-12 rounded-4xl text-blue-950">
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

