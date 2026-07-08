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
