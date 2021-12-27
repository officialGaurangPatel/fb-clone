import Image from "next/image"
import { BellIcon, ChatIcon, ChevronDownIcon, FlagIcon, HomeIcon, PlayIcon, SearchIcon, ShoppingCartIcon, UserGroupIcon, ViewGridAddIcon } from "@heroicons/react/outline"
import HeaderIcon from "./HeaderIcon"

function Heeader() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* HeaderLeft */}
            <div className="flex items-center">
                <Image src="https://links.papareact.com/5me" width={40} height={40} layout="fixed" />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text -gray-600" />
                    <input type="text" placeholder="Search Facebook" className="hidden md:inline-flex  ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" />
                </div>
            </div>
            {/* HeaderCenter */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon Icon={HomeIcon} active />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* HeaderRight */}
            <div className="flex items-center md:space-x-2 justify-end">
                {/* Profile Pic */}
                <p className="whitespace-nowrap font-semibold pr-3">Gaurang Patel</p>
                <ViewGridAddIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    )
}

export default Heeader
