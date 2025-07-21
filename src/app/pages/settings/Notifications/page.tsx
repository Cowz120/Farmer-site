import React from 'react'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"


const Notifications = () => {
  return (
    <div className='px-6 py-2  items-center justify-center bg-white  w-fit h-screen border-1'>
        <form action="" style={{height:"100%", width:"600px"}}>
        <div >
            <div className=' flex items-center justify-between' style={{height:"100px"}}>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold'>Do Not Disturb</p>
                    <p>Pause all notifications</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Switch id="do-not-disturb"  />
                    
                </div>


            </div>
            <div className='flex flex-col gap-2   '>
            <p className='font-bold text-2xl'>Reports</p>
            <RadioGroup defaultValue="comfortable" className='flex items-center justify-between gap-2'>
                <div className="flex items-center gap-3">
                     <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Daily</Label>
                </div>
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Bi weekly</Label>
                </div>
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Weekly</Label>
                </div>
                <div>
                    <RadioGroupItem value="cozy" id="r4" />
                    <Label htmlFor="r4">Monthly</Label>
                </div>
                </RadioGroup>
            </div>
            <div className=' gap-8 h-full'>

            <div className='flex  gap-2 items-center justify-between p-4 '>
                <p className='font-semibold'>Email Notifications</p>
                <Switch id="email-notifications" />

            </div>
            <div className='flex  gap-2 items-center justify-between p-4 '>
                <p className='font-semibold'>SMS Notifications</p>
                <Switch id="sms-notifications" />
            </div >
            <div  className='flex  gap-2 items-center justify-between p-4 '>
                <p className='font-semibold'>Push Notifications</p>
                <Switch id="push-notifications" />
            </div>
            <div className='flex  gap-2 items-center justify-between p-4 '>
                <p className='font-semibold'>In-App Notifications</p>
                <Switch id="in-app-notifications"  />

            </div>
            </div>
          <div className='flex items-center justify-between '>
          <div className='px-4 py-2 bg-gray-500 text-white rounded-md '>
            <button type='reset'>Cancel</button>

          </div>
          <div className='items-center justify-center border-1 rounded-md px-4 py-2 bg-red-500'>
           < button type='submit'>Save Changes</button>
          </div>
          </div>

        </div>
        </form>
    </div>
  )
}

export default Notifications