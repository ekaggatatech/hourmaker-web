import Layout from "../components/layout/Layout";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <section className="hero-gradient py-16 text-center">
        <div className="container max-w-4xl">
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="prose max-w-none">
            <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
              <div>
                <h2 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Hourmaker (operated by Ekaggata Tech Private Limited), we
                  take your privacy seriously. This Privacy Policy explains how
                  we collect, use, disclose, and safeguard your information when
                  you use our workforce management platform and related
                  services.
                </p>
              </div>

              <div>
                <h2 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
                  Information We Collect
                </h2>
                <h3 className="font-poppins text-lg font-semibold text-foreground mt-6 mb-3">
                  Personal Information
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Name, email address, phone number, and job title</li>
                  <li>Company name and business information</li>
                  <li>Account credentials and authentication data</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="font-poppins text-lg font-semibold text-foreground mt-6 mb-3">
                  Usage Information
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We automatically collect certain information when you use our
                  services:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Log data (IP address, browser type, pages visited)</li>
                  <li>Device information (device type, operating system)</li>
                  <li>Usage patterns and feature interactions</li>
                  <li>Time tracking and attendance data you input</li>
                </ul>
              </div>

              <div>
                <h2 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze usage trends and preferences</li>
                  <li>
                    Detect, prevent, and address technical issues and fraud
                  </li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement industry-standard security measures to protect
                  your data:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>End-to-end encryption for data in transit and at rest</li>
                  <li>SOC 2 Type II compliant infrastructure</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Role-based access controls</li>
                  <li>Multi-factor authentication support</li>
                  <li>24/7 security monitoring</li>
                </ul>
              </div>

              <div>
                <h2 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
                  Data Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your
                  information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>With your consent or at your direction</li>
                  <li>With service providers who assist in our operations</li>
                  <li>
                    To comply with legal obligations or valid legal requests
                  </li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>
                    In connection with a merger, acquisition, or sale of assets
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
                  Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as your
                  account is active or as needed to provide services. You may
                  request deletion of your data at any time. We will retain and
                  use your information as necessary to comply with legal
                  obligations, resolve disputes, and enforce our agreements.
                </p>
              </div>

              <div>
                <h2 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
                  Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
                  Cookies and Tracking
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to collect
                  information about your browsing activities. You can control
                  cookies through your browser settings. Essential cookies are
                  required for the platform to function properly.
                </p>
              </div>

              <div>
                <h2 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
                  International Data Transfers
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure appropriate
                  safeguards are in place for such transfers in compliance with
                  applicable data protection laws.
                </p>
              </div>

              <div>
                <h2 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-xl">
                  <p className="text-foreground font-semibold">
                    Ekaggata Tech Private Limited
                  </p>
                  <p className="text-muted-foreground">
                    #45, 3rd Floor, Koramangala
                  </p>
                  <p className="text-muted-foreground">
                    Bangalore, Karnataka 560034
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Email: privacy@hourmaker.in
                  </p>
                  <p className="text-muted-foreground">
                    Phone: +91 (80) 1234-5678
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicyPage;
