const SLIDER_IMGS = [
  "/slider/expertise.jpg",
  "/slider/partnership.jpg",
  "/slider/banner-2.jpg",
  "/slider/banner-1.jpg",
  "/slider/banner-3.jpg",
];

function card(id, imageIndex, title, description) {
  return { id, image: SLIDER_IMGS[imageIndex % SLIDER_IMGS.length], title, description };
}

function benefit(title, description, icon = "default") {
  return { title, description, icon };
}

export const serviceContent = {
  virtualHealthcareAssistant: {
    hero: {
      title: "Dedicated Virtual Medical Assistants",
      description:
        "Let your clinical staff stay focused on patients, not paperwork. Our reliable virtual healthcare assistants support everything from scheduling and documentation to patient outreach, working as a seamless extension of your team.",
      ctaText: "Book Appointment",
    },
    impact: {
      headline: "Free your team from",
      highlight: "administrative overload",
      description:
        "Virtual Healthcare Assistants streamline front-desk workflows, manage outreach, and keep records updated so providers can spend more time with patients—not paperwork.",
      metrics: [
        { value: 35, suffix: "%", label: "Reduction in time spent on scheduling and follow-ups." },
        { value: 25, suffix: "%", label: "Increase in provider capacity without adding on-site staff." },
        { value: 50, suffix: "%", label: "Decrease in no-shows through proactive reminders and confirmations." },
        { value: 98, suffix: "%", label: "Task completion accuracy across day-to-day admin workflows." },
      ],
    },
    smartChoice: {
      sectionHighlight: "Virtual Medical Assistants",
      cards: [
        card(1, 0, "Proven Results", "Detailed reporting and performance tracking to maintain transparency."),
        card(2, 1, "Flexible Staffing", "Scale your support based on your clinic's needs seamlessly."),
        card(3, 2, "HIPAA Trained", "Assistants trained in healthcare workflows and patient privacy."),
        card(4, 3, "Multitasking Experts", "Manage scheduling, documentation, and admin tasks efficiently."),
        card(5, 4, "Advanced Tech", "Seamlessly integrate with modern EHR systems and clinic workflows."),
        card(6, 0, "Patient Coordination", "Manage appointments and patient communication efficiently."),
        card(7, 1, "Insurance Processing", "Handle verification and billing coordination."),
        card(8, 2, "Practice Optimization", "Improve clinic workflow with dedicated support staff."),
      ],
    },
    benefit: {
      heading: "Why Healthcare Organizations Choose Leo Medhub",
      content:
        "We're not just a vendor. We're your team. From startup to scale, our virtual healthcare assistants work like an extension of your practice—strategic, responsive, and results-driven.",
      benefits: [
        benefit("Real-Time Performance Tracker", "Access your team's productivity and task status with clear reporting and visibility, built for accountability and peace of mind.", "tracker"),
        benefit("Dedicated Virtual Assistant Team", "Every practice is assigned experienced healthcare support specialists, providing focused expertise, not generic call-center support.", "team"),
        benefit("Comprehensive Support", "We cover scheduling, patient coordination, documentation, reminders, eligibility checks, referral follow-up, and more—tailored to your workflow.", "services"),
      ],
    },
  },
  medicalRecords: {
    hero: {
      title: "Medical Records Management",
      description:
        "Organize, digitize, and secure patient records with expert virtual support. We handle requests, retrieval, and documentation so your practice stays compliant and your staff stays focused on care.",
      ctaText: "Book Appointment",
    },
    impact: {
      headline: "Faster retrieval,",
      highlight: "better compliance",
      description:
        "Our medical records support reduces turnaround time for record requests, improves accuracy, and helps keep your practice audit-ready and compliant.",
      metrics: [
        { value: 60, suffix: "%", label: "Faster record request turnaround" },
        { value: 99, suffix: "%", label: "Document accuracy and completeness" },
        { value: 40, suffix: "%", label: "Reduction in staff time on record tasks" },
        { value: 100, suffix: "%", label: "HIPAA-conscious handling and security" },
      ],
    },
    smartChoice: {
      sectionHighlight: "Medical Records Support",
      cards: [
        card(1, 0, "Accuracy & Completeness", "Ensure every record request is fulfilled accurately and on time, with full audit trails."),
        card(2, 1, "Compliance-First", "HIPAA-trained workflows for request handling, release of information, and documentation."),
        card(3, 2, "Fast Turnaround", "Reduce response times for patient and provider requests without overloading in-house staff."),
        card(4, 3, "EHR Integration", "Seamlessly work within your EMR and document management systems for a unified workflow."),
        card(5, 4, "Secure Handling", "Strict access controls and secure channels for transmitting and storing sensitive records."),
      ],
    },
    benefit: {
      heading: "Why Practices Choose Leo Medhub for Medical Records",
      content:
        "We're not just a vendor. We're your team. Our medical records specialists work like an extension of your practice—accurate, compliant, and focused on fast turnaround.",
      benefits: [
        benefit("Request & Status Tracker", "Track record requests and release status in one place for full visibility and timely fulfillment.", "tracker"),
        benefit("Dedicated Records Team", "Experienced ROI and records specialists who know your EMR and your compliance requirements.", "team"),
        benefit("End-to-End Records Support", "We handle intake, retrieval, release of information, chart prep, and documentation—so your staff stays focused on care.", "services"),
      ],
    },
  },
  newPatientCoordinator: {
    hero: {
      title: "New Patient Coordinator",
      description:
        "Streamline intake and onboarding so every new patient gets a smooth start. Our virtual coordinators handle registration, scheduling, and pre-visit outreach so your front desk can focus on in-person care.",
      ctaText: "Book Appointment",
    },
    impact: {
      headline: "Faster intake,",
      highlight: "happier patients",
      description:
        "New Patient Coordinators reduce no-shows, speed up onboarding, and give every new patient a consistent, professional first impression.",
      metrics: [
        { value: 45, suffix: "%", label: "Faster new patient intake completion" },
        { value: 30, suffix: "%", label: "Reduction in new-patient no-shows" },
        { value: 90, suffix: "%", label: "Pre-visit forms completed before arrival" },
        { value: 50, suffix: "%", label: "Less front-desk time on intake calls" },
      ],
    },
    smartChoice: {
      sectionHighlight: "New Patient Coordination",
      cards: [
        card(1, 0, "Smooth Intake", "Registration, insurance verification, and pre-visit forms handled before the first appointment."),
        card(2, 1, "Flexible Scheduling", "Match new patients with the right provider and time slot while managing waitlists."),
        card(3, 2, "Verification & Eligibility", "Confirm benefits and coverage so front desk and billing start with accurate information."),
        card(4, 3, "Patient Communication", "Outreach, reminders, and follow-up so new patients show up prepared and on time."),
        card(5, 4, "Follow-Up & Retention", "Post-visit check-ins and rebooking to turn new patients into long-term relationships."),
      ],
    },
    benefit: {
      heading: "Why Practices Choose Leo Medhub for New Patient Coordination",
      content:
        "We're not just a vendor. We're your team. Our new patient coordinators work like an extension of your front desk—warm, efficient, and focused on converting inquiries into booked appointments.",
      benefits: [
        benefit("Intake & Scheduling Tracker", "See new patient intake status, scheduled first visits, and completion rates in one place.", "tracker"),
        benefit("Dedicated Coordinator Team", "Assigned coordinators who learn your protocols and represent your practice professionally.", "team"),
        benefit("Full Intake & Onboarding", "Registration, insurance verification, pre-visit forms, reminders, and follow-up—so new patients arrive prepared.", "services"),
      ],
    },
  },
  priorAuthorizations: {
    hero: {
      title: "Prior Authorizations",
      description:
        "Streamline insurance verification and prior authorization so treatments get approved faster. Our team handles submissions, tracking, and appeals so your staff stays focused on patient care.",
      ctaText: "Book Appointment",
    },
    impact: {
      headline: "Fewer denials,",
      highlight: "faster approvals",
      description:
        "Our prior auth support speeds up turnaround, improves first-pass approval rates, and keeps your revenue cycle moving.",
      metrics: [
        { value: 40, suffix: "%", label: "Faster prior auth turnaround" },
        { value: 85, suffix: "%", label: "First-pass approval rate" },
        { value: 35, suffix: "%", label: "Reduction in denials with timely follow-up" },
        { value: 99, suffix: "%", label: "Accurate submission and documentation" },
      ],
    },
    smartChoice: {
      sectionHighlight: "Prior Authorization Support",
      cards: [
        card(1, 0, "Verification", "Confirm eligibility and benefits before submission to avoid denials."),
        card(2, 1, "Submission & Tracking", "Submit and track auth requests across payers with clear status updates."),
        card(3, 2, "Appeals & Follow-Up", "Handle denials and appeals so approved care isn't delayed."),
        card(4, 3, "Compliance", "Stay aligned with payer rules and documentation requirements."),
        card(5, 4, "Reporting", "Visibility into approval rates and turnaround so you can optimize."),
      ],
    },
    benefit: {
      heading: "Why Practices Choose Leo Medhub for Prior Authorizations",
      content:
        "We're not just a vendor. We're your team. Our prior auth specialists work like an extension of your revenue cycle—strategic, responsive, and focused on getting approvals faster.",
      benefits: [
        benefit("Prior Auth Status Tracker", "Access submission and approval status 24/7 with clear visibility so you never lose track of a pending auth.", "tracker"),
        benefit("Dedicated Prior Auth Team", "Experienced specialists who know payer rules and documentation requirements, not generic support.", "team"),
        benefit("Verification to Appeals", "We handle eligibility checks, submission, tracking, denials, and appeals so your staff stays focused on patient care.", "services"),
      ],
    },
  },
  phoneReceptionist: {
    hero: {
      title: "Phone Receptionist",
      description:
        "Professional call handling so every patient reaches a friendly, capable voice. Our virtual receptionists answer, schedule, and triage calls so your front desk can focus on in-person care.",
      ctaText: "Book Appointment",
    },
    impact: {
      headline: "Fewer missed calls,",
      highlight: "better first impressions",
      description:
        "Virtual phone reception reduces hold times, cuts abandoned calls, and keeps your schedule full with confirmed appointments.",
      metrics: [
        { value: 50, suffix: "%", label: "Reduction in abandoned calls" },
        { value: 90, suffix: "%", label: "Calls answered within target time" },
        { value: 35, suffix: "%", label: "Less front-desk time on phone" },
        { value: 95, suffix: "%", label: "Patient satisfaction with call experience" },
      ],
    },
    smartChoice: {
      sectionHighlight: "Phone Reception Support",
      cards: [
        card(1, 0, "Answer & Triage", "Answer calls promptly and route to the right person or action."),
        card(2, 1, "Scheduling", "Book, reschedule, and confirm appointments in your system."),
        card(3, 2, "Messaging & Callbacks", "Take messages and coordinate callbacks so nothing falls through."),
        card(4, 3, "After-Hours", "Extend coverage outside business hours when needed."),
        card(5, 4, "Multichannel", "Support phone, and optionally voicemail and callback workflows."),
      ],
    },
    benefit: {
      heading: "Why Practices Choose Leo Medhub for Phone Reception",
      content:
        "We're not just a vendor. We're your team. Our virtual receptionists work like an extension of your front desk—professional, friendly, and focused on every caller.",
      benefits: [
        benefit("Call & Schedule Visibility", "See call volume, answer rates, and scheduled appointments in one place for full control.", "tracker"),
        benefit("Dedicated Reception Team", "Consistent voices who learn your practice and represent you with care and accuracy.", "team"),
        benefit("Answer, Schedule & Triage", "We answer calls, book and reschedule appointments, take messages, and route callbacks—so your in-office staff can focus on in-person care.", "services"),
      ],
    },
  },
  faxManagement: {
    hero: {
      title: "Fax Management",
      description:
        "Secure, efficient handling of faxed documents so nothing gets lost. We receive, route, and document faxes into your workflow so your team can focus on patient care.",
      ctaText: "Book Appointment",
    },
    impact: {
      headline: "Faster turnaround,",
      highlight: "fewer errors",
      description:
        "Structured fax management shortens response time, improves accuracy, and keeps sensitive documents secure and auditable.",
      metrics: [
        { value: 55, suffix: "%", label: "Faster fax-to-chart turnaround" },
        { value: 98, suffix: "%", label: "Accuracy in routing and filing" },
        { value: 45, suffix: "%", label: "Less staff time on manual fax handling" },
        { value: 100, suffix: "%", label: "Secure, HIPAA-conscious handling" },
      ],
    },
    smartChoice: {
      sectionHighlight: "Fax Management Support",
      cards: [
        card(1, 0, "Receive & Sort", "Receive faxes and sort by type, provider, or urgency."),
        card(2, 1, "Routing", "Route to the right chart, task, or team member in your EMR."),
        card(3, 2, "EHR Integration", "Attach and file documents in the correct patient record."),
        card(4, 3, "Security", "Secure channels and access controls for all fax content."),
        card(5, 4, "Tracking", "Audit trail and status so nothing is missed."),
      ],
    },
    benefit: {
      heading: "Why Practices Choose Leo Medhub for Fax Management",
      content:
        "We're not just a vendor. We're your team. Our fax management specialists work like an extension of your back office—secure, accurate, and focused on fast document handling.",
      benefits: [
        benefit("Fax & Document Tracker", "Track incoming faxes, routing status, and chart attachment so nothing is lost or delayed.", "tracker"),
        benefit("Dedicated Fax Team", "Trained staff who know your EMR and filing protocols for consistent, compliant handling.", "team"),
        benefit("Receive, Route & File", "We receive faxes, sort by type and urgency, route to the right chart or task, and file in your system—with full audit trail.", "services"),
      ],
    },
  },
  prescriptionCoordinator: {
    hero: {
      title: "Prescription Coordinator",
      description:
        "Handle refills, prior auth for medications, and pharmacy coordination so prescriptions move smoothly. Our team keeps patients on therapy and your staff off routine Rx tasks.",
      ctaText: "Book Appointment",
    },
    impact: {
      headline: "Faster refills,",
      highlight: "better adherence",
      description:
        "Prescription coordination shortens refill turnaround, supports prior auth for meds, and improves patient adherence and satisfaction.",
      metrics: [
        { value: 48, suffix: "%", label: "Faster refill turnaround" },
        { value: 70, suffix: "%", label: "Prior auth for meds completed in-house" },
        { value: 30, suffix: "%", label: "Fewer patient calls about refills" },
        { value: 95, suffix: "%", label: "Accuracy in Rx documentation and communication" },
      ],
    },
    smartChoice: {
      sectionHighlight: "Prescription Coordination",
      cards: [
        card(1, 0, "Refill Management", "Process refill requests and route for approval per your protocols."),
        card(2, 1, "Prior Auth for Meds", "Submit and track prior authorizations for medications."),
        card(3, 2, "Patient Communication", "Confirm refills and answer routine Rx questions."),
        card(4, 3, "Pharmacy Liaison", "Coordinate with pharmacies when needed for clarity or issues."),
        card(5, 4, "Compliance", "Document and follow controlled substance and refill policies."),
      ],
    },
    benefit: {
      heading: "Why Practices Choose Leo Medhub for Prescription Coordination",
      content:
        "We're not just a vendor. We're your team. Our prescription coordinators work like an extension of your clinical workflow—accurate, compliant, and focused on keeping patients on therapy.",
      benefits: [
        benefit("Refill & Prior Auth Tracker", "Track refill requests, prior auth status, and pharmacy follow-up in one place for full visibility.", "tracker"),
        benefit("Dedicated Rx Coordination Team", "Specialists who understand your refill protocols and prior auth requirements for medications.", "team"),
        benefit("Refills, Prior Auth & Pharmacy Liaison", "We handle refill requests, prior auth for meds, patient and pharmacy communication, and documentation—so your staff stays focused on clinical care.", "services"),
      ],
    },
  },
  referralManagement: {
    hero: {
      title: "Referral Management",
      description:
        "Coordinate specialist referrals from start to finish. We schedule, track, and close the loop so patients get to the right care and you stay informed.",
      ctaText: "Book Appointment",
    },
    impact: {
      headline: "More completed referrals,",
      highlight: "closed loops",
      description:
        "Dedicated referral management increases completion rates, shortens time to specialist appointment, and keeps PCP and specialist in sync.",
      metrics: [
        { value: 42, suffix: "%", label: "Increase in referral completion rate" },
        { value: 38, suffix: "%", label: "Shorter time to specialist appointment" },
        { value: 90, suffix: "%", label: "Referrals with documented follow-up" },
        { value: 50, suffix: "%", label: "Less care coordination time for staff" },
      ],
    },
    smartChoice: {
      sectionHighlight: "Referral Management",
      cards: [
        card(1, 0, "Scheduling", "Schedule specialist appointments per patient and payer requirements."),
        card(2, 1, "Tracking", "Track referral status and follow-up so nothing is lost."),
        card(3, 2, "Communication", "Keep patients and referring providers informed at each step."),
        card(4, 3, "Documentation", "Document referrals and consult results in the chart."),
        card(5, 4, "Reporting", "Visibility into referral volume, completion, and turnaround."),
      ],
    },
    benefit: {
      heading: "Why Practices Choose Leo Medhub for Referral Management",
      content:
        "We're not just a vendor. We're your team. Our referral coordinators work like an extension of your care team—proactive, organized, and focused on closing the loop.",
      benefits: [
        benefit("Referral Status Tracker", "See referral status, specialist appointment dates, and follow-up documentation in one place.", "tracker"),
        benefit("Dedicated Referral Team", "Coordinators who manage scheduling, tracking, and communication so PCP and specialist stay aligned.", "team"),
        benefit("Schedule, Track & Close the Loop", "We schedule specialist visits, track status, communicate with patients and referring providers, and document results—so nothing falls through.", "services"),
      ],
    },
  },
  eligibilityAndBenefits: {
    hero: {
      title: "Eligibility & Benefits Verification",
      description:
        "Verify patient eligibility and benefits before care so you reduce denials and collect what you're owed. Our team checks coverage, benefits, and authorizations so your billing starts clean.",
      ctaText: "Book Appointment",
    },
    impact: {
      headline: "Cleaner claims,",
      highlight: "fewer denials",
      description:
        "Thorough eligibility and benefits verification improves first-pass resolution and reduces avoidable denials and rework.",
      metrics: [
        { value: 45, suffix: "%", label: "Reduction in eligibility-related denials" },
        { value: 99, suffix: "%", label: "Verification accuracy before visit" },
        { value: 35, suffix: "%", label: "Less front-desk time on benefit checks" },
        { value: 28, suffix: "%", label: "Faster time to payment with clean claims" },
      ],
    },
    smartChoice: {
      sectionHighlight: "Eligibility & Benefits",
      cards: [
        card(1, 0, "Verification", "Confirm eligibility and coverage before or at point of service."),
        card(2, 1, "Benefits Breakdown", "Capture deductibles, copays, and coverage details."),
        card(3, 2, "Updates", "Re-verify when needed so information stays current."),
        card(4, 3, "Batch Processing", "Handle high volume with consistent, auditable workflows."),
        card(5, 4, "Reporting", "Visibility into verification rates and denial reasons."),
      ],
    },
    benefit: {
      heading: "Why Practices Choose Leo Medhub for Eligibility & Benefits",
      content:
        "We're not just a vendor. We're your team. Our eligibility specialists work like an extension of your front desk and billing—accurate, fast, and focused on clean claims.",
      benefits: [
        benefit("Verification Status Tracker", "See eligibility and benefits verification status before visits so billing starts with accurate coverage.", "tracker"),
        benefit("Dedicated Verification Team", "Specialists who verify coverage, capture benefits breakdown, and update as needed—so you reduce denials.", "team"),
        benefit("Verification & Benefits Breakdown", "We verify eligibility, capture deductibles and copays, support batch processing, and report on verification rates and denial reasons.", "services"),
      ],
    },
  },
  credentialing: {
    hero: {
      title: "Credentialing",
      description:
        "Provider enrollment and recredentialing so you get on payer panels and stay compliant. We manage applications, CAQH, and renewals so your providers can focus on patient care.",
      ctaText: "Book Appointment",
    },
    impact: {
      headline: "Faster enrollment,",
      highlight: "staying compliant",
      description:
        "Organized credentialing shortens time to panel participation and helps you meet payer and regulatory deadlines.",
      metrics: [
        { value: 40, suffix: "%", label: "Faster average time to enrollment" },
        { value: 100, suffix: "%", label: "Recredentialing tracked and completed on time" },
        { value: 95, suffix: "%", label: "Application accuracy and completeness" },
        { value: 12, suffix: "+", label: "Payers supported with consistent processes" },
      ],
    },
    smartChoice: {
      sectionHighlight: "Credentialing Support",
      cards: [
        card(1, 0, "Initial Credentialing", "Complete applications and follow up until approved."),
        card(2, 1, "Recredentialing", "Track and complete renewals so participation doesn't lapse."),
        card(3, 2, "CAQH & Portals", "Keep CAQH and payer portal profiles up to date."),
        card(4, 3, "Tracking", "Dashboard of status by provider and payer."),
        card(5, 4, "Support", "Dedicated point of contact for questions and updates."),
      ],
    },
    benefit: {
      heading: "Why Healthcare Organizations Choose Leo Medhub",
      content:
        "We're not just a vendor. We're your team. From startup to scale, our virtual credentialing specialists work like an extension of your practice—strategic, responsive, and results-driven.",
      benefits: [
        benefit("Proprietary Credentialing Tracker", "Access your application status 24/7 with our real-time credentialing tracker, built for total visibility and peace of mind.", "tracker"),
        benefit("Dedicated Credentialing Team", "Every project is assigned a team of experienced medical credentialing specialists, providing focused expertise, not generic support.", "team"),
        benefit("Comprehensive Services", "We cover provider enrollment, payer setup, group linking, payer contract negotiation, demographic updates, ERA/EFT setup, audit preparation for providers and more.", "services"),
      ],
    },
  },
  medicalCoding: {
    hero: {
      title: "Medical Coding",
      description:
        "Accurate ICD-10 and CPT coding so claims are clean and revenue is captured. Our certified coders work in your systems and specialty so you get paid fairly and stay compliant.",
      ctaText: "Book Appointment",
    },
    impact: {
      headline: "Better accuracy,",
      highlight: "fewer denials",
      description:
        "Expert coding improves first-pass acceptance, supports appropriate reimbursement, and reduces audit risk.",
      metrics: [
        { value: 96, suffix: "%", label: "Coding accuracy and compliance" },
        { value: 32, suffix: "%", label: "Reduction in coding-related denials" },
        { value: 25, suffix: "%", label: "Faster coding turnaround" },
        { value: 15, suffix: "+", label: "Specialties supported with trained coders" },
      ],
    },
    smartChoice: {
      sectionHighlight: "Medical Coding",
      cards: [
        card(1, 0, "Accuracy", "ICD-10 and CPT coding aligned with documentation and payer rules."),
        card(2, 1, "Compliance", "Coding that supports audits and reduces risk."),
        card(3, 2, "Turnaround", "Consistent turnaround so billing isn't delayed."),
        card(4, 3, "Specialty Coding", "Coders trained in your specialty and procedures."),
        card(5, 4, "Audits", "Support for internal and external coding audits."),
      ],
    },
    benefit: {
      heading: "Why Practices Choose Leo Medhub for Medical Coding",
      content:
        "We're not just a vendor. We're your team. Our certified coders work like an extension of your billing office—accurate, compliant, and focused on capturing appropriate revenue.",
      benefits: [
        benefit("Coding & Audit Tracker", "Track coding volume, accuracy metrics, and audit status in one place for full visibility.", "tracker"),
        benefit("Dedicated Coding Team", "Certified coders trained in your specialty and payer rules, not generic support.", "team"),
        benefit("Full Coding & Audit Support", "We handle ICD-10 and CPT coding, compliance reviews, specialty-specific coding, and support for internal and external audits.", "services"),
      ],
    },
  },
  revenueCycleManagement: {
    hero: {
      title: "Revenue Cycle Management",
      description:
        "End-to-end revenue cycle support so you collect more and spend less time on billing. From charge capture to follow-up and denial management, we help you optimize cash flow.",
      ctaText: "Book Appointment",
    },
    impact: {
      headline: "Stronger collections,",
      highlight: "healthier A/R",
      description:
        "RCM support improves clean claim rates, shortens days in A/R, and increases net collections.",
      metrics: [
        { value: 28, suffix: "%", label: "Improvement in clean claim rate" },
        { value: 22, suffix: "%", label: "Reduction in days in A/R" },
        { value: 18, suffix: "%", label: "Increase in net collections" },
        { value: 40, suffix: "%", label: "Faster denial resolution and re-submission" },
      ],
    },
    smartChoice: {
      sectionHighlight: "Revenue Cycle Management",
      cards: [
        card(1, 0, "Billing & Submission", "Charge entry, coding support, and claim submission."),
        card(2, 1, "Follow-Up", "AR follow-up and payer communication."),
        card(3, 2, "Denial Management", "Appeals and rework to maximize recovery."),
        card(4, 3, "Reporting", "Dashboards and KPIs for collections and A/R."),
        card(5, 4, "Compliance", "Policies and workflows that support compliance."),
      ],
    },
    benefit: {
      heading: "Why Practices Choose Leo Medhub for Revenue Cycle Management",
      content:
        "We're not just a vendor. We're your team. Our RCM specialists work like an extension of your billing office—strategic, responsive, and focused on healthier A/R and collections.",
      benefits: [
        benefit("A/R & Collections Tracker", "Access dashboards and KPIs for collections, days in A/R, and denial resolution in one place.", "tracker"),
        benefit("Dedicated RCM Team", "Experienced billers and follow-up specialists who know your payers and your workflows.", "team"),
        benefit("Billing, Follow-Up & Denials", "We cover charge entry, claim submission, AR follow-up, denial management, reporting, and compliance—so you optimize cash flow.", "services"),
      ],
    },
  },
  remoteMedicalBiller: {
    hero: {
      title: "Remote Medical Biller",
      description:
        "Expert billing support without adding headcount. Our remote medical billers submit claims, follow up, and manage denials so your revenue cycle runs smoothly.",
      ctaText: "Book Appointment",
    },
    impact: {
      headline: "More claims paid,",
      highlight: "less back-office burden",
      description:
        "Dedicated remote billers improve submission quality, speed up follow-up, and help you collect what you're owed.",
      metrics: [
        { value: 30, suffix: "%", label: "Faster claim submission turnaround" },
        { value: 25, suffix: "%", label: "Improvement in collection rate" },
        { value: 35, suffix: "%", label: "Reduction in aging A/R" },
        { value: 95, suffix: "%", label: "First-pass acceptance with clean claims" },
      ],
    },
    smartChoice: {
      sectionHighlight: "Remote Medical Billing",
      cards: [
        card(1, 0, "Submission", "Timely, accurate claim submission in your PM system."),
        card(2, 1, "Follow-Up", "Persistent follow-up on pending and denied claims."),
        card(3, 2, "Denial Management", "Identify root causes and resubmit or appeal effectively."),
        card(4, 3, "Reporting", "Regular reports on submissions, payments, and A/R."),
        card(5, 4, "Compliance", "Billing practices aligned with payer and regulatory requirements."),
      ],
    },
    benefit: {
      heading: "Why Practices Choose Leo Medhub for Remote Medical Billing",
      content:
        "We're not just a vendor. We're your team. Our remote medical billers work like an extension of your revenue cycle—dedicated, accurate, and focused on getting you paid.",
      benefits: [
        benefit("Submission & A/R Tracker", "See submission status, payments, and A/R aging in one place for full visibility.", "tracker"),
        benefit("Dedicated Remote Biller Team", "Assigned billers who learn your PM system and your payers for consistent, high-quality billing.", "team"),
        benefit("Submit, Follow Up & Appeal", "We handle claim submission, persistent follow-up, denial management, and reporting—so your revenue cycle runs smoothly.", "services"),
      ],
    },
  },
};
