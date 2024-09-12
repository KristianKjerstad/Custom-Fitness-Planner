"use client"

import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { ChangeEvent, FormEvent, useState } from "react"


const Contact = () => {

    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: "",
    })
    const handleContactFormChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value,
        })
    }

    const handleContactFormSubmit = (e: FormEvent<HTMLFormElement>) => {
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
        <div className="pl-12 pt-12 md:pt-24 lg:pt-32 pr-8">
            <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
            <form onSubmit={(e) => handleContactFormSubmit(e)}>
                <div className="space-y-4 max-w-[800px]">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            value={contactForm.name}
                            onChange={(e) => handleContactFormChange(e)}
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
                            onChange={(e) => handleContactFormChange(e)}
                            required
                        />
                    </div>
                    <div className="pb-8">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            name="message"
                            value={contactForm.message}
                            onChange={(e) => handleContactFormChange(e)}
                            rows={5}
                            required
                        />
                    </div>
                    <Button disabled type="submit" >Send Message</Button>
                    <p>(Unfortunately we are not able to receive any messages right now)</p>
                </div>
            </form>
        </div>
        <div className="pb-40"></div>
    </div >
}

export default Contact