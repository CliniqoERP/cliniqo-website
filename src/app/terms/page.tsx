import type { Metadata } from "next";
import { Bullets, LegalPage, Mail, Numbered, Section } from "@/components/legal-page";
import { LEGAL } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern the use of Cliniqo ERP by hospitals, clinics and their staff.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro={
        <>
          <p>
            These Terms govern the use of Cliniqo ERP. They form an agreement between {LEGAL.company} (“Cliniqo”,
            “we”, “us”) and:
          </p>
          <Bullets
            items={[
              <>
                the <strong>hospital</strong>, clinic or healthcare organisation that subscribes to Cliniqo (“the
                Hospital”); and
              </>,
              <>
                each <strong>user</strong>: a person the Hospital invites to use Cliniqo, such as a doctor, nurse or
                administrator.
              </>,
            ]}
          />
          <p>
            If the Hospital has signed a separate agreement with us, that agreement takes priority where the two
            differ.
          </p>
        </>
      }
    >
      <Section title="1. Accepting these Terms">
        <p>
          A user accepts these Terms by clicking <strong>Create my account</strong> when setting up their account. The
          Hospital accepts them by subscribing to or using Cliniqo. If you do not agree, do not create an account or
          use the service.
        </p>
        <p>You must be at least 18 years old and authorised by the Hospital to use Cliniqo.</p>
      </Section>

      <Section title="2. The service">
        <p>
          Cliniqo is web-based software for running a hospital: patient registration, visits and triage,
          consultations, orders and results, pharmacy, billing, admissions, staff, payroll, inventory and reports.
          Which features a Hospital can use depends on its plan.
        </p>
        <p>
          We provide Cliniqo either as a hosted service (“Cloud”) or as software the Hospital runs on its own servers
          under a licence (“On-Premise”). We may improve and change features. We will not remove a feature that is
          central to a Hospital’s plan during a paid period without telling it in advance.
        </p>
      </Section>

      <Section title="3. Accounts and access">
        <Bullets
          items={[
            "The Hospital decides who gets an account and what role each person has. It must remove access promptly when someone leaves.",
            "Each account is for one person. Do not share your password or let anyone else use your account.",
            "You are responsible for what is done under your account. Tell your administrator and us at once if you suspect someone else has used it.",
            "We may suspend an account that appears to be compromised or misused, and will tell the Hospital why.",
          ]}
        />
      </Section>

      <Section title="4. Acceptable use">
        <p>You must not:</p>
        <Numbered
          items={[
            "look at or change records you have no work reason to see, even if your role technically allows it;",
            "enter information you know to be false, or alter records to hide a mistake;",
            "copy, export or share patient data except as your Hospital’s policies and the law allow;",
            "try to reach another hospital’s data, get around access controls, or test Cliniqo’s security without our written permission;",
            "upload malware, or overload, disrupt or reverse-engineer the service;",
            "use Cliniqo for anything unlawful, or in breach of your professional obligations.",
          ]}
        />
        <p>Changes made in Cliniqo are recorded in an audit log that the Hospital can review.</p>
      </Section>

      <Section title="5. The Hospital’s responsibilities">
        <p>The Hospital is responsible for:</p>
        <Bullets
          items={[
            "the accuracy and lawfulness of what is entered into Cliniqo;",
            "having a lawful basis under the Nigeria Data Protection Act 2023 for the patient and staff data it records, and giving patients its own privacy notice;",
            "its own staff’s conduct and training;",
            "its devices, internet connection and, for On-Premise installations, its servers and backups;",
            "keeping its contact details up to date so we can reach it about its account, security or billing.",
          ]}
        />
      </Section>

      <Section title="6. Not a substitute for clinical judgement">
        <p>
          Cliniqo records, organises and displays information. It does not diagnose, prescribe or make clinical
          decisions. Any alerts, reference ranges, drug information, calculations or suggestions it shows are aids
          only. Clinical decisions remain the responsibility of qualified healthcare professionals, who must use their
          own judgement and check information before acting on it.
        </p>
        <p>Cliniqo is not an emergency service.</p>
      </Section>

      <Section title="7. Plans, fees and payment">
        <Bullets
          items={[
            "Plans, prices and user limits are shown on cliniqoerp.com or in the Hospital’s order. Fees are in Naira and exclude VAT, which is added where it applies.",
            "Fees are paid in advance, monthly or yearly. They are not refundable for a period already started, except where the law requires or we agree in writing.",
            "We may change prices for future periods. We will give at least 30 days’ notice before a change applies to the Hospital’s next renewal.",
            "If a renewal is not paid by its due date, the Hospital’s access may be suspended. Suspension stops staff signing in; it does not delete any data. Access returns once payment is made.",
          ]}
        />
      </Section>

      <Section title="8. Who owns the data">
        <Bullets
          items={[
            <>
              <strong>The Hospital owns its data,</strong> including all patient and staff records it enters. We claim
              no ownership of it.
            </>,
            "The Hospital gives us permission to store and process that data only to provide, secure and support Cliniqo, as our Privacy Policy describes.",
            "The Hospital can ask for an export of its records at any time while subscribed, and for 90 days after the subscription ends. After that we delete them as the Privacy Policy describes.",
            "We may use counts and measurements that cannot identify any patient, staff member or hospital to run and improve Cliniqo.",
          ]}
        />
      </Section>

      <Section title="9. Availability and support">
        <p>
          We work to keep Cliniqo available at all times, and to schedule planned maintenance at quiet times and
          announce it in advance where we can. We do not promise any particular level of availability. Support is
          available through the Support page in Cliniqo and at <Mail />.
        </p>
        <p>
          The Hospital should keep a way to continue essential care if Cliniqo or its internet connection is
          unavailable, such as paper forms for emergencies.
        </p>
      </Section>

      <Section title="10. Intellectual property">
        <p>
          Cliniqo, its software, design, name and logo belong to {LEGAL.company} or its licensors. While the
          subscription is active, we grant the Hospital and its users a non-exclusive, non-transferable right to use
          Cliniqo for the Hospital’s own operations. On-Premise installations are also subject to the licence we
          issue, which may not be altered or copied to another installation.
        </p>
        <p>If you send us ideas or feedback, we may use them without any obligation to you.</p>
      </Section>

      <Section title="11. Warranties and liability">
        <Bullets
          items={[
            "We will provide Cliniqo with reasonable skill and care. Apart from that, and to the extent the law allows, Cliniqo is provided “as is”, without other warranties.",
            "We are not liable for loss caused by: the Hospital’s data entry or clinical decisions; its devices, network or, for On-Premise, its servers and backups; misuse of an account; or events outside our reasonable control.",
            "We are not liable for indirect or consequential loss, or for loss of profit, revenue or goodwill.",
            "Our total liability to a Hospital in any 12 months is limited to the fees it paid us in those 12 months.",
            "Nothing in these Terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot be limited under Nigerian law.",
          ]}
        />
      </Section>

      <Section title="12. Indemnity">
        <p>
          The Hospital will compensate us for claims by third parties, including patients, that arise from the
          Hospital’s breach of these Terms, its unlawful use of personal data, or its clinical decisions, except to
          the extent the claim was caused by our own breach.
        </p>
      </Section>

      <Section title="13. Ending the agreement">
        <Bullets
          items={[
            "The Hospital may stop renewing at any time; access continues until the end of the paid period.",
            "Either party may end the agreement with written notice if the other seriously breaches it and does not put it right within 30 days.",
            "We may suspend or end access at once if it is needed to stop unlawful use or a serious security threat, and will tell the Hospital why.",
            "When the agreement ends, the Hospital’s data is handled as section 8 describes. Sections 8, 10, 11, 12 and 15 continue to apply.",
          ]}
        />
      </Section>

      <Section title="14. Changes to these Terms">
        <p>
          We may update these Terms. We will post the new version on this page with its date, and tell Hospital
          administrators by email at least 30 days before a significant change takes effect. Users may be asked to
          accept the new version when they next sign in.
        </p>
      </Section>

      <Section title="15. Law and disputes">
        <p>
          These Terms are governed by the laws of the Federal Republic of Nigeria. If a dispute arises, both parties
          will first try to settle it in good faith within 30 days. If they cannot, it will be referred to arbitration
          in Lagos under the Arbitration and Mediation Act 2023, before a single arbitrator, in English.
        </p>
      </Section>

      <Section title="16. General">
        <Bullets
          items={[
            "If any part of these Terms cannot be enforced, the rest still applies.",
            "Not enforcing a right straight away does not mean we give it up.",
            "The Hospital may not transfer this agreement without our written consent. We may transfer it to a successor of our business, with notice.",
            "These Terms, the Privacy Policy and any signed agreement between us are the whole agreement between us.",
          ]}
        />
      </Section>

      <Section title="17. Contact">
        <p>
          {LEGAL.company} (RC {LEGAL.rcNumber}), {LEGAL.address}. Email, including legal notices: <Mail />.
        </p>
      </Section>
    </LegalPage>
  );
}
