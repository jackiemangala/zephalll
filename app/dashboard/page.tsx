'use client'

import Redeem from "@/components/ui/Redeem"


export default function Home() {
    return (
    
      <div className="flex flex-row justify-between">
        <div>
        <h1 className="text-white font-semibold text-2xl">Dashboard</h1>
        </div>
        <div>
        <Redeem></Redeem>
        </div>
      </div>
    )
  }
  