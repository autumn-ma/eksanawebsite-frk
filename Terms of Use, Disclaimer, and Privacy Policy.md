# **Legal and Regulatory Framework for the "eksana" Legal Research Platform**

## **Part I: Strategic Legal and Regulatory Overview for "eksana"**

### **Section 1.1: Analysis of the "eksana" Platform's Legal Risk Profile**

The "eksana" platform, while presenting a unified user interface, operates as two functionally and legally distinct services. A precise understanding of this operational duality is fundamental to constructing a robust legal framework that mitigates risk and builds user trust. The platform's risk profile is not monolithic; it is a composite of a low-to-moderate risk information service and a high-risk data processing service.

The first feature, **"General Search,"** positions "eksana" as a legal information provider, akin to a traditional digital law library. Users access a curated database of legal precedents, statutes, and regulations. The primary legal risks associated with this feature are related to intellectual property rights of the database content, the accuracy and currency of the information provided, and general service availability. While significant, these risks are well-understood in the digital publishing and SaaS industries.

The second feature, **"Case Research,"** fundamentally alters this risk calculus. This interactive AI-powered tool requires users, who are legal professionals, to input confidential and often privileged information related to their active cases. This includes case facts, client details, strategic notes, and draft arguments. By accepting and processing this user-provided data, "eksana" transcends the role of a mere information provider and becomes a processor of highly sensitive personal and professional data. This elevation in function triggers a far more stringent set of legal and ethical obligations.

The information submitted through the "Case Research" feature falls squarely within the definitions of "personal information" and, in many instances, "sensitive information" as defined by Nepal's Individual Privacy Act, 2018 (2075).1 "Personal information" includes a wide array of data that can identify an individual, while "sensitive information" encompasses details about caste, ethnicity, political affiliation, religious beliefs, health status, sexual orientation, and property details.2 Case files frequently contain such information. This act of processing sensitive data imposes heightened legal duties on "eksana" regarding explicit consent, purpose limitation, data minimization, and security that are not applicable to the "General Search" feature in the same manner.1

Furthermore, the nature of legal work itself introduces a unique dimension of risk. Legal professionals in Nepal, as elsewhere, are bound by a duty of confidentiality to their clients. When a lawyer uses "eksana" for "Case Research," the platform becomes a participant in this chain of confidentiality. In international data protection parlance (such as the GDPR, which influences global best practices), "eksana" would be considered a "data processor" or "subprocessor" acting on behalf of the lawyer (the "data controller"). Any failure by "eksana" to protect this data could not only lead to direct legal liability under Nepalese law but also cause catastrophic professional and reputational damage to its users.

Therefore, the legal architecture for "eksana"—its Terms of Use, Privacy Policy, and Disclaimer—cannot be drafted for the lowest common denominator of risk. It must be constructed around the highest-risk activity: the processing of confidential legal case data. The standards of data protection, confidentiality, and liability limitation must be set at a level that addresses the profound responsibilities of the "Case Research" feature, as these standards will necessarily cover the lesser risks of the "General Search" feature.

### **Section 1.2: The Nepalese Legal Framework: Key Obligations and Implications**

The operation of "eksana" within Nepal is governed by a triad of key statutes: the Electronic Transactions Act, 2063 (2008), the Individual Privacy Act, 2018 (2075), and the Consumer Protection Act, 2075 (2018). Each of these laws imposes specific obligations and carries significant penalties, which have direct implications for the platform's design, policies, and user agreements.

**Table 1: Summary of Applicable Nepalese Legislation and Implications for "eksana"**

| Act & Provision | Key Requirement | Direct Implication for "eksana" |
| ----- | ----- | ----- |
| **Individual Privacy Act, 2018 (2075)** 1 | **Consent and Purpose Limitation:** A public body or body corporate must obtain consent from an individual before collecting their personal information. The data can only be collected and used for the specific, declared purpose.1 | The user onboarding process must incorporate a clear and affirmative "click-wrap" agreement to the Privacy Policy. The policy must explicitly state that user-provided "Input" for the "Case Research" feature is used *only* to provide the service for that specific user and is *not* used for any other purpose, such as training AI models. |
| **Individual Privacy Act, 2018 (2075)** 1 | **Data Security Obligation:** Public entities must make appropriate arrangements to protect personal information against unauthorized access, use, change, disclosure, or publication.1 | "eksana" must implement and describe robust technical and organizational security measures, such as encryption of data at rest and in transit, strict access controls, and regular security audits. Failure to do so constitutes a breach of the Act. |
| **Individual Privacy Act, 2018 (2075)** 1 | **User Rights:** Individuals have the right to access their personal information, be informed about its collection, and request the rectification or deletion of inaccurate data.1 | The platform must provide user-accessible account settings where individuals can review and update their personal information (e.g., name, email). The Privacy Policy must clearly articulate these rights and provide a contact method for users to exercise them. |
| **Individual Privacy Act, 2018 (2075)** 1 | **Penalties:** Offences under the Act can result in imprisonment for up to three years, a fine up to NPR 30,000, or both. Aggrieved parties can also claim compensation.1 | The legal and financial consequences of a data breach are severe. This underscores the critical importance of investing in top-tier security infrastructure and comprehensive, compliant legal policies. |
| **Electronic Transactions Act, 2063 (2008) (ETA)** 7 | **Unauthorized Access & Piracy:** Prohibits unauthorized access to computer materials and the piracy, destruction, or alteration of computer source code. Penalties include up to 3 years imprisonment or a fine up to NPR 200,000, or both.7 | The Terms of Use must explicitly prohibit users from attempting to reverse engineer, decompile, or otherwise access the source code of the "eksana" platform. It must also forbid unauthorized account sharing, which constitutes a form of unauthorized access. |
| **Electronic Transactions Act, 2063 (2008) (ETA)** 7 | **Publication of Illegal Materials:** Prohibits the publication of materials that spread hate or jealousy or jeopardize harmonious relations. Penalties include up to 5 years imprisonment or a fine up to NPR 100,000, or both.7 | While "eksana" is a professional tool, the Terms of Use must include a clause prohibiting the use of the service to generate or disseminate illegal or prohibited content, thereby shifting liability for misuse to the user. |
| **Electronic Transactions Act, 2063 (2008) (ETA)** 7 | **Cyber Fraud:** Criminalizes the creation or use of a digital signature certificate with intent to defraud, or gaining benefit from fraudulent actions. Penalties include fines up to NPR 100,000 and imprisonment up to two years, or both.7 | The platform's security measures must protect against account takeover and fraudulent use. The Terms of Use should state that users are responsible for all activities conducted through their account. |
| **Consumer Protection Act, 2075 (2018)** 9 | **Right to Information & Prohibition of Misleading Practices:** Consumers have the right to be informed about the quality and attributes of services. The Act prohibits selling or providing services by "lying, concealing, hiding or misleading the actual quality, quantity, price, measurement, format or composition".9 | The Disclaimer must be exceptionally clear, prominent, and candid about the inherent limitations of AI. It must explicitly state that the AI-generated "Output" can be inaccurate, incomplete, or erroneous. This manages user expectations and serves as a crucial defense against claims of misleading consumers about the service's quality. |
| **Consumer Protection Act, 2075 (2018)** 9 | **Right to Safety:** Consumers have the right to be protected from goods or services that may harm their health, life, or property.9 | For a legal professional, relying on faulty AI-generated legal analysis can cause significant professional and financial harm. The Disclaimer's warning that the service is not a substitute for professional judgment and that all outputs must be independently verified is essential to mitigate this risk. |

### **Section 1.3: Benchmarking Against Global Legal AI Best Practices ([Harvey.ai](http://Harvey.ai), Lucio)**

To succeed in a market of sophisticated legal professionals, "eksana" must not only comply with Nepalese law but also align with the established best practices of leading international legal AI platforms. The user has identified [Harvey.ai](http://Harvey.ai) and Lucio as relevant benchmarks, and an analysis of their legal and commercial strategies reveals a clear "gold standard" for trust and security in this sector.

The single most critical principle derived from analyzing these competitors is the **"Zero-Trust, Zero-Training" data policy**. This is not merely a feature or a minor legal clause; it is the central pillar of their entire value proposition to the legal community. Legal professionals are custodians of their clients' most sensitive information and are bound by stringent duties of confidentiality. Any tool that even hints at using this confidential data for its own purposes, such as training a global AI model, would be commercially unviable and ethically catastrophic.

[Harvey.ai](http://Harvey.ai) and Lucio have built their platforms and their entire public narrative around this principle. They offer features like "workspace isolation" and "zero data retention" and make unequivocal statements in their legal agreements. For example, [Harvey.ai](http://Harvey.ai)'s terms explicitly state, "Counsel AI will not train any AI models using your Content or Customer Data".14 This commitment is absolute and non-negotiable. For "eksana" to be considered a trustworthy and professional-grade tool by Nepalese lawyers, it must adopt this "zero-training" policy without reservation and articulate it clearly and repeatedly in its Terms of Use and Privacy Policy. Failure to do so would represent a fundamental misunderstanding of the target market and would likely lead to commercial failure, irrespective of the platform's technical capabilities.

Beyond this core principle, several other best practices are evident from the benchmark analysis:

* **Intellectual Property Ownership:** Competitors adopt a user-centric approach to data ownership. Both [Harvey.ai](http://Harvey.ai) and Lucio's platform terms state that the user retains full ownership of their input data ("Customer Data" or "Input").16 Furthermore, [Harvey.ai](http://Harvey.ai) clarifies that the user also owns the specific "Output" generated from their input.15 This is a powerful, trust-building stance that "eksana" should emulate. It reassures users that they are not relinquishing control over their work product.  
* **Explicit Disclaimers and Liability Limitation:** Leading platforms are transparent about the limitations of AI. [Harvey.ai](http://Harvey.ai)'s evaluation terms state that the service is a "research tool" and its output is "not legal advice" and "may contain errors and misstatements".15 This language is mirrored in other AI disclaimers, which emphasize that outputs may be "incomplete, incorrect, or offensive".18 This candor is a crucial risk management strategy. It is coupled with strict limitations of liability, often capping financial exposure to a fixed amount (e.g., Harvey's $1,000 cap in its evaluation terms) or the fees paid by the user.15  
* **Clear and Structured Legal Documents:** The legal agreements of platforms like [Harvey.ai](http://Harvey.ai) are comprehensive but well-structured, using clear headings and definitions.15 This approach enhances readability and transparency, which is particularly important when the audience consists of lawyers who will scrutinize these documents carefully. "eksana" should adopt a similar structure, avoiding overly dense or ambiguous "legalese" in favor of precise and clearly organized terms.

By integrating these global best practices with strict adherence to Nepalese law, "eksana" can position itself not as a regional alternative, but as a world-class tool that understands and respects the unique obligations of the legal profession.

## **Part II: Terms of Use for "eksana"**

### **Section 2.1: Expert Analysis and Strategic Recommendations**

The Terms of Use document is the foundational contract between "eksana" and its users. Its primary purpose is to define the rights and obligations of both parties, establish the rules of engagement with the platform, and limit the platform's liability. For "eksana," the strategy behind these terms must be to balance robust protection for the company with the transparency and fairness required to earn the trust of legal professionals.

A key strategic choice reflected in the following draft is the model for data ownership and use. While the user must retain ownership of their confidential inputs to satisfy their professional obligations, the platform requires a legal basis to process that data. The drafted terms achieve this through a "license back" mechanism, a nuanced but critical legal structure. This approach, benchmarked against industry leader [Harvey.ai](http://Harvey.ai) 16, grants "eksana" a limited, non-exclusive, royalty-free right to process user-submitted data

*solely for the purpose of providing the service to that user*. This narrowly defined license is crucial. It provides the legal authority for the platform's AI to analyze the user's input and generate an output, while simultaneously preventing "eksana" from using that data for any other purpose, most notably for training its AI models. This distinction is vital for building trust with a user base that is highly sensitive to data confidentiality.

The terms also incorporate a strong "No Training Commitment." This is not buried within a larger paragraph but is presented as a clear, standalone clause. This strategic decision elevates the commitment from a simple legal statement to a core feature of the service promise, directly addressing the primary concern of legal professionals when using AI tools.14

Furthermore, the "Prohibited Actions" section is drafted to directly align with the offenses outlined in Nepal's Electronic Transactions Act, 2063.7 By explicitly forbidding actions like reverse engineering, unauthorized access, and use for illegal purposes, the terms not only protect the platform's intellectual property but also establish a clear contractual basis for terminating access for users who violate Nepalese law, thereby mitigating the platform's own legal risk.

Finally, the limitation of liability and disclaimer clauses are essential for managing the financial and legal risks associated with providing an AI service whose outputs can be imperfect. By capping liability and requiring users to acknowledge the service's limitations, the terms aim to create a fair allocation of risk, where the user retains ultimate professional responsibility for verifying and using the AI-generated content.

### **Section 2.2: Terms of Use for "eksana"**

**Effective Date:**

These Terms of Use ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and, a company registered in Nepal ("eksana," "we," "us," or "our"), regarding your access to and use of the eksana legal research platform and associated services (collectively, the "Service").

1. Agreement to Terms

By creating an account, accessing, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and our Disclaimer, which are incorporated by reference into this agreement. If you do not agree with these Terms, you must not access or use the Service. If you are using the Service on behalf of an organization or entity, you represent and warrant that you have the authority to bind that entity to these Terms.

**2\. Definitions**

* **"Service"** refers to the eksana platform, including the "General Search" and "Case Research" features, our websites, APIs, and any associated software or documentation.  
* **"User"** refers to the individual or legal entity that has registered for and uses the Service.  
* **"Input"** refers to any data, text, documents, queries, or other information that a User provides, uploads, or submits to the Service, particularly in connection with the "Case Research" feature.  
* **"Output"** refers to the AI-generated text, analysis, summaries, or other content that the Service generates and returns to a User based on their Input.  
* **"Content"** refers collectively to Input and Output.  
3. Description of Services

The Service provides two primary features:

* **a. General Search:** A feature allowing Users to search, browse, and retrieve information from our database of legal precedents, statutes, regulations, and other legal documents obtained from Nepal Kanoon Patrika, Supreme court website, Nepal Law commission and other relevant sources.   
* **b. Case Research:** An interactive artificial intelligence feature that allows Users to submit Input (e.g., case-related information) to receive AI-generated Output designed to assist with legal research, analysis, and argument development.

**4\. User Accounts and Responsibilities**

* **a. Account Creation:** You must provide accurate and complete information to create a user account.  
* **b. Account Security:** You are responsible for maintaining the confidentiality of your account login credentials (username and password) and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. Sharing of account credentials with any other individual or entity is strictly prohibited.  
5. License and Permitted Use

Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service solely for your internal business purposes as a legal professional.17

6. Prohibited Actions

You agree not to, and not to permit others to:

* a. Use the Service for any unlawful, illegal, or unethical purpose, or in violation of any applicable Nepalese or international law.  
* b. Reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code, underlying ideas, or algorithms of the Service, in violation of the Electronic Transactions Act, and other Intellectual Property Laws of Nepal.  
* c. Use any automated means, such as robots or scrapers, to access or extract data from the Service, except as expressly permitted by us.  
* d. Share, sell, rent, lease, or sublicense your access to the Service or your account credentials.  
* e. Upload or transmit any Input that infringes on the intellectual property rights or privacy rights of any third party.  
* f. Use the Service to generate, publish, or disseminate any material that is defamatory, obscene, or promotes hatred or discrimination, as prohibited under the Electronic Transactions Act, 2063.7  
* g. Interfere with or disrupt the integrity or performance of the Service or its underlying infrastructure.

**7\. Content and Intellectual Property**

* **a. User Content:** You retain all ownership rights, title, and interest in and to your Input.16 We do not claim any ownership over the confidential information you provide to the Service.  
* **b. Output:** As between you and eksana, you own the specific Output you generate through your use of the Service.15 You are responsible for its use and for ensuring it complies with all applicable laws and professional standards.  
* **c. Platform License:** To enable us to operate the Service, you grant eksana a limited, non-exclusive, worldwide, royalty-free license to use, process, store, and transmit your Input solely to the extent necessary to provide the Service to you, respond to your requests, and address technical issues.16 This license is for the sole purpose of operating the platform and does not grant us any rights to use your Input for any other purpose.  
* **d. No Training Commitment:** **eksana will not use your Input or Output to train, improve, or otherwise enhance its artificial intelligence models or any other aspect of its Service.** Your confidential data is used exclusively to generate Output for your specific session and is not incorporated into any general or shared models.  
* **e. eksana IP:** We retain all ownership rights, title, and interest in and to the Service itself, including all underlying software, AI models, designs, branding, and aggregated, anonymized usage data.

**8\. Fees and Payment**

**9\. Term and Termination**

* a. These Terms will remain in effect until terminated by either you or us.  
* b. You may terminate your account at any time by discontinuing use of the Service and notifying us.  
* c. We reserve the right to suspend or terminate your access to the Service immediately, without prior notice, if you breach these Terms, misuse the Service, or engage in any activity that we deem harmful to the platform or other users.  
* d. Upon termination, your right to use the Service will cease immediately, and you must destroy any Output or other materials obtained from the Service. Provisions of these Terms that by their nature should survive termination shall survive, including, but not limited to, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.  
10. Disclaimer of Warranties

The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Your use of the Service is subject to the detailed Disclaimer document, which is incorporated herein by reference.

11. Limitation of Liability

To the fullest extent permitted by Nepalese law, in no event shall eksana, its affiliates, directors, or employees be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service. Our total aggregate liability for any and all claims related to the Service shall not exceed the amount of fees paid by you to eksana during the twelve (12) month period immediately preceding the event giving rise to the claim.

12. Indemnification

You agree to defend, indemnify, and hold harmless eksana and its affiliates, directors, and employees from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Service; (ii) your violation of any term of these Terms; or (iii) your violation of any third-party right, including without limitation any copyright, property, or privacy right.

13. Governing Law and Dispute Resolution

These Terms shall be governed by and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions. In the event of any dispute, claim, or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation, or validity thereof, the parties shall first seek to resolve the matter through \*\*binding arbitration in accordance with the Arbitration Act of Nepal\*\*. The seat of arbitration shall be Kathmandu, Nepal, and the proceedings shall be conducted in English or Nepali, as mutually agreed by the parties.

If the dispute cannot be resolved through arbitration, or if enforcement of an arbitral award requires judicial intervention, the matter shall be subject to the exclusive jurisdiction of the competent courts located in Kathmandu, Nepal.

**14\. General Provisions**

* **a. Entire Agreement:** These Terms, together with the Privacy Policy and Disclaimer, constitute the entire agreement between you and eksana concerning the Service.  
* **b. Severability:** If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.  
* **c. Assignment:** You may not assign or transfer these Terms without our prior written consent. We may assign or transfer these Terms, in whole or in part, without restriction.  
* **d. Changes to Terms:** We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website or through other communications. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.

## **Part III: Privacy Policy for "eksana"**

### **Section 3.1: Expert Analysis and Strategic Recommendations**

The Privacy Policy is arguably the most critical document for establishing trust with "eksana's" user base of legal professionals. In a field governed by confidentiality, a clear, transparent, and robust privacy policy is not merely a legal compliance exercise; it is a powerful marketing and client retention tool. The strategy for "eksana's" Privacy Policy is to go beyond the minimum requirements of the law and proactively demonstrate an unwavering commitment to protecting user data.

This policy is meticulously designed to comply with Nepal's Individual Privacy Act, 2018 (2075).1 This Act provides a strong foundation for data protection, granting individuals specific, enforceable rights, such as the right to be informed about data collection, the right to access and rectify their data, and the right to have their data protected.1 A vague or evasive policy would be an immediate red flag for any lawyer scrutinizing the service. Therefore, this policy is structured to be a transparent "user's guide" to their data rights and our data practices.

A central feature of this policy is the "Data Processing Activities" table. This table is not legally mandated in this exact format by Nepalese law, but it is a best practice derived from global standards like the GDPR, which competitors like [Harvey.ai](http://Harvey.ai) adhere to.19 Its inclusion serves two strategic purposes. First, it forces internal discipline upon "eksana," requiring the company to justify every piece of data it collects by mapping it to a specific purpose and a valid legal basis under Nepalese law (primarily, user consent and the necessity of processing for the performance of a contract).1 Second, it provides users with an exceptionally clear, at-a-glance summary of how their data is handled, fostering a level of transparency that builds significant trust.

The policy also makes a clear distinction between different types of data. It separates "Account Data" (like name and email) from the highly sensitive "Case Research Data" (the confidential Input provided by users). It explicitly states that Case Research Data is treated with the highest level of security and is subject to strict retention limits (e.g., deletion at the end of a user session), a practice that directly addresses user fears about their confidential information lingering on third-party servers. By explicitly enumerating user rights under Nepalese law and providing a clear process for exercising them, the policy empowers users and demonstrates that "eksana" views privacy compliance not as a burden, but as a fundamental aspect of its service.

### **Section 3.2: Privacy Policy for "eksana"**

**Effective Date:**

1. Introduction

("eksana," "we," "us," or "our") is committed to protecting the privacy and confidentiality of our users. This Privacy Policy outlines our practices concerning the collection, use, storage, and protection of your personal information when you use the eksana legal research platform (the "Service").

This policy is designed to be compliant with the laws of Nepal, including the Individual Privacy Act, 2018 (2075). Our goal is to be transparent about how we handle your data and to empower you to make informed decisions. By using the Service, you consent to the data practices described in this policy.

The entity responsible for your information (the "data controller") is, located at.

2. Data Processing Activities, Data Types, and Legal Basis

We believe in data minimization and only collect information that is necessary to provide and improve our Service. The following table details our data processing activities:

| Processing Activity | Types of Personal Data | Purpose of Processing | Legal Basis under Nepalese Law |
| ----- | ----- | ----- | ----- |
| **Account Creation & Management** | Name, email address, professional title, password (hashed), payment information. | To create and manage your user account, provide access to the Service, process payments, and communicate essential service-related information. | Performance of a contract (our Terms of Use); Your explicit consent provided during sign-up. |
| **Processing a "Case Research" Query** | The "Input" provided by the User, which may include Personal Information and Sensitive Information (as defined by the Individual Privacy Act, 2018\) related to the User's legal case.2 | To process the Input through our AI model and generate the requested "Output" for the specific query within the User's active session. | Performance of a contract; Your explicit consent, given each time you submit a query to the "Case Research" feature. |
| **Providing Customer Support** | Name, email address, and the content of your communications with us. | To respond to your inquiries, troubleshoot technical issues, and provide assistance with using the Service. | Our legitimate interest in providing quality customer service; Your consent when you initiate contact. |
| **Service Improvement & Security Monitoring** | Technical Data, such as IP address, browser type, device information, and anonymized usage statistics. | To monitor the performance and security of our Service, prevent fraud, and analyze usage trends to improve user experience. This data is aggregated and anonymized and is not linked to your personal or case data. | Our legitimate interest in maintaining a secure and functional service. |

3. Information We Collect

We collect the following categories of information:

* **a. Personal Data You Provide:**  
* **Account Information:** When you register, we collect your name, email address, professional details, and password.  
* **Payment Information:** When you subscribe, we collect necessary billing information through our secure payment processor.  
* **Case Research Data ("Input"):** Any documents, facts, or queries you voluntarily submit to the "Case Research" feature. We treat this information as highly confidential.  
* **Communications:** If you contact us for support or feedback, we collect your contact information and the content of your message.  
* **b. Technical Data Collected Automatically:**  
* **Log Data:** Like most websites, our servers automatically record information when you use the Service, including your IP address, browser type, operating system, and the date and time of your access.  
* **Cookies:** We use essential cookies to maintain your login session and ensure the basic functionality of the Service. We do not use tracking or advertising cookies. You can control cookie settings through your browser.  
4. How We Use Your Information

Your information is used for the following purposes:

* **To Provide and Maintain the Service:** To operate the platform, authenticate users, process queries, and deliver Output.  
* **To Improve and Secure the Service:** To monitor for security threats, analyze performance, and fix bugs.  
* **To Communicate With You:** To send important service updates, respond to support requests, and inform you about changes to our policies. We will not send you marketing communications without your explicit opt-in consent.  
* **To Comply with Legal Obligations:** To adhere to applicable Nepalese laws and respond to lawful requests from government authorities.  
5. Data Security

We take the security of your data extremely seriously and have implemented appropriate technical and organizational measures to protect it against unauthorized access, disclosure, alteration, or destruction, in line with our obligations under the Individual Privacy Act, 2018.1 These measures include:

* **Encryption:** All data, including your Input and Output, is encrypted both in transit (using TLS/SSL) and at rest.  
* **Access Controls:** Access to personal and confidential user data is strictly limited to authorized personnel who require it to perform their job functions and are bound by confidentiality obligations.  
* **Data Isolation:** Your "Case Research" data is processed in an isolated environment and is never co-mingled with the data of other users.  
* **Regular Audits:** We conduct regular security assessments and vulnerability testing to ensure the robustness of our systems.  
6. Data Retention

We retain your data only for as long as necessary to fulfill the purposes for which it was collected:

* **Account Data:** We retain your account information for as long as your account is active and for a reasonable period thereafter to comply with legal and accounting obligations.  
* **Case Research Data ("Input" and "Output"):** To maximize your privacy and confidentiality, all Input and Output related to the "Case Research" feature are permanently deleted from our systems at the end of your user session or after a short, pre-defined period of inactivity. This data is not retained long-term.  
* **Technical Data:** Anonymized and aggregated technical data may be retained for longer periods for statistical analysis.  
7. Your Rights under Nepalese Law

In accordance with the Individual Privacy Act, 2018, you have the following rights regarding your personal information 1:

* **a. The Right to be Informed:** You have the right to be informed about the collection and use of your personal data, which is the purpose of this Privacy Policy.  
* **b. The Right of Access:** You have the right to request a copy of the personal information we hold about you.  
* **c. The Right to Rectification:** You have the right to request that we correct any inaccurate or incomplete personal information. You can update most of your account information directly in your account settings.  
* **d. The Right to Erasure:** You have the right to request the deletion of your personal information, subject to certain legal and contractual restrictions.  
* **e. The Right to Object to Processing:** You have the right to object to the processing of your personal data in certain circumstances.

To exercise any of these rights, please contact us at the email address provided below. We will respond to your request in accordance with Nepalese law.

8. Third-Party Service Providers

We may use trusted third-party service providers to help us operate our Service (e.g., cloud hosting providers, payment processors). These providers are contractually bound to maintain the confidentiality and security of your data and are prohibited from using it for any purpose other than to provide services to us. We will not sell, rent, or share your personal information with third parties for their marketing purposes.

9. International Data Transfers

Our servers may be located outside of Nepal. If we transfer your personal data internationally, we will ensure that the transfer is lawful and that your data is protected by appropriate safeguards, in compliance with applicable data protection laws.

10. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on our website and, where feasible, by sending a notification to your registered email address.

11. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer at:

Email: privacy@eksana.com

Address:

## **Part IV: Disclaimer for "eksana"**

### **Section 4.1: Expert Analysis and Strategic Recommendations**

The Disclaimer is a primary and essential risk mitigation instrument for "eksana." Its legal purpose is to manage user expectations and limit liability, particularly in the context of an AI-powered service where outputs are inherently probabilistic and not guaranteed to be accurate. The strategic deployment of this disclaimer is as important as its content.

The core strategy is to establish "constructive knowledge" on the part of the user. This legal principle means that "eksana" must take reasonable steps to ensure a user cannot plausibly claim they were unaware of the AI's limitations. A disclaimer buried in a website footer is legally weak. To be effective, the disclaimer's key messages must be presented prominently and, ideally, require user acknowledgment before they can access the high-risk "Case Research" feature. This could be achieved through a persistent banner or a one-time pop-up that users must dismiss.

This proactive approach directly addresses the risks posed by Nepal's Consumer Protection Act, 2075.9 This Act prohibits misleading consumers about the quality or attributes of a service.10 An AI tool that can "hallucinate" or generate flawed legal analysis could easily be accused of being misleading if its limitations are not made crystal clear.20 By forcing the user to confront the disclaimer, "eksana" makes it significantly more difficult for a user who suffers damages from relying on faulty Output to claim they were deceived. The disclaimer shifts the responsibility for verification squarely onto the user, who is a trained legal professional expected to exercise independent judgment.

The language of the disclaimer is drafted to be direct, unambiguous, and forceful. It uses clear, concise statements and bold text for critical warnings. This is not the place for nuanced or soft language. The goal is to create a clear, documented record that the user was warned of the risks, thereby providing a robust defense against potential claims of negligence, misrepresentation, or breach of consumer protection laws.

### **Section 4.2: Disclaimer for "eksana"**

**IMPORTANT: Please read this disclaimer carefully before using the "eksana" Service.**

Your use of the "eksana" platform constitutes your acknowledgment and acceptance of the following terms.

1. For Informational and Research Purposes Only

The "eksana" Service, including all features and content, is provided as a legal research assistant. It is intended to augment, not replace, the professional skill, knowledge, and judgment of a qualified legal professional.

2. No Legal Advice

The Output generated by "eksana" does not constitute legal advice, legal opinion, or the practice of law. "eksana" is not a law firm and does not provide legal services. No information provided by the Service should be construed as such.

3. Potential for Inaccuracies and Errors

The artificial intelligence models used by the Service are complex and operate on a probabilistic basis. As a result, the Output may be incomplete, inaccurate, contain factual errors, or may not reflect the most current legal developments or interpretations.15 The Service may generate plausible-sounding but incorrect information ("hallucinations").

4. User's Sole Responsibility for Verification

You, the User, are solely and entirely responsible for independently verifying the accuracy, completeness, and applicability of all Output before relying on it, citing it, or using it in any professional capacity, including in advice to clients, court filings, or any other legal work product. You must apply your own professional legal judgment to all information generated by the Service. Do not rely on the Output as a sole source of truth or factual information.

5. "AS IS" and "AS AVAILABLE" Provision

The Service is provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or secure.15

6. No Attorney-Client Relationship

Use of the "eksana" Service does not create, and is not intended to create, an attorney-client relationship or any other form of professional or fiduciary relationship between you and "eksana" or its parent company.

## **Part V: Implementation and Ongoing Governance**

### **Section 5.1: Recommendations for User Consent and Onboarding**

The legal effectiveness of the Terms of Use and Privacy Policy hinges on obtaining valid, informed consent from the user. To achieve this, the following implementation steps are recommended:

* **Click-Wrap Agreement:** During the user registration and account creation process, "eksana" must implement a mandatory "click-wrap" agreement. This involves presenting the user with hyperlinks to the full "Terms of Use" and "Privacy Policy" documents and requiring them to tick a checkbox next to a statement such as: *"By checking this box, I confirm that I have read, understood, and agree to be bound by the eksana Terms of Use and Privacy Policy."* The "Create Account" button should only become active after this box is checked. This creates a clear, affirmative act of consent that is legally enforceable.  
* **Prominent Disclaimer for High-Risk Feature:** For the "Case Research" feature, a more proactive approach to the disclaimer is necessary. When a user accesses this feature for the first time, a modal window or a persistent, non-intrusive banner should appear, displaying the core points of the Disclaimer (e.g., "Not Legal Advice," "Verify All Outputs," "Potential for Errors"). The user should be required to click an "I Understand" or "Acknowledge" button to dismiss this message before they can proceed. This action reinforces their awareness of the tool's limitations at the point of use.

### **Section 5.2: Internal Governance and Compliance Checklist**

To ensure ongoing adherence to the legal framework established in these documents, the "eksana" team should adopt an internal compliance checklist. This checklist serves as a practical guide for operational and development teams.

* \[ \] **Data Security Protocol:** Regularly review, test, and update all data security measures, including encryption protocols, access controls, and vulnerability scanning. Maintain a log of these activities.  
* \[ \] **"No Training" Policy Adherence:** Ensure all engineering and data science personnel are aware of and strictly adhere to the policy of not using any user Input or Output for training or improving AI models. This should be a documented part of the development lifecycle.  
* \[ \] **User Rights Request Process:** Establish a clear, documented internal process for handling user requests related to their data rights under the Individual Privacy Act (e.g., access, rectification, erasure).1 Designate a responsible individual or team (e.g., the Data Protection Officer) to manage these requests and ensure timely responses as required by law.  
* \[ \] **Consent Record Keeping:** Maintain secure, auditable records of user consent to the Terms of Use and Privacy Policy, including the version of the documents they agreed to and the timestamp of their agreement.  
* \[ \] **Third-Party Vendor Management:** Regularly review the security and privacy practices of all third-party vendors (e.g., cloud hosting provider) to ensure they meet the standards promised in the Privacy Policy. Contracts with these vendors must include robust data protection and confidentiality clauses.

### **Section 5.3: Protocol for Policy Review and Updates**

Legal and technological landscapes are dynamic. The legal documents for "eksana" should be considered living documents that require periodic review and maintenance.

* **Review Schedule:** A formal review of the Terms of Use, Privacy Policy, and Disclaimer should be conducted at least annually. Additionally, a review should be triggered by specific events, such as:  
* Significant changes to the platform's features or data processing activities.  
* Changes in applicable Nepalese law (e.g., new data protection or cybersecurity legislation).  
* A material security incident.  
* **Notification of Changes:** For any material changes to the Terms or Privacy Policy, "eksana" must notify its users. Best practice, as followed by competitors 19, is to provide advance notice (e.g., 30 days) via email to the user's registered address and/or through a prominent notice on the platform. The notification should summarize the key changes and link to the updated documents. Continued use of the Service after the effective date of the changes would signify acceptance of the new terms. This transparent process is crucial for maintaining user trust.

### **Works cited**

1. Data Protection and Privacy Legislation in Nepal \- Imperial Law Associates, accessed July 21, 2025, [https://www.lawimperial.com/data-protection-and-privacy-legislation-in-nepal/](https://www.lawimperial.com/data-protection-and-privacy-legislation-in-nepal/)  
2. How Privacy Act covers you | The Farsight Nepal, accessed July 21, 2025, [https://farsightnepal.com/news/how-privacy-act-covers-you/](https://farsightnepal.com/news/how-privacy-act-covers-you/)  
3. Data protection laws in Nepal, accessed July 21, 2025, [https://www.dlapiperdataprotection.com/index.html?t=law\&c=NP](https://www.dlapiperdataprotection.com/index.html?t=law&c=NP)  
4. Nepal | Jurisdictions \- DataGuidance, accessed July 21, 2025, [https://www.dataguidance.com/jurisdictions/nepal](https://www.dataguidance.com/jurisdictions/nepal)  
5. The Privacy Act, 2075 (2018) \- National Information Commission, accessed July 21, 2025, [https://nic.gov.np/files/new\_files/the-privacy-act-2075-2018.pdf](https://nic.gov.np/files/new_files/the-privacy-act-2075-2018.pdf)  
6. Data Protection And Privacy Legislation In Nepal \- CompanyNP, accessed July 21, 2025, [https://companynp.com/data-protection-and-privacy-legislation-in-nepal/](https://companynp.com/data-protection-and-privacy-legislation-in-nepal/)  
7. Highlights of Electronic Transactions Act, 2006 (2063) \- Imperial Law Associates, accessed July 21, 2025, [https://www.lawimperial.com/highlights-of-electronic-transactions-act-2006/](https://www.lawimperial.com/highlights-of-electronic-transactions-act-2006/)  
8. Electronic Transaction Act 2063 | PDF \- Scribd, accessed July 21, 2025, [https://www.scribd.com/document/654370179/Electronic-Transaction-Act-2063](https://www.scribd.com/document/654370179/Electronic-Transaction-Act-2063)  
9. Consumer Protection Law in Nepal: Rights and Legal Remedies 2025, accessed July 21, 2025, [https://onespherelaw.com/consumer-protection-law-rights-and-remedies/](https://onespherelaw.com/consumer-protection-law-rights-and-remedies/)  
10. Consumer Rights and Protection Act in Nepal | Updated Laws 2025, accessed July 21, 2025, [https://lawalpine.com/blog/consumer-protection-act-in-nepal](https://lawalpine.com/blog/consumer-protection-act-in-nepal)  
11. The Consumer Protection Act, 2075 (2018) \- FAOLEX Database | Food and Agriculture Organization of the United Nations, accessed July 21, 2025, [https://faolex.fao.org/docs/pdf/NEP225788.pdf](https://faolex.fao.org/docs/pdf/NEP225788.pdf)  
12. Consumer's Rights: Law and Practice in Nepal \- HeinOnline, accessed July 21, 2025, [https://heinonline.org/hol-cgi-bin/get\_pdf.cgi?handle=hein.journals/njal15§ion=19](https://heinonline.org/hol-cgi-bin/get_pdf.cgi?handle=hein.journals/njal15%C2%A7ion=19)  
13. Consumer Protection Law in Nepal, accessed July 21, 2025, [https://www.lawimperial.com/consumer-protection-law-in-nepal/](https://www.lawimperial.com/consumer-protection-law-in-nepal/)  
14. Terms, Tech & Trust: A Privacy Deep Dive With Harvey AI \- Red Clover Advisors, accessed July 21, 2025, [https://redcloveradvisors.com/terms-tech-trust-a-privacy-deep-dive-with-harvey-ai/](https://redcloveradvisors.com/terms-tech-trust-a-privacy-deep-dive-with-harvey-ai/)  
15. Evaluation Terms of Service \- Generative AI for Professional ..., accessed July 21, 2025, [https://www.harvey.ai/legal/evaluation-terms-of-service](https://www.harvey.ai/legal/evaluation-terms-of-service)  
16. Platform Agreement \- Generative AI for Professional Services | Harvey, accessed July 21, 2025, [https://www.harvey.ai/legal/platform-agreement](https://www.harvey.ai/legal/platform-agreement)  
17. Practice Law Mindfully \- Lucio, accessed July 21, 2025, [https://www.lucioai.com/terms-of-use](https://www.lucioai.com/terms-of-use)  
18. AI Disclaimer | Waters \- Waters Corporation, accessed July 21, 2025, [https://www.waters.com/nextgen/us/en/legal/ai-disclaimer.html](https://www.waters.com/nextgen/us/en/legal/ai-disclaimer.html)  
19. Privacy Policy \- Generative AI for Professional Services | Harvey, accessed July 21, 2025, [https://www.harvey.ai/legal/privacy-policy](https://www.harvey.ai/legal/privacy-policy)  
20. Any experience with Harvey? : r/legaltech \- Reddit, accessed July 21, 2025, [https://www.reddit.com/r/legaltech/comments/1bvtuic/any\_experience\_with\_harvey/](https://www.reddit.com/r/legaltech/comments/1bvtuic/any_experience_with_harvey/)  
21. Weaknesses in AI tools like Lexlegis AI, Lucio AI, Harvey AI, Luminance? \- Reddit, accessed July 21, 2025, [https://www.reddit.com/r/legaltechAI/comments/1iuctk1/weaknesses\_in\_ai\_tools\_like\_lexlegis\_ai\_lucio\_ai/](https://www.reddit.com/r/legaltechAI/comments/1iuctk1/weaknesses_in_ai_tools_like_lexlegis_ai_lucio_ai/)

