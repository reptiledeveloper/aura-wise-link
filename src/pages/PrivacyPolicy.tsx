import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl prose prose-neutral dark:prose-invert">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-10">Last updated: March 20, 2026</p>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information you provide directly, including your name, phone number, email address, and profile details during registration. During consultations, we may collect compass data, images, and chat or call content to deliver our services.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              <li>To create and manage your account</li>
              <li>To facilitate Vaastu consultations (audio, video, and chat)</li>
              <li>To process payments and maintain transaction records</li>
              <li>To improve our app and services</li>
              <li>To send OTPs and service-related communications (DLT-compliant)</li>
              <li>To enforce community guidelines and prevent spam</li>
            </ul>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold text-foreground">3. Phone Number Masking</h2>
            <p className="text-muted-foreground leading-relaxed">
              To protect client privacy, phone numbers are masked during consultant interactions. Consultants cannot view or access a client's personal phone number at any time.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold text-foreground">4. Chat & Call Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Chat messages and call recordings are stored securely in encrypted cloud storage. Spam filtering is applied to chats to block sharing of phone numbers, email addresses, and external messaging keywords. Admins may access chat and call records for quality assurance and compliance monitoring.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold text-foreground">5. Payment Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payments are processed through Razorpay. We do not store your full card details. Transaction history and Order IDs are retained for auditing and dispute resolution.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold text-foreground">6. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use encrypted data handling, app-level access controls, and secure cloud infrastructure to protect your personal data. Sessions are automatically revoked upon app uninstallation.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold text-foreground">7. Communication Consent</h2>
            <p className="text-muted-foreground leading-relaxed">
              Before any call or chat session, you will be presented with a consent pop-up. Your consent is logged and can be withdrawn at any time through your profile settings.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold text-foreground">8. Your Rights</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              <li>Access and review your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your account and associated data</li>
              <li>Withdraw consent for communications</li>
            </ul>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold text-foreground">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please reach out via the <a href="/#contact" className="text-primary hover:underline">Contact</a> section on our website or email us at <span className="text-primary">privacy@vastusarovar.com</span>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
