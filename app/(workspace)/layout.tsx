import Sidebar from "@/app/components/sidebar";
// import "../globals.css";

export default function WorkspaceLayout({
     children,
} : {
    children : React.ReactNode
}) {
    return(
        <div className="flex min-h-screen w-full bg-gray-50">
            <Sidebar/>
        <div className="min-w-0 flex-1">
            <main className="min-h-screen p-8 text-black">
                {children}
            </main>
        </div>

        </div>
    )
}