import { z } from "zod";

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
    features: ["Air Cooled", "High reliability", "Low maintenance"]
  },
  {
    id: "booster-type",
    title: "Booster Type Transformers",
    description: "Capacitor Booster Type Transformers for specific voltage regulation needs.",
    features: ["Capacitor Type", "Efficient voltage regulation"]
  },
  {
    id: "isolation",
    title: "Isolation Transformers",
    description: "Provides galvanic isolation to protect sensitive equipment.",
    features: ["High noise attenuation", "Galvanic isolation"]
  },
  {
    id: "special-type",
    title: "Special Type Transformers",
    description: "Custom-designed transformers tailored strictly as per customer requirements.",
    features: ["Custom-designed", "Application-specific"]
  },
  {
    id: "spm",
    title: "SPMs & Heavy Duty Fabrication",
    description: "Special Purpose Machines, Heavy Duty Fabrication, Sheet Metal Works and Allied Services.",
    features: ["Heavy Duty Fabrication", "Sheet Metal Works", "Custom SPMs"]
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
