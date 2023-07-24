'use client'

import { useToast } from "@/components/ui/use-toast"
import { Skeleton } from "@/components/ui/skeleton"

export default function card() {
    const { toast } = useToast()
    return (
        <a onClick={() => {
            toast({
              title: "Successfully copied code",
              description: "Copy and paste into your browser to join.",
            })
          }}> 
          <div className="border  rounded-lg border-gray-500/10">
            <img className="w-full rounded-t-lg opacity-50" src="https://tr.rbxcdn.com/0943606356f836c558d33591b4292f46/768/432/Image/Png" alt="" />
            <div className="p-3 flex justify-between items-center">
    <h1 className="text-white text-lg w-48 text-ellipsis overflow-hidden whitespace-nowrap font-semibold">Arsenal</h1>
    <p className="text-gray-500 text-sm font-semibold">50 users</p>
            </div>
          </div>
          </a>
    )
}