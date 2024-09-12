"use client"
import { Header } from "@/components/Header"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

import { CheckIcon } from "lucide-react"


const About = () => {
    const faqQuestions = [
        {
            id: 1,
            question: "What types of workouts do you offer?",
            answer:
                "We offer a variety of workout plans including strength training, cardio, yoga, and more. Our workouts cater to all fitness levels from beginner to advanced.",
        },
        {
            id: 2,
            question: "How long are the workouts?",
            answer:
                "Our workout plans range from 30 minutes to 60 minutes, allowing you to choose a duration that fits your schedule.",
        },
        {
            id: 3,
            question: "What equipment is required?",
            answer:
                "We have workout plans that use a variety of equipment like dumbbells, resistance bands, and bodyweight exercises. We also offer equipment-free options.",
        },
        {
            id: 4,
            question: "Can I customize the workouts?",
            answer:
                "Absolutely! Our platform allows you to filter workouts by difficulty, equipment, and duration to find the perfect fit for your needs.",
        },
        {
            id: 5,
            question: "How do I get started?",
            answer:
                "Simply browse our workout library, apply any filters you'd like, and select a plan that interests you. You can then create an account to access the full workout details and start your fitness journey.",
        },
    ]


    return (<div>
        <Header />
        <section className="bg-background pt-12 md:pt-24 lg:pt-32">
            <div className="px-8 md:px-10">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">FAQ</h3>
                        <Accordion type="single" collapsible>
                            {faqQuestions.map((faq) => (
                                <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                                    <AccordionTrigger className="flex items-center justify-between">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="prose text-muted-foreground">{faq.answer}</div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-background py-12 md:py-24 lg:py-32">
            <div className="px-8 md:px-10">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">About Custom Workout Plans</h2>
                        <p className="text-muted-foreground">
                            Custom Workout Plans is a platform that provides personalized workout plans to help you achieve your
                            fitness goals. Our mission is to make fitness accessible and enjoyable for everyone, regardless of
                            their experience level or equipment availability.
                        </p>
                        <p className="text-muted-foreground">
                            Our platform offers a wide range of workout plans, including strength training, cardio, yoga, and
                            more. You can easily filter and customize the workouts to fit your specific needs, whether you are a
                            beginner looking to build a foundation or an experienced athlete seeking a new challenge.
                        </p>
                        <p className="text-muted-foreground">
                            By using Custom Workout Plans, you will have the tools and guidance to develop a consistent and effective
                            fitness routine that fits seamlessly into your lifestyle. Our user-friendly interface and
                            comprehensive workout library make it easy to find the perfect plan for you and start your journey
                            towards a healthier, more active life.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">How to Use Custom Workout Plans</h2>
                        <ol className="list-decimal space-y-2 text-muted-foreground">
                            <li>
                                Browse our extensive workout library and use the filters to find the perfect plan for your fitness
                                level, equipment availability, and desired duration.
                            </li>
                            <li>Create an account to access the full details of the workout plans and track your progress.</li>
                            <li>
                                Follow the step-by-step instructions and video demonstrations to ensure proper form and maximize the
                                effectiveness of your workouts.
                            </li>
                            <li>
                                Customize the workouts by adjusting the intensity, weight, or number of sets and reps to challenge
                                yourself and see continuous improvement.
                            </li>
                            <li>
                                Utilize the built-in features like workout reminders and progress tracking to stay motivated and
                                accountable throughout your fitness journey.
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Why Use Custom Workout Plans?</h2>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                Personalized workout plans to meet your unique fitness goals
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                Variety of workout types and difficulty levels to suit all experience levels
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                Customizable workouts to fit your equipment availability and schedule
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                Comprehensive guidance and support to help you stay motivated and on track
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                Affordable and accessible fitness solution for individuals and families
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>

    )
}

export default About