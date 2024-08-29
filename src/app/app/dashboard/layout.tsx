import SideBar from "@/src/components/UI/SideNav";
import TopNav from "@/src/components/UI/TopNav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col">
            <div className="flex-none">
                <TopNav />
            </div>
            <div className="flex flex-1 md:flex-row">
                <div className="flex-none md:w-64">
                    <SideBar />
                </div>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                    {children}
                </div>
            </div>
        </div>
    );
}
