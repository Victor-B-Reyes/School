import Sidebar from "./sidebar";


function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto bg-gray-100 p-6">
        {children}
      </div>
    </div>
  );
}

export default Layout;