import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faHouse } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
    return (
        <aside id="logo-sidebar" className="fixed border-r border-r-gray-500/10 py-6 top-0 left-0 z-40 w-72 h-screen flex-col flex items-stretch transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar" aria-modal="true" role="dialog">
    
        <div className="flex items-center justify-center">
        <h1 className="font-bold text-4xl text-white">ZEPHAL</h1>
        </div>
        <div className="h-screen nav-bar overflow-y-auto pt-10">    
            <ul className="space-y-3 h-96  font-semibold mx-12">
                <li className="flex items-center justify-center">
                <Link href="/dashboard"  className="flex  text-white bg-gradient-to-tl from-blue-500/25 to-blue-800/100 rounded-lg  w-full   ease-in duration-200 hover:opacity-100 p-3 "><FontAwesomeIcon className='w-5 mr-3' icon={faHouse} />Dashboard
                </Link>
                </li>
                <li className="flex items-center justify-center">
                <Link href="/dashboard/games"  className="flex  text-gray-500  w-full  hover:text-white ease-in duration-200 hover:opacity-100 p-3 ">
                <FontAwesomeIcon className='w-5 mr-3' icon={faGamepad} /> Games
                </Link>
                </li>






            </ul>
            </div>
            <div className="flex items-center flex-row mx-12 gap-3">
                <div className='flex items-center justify-center'>
                    <img src="data:image/jpeg;base64,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" className='w-10 h-10 rounded-full' alt="" />
                </div>
        <div>
            <h1 className='text-white font-semibold text-lg w-32 text-ellipsis'>jackie</h1>
            <Link href="" className='text-gray-500 text-sm hover:text-blue-500'>Logout</Link>
        </div>
            </div>


            
        
    
    </aside>
    );
}

