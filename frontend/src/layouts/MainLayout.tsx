import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen bg-background text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>

      </div>

    </div>
  );
};

export default MainLayout;