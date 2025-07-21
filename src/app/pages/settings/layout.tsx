import SideBar from "./sidebar/Settingssidebar";


export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body  className="h-1061px  w-723px items-center justify-between"
       
    //   >
        
            <div className="  flex mx-6 my-10  gap-4  w-full">
              <div className="w-fit">
                <SideBar/>
              </div>
                <div className="w-fit">
                  {children}
                </div>
           
              </div>

              
        

    //   </body>
    // </html>
  );
}