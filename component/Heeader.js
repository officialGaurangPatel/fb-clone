import Image from "next/image"
import { SearchIcon } from "@heroicons/react/outline"

function Heeader() {
    return (
        <div>
            <h1>Header</h1>
            {/* HeaderLeft */}
            <div className="flex items-center">
                <Image src="https://links.papareact.com/5me" width={40} height={40} layout="fixed" />
                <div className="flex ml-2 items-center rounded-full">
                    <SearchIcon className="h-6" />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            {/* HeaderCenter */}

            {/* HeaderRight */}
        </div>
    )
}

export default Heeader
