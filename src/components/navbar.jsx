import React, { useState } from "react";

export const NabVar = () => {
    const [open, setOpen] = useState(false)

    return (

        <div className="bg-violet-500 py-2 fixed top-0 left-0 right-0 shadow-md">
            <button className="position absolute top-2 left-2" onClick={() => setOpen(true)} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 bg text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <h1 className="text-center text-white">JEC</h1>
            <div className={` ${!open && "hidden"} bg-ligth-400/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}>
            </div>
            <div className={`${open ? "w-80" : "w-0"}bg-violet-200  min-h-screen w-80 fixed top-0 left-0 transition-all duration-300`}>
                <div className={`${!open && "hidden"}`}>
                    <button className="ml-2 mt-2" onClick={() => setOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="text-white" />
                        </svg>

                    </button>
                </div>
            </div>


        </div>

    );
}




export default NabVar;