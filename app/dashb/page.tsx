import Button from "./_components/button"
import Header from "./_components/header"

export default function PageDashboard () {
    return (
        <div className="bg-purple-950 h-screen w-50 p-3 flex flex-col gap-3">
            <div className="flex gap-3">
                <img src=" /ikn.jpg" className="h-7 w-7 rounded-full"/>
                <h1 className="text-xl font-bold text-white">CodingLab</h1>
            </div>
            <div className="flex-col flex gap-3">
                <Header title="Main Menu"/>
                <Button imgSrc="/heart.svg" title="Dashboard" />
                <Button imgSrc="/heart.svg" title="Overview" />
                <Button imgSrc="/heart.svg" title="Analystic" />

                <Header title="General"/>
                <Button imgSrc="/heart.svg" title="Projects" />
                <Button imgSrc="/heart.svg" title="Groups" />
                <Button imgSrc="/heart.svg" title="Reports" />

                <Header title="Accounts"/>
                <Button imgSrc="/heart.svg" title="Profile" />
                <Button imgSrc="/heart.svg" title="Settings" />
            </div>
        </div>
    )
}