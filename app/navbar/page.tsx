import Button from "./_components/button"
import Header from "./_components/header"

export default function PageNavbar() {
    return (
        <div className="bg-white h-screen w-80 p-4 flex flex-col gap-7">
            <div className="flex flex-col gap-3">
            <Button icon="/layout-dashboard.svg" title="Dashboard" />
            <Button icon="/message-circle.svg" title="Messages" />
            <Button icon="/checks.svg" title="Tasks" />
            <Button icon="/notebook-pen.svg" title="Notes" />
            <Button icon="/mail.svg" title="Emails" />
            <Button icon="/brand-databricks.svg" title="Reports" />
            <Button icon="/arrow-fork.svg" title="Automations" />
            <Button icon="/git-fork.svg" title="Workflows" />
            </div>

            
            <div className="flex flex-col gap-3">
            <Header icon="/chevron-down.svg" title="Favorites" />
            
            <Button icon="/square-key.svg" title="Key Accounts" />
            <Button icon="/chart-no-axes-column-increasing.svg" title="Strategic Initiatives" />
            <Button icon="/activity-heartbeat.svg" title="Focus Areas" />
            <Button icon="/flame.svg" title="Starred Items" />
            </div>

        </div>
    )
}