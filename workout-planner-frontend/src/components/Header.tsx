
"use client"; // This is a client component 👈🏽
import { DumbbellIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { useState } from "react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export const Header = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
            <Link href="/#" className="flex items-center gap-2" prefetch={false}>
                <DumbbellIcon className="h-6 w-6" />
                <span className="text-xl font-bold">Custom Workout Plans</span>
            </Link>
            <nav className="hidden lg:flex items-center space-x-6">
                <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Home
                </Link>
                <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    About
                </Link>
                <Link href="/workouts" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Workouts
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Contact
                </Link>
            </nav>
            {/* <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => { }}>
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </div> */}
            {/* <Link href="/#customize-workout">
                <Button variant="outline">Get Started</Button>
            </Link> */}
            <div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <div className="grid gap-6 p-6">
                            <Link href="/" className="text-l font-medium hover:underline underline-offset-4" prefetch={false}>
                                Home
                            </Link>
                            <Link href="/about" className="text-l font-medium hover:underline underline-offset-4" prefetch={false}>
                                About
                            </Link>
                            <Link href="/workouts" className="text-l font-medium hover:underline underline-offset-4" prefetch={false}>
                                Workouts
                            </Link>
                            <Link href="/contact" className="text-l font-medium hover:underline underline-offset-4" prefetch={false}>
                                Contact
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}