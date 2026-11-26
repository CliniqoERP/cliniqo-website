import type { Metadata } from "next";
import {
  Bullets,
  LegalPage,
  Mail,
  Numbered,
  Section,
  Table,
} from "@/components/legal-page";
import { LEGAL } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What personal data Cliniqo ERP handles, why, who sees it, and the choices you have.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effective={LEGAL.privacyEffective}
      intro={
        <p>
          This policy explains what personal data Cliniqo ERP handles, why, who
          sees it, and the choices you have. It is written for hospital staff
          who use Cliniqo, for the hospitals and clinics that subscribe to it,
          and for visitors to cliniqoerp.com. Patients whose records are kept in
          Cliniqo should also read their hospital’s own privacy notice.
        </p>
      }
    >
      <Section title="1. Who we are">
        <p>
          Cliniqo ERP (“Cliniqo”, “we”, “us”) is provided by {LEGAL.company}, a
          company registered in Nigeria with the Corporate Affairs Commission
          under RC {LEGAL.rcNumber}, of {LEGAL.address}.
        </p>
        <p>
          You can reach us, about anything in this policy at <Mail />.
        </p>
      </Section>

      <Section title="2. Our role: the hospital decides, we process">
        <p>
          Cliniqo is software that hospitals use to run their work, so our role
          differs for different kinds of data.
        </p>
        <Bullets
          items={[
            <>
              <strong>Patient records and a hospital’s staff records.</strong>{" "}
              The hospital decides what is recorded and why. It is the{" "}
              <strong>data controller</strong>. We are its{" "}
              <strong>data processor</strong>: we store and process that data
              only to provide Cliniqo to the hospital, under our agreement with
              it and on its instructions. If you are a patient, or a staff
              member asking about your employment records, contact your hospital
              first. We will help the hospital answer you.
            </>,
            <>
              <strong>
                Our relationship with the hospital, and our website.
              </strong>{" "}
              For the contact details of a hospital’s representatives, its
              subscription and billing, support tickets, and visits to
              cliniqoerp.com, <strong>we are the data controller</strong>.
            </>,
          ]}
        />
        <p>
          Each hospital’s data is kept separate from every other hospital’s.
          Staff at one hospital cannot see another hospital’s records.
        </p>
      </Section>

      <Section title="3. What we collect">
        <p>
          <strong>From hospital staff who use Cliniqo</strong> (on the
          hospital’s behalf):
        </p>
        <Bullets
          items={[
            "Account details: name, work email, phone number, role, department, and a securely hashed password. We never store your password itself.",
            "Employment details the hospital’s HR team enters: staff number, job title, start date, shifts, attendance, leave, salary and payslips, and bank account details for payroll.",
            "Documents you or HR upload, such as licences and certificates.",
            "Activity records: when you sign in, from which IP address, and what you change. Cliniqo keeps an audit log of changes so the hospital can see who did what and when.",
            "Your agreement to this policy and our Terms of Use: which version, and when.",
          ]}
        />
        <p>
          <strong>About patients</strong> (entered by hospital staff, on the
          hospital’s behalf):
        </p>
        <Bullets
          items={[
            "Identity and contact details: name, sex, date of birth, phone, address, next of kin, and a medical record number.",
            "Health information: visits, vital signs, triage notes, consultation notes, diagnoses, prescriptions, laboratory and imaging orders and results, admissions and discharges.",
            "Billing and insurance details: invoices, payments, and Health Maintenance Organisation (HMO) membership.",
          ]}
        />
        <p>
          Health information is <strong>sensitive personal data</strong> under
          the Nigeria Data Protection Act 2023 (NDPA). It receives the
          protection described in section 7.
        </p>
        <p>
          <strong>About hospitals</strong> (as controller): the hospital’s name
          and address, the names and contact details of its administrators, its
          plan and payment history, support tickets and their replies, and, for
          on-premise installations, licence details.
        </p>
        <p>
          <strong>From visitors to cliniqoerp.com:</strong> the details you send
          us through the demo-request form. Our website does not use advertising
          or analytics cookies. Our hosting providers keep short-lived technical
          logs (such as IP address and browser type) to keep the site secure.
        </p>
        <p>
          The Cliniqo app sets only the cookies it needs to work: one that keeps
          you signed in, and security cookies. It does not use cookies to track
          you or for advertising.
        </p>
      </Section>

      <Section title="4. How we use personal data">
        <p>We use personal data only for these purposes:</p>
        <Numbered
          items={[
            <>
              <strong>To provide Cliniqo to the hospital:</strong> storing and
              showing records to the staff whose role allows it, sending
              invitations, password resets and notices, and confirming bank
              account names for payroll.
            </>,
            <>
              <strong>To keep Cliniqo secure:</strong> checking sign-ins,
              limiting sign-in to a hospital’s own networks where it asks us to,
              detecting misuse, and keeping the audit log.
            </>,
            <>
              <strong>To support hospitals:</strong> answering support tickets
              and fixing problems. Our staff open a hospital’s records only when
              needed to resolve its request.
            </>,
            <>
              <strong>To run our business with the hospital:</strong>{" "}
              subscriptions, renewals, invoices and contract notices.
            </>,
            <>
              <strong>To improve Cliniqo:</strong> using counts and measurements
              that do not identify any patient or staff member, such as how many
              visits a feature handles or how fast pages load.
            </>,
            <>
              <strong>To meet the law:</strong> keeping records we are required
              to keep, and responding to lawful requests from courts and
              regulators.
            </>,
          ]}
        />
        <p>
          We do <strong>not</strong> sell personal data. We do not use patient
          or staff data for advertising, and we do not build profiles of
          individuals for marketing.
        </p>
      </Section>

      <Section title="5. Our legal grounds">
        <p>
          Where we act as processor, the hospital is responsible for having a
          lawful basis under the NDPA for what it records. Hospitals generally
          rely on providing medical care, on their legal duties, and on
          employment contracts.
        </p>
        <p>
          Where we act as controller, we rely on these grounds under section 25
          of the NDPA:
        </p>
        <Table
          head={["What we do", "Legal ground"]}
          rows={[
            [
              "Providing the service a hospital subscribed to; managing staff accounts",
              "Performance of a contract",
            ],
            [
              "Security, fraud prevention, the audit log, service improvement",
              "Legitimate interests, which we have balanced against your rights",
            ],
            [
              "Keeping financial and tax records; answering lawful requests",
              "Legal obligation",
            ],
            [
              "Product news and marketing emails to hospital contacts",
              "Consent, which you can withdraw at any time",
            ],
          ]}
        />
        <p>
          Sensitive health data is processed for the purposes of medical care
          and treatment by the hospital, as section 30 of the NDPA allows, and
          under the hospital’s professional duty of confidentiality.
        </p>
      </Section>

      <Section title="6. Features that use artificial intelligence">
        <p>
          Cliniqo does not use artificial intelligence on patient records at
          present. We may add optional features that help clinicians, such as
          drafting a consultation summary or picking out medical terms from
          notes. If we do:
        </p>
        <Bullets
          items={[
            "A hospital will have to switch each feature on. It will be off by default.",
            "The feature will only suggest. A clinician reviews and decides; no decision about a patient’s care will be made by the software alone.",
            "We will send only the minimum text needed to the AI provider, under a contract that forbids it from keeping the data or using it to train its models.",
            "We will update this policy, name the providers, and tell hospitals before any such feature is offered.",
          ]}
        />
      </Section>

      <Section title="7. How we protect data">
        <Bullets
          items={[
            "All traffic is encrypted in transit (HTTPS, with HSTS).",
            "Passwords are stored only as one-way hashes.",
            "Staff see only what their role allows. Hospital administrators control who has which role.",
            "Sessions expire, and a hospital can limit sign-in to its own internet connection.",
            "Changes to records are logged with who made them and when. Patient and clinical records are never deleted outright.",
            "Only a small number of our staff can reach the systems that hold hospital data, and their access is personal and protected.",
            "Our staff and contractors are bound by confidentiality obligations.",
          ]}
        />
        <p>
          No system is completely secure. If you think your account has been
          misused, tell your hospital’s administrator and us straight away.
        </p>
      </Section>

      <Section title="8. Who we share data with">
        <p>We share personal data only with:</p>
        <Bullets
          items={[
            <>
              <strong>Your hospital.</strong> Records belong to the hospital and
              are shown to its authorised staff.
            </>,
            <>
              <strong>Our service providers (sub-processors),</strong> who help
              us run Cliniqo and may handle data only on our instructions:
            </>,
          ]}
        />
        <Table
          head={["Provider", "What they do", "Where"]}
          rows={[
            ["DigitalOcean", "Servers and database", "London, United Kingdom"],
            [
              "Cloudflare",
              "Secure network connection and file storage",
              "Global network",
            ],
            ["Mailgun", "Sending emails", "United States"],
            [
              "Monnify (by Moniepoint)",
              "Confirming bank account names for payroll",
              "Nigeria",
            ],
            [
              "Squad (by GTCO)",
              "Confirming bank account names for payroll (backup provider)",
              "Nigeria",
            ],
          ]}
        />
        <Bullets
          items={[
            <>
              <strong>Authorities,</strong> when Nigerian law, a court order or
              a regulator requires it. We will tell the hospital first unless
              the law forbids it.
            </>,
            <>
              <strong>A buyer or successor,</strong> if our business is sold or
              merged, under the same protections as this policy.
            </>,
          ]}
        />
        <p>
          We will tell hospitals at least 30 days before adding or replacing a
          provider that handles patient data.
        </p>
        <p>
          Hospitals that run Cliniqo on their own premises keep their data on
          their own servers. We see it only if the hospital gives us access for
          support.
        </p>
      </Section>

      <Section title="9. Data stored outside Nigeria">
        <p>
          Our servers and database are in London, United Kingdom, and some of
          our providers process data in other countries, as the table above
          shows. We transfer personal data out of Nigeria only as Part VIII of
          the NDPA allows: to countries whose data protection laws give an
          adequate level of protection, such as the United Kingdom’s, or under
          contractual safeguards from our providers that protect the data to a
          standard comparable to Nigerian law. You can ask us for details of
          those safeguards.
        </p>
      </Section>

      <Section title="10. How long we keep data">
        <Bullets
          items={[
            <>
              <strong>Patient and staff records:</strong> for as long as the
              hospital’s subscription lasts. When it ends, the hospital has 90
              days to export its data. We then delete it from our systems, and
              from our backups within a further 30 days. How long medical
              records must be kept is the hospital’s responsibility under the
              laws and professional rules that apply to it.
            </>,
            <>
              <strong>Audit logs:</strong> for as long as the hospital’s
              records, so that changes can always be traced.
            </>,
            <>
              <strong>Hospital account and billing records:</strong> for 6 years
              after the subscription ends, to meet tax and accounting law.
            </>,
            <>
              <strong>Support tickets:</strong> 3 years after they are closed.
            </>,
            <>
              <strong>Website enquiries:</strong> 2 years, unless they lead to a
              subscription.
            </>,
          ]}
        />
      </Section>

      <Section title="11. Your rights">
        <p>Under the NDPA you have the right to:</p>
        <Bullets
          items={[
            "be told how your data is used (this policy);",
            "get a copy of your data;",
            "have inaccurate data corrected;",
            "have data deleted or its use restricted, where the law allows;",
            "object to processing based on legitimate interests;",
            "receive your data in a common, machine-readable format;",
            "withdraw consent at any time, where we rely on it;",
            "not be subject to a decision based solely on automated processing that significantly affects you.",
          ]}
        />
        <p>
          If your data is in Cliniqo because of a hospital, send your request to
          that hospital; we will help it respond. For anything else, write to{" "}
          <Mail />. We will reply within 30 days and may ask you to prove who
          you are.
        </p>
        <p>
          You may also complain to the{" "}
          <strong>Nigeria Data Protection Commission</strong> (
          <a
            href="https://ndpc.gov.ng"
            className="font-medium text-hospital-blue underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            ndpc.gov.ng
          </a>
          ). We would appreciate the chance to resolve your concern first.
        </p>
      </Section>

      <Section title="12. If something goes wrong">
        <p>
          If we become aware of a breach affecting personal data, we will tell
          the affected hospital without undue delay, so it can meet its own
          duties. Where we are the controller, we will notify the Nigeria Data
          Protection Commission within 72 hours of becoming aware of a breach
          likely to put people’s rights at risk, and tell the people affected
          where the risk is high.
        </p>
      </Section>

      <Section title="13. Children">
        <p>
          Cliniqo accounts are only for hospital staff aged 18 or over.
          Hospitals may record children as patients; the hospital is responsible
          for the consent of a parent or guardian where the law requires it.
        </p>
      </Section>

      <Section title="14. Changes to this policy">
        <p>
          We will post any change on this page with a new version and date. If a
          change is significant, we will tell hospital administrators by email
          and may ask users to accept the new version when they next sign in.
        </p>
      </Section>

      <Section title="15. Contact">
        <p>
          {LEGAL.company} (RC {LEGAL.rcNumber}), {LEGAL.address}. Email:{" "}
          <Mail />.
        </p>
      </Section>
    </LegalPage>
  );
}
