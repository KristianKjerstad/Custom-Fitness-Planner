
import { Header } from "@/components/Header"


const PrivacyPolicy = () => {

    return (
        <div>
            <Header />
            <section className="bg-background py-12 md:py-24 lg:py-32">
                <div className="px-8 md:px-10">
                    <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Privacy Policy</h3>
                            <div className="prose text-muted-foreground">
                                <p>
                                    At CustomWorkoutPlans, we are committed to protecting the privacy and security of our users. This
                                    Privacy Policy outlines how we collect, use, and safeguard your personal information.
                                </p>
                                <h4 className="font-bold pt-8">Information We Collect</h4>
                                <p>
                                    We may collect various types of information from you, including your name, email address, and any
                                    other information you provide when you create an account or use our services.
                                </p>
                                <h4 className="font-bold pt-8">How We Use Your Information</h4>
                                <p>
                                    We use the information we collect to provide and improve our services, communicate with you, and
                                    comply with legal obligations. We do not sell or share your personal information with third parties
                                    for their own marketing purposes.
                                </p>
                                <h4 className="font-bold pt-8">Data Security</h4>
                                <p>
                                    We take reasonable measures to protect your personal information from unauthorized access, use, or
                                    disclosure. However, no method of transmission over the internet or electronic storage is 100%
                                    secure, and we cannot guarantee absolute security.
                                </p>
                                <h4 className="font-bold pt-8">Your Rights</h4>
                                <p>
                                    You have the right to access, update, or delete your personal information. You can also opt-out of
                                    receiving certain communications from us. If you have any questions or concerns about our privacy
                                    practices, please contact us.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default PrivacyPolicy