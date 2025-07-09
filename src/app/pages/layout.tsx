import Navbar from "./navbar/Navbar";
import SideBar from "./sidebar/SideBar";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-hidden">
        <div className="flex h-full">
          <div className="fixed top-0 left-0 w-1/5 h-full">
            <SideBar />
          </div>
          <div className="flex flex-col w-4/5 ml-[20%]">
            <div className="fixed top-0 w-4/5 h-16 z-10">
              <Navbar />
            </div>
            <div className="mt-16 h-full   overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}