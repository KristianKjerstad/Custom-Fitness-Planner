"use client"; // This is a client component 👈🏽
import { DumbbellIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { useState } from "react"


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
            <Link href="/#" className="flex items-center gap-2" prefetch={false}>
                <DumbbellIcon className="h-6 w-6" />
                <span className="text-xl font-bold">Custom Workout Plans</span>
            </Link>
            <nav className={`flex items-center gap-6 ${isMenuOpen ? "flex" : "hidden"} md:flex`}>
                <Link href="/#" className="hover:underline" prefetch={false}>
                    Home
                </Link>
                <Link href="/about" className="hover:underline" prefetch={false}>
                    About
                </Link>
                <Link href="/workouts" className="hover:underline" prefetch={false}>
                    Workouts
                </Link>
                <Link href="/contact" className="hover:underline" prefetch={false}>
                    Contact
                </Link>
            </nav>
            <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </div>
            <Link href="/#customize-workout">
                <Button variant="outline">Get Started</Button>
            </Link>
        </header>
    )
}