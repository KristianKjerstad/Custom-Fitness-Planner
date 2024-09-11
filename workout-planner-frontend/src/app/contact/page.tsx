"use client"
import Footer from "@/components/Footer"
import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { useState } from "react"


const Contact = () => {

    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: "",
    })
    const handleContactFormChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value,
        })
    }

    const handleContactFormSubmit = (e) => {
        e.preventDefault()
        console.log("Contact form submitted:", contactForm)
        setContactForm({
            name: "",
            email: "",
            message: "",
        })
    }

    return <div>
        <Header />
        <div className="pl-12 pt-12 md:pt-24 lg:pt-32">
            <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
            <form onSubmit={handleContactFormSubmit}>
                <div className="space-y-4 max-w-[800px]">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            value={contactForm.name}
                            onChange={handleContactFormChange}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={contactForm.email}
                            onChange={handleContactFormChange}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            name="message"
                            value={contactForm.message}
                            onChange={handleContactFormChange}
                            rows={5}
                            required
                        />
                    </div>
                    <Button type="submit">Send Message</Button>
                </div>
            </form>
        </div>
        <div className="pb-40"></div>
        <Footer />
    </div >
}

export default Contact