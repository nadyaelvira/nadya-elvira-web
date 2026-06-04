import Button from "./_components/button"

export default function PageNavbar() {
    return (
        <div className="bg-white h-screen p-4">
            <Button icon="/layout-dashboard.svg" title="Dashboard" />
            <Button icon="/message-circle.svg" title="Messages" />
            <Button icon="/checks.svg" title="Tasks" />
            <Button icon="/notebook-pen.svg" title="Notes" />
            <Button icon="/mail.svg" title="Emails" />
            <Button icon="/brand-databricks.svg" title="Reports" />
            <Button icon="/arrow-fork.svg" title="Tasks" />


            <button className="flex justify-center items-center gap-2">
                <img src=" /chevron-down.svg" />
                <p className="text-m">Favorites</p>
            </button>
        </div>
    )
}