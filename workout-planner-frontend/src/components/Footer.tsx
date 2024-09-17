"use client"
import { DumbbellIcon } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react";


type FooterProps = {
    setFooterHeight: (height: number) => void
}

const Footer = (props: FooterProps) => {
    const { setFooterHeight } = props
    const componentRef = useRef(null);


    useEffect(() => {
        // Function to update the height
        const updateHeight = () => {
            if (componentRef.current) {
                //@ts-expect-error type not working
                setFooterHeight(componentRef.current.offsetHeight);
            }
        };
        // Set initial height
        updateHeight();

        // Add event listener for window resize
        window.addEventListener('resize', updateHeight);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, [setFooterHeight]);



    return (
        <footer className="bg-primary text-primary-foreground py-6 w-[100%] shrink-0" ref={componentRef}>
            <div className="flex flex-col gap-4 items-center justify-between px-4 md:px-6 md:flex-row" >
                <div className="flex items-center gap-2" >
                    <DumbbellIcon className="h-6 w-6" />
                    <span className="text-xl font-bold">Custom Workout Plans</span>
                </div>
                <div>Design by <Link target="_blank" href="https://kristiankjerstad.github.io/personal-portfolio" className="hover:underline" prefetch={false}>
                    Kristian Kjerstad
                </Link> © {new Date().getFullYear()}</div>
                <nav className="flex gap-4 sm:gap-6 pt-4">
                    <Link href="/terms-of-service" className="hover:underline" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="/privacy-policy" className="hover:underline" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="/contact" className="hover:underline" prefetch={false}>
                        Contact
                    </Link>
                </nav>
            </div>
        </footer>
    )
}

export default Footer