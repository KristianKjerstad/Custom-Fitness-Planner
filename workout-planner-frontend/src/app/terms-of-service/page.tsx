import { Header } from "@/components/Header"


const TermsOfService = () => {

    return (
        <div>
            <Header />
            <section className="bg-background py-12 md:py-24 lg:py-32">
                <div className="px-8 md:px-10">
                    <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Terms of Service</h3>
                            <div className="prose text-muted-foreground">
                                <p className="pb-4">Effective Date: 11th September 2024</p>
                                <p>
                                    Welcome to out website, a fitness app designed to help you find the perfect workout tailored to your needs. Please read these Terms of Service carefully before using our website and services.
                                    By accessing or using CustomWorkoutPlans.com (the Service), you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Service.
                                </p>
                                <h4 className="font-bold pt-8">Acceptance of Terms</h4>
                                <p>
                                    By accessing and using our Service, you accept and agree to be bound by these Terms and all applicable laws and regulations.
                                    You represent that you are at least 18 years old or have parental consent to use the Service.
                                </p>
                                <h4 className="font-bold pt-8">Service Description</h4>
                                <p>
                                    This website is a fitness tool designed to help users find the most suitable workout routines based on their input criteria. These criteria include,
                                    but are not limited to: Gender, Age, Fitness Goal (e.g., weight loss, strength, hypertrophy, mix), Experience Level (beginner, intermediate, advanced), Days Available for Workouts, Length of Workout Sessions The workouts provided are not AI-generated but are crafted by experts in the fitness industry.
                                    These routines are carefully tested and proven to deliver effective results for individuals who have access to gym equipment, including dumbbells, barbells, and various machines.
                                </p>
                                <h4 className="font-bold pt-8">Disclaimer of Results</h4>
                                <p>
                                    While the workout plans provided are designed by fitness experts and intended to help you meet your fitness goals, results may vary. The Service provides suggestions based on the information you provide,
                                    but the success of any fitness plan depends on various factors, including consistency, diet, and individual physical conditions. We do not guarantee specific outcomes or results from using the workouts provided.

                                </p>
                                <h4 className="font-bold pt-8">Health Disclaimer</h4>
                                <p>
                                    Always consult with a healthcare professional before starting any exercise program, especially if you have any medical conditions, injuries, or concerns.
                                    We do not provide medical advice or treatment. Any recommendations provided through the Service are for informational purposes only and are not substitutes for professional medical advice.
                                    You should never start a new workout routine without consulting your doctor first. This service does not take any responsibility for injuries you may have while doing workouts suggested by us.
                                    By using the Service, you acknowledge and agree that any fitness activities you engage in are at your own risk.
                                </p>
                                <h4 className="font-bold pt-8">User Responsibilities</h4>
                                <p>
                                    By using our Service, you agree to: Provide accurate and complete information when using the Service. Ensure that you are physically capable of performing the exercises recommended by the workout plans.
                                    Follow the workout plans safely and appropriately. Take responsibility for your own health and safety while performing any exercises.
                                </p>
                                <h4 className="font-bold pt-8"> Intellectual Property</h4>
                                <p>
                                    All content, including but not limited to text, graphics, logos, and software used in the Service, is the property of CustomWorkoutPlans.com or its content suppliers and is protected by copyright and
                                    other intellectual property laws. You may not modify, reproduce, distribute, or create derivative works based on our content without our explicit permission.
                                </p>
                                <h4 className="font-bold pt-8">Termination of Service</h4>
                                <p>
                                    We reserve the right to terminate or suspend access to the Service at our discretion, without prior notice or liability, for any reason, including breach of these Terms.
                                </p>
                                <h4 className="font-bold pt-8">Limitation of Liability</h4>
                                <p>
                                    To the fullest extent permitted by law, this website and its owners, affiliates, and partners shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting
                                    from your use of or inability to use the Service, including any errors or omissions in the content provided.
                                </p>
                                <h4 className="font-bold pt-8"> Modifications to Terms</h4>
                                <p>
                                    We reserve the right to modify these Terms at any time. Any changes will be posted on this page with an updated Effective Date. Continued use of the Service after such changes constitutes your acceptance of the new Terms.
                                </p>
                                <h4 className="font-bold pt-8">Contact Information</h4>
                                <p>
                                    If you have any questions or concerns about these Terms, please contact us via email.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default TermsOfService