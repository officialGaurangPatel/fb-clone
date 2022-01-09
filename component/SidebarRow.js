import React from 'react'

const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
            {src && (
                <img
                    className="rounded-full cursor-pointer h-8 w-8"
                    src={src}
                    width={30}
                    heigth={30}
                    layout="fixed"
                />
            )}

            {Icon && (
                <Icon className="h-8 w-8 text-blue-500" />
            )}

            <p className='hidden sm:inline-flex font-medium'>{title}</p>
        </div>
    )
}

export default SidebarRow
