import { z } from "zod";
import powerDistributionImage from "@/assets/products/power-distribution-transformer.png";
import dryTypeImage from "@/assets/products/dry-type-transformer.png";
import boosterTypeImage from "@/assets/products/booster-transformer.png";
import isolationImage from "@/assets/products/isolation-transformer.png";
import specialTypeImage from "@/assets/products/special-type-transformer.png";
import spmImage from "@/assets/products/spm-fabrication.png";

import coreConstructionImg from "@/assets/construction/core-construction.png";
import tankFabricationImg from "@/assets/construction/tank-fabrication.png";
import terminationsImg from "@/assets/construction/terminations.png";
import insulationImg from "@/assets/construction/insulation.png";
import accessoriesImg from "@/assets/construction/accessories.png";
import windingsImg from "@/assets/construction/windings.png";

export const companyInfo = {
  name: "NANDI POWER CONTROLS AND SYSTEMS",
  tagline: "THE POWER PEOPLE",
  established: 2010,
  certifications: ["ISO 9001:2015", "CPRI Tested"],
  phones: ["+91 9611577845", "+91 9482375945"],
  email: "nandipower1@gmail.com",
  website: "www.nandipower.co.in",
  address: "#129/1, Machohalli Gate, Dasanapura Hobli, Magadi Main Road, Bengaluru – 560091",
};

export const products = [
  {
    id: "power-distribution",
    title: "Power Distribution Transformers",
    description: "5kVA to 5000kVA Aluminium/Copper wound Oil Cooled and Air Cooled Transformers (11kV/22kV/33kV-Class).",
    detail: "Our Power Distribution Transformers are engineered for maximum reliability and efficiency in demanding industrial environments. Available in capacities from 5kVA to 5000kVA, these transformers feature highly conductive aluminium or copper windings, housed in robust leak-tested tanks. Whether oil-cooled or air-cooled, they are designed to minimize losses and ensure uninterrupted power supply across 11kV, 22kV, and 33kV classes.",
    image: powerDistributionImage,
    gallery: [
      { url: coreConstructionImg, caption: "Core Construction" },
      { url: tankFabricationImg, caption: "Tank Fabrication" },
      { url: accessoriesImg, caption: "Accessories & Bushings" }
    ],
    features: [
      "5kVA to 5000kVA range",
      "Aluminium/Copper wound",
      "Oil Cooled & Air Cooled",
      "11kV/22kV/33kV-Class"
    ]
  },
  {
    id: "dry-type",
    title: "Dry Type Transformers",
    description: "Air Cooled Dry Type Transformers suitable for indoor and specialized applications.",
    detail: "Dry Type Transformers offer a safe and reliable solution for indoor installations where oil-filled units pose a fire or environmental hazard. Engineered with superior insulation materials, these air-cooled transformers require minimal maintenance while delivering exceptional performance and high short-circuit strength.",
    image: dryTypeImage,
    gallery: [
      { url: windingsImg, caption: "Precision Windings" },
      { url: terminationsImg, caption: "Terminations" }
    ],
    features: ["Air Cooled", "High reliability", "Low maintenance", "Safe for indoor use"]
  },
  {
    id: "booster-type",
    title: "Booster Type Transformers",
    description: "Capacitor Booster Type Transformers for specific voltage regulation needs.",
    detail: "Designed to provide efficient voltage regulation, our Booster Type Transformers ensure sensitive equipment receives stable power even in fluctuating grid conditions. These capacitor booster transformers are built with specialized tap changing gears and high-quality core laminations for optimal voltage control.",
    image: boosterTypeImage,
    gallery: [
      { url: tankFabricationImg, caption: "Tank Assembly" },
      { url: insulationImg, caption: "Insulation Structure" }
    ],
    features: ["Capacitor Type", "Efficient voltage regulation", "Custom tap ranges"]
  },
  {
    id: "isolation",
    title: "Isolation Transformers",
    description: "Provides galvanic isolation to protect sensitive equipment.",
    detail: "Isolation Transformers are essential for protecting delicate electronic and industrial equipment from electrical noise, spikes, and transients. By providing complete galvanic isolation between the input power source and the load, these units ensure clean power delivery and enhanced system longevity.",
    image: isolationImage,
    gallery: [
      { url: coreConstructionImg, caption: "CRGO Core Assembly" },
      { url: windingsImg, caption: "Copper Winding" }
    ],
    features: ["High noise attenuation", "Galvanic isolation", "Equipment protection"]
  },
  {
    id: "special-type",
    title: "Special Type Transformers",
    description: "Custom-designed transformers tailored strictly as per customer requirements.",
    detail: "We excel in designing and manufacturing Special Type Transformers tailored to unique industrial applications. From furnace transformers to specialized converter units, our design team works closely with clients to engineer solutions that meet exacting electrical, mechanical, and thermal specifications.",
    image: specialTypeImage,
    gallery: [
      { url: terminationsImg, caption: "Custom Cable Boxes" },
      { url: accessoriesImg, caption: "Specialized Accessories" }
    ],
    features: ["Custom-designed", "Application-specific", "Consultative engineering"]
  },
  {
    id: "spm",
    title: "SPMs & Heavy Duty Fabrication",
    description: "Special Purpose Machines, Heavy Duty Fabrication, Sheet Metal Works and Allied Services.",
    detail: "Leveraging our extensive manufacturing facility, we offer complete end-to-end heavy duty fabrication and Special Purpose Machine (SPM) construction. Our capabilities include precise sheet metal works, robust structural fabrication, and assembly of complex industrial control cabinets and enclosures built to withstand harsh environments.",
    image: spmImage,
    gallery: [
      { url: tankFabricationImg, caption: "Heavy Tank Fabrication" },
      { url: insulationImg, caption: "Enclosure Assembly" }
    ],
    features: ["Heavy Duty Fabrication", "Sheet Metal Works", "Custom SPMs", "Control Cabinets"]
  }
];

export const keyStrengths = [
  {
    title: "Expert Design Team",
    description: "Dedicated team for custom-designed transformers across various industries."
  },
  {
    title: "Cross-Industry Experience",
    description: "Decades of combined experience catering to diverse industrial needs."
  },
  {
    title: "Latest Technology",
    description: "Utilization of advanced materials including amorphous wire and Nomex insulation."
  },
  {
    title: "Design Transparency",
    description: "Full transparency with customer participation in design reviews and stage inspections."
  }
];

export const qualityStandards = [
  {
    title: "Transformer Oil",
    description: "Tested per IS:335/1972 standards."
  },
  {
    title: "Core Laminations",
    description: "CRGO low-loss electrical grade core laminations."
  },
  {
    title: "Windings",
    description: "High-conductivity paper-covered copper/aluminium windings."
  },
  {
    title: "Insulation & Fabrication",
    description: "Insulation per IS:1576. Tank fabrication from tested mild steel with leak testing at 0.5 kg/cm² or higher."
  },
  {
    title: "Testing & Design",
    description: "Testing and design standards strictly per IS:2026, IS:1180, IEC:76, BS:171."
  }
];

export const tests = [
  "Impulse test",
  "S.C & O.C test",
  "Temperature Rise test arranged at CPRI on request",
  "All standard designs up to 500kVA are type tested"
];

export const accessories = [
  "Conservator with Oil Level Gauge",
  "Drain Plugs",
  "Oil Filling Hole with Breathers (Silica Gel)",
  "Air Release Plug",
  "Thermometer Pocket with Plug",
  "Explosion Vent with Diaphragm (above 100kVA)",
  "HV/LV Bushings with Arcing Horns",
  "Drain Valve and Filter Valve with Plug",
  "Earthing Terminals",
  "Tap Switch Operating External Gear",
  "OLTC/Marshalling boxes/RTCC Panels"
];

export const testimonials = [
  {
    id: 1,
    quote: "Nandi Power Controls has consistently delivered high-quality transformers on time. Their robust designs and transparent process make them a trusted partner.",
    author: "Industrial Plant Manager",
    company: "Bengaluru Manufacturing Hub"
  },
  {
    id: 2,
    quote: "The durability of their power distribution units is unmatched. Truly engineering excellence with great dependable service.",
    author: "Chief Engineer",
    company: "Heavy Engineering Corp"
  }
];

export const industries = [
  { id: "manufacturing", name: "Manufacturing", icon: "Factory", description: "Custom power solutions for heavy manufacturing environments." },
  { id: "power-plants", name: "Power Plants", icon: "Zap", description: "High-capacity transformers and control systems for power generation." },
  { id: "automation", name: "Automation", icon: "Settings2", description: "Integrated automation systems and SPMs for industrial lines." },
  { id: "food-industry", name: "Food Industry", icon: "Utensils", description: "Safe, hygienic electrical systems compliant with food-grade standards." },
  { id: "commercial-buildings", name: "Commercial Buildings", icon: "Building2", description: "Distribution transformers and panels for large commercial complexes." },
  { id: "infrastructure", name: "Infrastructure", icon: "Landmark", description: "Reliable power distribution for roads, bridges, and civic projects." },
  { id: "textile", name: "Textile", icon: "Layers", description: "Stable voltage and power systems for sensitive textile machinery." },
  { id: "pharmaceutical", name: "Pharmaceutical", icon: "FlaskConical", description: "Precision-controlled power for clean-room pharmaceutical facilities." },
  { id: "engineering", name: "Engineering", icon: "Cog", description: "Heavy-duty electrical solutions for engineering and fabrication plants." },
  { id: "renewable-energy", name: "Renewable Energy", icon: "Wind", description: "Step-up transformers and grid-tie solutions for solar and wind plants." }
];

export const stats = [
  { value: 14, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 300, suffix: "+", label: "Happy Clients" },
  { value: 12, suffix: "+", label: "Cities Served" },
  { value: 10, suffix: "+", label: "Industries Served" }
];

export const projects = [
  { id: "p1", name: "500kVA Distribution Transformer", location: "Peenya Industrial Area, Bengaluru", industry: "Manufacturing", description: "Design, manufacturing, and installation of a 500kVA, 11kV/415V oil-cooled distribution transformer for a large automotive components plant.", technologies: ["Oil-Cooled Transformer", "OLTC", "RTCC Panel"] },
  { id: "p2", name: "Automation SPM Line", location: "Nelamangala, Bengaluru", industry: "Automation", description: "Custom SPM fabrication for a semi-automated assembly line requiring precision motion control and high-duty-cycle performance.", technologies: ["SPM Fabrication", "Heavy-Duty Enclosure", "Sheet Metal Works"] },
  { id: "p3", name: "Dry Type Isolation Transformers", location: "Doddaballapur KIADB, Bengaluru", industry: "Pharmaceutical", description: "Supply and commissioning of 200kVA dry-type isolation transformers for a clean-room pharmaceutical facility requiring zero-EMI power.", technologies: ["Dry Type Transformer", "Isolation Transformer", "IS:2026"] },
  { id: "p4", name: "33kV Step-Down Substation", location: "Tumkur Industrial Zone", industry: "Power Plants", description: "End-to-end substation supply including 2MVA 33kV/11kV power transformers with CPRI-tested designs and full protective relay panels.", technologies: ["Power Transformer", "CPRI Tested", "Protective Relay"] },
  { id: "p5", name: "Textile Mill Power Distribution", location: "Ramanagaram, Karnataka", industry: "Textile", description: "Comprehensive power distribution upgrades including 4 × 250kVA distribution transformers for a 24×7 textile spinning mill.", technologies: ["Oil-Cooled Transformer", "Tap-Changer", "IS:1180"] },
  { id: "p6", name: "Renewable Solar Farm Transformer", location: "Pavagada Solar Park, Karnataka", industry: "Renewable Energy", description: "Custom 1000kVA step-up transformers for a 5MW rooftop solar installation, designed for high-efficiency low-loss operation.", technologies: ["Step-Up Transformer", "CRGO Core", "Low Loss Design"] }
];

export const faqs = [
  { category: "Products", question: "What is the maximum kVA rating you manufacture?", answer: "We manufacture transformers from 5kVA up to 5000kVA. For requirements above 5000kVA, please contact us for a custom quotation." },
  { category: "Products", question: "Do you offer both Oil-Cooled and Air-Cooled transformers?", answer: "Yes. We offer Oil-Cooled (ONAN/ONAF) and Air-Cooled (Dry Type) transformers across the full kVA range, in aluminium or copper winding." },
  { category: "Products", question: "What voltage classes do your transformers cover?", answer: "Our standard range covers 11kV, 22kV, and 33kV class transformers (HV side) with various LV outputs as per customer requirement." },
  { category: "Quality", question: "Are your transformers type-tested?", answer: "Yes. All standard designs up to 500kVA are type-tested at CPRI (Central Power Research Institute). Type tests include Impulse, Short-Circuit (SC), Open-Circuit (OC), and Temperature Rise tests." },
  { category: "Quality", question: "Which standards do your products conform to?", answer: "Our transformers are designed and tested to IS:2026, IS:1180, IEC:76, and BS:171, as well as customer-specific requirements." },
  { category: "Quality", question: "What certifications does Nandi Power hold?", answer: "We are an ISO 9001:2015 certified company with products CPRI-tested for type tests." },
  { category: "Services", question: "Do you offer custom transformer designs?", answer: "Yes. Our engineering team specialises in custom-designed transformers. Customers are welcome to participate in design reviews and stage inspections." },
  { category: "Services", question: "What after-sales services do you provide?", answer: "We provide detailed test certificates and guarantees for every unit. Our team offers field support for commissioning and troubleshooting on request." },
  { category: "Ordering", question: "What is your typical lead time for an order?", answer: "Lead times vary by rating and order volume. Standard designs (5kVA–500kVA) typically ship within 3–6 weeks. Larger or custom units require 6–12 weeks. Contact us for a precise timeline." },
  { category: "Ordering", question: "How do I request a quotation?", answer: "Fill in the Request Quote form on our Contact page or call us directly at +91 9611577845 / +91 9482375945. Include your kVA requirement, voltage ratio, cooling type, and quantity." }
];

export const resources = [
  { id: "company-profile", title: "Company Profile", description: "Full company overview including certifications, product range, manufacturing capabilities, and key contact details.", type: "Company Profile", fileSize: "2.4 MB" },
  { id: "product-catalogue", title: "Product Catalogue", description: "Complete product catalogue for all distribution transformers, dry type transformers, isolation transformers, and SPM services.", type: "Catalogue", fileSize: "4.1 MB" },
  { id: "transformer-datasheet-5-500", title: "Transformer Datasheet — 5kVA to 500kVA", description: "Technical specifications, electrical parameters, and dimensional drawings for our standard range up to 500kVA.", type: "Technical Datasheet", fileSize: "1.8 MB" },
  { id: "transformer-datasheet-500-5000", title: "Transformer Datasheet — 500kVA to 5000kVA", description: "Technical datasheet for our large-capacity oil-cooled distribution transformers up to 5000kVA.", type: "Technical Datasheet", fileSize: "2.1 MB" },
  { id: "iso-certificate", title: "ISO 9001:2015 Certificate", description: "Our current ISO 9001:2015 quality management system certificate issued by an accredited certification body.", type: "Certificate", fileSize: "0.3 MB" },
  { id: "cpri-test-report", title: "CPRI Type Test Reports", description: "CPRI type test reports covering Impulse, Short-Circuit, Open-Circuit, and Temperature Rise tests for standard designs.", type: "Test Report", fileSize: "3.5 MB" }
];
