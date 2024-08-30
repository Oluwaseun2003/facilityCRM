import SideBar from "@/src/components/SideNav";
import TopNav from "@/src/components/TopNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen flex-col">
      <div className="flex-none">
        <TopNav />
      </div>
      <div className="relative flex flex-1">
        {/* Sidebar */}
        <div className=" fixed top-0 left-0 h-full">
          <SideBar />
        </div>
        {/* Content */}
        <div className="w-full mt-0 ml-10 md:ml-8 p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
