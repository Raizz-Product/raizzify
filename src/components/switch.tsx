"use client"
import { useToggle } from "@/state/toggle-state"
import { usePathname, useRouter } from "next/navigation"
import path from "path"
import { useEffect } from "react"

const Switch = () => {

    const pathname = usePathname()
    const router = useRouter()
    const { isToggled, toggle } = useToggle()


    const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        pathname === "/" ? router.push("/customer") : router.push("/")
    }

    useEffect(() => {
        pathname === "/customer" ? toggle(true) : toggle(false)
    }, [pathname])

    return (
        <label className="inline-flex items-center cursor-pointer">
            <span className={`me-3 text-sm font-medium ${!isToggled ? "toggle-gradient" : ""}`}>For Salon Owners</span>

            <input type="checkbox" checked={isToggled} onChange={handleToggleChange} className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            <span className={`ms-3 text-sm font-medium ${isToggled ? "toggle-gradient" : ""}`}>For Customers</span>
        </label>)
}
export default Switch