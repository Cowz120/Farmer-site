import { Progress } from "@/components/ui/progress"

export function ActiveUsers() {
  return (
    <div className="space-y-6 border rounded-xl p-4 mx-auto my-0 max-w-4xl" style={{height:"296px"}}>
      <h2 className="text-lg font-semibold text-gray-800 mx-6 "> Active users in country</h2>
      <div className="flex items-center justify-between ">
        <div className="flex flex-col w-fit">
          <h3 className="text-sm font-medium">Kenya</h3>
        <Progress className="[&>*]:bg-red-600 " style={{ width: "280px" }} value={27} />
        </div>
        
        <p className="text-xs text-muted-foreground">27% </p>
      </div>
      <div className="flex items-center  justify-between">
        <div>
          <h3 className="text-sm font-medium">Rwanda</h3>
        <Progress className="[&>*]:bg-red-600" style={{ width: "280px" }} value={60} />

        </div>
        
        <p className="text-xs ">60% </p>
      </div>
      <div className="flex items-center justify-between " >
        <div>
        <h3 className="text-sm font-medium">Europe (UK)</h3>
        <Progress className="[&>*]:bg-red-600" style={{ width: "280px" }} value={35} />

        </div>
        
        <p className="text-xs ">35% </p>
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex flex-col w-fit">
          <h3 className="text-sm font-medium">USA</h3>
        <Progress className=" [&>*]:bg-red-600" style={{ width: "280px" }} value={25.55} />


        </div>
        
        <p className="text-xs ">25.55% </p>
      </div>
    </div>
  )
}
