import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://advaq.com';

const routes = [
  // Core
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  { path: '/blog', priority: '0.9', changefreq: 'daily' },
  { path: '/calculators', priority: '1.0', changefreq: 'daily' },
  { path: '/uk-services', priority: '0.9', changefreq: 'weekly' },
  { path: '/us-services', priority: '0.9', changefreq: 'weekly' },
  { path: '/uae-services', priority: '0.9', changefreq: 'weekly' },
  { path: '/pakistan-services', priority: '0.9', changefreq: 'weekly' },
  { path: '/legal-contract-drafting', priority: '0.9', changefreq: 'weekly' },

  // Country Hubs
  { path: '/calculators/uk', priority: '0.9', changefreq: 'weekly' },
  { path: '/calculators/usa', priority: '0.9', changefreq: 'weekly' },
  { path: '/calculators/uae', priority: '0.9', changefreq: 'weekly' },
  { path: '/calculators/pakistan', priority: '0.9', changefreq: 'weekly' },

  // UK Services
  { path: '/uk-services/ltd-formation', priority: '0.8', changefreq: 'monthly' },
  { path: '/uk-services/annual-accounts', priority: '0.8', changefreq: 'monthly' },
  { path: '/uk-services/corporation-tax-return', priority: '0.8', changefreq: 'monthly' },
  { path: '/uk-services/corporation-tax-registration', priority: '0.8', changefreq: 'monthly' },
  { path: '/uk-services/vat-registration', priority: '0.8', changefreq: 'monthly' },
  { path: '/uk-services/vat-return-filing', priority: '0.8', changefreq: 'monthly' },
  { path: '/uk-services/self-assessment', priority: '0.8', changefreq: 'monthly' },
  { path: '/uk-services/utr-registration', priority: '0.8', changefreq: 'monthly' },
  { path: '/uk-services/confirmation-statement', priority: '0.8', changefreq: 'monthly' },
  { path: '/uk-services/bookkeeping', priority: '0.8', changefreq: 'monthly' },
  { path: '/uk-services/registered-office-address', priority: '0.8', changefreq: 'monthly' },
  { path: '/uk-services/paye-payroll-registration', priority: '0.8', changefreq: 'monthly' },
  { path: '/uk-services/director-payroll', priority: '0.8', changefreq: 'monthly' },
  { path: '/uk-services/dividend-planning', priority: '0.8', changefreq: 'monthly' },

  // US Services
  { path: '/us-services/wyoming-llc-formation', priority: '0.8', changefreq: 'monthly' },
  { path: '/us-services/ein-registration', priority: '0.8', changefreq: 'monthly' },
  { path: '/us-services/boi-report', priority: '0.8', changefreq: 'monthly' },
  { path: '/us-services/single-member-llc-filing', priority: '0.8', changefreq: 'monthly' },
  { path: '/us-services/corporate-tax-return', priority: '0.8', changefreq: 'monthly' },
  { path: '/us-services/partnership-tax-return', priority: '0.8', changefreq: 'monthly' },
  { path: '/us-services/1099-filing', priority: '0.8', changefreq: 'monthly' },
  { path: '/us-services/w8-w9-assistance', priority: '0.8', changefreq: 'monthly' },
  { path: '/us-services/itin-application', priority: '0.8', changefreq: 'monthly' },
  { path: '/us-services/state-annual-report', priority: '0.8', changefreq: 'monthly' },
  { path: '/us-services/registered-agent', priority: '0.8', changefreq: 'monthly' },
  { path: '/us-services/registered-agent-renewal', priority: '0.8', changefreq: 'monthly' },
  { path: '/us-services/mercury-bank-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/us-services/operating-agreement-updates', priority: '0.8', changefreq: 'monthly' },

  // UAE Services
  { path: '/uae-services/freezone-company-formation', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-services/mainland-company-formation', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-services/corporate-tax-registration', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-services/corporate-tax-return-filing', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-services/small-business-relief', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-services/vat-registration', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-services/vat-return-filing', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-services/visa-application-support', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-services/trade-license-renewal', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-services/change-business-activity', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-services/bookkeeping', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-services/business-bank-account-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-services/fta-penalty-waiver', priority: '0.8', changefreq: 'monthly' },

  // Pakistan Services
  { path: '/pakistan-services/secp-registration', priority: '0.8', changefreq: 'monthly' },
  { path: '/pakistan-services/single-member-company', priority: '0.8', changefreq: 'monthly' },
  { path: '/pakistan-services/sole-proprietorship', priority: '0.8', changefreq: 'monthly' },
  { path: '/pakistan-services/partnership-deed', priority: '0.8', changefreq: 'monthly' },
  { path: '/pakistan-services/ntn-registration', priority: '0.8', changefreq: 'monthly' },
  { path: '/pakistan-services/individual-tax-return', priority: '0.8', changefreq: 'monthly' },
  { path: '/pakistan-services/company-tax-return', priority: '0.8', changefreq: 'monthly' },
  { path: '/pakistan-services/atl-restoration', priority: '0.8', changefreq: 'monthly' },
  { path: '/pakistan-services/sales-tax-registration', priority: '0.8', changefreq: 'monthly' },
  { path: '/pakistan-services/pseb-registration', priority: '0.8', changefreq: 'monthly' },
  { path: '/pakistan-services/withholding-compliance', priority: '0.8', changefreq: 'monthly' },
  { path: '/pakistan-services/fbr-notice-response', priority: '0.8', changefreq: 'monthly' },
  { path: '/pakistan-services/secp-annual-filing', priority: '0.8', changefreq: 'monthly' },
  { path: '/pakistan-services/trademark-registration', priority: '0.8', changefreq: 'monthly' },
  { path: '/pakistan-services/shareholder-agreement', priority: '0.8', changefreq: 'monthly' },

  // Legal Contract Drafting
  { path: '/legal-contract-drafting/non-disclosure-agreement', priority: '0.8', changefreq: 'monthly' },
  { path: '/legal-contract-drafting/mutual-nda', priority: '0.8', changefreq: 'monthly' },
  { path: '/legal-contract-drafting/freelance-service-agreement', priority: '0.8', changefreq: 'monthly' },
  { path: '/legal-contract-drafting/master-service-agreement', priority: '0.8', changefreq: 'monthly' },
  { path: '/legal-contract-drafting/fixed-price-project-contract', priority: '0.8', changefreq: 'monthly' },
  { path: '/legal-contract-drafting/hourly-retainer-agreement', priority: '0.8', changefreq: 'monthly' },
  { path: '/legal-contract-drafting/software-development-agreement', priority: '0.8', changefreq: 'monthly' },
  { path: '/legal-contract-drafting/service-level-agreement', priority: '0.8', changefreq: 'monthly' },
  { path: '/legal-contract-drafting/ip-assignment-agreement', priority: '0.8', changefreq: 'monthly' },
  { path: '/legal-contract-drafting/employee-confidentiality-agreement', priority: '0.8', changefreq: 'monthly' },
  { path: '/legal-contract-drafting/employment-contract', priority: '0.8', changefreq: 'monthly' },
  { path: '/legal-contract-drafting/independent-contractor-agreement', priority: '0.8', changefreq: 'monthly' },
  { path: '/legal-contract-drafting/terms-of-service', priority: '0.8', changefreq: 'monthly' },
  { path: '/legal-contract-drafting/privacy-policy', priority: '0.8', changefreq: 'monthly' },
  { path: '/legal-contract-drafting/data-processing-agreement', priority: '0.8', changefreq: 'monthly' },

  // UK Calculators (15)
  { path: '/calculators/uk-tax-dividend-optimizer-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uk-sole-trader-vs-ltd-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uk-vat-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uk-setup-cost-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uk-penalty-risk-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uk-bank-approval-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uk-self-assessment-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uk-corporation-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uk-capital-gains-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uk-stamp-duty-land-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uk-payroll-paye-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uk-rd-tax-credit-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uk-vat-register-decision-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uk-vs-pakistan-tax-comparison-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uk-nrl-property-tax-calculator', priority: '0.8', changefreq: 'weekly' },

  // US Calculators (15)
  { path: '/calculators/us-cost-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/us-tax-eligibility-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/us-penalty-risk-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/us-sales-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/us-bank-approval-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/us-llc-vs-c-corp-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/us-trademark-cost-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/us-federal-income-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/us-ein-eligibility-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/us-self-employment-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/us-boi-deadline-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/us-wyoming-vs-delaware-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/us-llc-annual-compliance-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/us-llc-recommendation-quiz-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/us-fbar-fatca-checker-calculator', priority: '0.8', changefreq: 'weekly' },

  // UAE Calculators (15)
  { path: '/calculators/uae-freezone-setup-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uae-corporate-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uae-vat-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uae-visa-cost-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uae-bank-approval-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uae-esr-ubo-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uae-excise-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uae-freelance-vs-freezone-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uae-corporate-tax-deadline-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uae-real-estate-roi-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uae-gratuity-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uae-double-tax-treaty-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uae-freezone-vs-mainland-quiz-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uae-tax-residency-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/uae-qfzp-eligibility-calculator', priority: '0.8', changefreq: 'weekly' },

  // Pakistan Calculators (15)
  { path: '/calculators/pakistan-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/pakistan-it-export-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/pakistan-secp-cost-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/pakistan-fbr-salary-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/pakistan-sales-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/pakistan-secp-penalty-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/pakistan-wht-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/pakistan-property-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/pakistan-ntn-eligibility-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/pakistan-freelancer-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/pakistan-fbr-notice-timeline-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/pakistan-rental-income-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/pakistan-filer-status-checker-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/pakistan-filer-vs-non-filer-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/pakistan-tax-calendar-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculators/pakistan-capital-gains-tax-calculator', priority: '0.8', changefreq: 'weekly' },

  // Blog Posts (60+)
  { path: '/blog/can-non-uk-resident-register-company-uk', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uk-ltd-vs-sole-trader-non-resident', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uk-company-formation-documents-required', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/how-long-to-register-uk-company-house', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/registered-office-address-vs-service-address-uk', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/open-uk-business-bank-account-non-resident', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/best-bank-account-for-uk-ltd-non-resident', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uk-business-bank-account-overseas-director', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/do-non-uk-residents-pay-uk-tax-ltd-company', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/register-uk-corporation-tax-non-resident', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uk-vat-registration-non-resident-threshold', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uk-confirmation-statement-cs01-non-resident', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/file-annual-accounts-uk-ltd-non-resident', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uk-paye-payroll-non-resident-director', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uk-ltd-dividend-planning-non-resident', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uk-self-assessment-non-resident-director', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uk-ltd-bookkeeping-non-resident', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/register-trademark-ukipo-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/is-company-secretary-mandatory-uk', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/how-to-dissolve-uk-limited-company-ds01', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/can-non-us-resident-form-us-llc', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/wyoming-vs-delaware-llc-non-resident', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/single-member-vs-multi-member-llc-non-resident', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/us-llc-formation-documents-required', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/registered-agent-vs-virtual-address-us-llc', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/how-to-get-ein-without-ssn-non-us-resident', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/best-us-business-bank-account-non-resident', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/how-to-get-itin-non-us-resident', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/connect-stripe-to-us-llc-foreign-owner', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/transfer-money-from-us-llc-bank-account-foreign-country', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/form-5472-non-resident-single-member-llc', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/form-5472-late-filing-penalty-irs', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/us-sales-tax-economic-nexus-foreign-seller', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/do-non-us-residents-pay-us-income-tax-llc', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/us-llc-state-annual-report-filing-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uspto-trademark-registration-guide-foreign-applicant', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/beneficial-ownership-information-boi-reporting-us-llc', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/us-physical-business-address-vs-mail-forwarding', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/change-registered-agent-wyoming-delaware', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/how-to-dissolve-us-llc-foreign-owner', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/dubai-freezone-vs-mainland-non-resident', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/cheapest-freezone-in-dubai-for-it-company', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/register-dubai-mainland-company-without-local-sponsor', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/ifza-vs-meydan-vs-shams-freezone-comparison', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/flexi-desk-vs-office-space-uae-freezone', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/how-to-get-uae-investor-visa-company-setup', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uae-golden-visa-for-tech-founders-eligibility', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/sponsor-family-in-dubai-investor-visa', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uae-medical-test-emirates-id-biometrics-process', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/work-remotely-uae-freezone-visa-rules', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uae-corporate-tax-9-percent-freezone-rules', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/open-corporate-bank-account-in-dubai-freezone', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uae-vat-registration-threshold-5-percent', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/dubai-corporate-bank-account-compliance-approval', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/wio-bank-vs-traditional-uae-business-account', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/mofa-attestation-uae-foreign-documents-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/register-trademark-uae-ministry-of-economy', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uae-economic-substance-regulations-esr-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/uae-ultimate-beneficial-owner-ubo-declaration', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/how-to-liquidate-uae-freezone-company-license', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/single-member-company-vs-private-limited-secp-pakistan', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/how-to-register-company-in-secp-online-pakistan', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/pvt-ltd-vs-sole-proprietorship-vs-aop-pakistan', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/secp-authorized-capital-paid-up-capital-rules', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/foreign-direct-investment-secp-company-pakistan', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/pseb-registration-benefits-tax-credit-it-export', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/sbp-form-r-foreign-remittance-it-exporter-pakistan', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/exporters-special-fcva-account-sbp-it-freelancers', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/open-company-business-bank-account-pakistan', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/chamber-of-commerce-registration-pakistan-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/file-for-income-tax-return-iris-pakistan-active-taxpayer', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/sales-tax-on-services-pra-srb-fbr-it-companies', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/how-to-register-ntn-online-for-pakistan', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/withholding-tax-rates-section-152-secp-company', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/secp-annual-compliance-form-a-form-29-deadline', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/register-trademark-ipo-pakistan-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/weboc-customs-registration-guide-pakistan', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/filer-vs-non-filer-pakistan-benefits-penalties', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/tax-exemption-software-house-it-exporter-pakistan', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/how-to-winding-up-company-secp-easy-exit-scheme', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/master-service-agreement-vs-statement-of-work', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/software-development-agreement-checklist', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/fixed-price-vs-hourly-retainer-agreement-agency', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/prevent-scope-creep-contract-clauses-agency', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/service-level-agreement-sla-guide-saas', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/ip-assignment-agreement-software-development-ownership', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/one-way-nda-vs-mutual-nda-difference', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/enforcing-nda-contract-international-clients', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/moral-rights-waiver-copyright-assignment-contract', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/employee-confidentiality-agreement-tech-company', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/independent-contractor-vs-employee-misclassification-risk', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/contracting-remote-freelancers-overseas-legally', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/non-compete-non-solicitation-clauses-freelancer', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/tech-company-employment-contract-drafting-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/kill-fee-clauses-freelance-contract-termination', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/terms-of-service-checklist-saas-website', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/gdpr-privacy-policy-requirements-saas-website', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/data-processing-agreement-dpa-gdpr-requirements', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/limitation-of-liability-clause-agency-contract', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/choice-of-law-dispute-resolution-cross-border-contracts', priority: '0.8', changefreq: 'monthly' },
];

const todayStr = new Date().toISOString().split('T')[0];

// 1. Generate sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${todayStr}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

// 2. Generate sitemap_index.xml
const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml</loc>
    <lastmod>${todayStr}</lastmod>
  </sitemap>
</sitemapindex>`;

// 3. Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
Sitemap: ${BASE_URL}/sitemap_index.xml
`;

// 4. Generate llms.txt (Clean ASCII, no broken curly quotes)
const llmsTxt = `# ADVAQ - Cross-Border Tax & Legal Services | UK, USA, UAE & Pakistan

> ADVAQ is a premier cross-border tax advisory and corporate law firm led by Muhammad Abdullah (Advocate High Court, Punjab Bar Council). ADVAQ specializes in UK LTD company formation, US LLC registration, UAE Freezone & Corporate Tax compliance, Pakistan SECP & FBR tax filings, and custom legal contract drafting for IT exporters, agencies, freelancers, and multi-jurisdictional businesses.

## Key Jurisdictions & Services

- [UK Corporate & Tax Services](https://advaq.com/uk-services): UK Companies House LTD incorporation, HMRC Corporation Tax, VAT registration, Self-Assessment tax returns, and Director Payroll.
- [US Business & IRS Tax Services](https://advaq.com/us-services): Wyoming & Delaware LLC formation, EIN registration without SSN, Form 5472 & 1120 pro-forma filings, FinCEN BOI reporting, ITIN applications, and Mercury/Wise business banking setup.
- [UAE Freezone & Corporate Tax Services](https://advaq.com/uae-services): IFZA, Meydan, SHAMS & RAKEZ free zone company setup, 9% Corporate Tax registration, Small Business Relief (SBR) election, VAT, and 2-Yr Investor / 10-Yr Golden Visas.
- [Pakistan SECP & FBR Tax Services](https://advaq.com/pakistan-services): SECP Private Limited & SMC company registration, FBR Iris NTN filing, Active Taxpayer List (ATL) restoration, PSEB IT exporter 100% tax credit, Section 154A 0.25% reduced WHT, and SBP FCVA USD accounts.
- [Legal Contract Drafting](https://advaq.com/legal-contract-drafting): Custom legal drafting for tech companies, software agencies, and freelancers including Non-Disclosure Agreements (NDA), Master Service Agreements (MSA), Service Level Agreements (SLA), IP Assignment Agreements, Software Development Contracts, Independent Contractor Contracts, Terms of Service, GDPR Privacy Policies, and Data Processing Agreements (DPA).

## Free Interactive Tax & Legal Calculators (60 Tools)

- [UK Calculators Suite](https://advaq.com/calculators/uk): 15 interactive tools including UK Tax & Dividend Optimizer, Sole Trader vs LTD Breakeven, VAT Flat Rate Scheme, Capital Gains Tax, and Pension Contribution Impact.
- [USA Calculators Suite](https://advaq.com/calculators/usa): 15 interactive tools including Form 1040-NR Non-Resident Tax, EIN Timeline Tool, 15.3% Self-Employment Tax Exemption, FinCEN BOI $590/day Penalty Estimator, and Wyoming vs Delaware Matrix.
- [UAE Calculators Suite](https://advaq.com/calculators/uae): 15 interactive tools including FTA Excise Tax (50%/100%), Freelance Permit vs Freezone License, AED 10,000 Corporate Tax Registration Deadline Checker, and Dubai Real Estate ROI & 0% Capital Gains.
- [Pakistan Calculators Suite](https://advaq.com/calculators/pakistan): 15 interactive tools including Section 153 Withholding Tax (Services 9%/18%, Goods 5%/10%, Contracts 7.5%/15%), Section 236K/236C Property WHT, All-in-One Freelancer Tax & SBP FCVA retention, and SECP Penalty Risk.

## Authority & Contact

- Founder & Lead Advocate: Muhammad Abdullah (Advocate High Court, Punjab Bar Council)
- Phone / WhatsApp: +92 3000 925335
- Email: contact@advaq.com
- Main Website: https://advaq.com
- Full AI Knowledge Base: https://advaq.com/llms-full.txt
`;

// 5. Generate llms-full.txt (Clean ASCII with dedicated Legal Contract Drafting section)
const llmsFullTxt = `# ADVAQ Comprehensive Cross-Border Tax & Corporate Legal Documentation

> Complete authoritative reference for AI models, LLMs, and search agents detailing ADVAQ's cross-border legal structures, tax regimes, compliance requirements, and legal contract drafting across UK, US, UAE, and Pakistan.

## About ADVAQ & Leadership
ADVAQ is a specialized corporate tax and legal advisory firm headquartered in Pakistan with active advisory operations serving clients across the United Kingdom, United States, United Arab Emirates, and Pakistan. The practice is led by Muhammad Abdullah, an Advocate of the High Court and member of the Punjab Bar Council, specializing in cross-border corporate structure, tax treaties, IT export incentives, and international commercial contracting.

---

## 1. United Kingdom (UK) Tax & Corporate Legal Standards
- Company Formation: UK Limited Companies (LTD) registered with Companies House. Non-UK residents can hold 100% shares and directorship without physical residency.
- Corporation Tax: Standard rate 25% (profits > GBP 250,000); Small Profits Rate 19% (profits <= GBP 50,000); marginal relief taper between GBP 50,000 and GBP 250,000.
- VAT Threshold: Mandatory registration at GBP 90,000 turnover. Non-established taxable persons (NETPs) trading in the UK must register with zero threshold.
- Self Assessment: Directors receiving dividend income or salary from UK entities must submit annual Self Assessment returns to HMRC by January 31 following the tax year end.
- Confirmation Statement (CS01): Mandatory annual filing with Companies House to confirm People with Significant Control (PSC) and registered office details.

---

## 2. United States (US) IRS & FinCEN Compliance Rules
- Foreign-Owned Single-Member LLCs: Classified as Disregarded Entities for federal income tax purposes. If operating outside the US with no US employees or physical office, net profit is generally exempt from US federal income tax under ETBUS (Engaged in Trade or Business in the US) rules.
- Form 5472 & 1120 Pro-Forma: Mandatory annual informational report for foreign-owned single-member LLCs under IRC Sec. 6038A. Deadline is April 15. Statutory civil penalty for non-filing or late filing is $25,000 per unfiled form.
- FinCEN BOI Reporting: Under the Corporate Transparency Act, reporting companies formed before 2024 must file by Dec 31, 2024; companies formed in 2024 have 90 days; companies formed in 2025+ have 30 days. Non-compliance civil penalties are $590 per day up to $10,000.
- Self-Employment Tax Exemption: Non-Resident Aliens operating a US LLC from outside the US are statutorily exempt from 15.3% Self-Employment Tax (Schedule SE) under IRC Sec. 1402(b).
- FBAR (FinCEN Form 114): Mandatory if aggregate foreign bank account balance exceeds $10,000 at any time during the calendar year.

---

## 3. United Arab Emirates (UAE) Federal Tax Authority (FTA) Rules
- Corporate Tax (Federal Decree-Law No. 47 of 2022): 9% tax rate on taxable net profits exceeding AED 375,000. 0% rate applies to profits up to AED 375,000.
- Small Business Relief (SBR): Resident taxable persons with annual revenue <= AED 3,000,000 can elect SBR for tax periods ending on or before Dec 31, 2026, treating taxable income as AED 0.
- Qualifying Free Zone Person (QFZP): 0% Corporate Tax rate on Qualifying Income derived from Free Zone transactions, provided adequate substance and non-qualifying revenue limits (< 5% or AED 5M) are satisfied.
- Corporate Tax Registration Deadline: Under FTA Decision No. 3 of 2024, entities must register based on license issuance month. Late registration carries a mandatory administrative fine of AED 10,000.
- VAT (5%): Mandatory registration threshold is AED 375,000; voluntary threshold is AED 187,500.

---

## 4. Pakistan SECP & FBR Income Tax Ordinance Rules
- IT Exporters & Freelancers (Section 154A): Export proceeds of computer software, IT services, or IT-enabled services (ITES) are subject to a 0.25% reduced final withholding tax rate provided the entity/individual is registered with PSEB (Pakistan Software Export Board) and files FBR annual income tax returns.
- SBP FCVA (Exporters' Special Foreign Currency Account): SBP regulations allow IT exporters and freelancers to retain 50% of foreign remittance receipts in USD/FCVA accounts for overseas marketing, software licensing, and cloud service payments.
- Active Taxpayer List (ATL Filer Status): Filers pay 3% WHT on property purchase (Sec 236K) vs 10.5% - 12% for Non-Filers. Filers pay 0% cash withdrawal tax under Sec 231AB vs 0.6% - 0.9% for Non-Filers.
- FBR Withholding Tax (Section 153): Services WHT rate is 9% for Filers vs 18% for Non-Filers; Goods WHT is 5% vs 10%; Execution of Contracts is 7.5% vs 15%.
- SECP Corporate Compliance: Companies incorporated under Companies Act 2017 must file Form A (annual return) within 30 days of AGM and Form 9 (directors/officers changes) within 14 days of change to avoid late filing penalties.

---

## 5. Legal Contract Drafting & International IT Commercial Contracts
ADVAQ provides specialized legal drafting, review, and enforcement advice for IT companies, software houses, digital agencies, SaaS platforms, and freelancers operating cross-border:
- Master Service Agreement (MSA) & Statement of Work (SOW): Comprehensive framework agreements governing long-term agency and client relationships, payment terms, change request procedures, and intellectual property ownership.
- Non-Disclosure Agreements (One-Way & Mutual NDA): Unilateral and bilateral non-disclosure agreements protecting proprietary source code, trade secrets, client lists, and confidential business plans across international jurisdictions.
- Software Development Agreements & SLA: Fixed-price and time-and-materials contracts defining milestone acceptance criteria, warranty periods, bug fix SLA response times, and code delivery protocols.
- Intellectual Property (IP) Assignment Agreements: Comprehensive IP transfer deeds ensuring 100% economic and legal ownership of software code, designs, and inventions pass to the client or company, including moral rights waivers.
- Freelance & Independent Contractor Agreements: Customized service agreements preventing worker misclassification risks, defining work-for-hire provisions, and incorporating enforceable non-compete and non-solicitation covenants.
- SaaS Terms of Service, Privacy Policy & Data Processing Agreements (DPA): Regulatory compliant website & SaaS terms, GDPR-compliant privacy policies, and DPAs governing cross-border personal data transfers.

---

## Contact & Consultation
- Primary Website: https://advaq.com
- Contract Drafting Hub: https://advaq.com/legal-contract-drafting
- WhatsApp Advisor: +92 3000 925335
- Email: contact@advaq.com
`;

// Write to public directory
fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemapXml);
fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap_index.xml'), sitemapIndexXml);
fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robotsTxt);
fs.writeFileSync(path.join(process.cwd(), 'public', 'llms.txt'), llmsTxt);
fs.writeFileSync(path.join(process.cwd(), 'public', 'llms-full.txt'), llmsFullTxt);

console.log('Successfully regenerated clean ASCII sitemaps with all 60 exact -calculator URLs.');
