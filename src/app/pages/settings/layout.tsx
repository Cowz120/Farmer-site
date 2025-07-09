import SideBar from "./sidebar/Settingssidebar";


export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className="h-1061px  w-723px items-center justify-between"
       
      >
        <div className="flex  h-screen  w-screen ">
            <div className=" w-1/6 ">
                <SideBar/>
            </div>
            <div className=" w-5/6 ">
              
                {children}
            </div>
        </div>

      </body>
    </html>
  );
}