// 'use server'

// import { headers } from 'next/headers'
// import { UAParser } from 'ua-parser-js'

// export const isMobileDevice = () => {
//   if (typeof process === 'undefined') {
//     throw new Error('[Server method] you are importing a server-only module outside of server')
//   }

//   const { get } = headers()
//   const ua = get('user-agent')

//   const device = new UAParser(ua || '').getDevice()

//   return device.type === 'mobile'
// }

import {useEffect, useState} from "react"

const isMobileDevice = (px_width: number) => {
    const [width, setWidth] = useState<number>(0)
    const [isMobile, setIsMobile] = useState(false)
    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        setWidth(window.innerWidth)
        setIsMobile(width <= 768)
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [width]);

    useEffect(() => {
        setIsMobile(width <= px_width)
    }, [px_width, width])

    if(isMobile === null) {
        return false
    }

    return isMobile
}

export default isMobileDevice;