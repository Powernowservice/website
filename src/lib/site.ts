export type ServiceDefinition = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  answer: string;
  includes: string[];
  bestFor: string[];
  limits: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  questions: { question: string; answer: string }[];
};

export type ProjectMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  title: string;
  caption: string;
  category: "load-bank" | "pcs" | "switchgear";
};

export type SiteConfig = {
  name: string;
  shortName: string;
  phoneDisplay: string;
  phoneHref: string;
  bookingUrl: string;
  serviceAreas: string[];
  primaryArea: string;
  siteUrl: string;
  tagline: string;
};

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

export const siteConfig: SiteConfig = {
  name: "Power Now Service",
  shortName: "Power Now",
  phoneDisplay: "(936) 402-3202",
  phoneHref: "tel:+19364023202",
  bookingUrl: "https://calendly.com/powernowservice/estimate",
  serviceAreas: [
    "North Houston",
    "Spring",
    "The Woodlands",
    "Conroe",
    "Tomball",
    "Humble",
    "Kingwood",
  ],
  primaryArea: "North Houston and surrounding communities",
  siteUrl: configuredUrl || "http://localhost:3000",
  tagline: "Load bank repair and electrical service for North Houston",
};

export const services: ServiceDefinition[] = [
  {
    slug: "load-bank-repair",
    name: "Load Bank Repair in North Houston",
    shortName: "Load Bank Repair",
    description:
      "Field assessment and repair support for damaged resistive elements, cooling systems, contactors, controls, wiring, and related load bank components.",
    answer:
      "Power Now Service inspects and repairs load banks across North Houston when heat damage, failed cooling, contactor problems, wiring faults, or control issues interrupt operation. The first step is identifying the failed section, the condition of surrounding components, and whether a safe repair is practical for that specific unit.",
    includes: [
      "Resistive element and load-step inspection",
      "Cooling fan, motor, and airflow troubleshooting",
      "Contactor, fuse, and connection checks",
      "Control power and internal wiring diagnosis",
      "Heat-damage assessment and repair planning",
      "Functional checks after approved repair work",
    ],
    bestFor: [
      "Facilities with an in-place load bank that will not operate correctly",
      "Generator and electrical contractors who need a repair specialist",
      "Commercial sites evaluating repair versus replacement",
      "Teams that found damage during inspection or testing",
    ],
    limits:
      "Repairability depends on the unit, manufacturer support, parts availability, damage extent, and site conditions. An estimate is not a guarantee that every load bank can be economically or safely repaired.",
    image: "/media/load-bank-cabinet-repair.jpg",
    imageAlt:
      "Open load bank cabinet with organized contactors, fuses, control wiring, and power conductors during electrical repair work",
    imageWidth: 1440,
    imageHeight: 1920,
    questions: [
      {
        question: "What load bank problems can Power Now Service inspect?",
        answer:
          "Common inspection areas include cooling fans, resistive elements, contactors, fuses, wiring, control power, loose or heat-damaged connections, and visible cabinet damage. The exact scope depends on the unit and the fault being reported.",
      },
      {
        question: "Can a burned load bank be repaired?",
        answer:
          "Sometimes. The answer depends on how far heat or electrical damage traveled, whether the enclosure and conductors remain serviceable, and whether compatible components are available. Power Now Service evaluates the equipment before recommending repair or replacement.",
      },
      {
        question: "Do you perform load bank testing?",
        answer:
          "Power Now Service can assess operation and discuss testing needs as part of the service conversation. The required setup, test duration, reporting, and site coordination vary by equipment and facility, so the booking call is used to define the exact scope.",
      },
      {
        question: "What should I send before the appointment?",
        answer:
          "Send clear photos of the nameplate, full cabinet, damaged area, controls, and any displayed fault information. Include the location, access limits, symptoms, and whether the equipment can be safely de-energized for inspection.",
      },
    ],
  },
  {
    slug: "pcs-gear-service",
    name: "PCS Gear and Power Control System Service",
    shortName: "PCS Gear Service",
    description:
      "Troubleshooting support for generator paralleling controls, switchgear interfaces, system displays, breakers, and associated critical-power controls.",
    answer:
      "Power Now Service supports PCS gear and critical-power control equipment used to coordinate generators, breakers, transfer equipment, and facility loads. Service begins with the reported condition, available documentation, controller status, and a safe inspection plan—not with a generic parts swap.",
    includes: [
      "Control and status review",
      "Breaker and transfer interface inspection",
      "Generator control signal troubleshooting",
      "HMI and alarm-condition review",
      "Wiring and connection inspection",
      "Repair-scope planning for approved work",
    ],
    bestFor: [
      "Commercial and institutional facilities",
      "Generator contractors needing control-side support",
      "Sites with paralleling or load-control concerns",
      "Teams documenting faults before planned repair work",
    ],
    limits:
      "PCS systems are configuration-specific. Access, documentation, manufacturer requirements, firmware, replacement components, and facility procedures can affect what work is practical on site.",
    image: "/media/pcs-generator-control-panel.jpg",
    imageAlt:
      "Generator control and protection equipment mounted on a power control system cabinet",
    imageWidth: 1920,
    imageHeight: 1440,
    questions: [
      {
        question: "What does PCS mean in critical-power equipment?",
        answer:
          "PCS commonly refers to a power control system that coordinates generators, breakers, loads, transfer equipment, monitoring, and operating sequences. The exact functions depend on the installed design and manufacturer configuration.",
      },
      {
        question: "Can you service every PCS brand?",
        answer:
          "No universal brand claim is made. Power Now Service reviews the installed equipment, documentation, symptoms, and access requirements before confirming the service scope.",
      },
      {
        question: "What information helps before a PCS visit?",
        answer:
          "Photos of the equipment label, controller screens, alarm history, cabinet overview, and relevant one-line or wiring documentation help define the problem. Do not open energized equipment solely to take photos.",
      },
    ],
  },
  {
    slug: "commercial-electrical-services",
    name: "Commercial Electrical Services in North Houston",
    shortName: "Commercial Electrical",
    description:
      "Electrical troubleshooting, panels, breakers, circuits, lighting, generator connections, transfer equipment, and equipment power for North Houston businesses.",
    answer:
      "Power Now Service handles commercial electrical troubleshooting and planned service for North Houston businesses, facilities, and contractors. Work can include panels, breakers, circuits, lighting, generator or transfer equipment connections, and equipment-related electrical issues after the site and requested scope are reviewed.",
    includes: [
      "Electrical fault troubleshooting",
      "Panels, breakers, and circuit work",
      "Commercial lighting service",
      "Equipment power and connection review",
      "Generator and transfer-equipment electrical work",
      "Planned repair and upgrade estimates",
    ],
    bestFor: [
      "Commercial buildings",
      "Facility and property teams",
      "Contractors coordinating electrical scope",
      "Businesses planning repair or equipment work",
    ],
    limits:
      "Every commercial site has different access, shutdown, permitting, and coordination requirements. The estimate confirms whether the requested work fits Power Now Service's scope.",
    image: "/media/switchgear-power-cabling.jpg",
    imageAlt:
      "Commercial switchgear cabinet with color-coded power conductors and control wiring",
    imageWidth: 1440,
    imageHeight: 1920,
    questions: [
      {
        question: "What commercial electrical work do you handle?",
        answer:
          "Power Now Service discusses troubleshooting, panel and breaker work, circuits, lighting, equipment connections, generator-related electrical scope, transfer equipment, and specialized load bank or PCS needs.",
      },
      {
        question: "Can work be scheduled around facility operations?",
        answer:
          "Scheduling and shutdown needs are discussed during estimating. The workable plan depends on access, safety requirements, equipment condition, and the facility's operating procedures.",
      },
      {
        question: "Do you provide estimates for planned work?",
        answer:
          "Yes. Use the online calendar or call with the site location, requested scope, photos, equipment details, and preferred timing so the estimate conversation starts with useful information.",
      },
    ],
  },
  {
    slug: "residential-electrical-services",
    name: "Residential Electrical Services in North Houston",
    shortName: "Residential Electrical",
    description:
      "Straightforward electrical troubleshooting and planned service for North Houston homes, including panels, breakers, lighting, switches, outlets, and circuits.",
    answer:
      "Power Now Service helps North Houston homeowners identify and plan electrical repairs involving panels, breakers, lighting, switches, outlets, circuits, and other common electrical concerns. Call or book an estimate with a clear description of the issue, where it occurs, and when it started.",
    includes: [
      "Electrical troubleshooting",
      "Panel and breaker concerns",
      "Lighting repair and installation",
      "Outlet and switch service",
      "Circuit additions and repair planning",
      "Generator-related electrical conversations",
    ],
    bestFor: [
      "Homeowners with repeat electrical symptoms",
      "Planned lighting or circuit work",
      "Panel and breaker concerns",
      "Homes in the North Houston service corridor",
    ],
    limits:
      "The final scope depends on the home's wiring, access, existing equipment, permitting needs, and what the on-site evaluation finds.",
    image: "/media/transfer-switch-controls.jpg",
    imageAlt:
      "Electrical transfer switch controls and neatly routed internal wiring during service",
    imageWidth: 1440,
    imageHeight: 1920,
    questions: [
      {
        question: "What should I do if a breaker keeps tripping?",
        answer:
          "Stop repeatedly resetting a breaker when the cause is unknown. Note which devices or rooms are affected, unplug nonessential loads if safe, and arrange an electrical evaluation. Heat, odor, smoke, or visible damage requires immediate caution and emergency services when appropriate.",
      },
      {
        question: "Can I book an estimate online?",
        answer:
          "Yes. Use the Book an Estimate button to choose a time through Power Now Service's Calendly page, or call (936) 402-3202.",
      },
      {
        question: "Which areas do you serve?",
        answer:
          "The published service area includes North Houston, Spring, The Woodlands, Conroe, Tomball, Humble, and Kingwood. Call to confirm the exact project address.",
      },
    ],
  },
  {
    slug: "generator-electrical-services",
    name: "Generator and Transfer Equipment Electrical Service",
    shortName: "Generator Electrical",
    description:
      "Electrical support around generator controls, transfer equipment, power connections, load-bank coordination, and related troubleshooting.",
    answer:
      "Power Now Service provides electrical support around generator systems, transfer equipment, controls, power connections, and load-bank coordination in North Houston. The estimate defines whether the need is an electrical fault, control issue, connection problem, testing concern, or broader equipment-service request.",
    includes: [
      "Transfer-equipment electrical inspection",
      "Control and connection troubleshooting",
      "Generator circuit and breaker review",
      "Load-bank coordination conversations",
      "Equipment power-path inspection",
      "Repair planning based on observed conditions",
    ],
    bestFor: [
      "Commercial standby-power systems",
      "Facility teams coordinating generator work",
      "Contractors needing electrical support",
      "Owners investigating transfer or connection issues",
    ],
    limits:
      "Power Now Service does not claim universal engine, fuel-system, or manufacturer-certified service. The estimate confirms the electrical scope and any coordination required with other specialists.",
    image: "/media/transfer-switch-interior.jpg",
    imageAlt:
      "Interior of commercial transfer equipment with breaker assembly and control components",
    imageWidth: 1440,
    imageHeight: 1920,
    questions: [
      {
        question: "Do you repair generator engines?",
        answer:
          "This site offers electrical support around generator systems rather than a blanket engine-repair claim. Describe the symptoms when booking so Power Now Service can confirm whether the issue fits the electrical service scope.",
      },
      {
        question: "Can you inspect transfer equipment?",
        answer:
          "Transfer-equipment concerns can be discussed and evaluated as part of an approved electrical scope. Safe access, de-energization requirements, documentation, and equipment condition determine the inspection plan.",
      },
      {
        question: "How is pricing handled?",
        answer:
          "Pricing depends on the equipment, symptoms, access, travel, shutdown needs, parts, and approved work. Book an estimate so the scope can be defined before a price is represented as final.",
      },
    ],
  },
];

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<string, ServiceDefinition>;

export const projectMedia: ProjectMedia[] = [
  {
    src: "/media/load-bank-heat-damaged-elements.jpg",
    alt: "Heat-damaged load bank resistor elements and wiring inside an open cabinet",
    width: 1440,
    height: 1920,
    label: "Failure evidence",
    title: "Heat damage across load steps",
    caption:
      "Visible scorching and conductor damage help define how far an inspection must extend before repair decisions are made.",
    category: "load-bank",
  },
  {
    src: "/media/load-bank-resistor-elements.jpg",
    alt: "Rows of intact resistive load bank elements arranged inside a blue cabinet",
    width: 1440,
    height: 1920,
    label: "Internal assembly",
    title: "Serviceable resistor-bank layout",
    caption:
      "The element layout, supports, conductors, and airflow path all matter when evaluating load-bank condition.",
    category: "load-bank",
  },
  {
    src: "/media/load-bank-damaged-cooling-fans.jpg",
    alt: "Burned and damaged load bank cooling fans removed from a blue equipment panel",
    width: 1440,
    height: 1920,
    label: "Cooling failure",
    title: "Damaged fan assemblies",
    caption:
      "Cooling problems can affect more than the fan itself, so surrounding wiring, controls, and heat exposure must also be reviewed.",
    category: "load-bank",
  },
  {
    src: "/media/load-bank-replacement-cooling-fans.jpg",
    alt: "Replacement cooling fans and power supply arranged on a load bank panel",
    width: 1920,
    height: 1440,
    label: "Repair work",
    title: "Cooling components prepared for service",
    caption:
      "Replacement components are selected and installed according to the specific equipment and approved repair scope.",
    category: "load-bank",
  },
  {
    src: "/media/load-bank-failed-contactors.jpg",
    alt: "Failed and heat-damaged contactors with connected wiring in a load bank cabinet",
    width: 1440,
    height: 1920,
    label: "Fault finding",
    title: "Contactor and connection damage",
    caption:
      "A visibly failed component is a starting point, not the entire diagnosis; connected conductors and upstream conditions also require attention.",
    category: "load-bank",
  },
  {
    src: "/media/load-bank-field-testing.jpg",
    alt: "Technician using a laptop beside large electrical equipment during load bank field testing",
    width: 1440,
    height: 1920,
    label: "Field work",
    title: "System information under real operating conditions",
    caption:
      "Controls, readings, physical condition, and the reported symptom are considered together when defining next steps.",
    category: "load-bank",
  },
  {
    src: "/media/pcs-generator-control-panel.jpg",
    alt: "Generator protection relay, power monitor, and control panel mounted on PCS gear",
    width: 1920,
    height: 1440,
    label: "PCS gear",
    title: "Generator control and protection interface",
    caption:
      "Power control systems bring monitoring, protection, breaker control, and operating sequences into one coordinated equipment lineup.",
    category: "pcs",
  },
  {
    src: "/media/pcs-generator-system-display.jpg",
    alt: "Power control system display showing three generator sources and breaker status",
    width: 1200,
    height: 1600,
    label: "System display",
    title: "Source and breaker status at a glance",
    caption:
      "A system display helps frame the reported condition, but safe troubleshooting still depends on documentation and physical inspection.",
    category: "pcs",
  },
  {
    src: "/media/switchgear-power-cabling.jpg",
    alt: "Switchgear interior with color-coded power conductors, breaker assemblies, and control wiring",
    width: 1440,
    height: 1920,
    label: "Commercial systems",
    title: "Power path and control wiring",
    caption:
      "Commercial electrical work starts with the actual installed system, access requirements, and the operating impact of the repair.",
    category: "switchgear",
  },
];

export const navItems = [
  { href: "/load-bank-repair", label: "Load Bank Repair" },
  { href: "/pcs-gear-service", label: "PCS Gear" },
  { href: "/projects", label: "Field Work" },
  { href: "/service-areas/north-houston", label: "Service Area" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
];
