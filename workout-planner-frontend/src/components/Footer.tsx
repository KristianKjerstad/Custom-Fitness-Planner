import { DumbbellIcon } from "lucide-react"
import Link from "next/link"


const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground py-6 w-full shrink-0">
            <div className="container flex flex-col gap-4 items-center justify-between px-4 md:px-6 md:flex-row">
                <div className="flex items-center gap-2">
                    <DumbbellIcon className="h-6 w-6" />
                    <span className="text-xl font-bold">Custom Workout Plans</span>
                </div>
                <nav className="flex gap-4 sm:gap-6">
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