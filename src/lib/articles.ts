export type ArticleSection = {
  heading: string;
  answer: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ArticleSource = {
  label: string;
  href: string;
};

export type ArticleEntry = {
  slug: string;
  title: string;
  description: string;
  published: string;
  modified: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  directAnswer: string;
  sections: ArticleSection[];
  sources: ArticleSource[];
  questions: { question: string; answer: string }[];
};

export const articles: ArticleEntry[] = [
  {
    slug: "load-bank-failure-warning-signs",
    title: "Load Bank Failure Warning Signs and Common Repair Areas",
    description:
      "Learn which visible, cooling, control, and connection problems can signal that a load bank needs inspection before further operation.",
    published: "2026-08-14",
    modified: "2026-08-14",
    readingTime: "7 minute read",
    image: "/media/load-bank-failed-contactors.jpg",
    imageAlt: "Heat-damaged load bank contactors and wiring inside an open cabinet",
    directAnswer:
      "Load bank warning signs can include abnormal fan noise, weak airflow, overheating, burned odor, visible discoloration, damaged wiring, failed load steps, contactor problems, nuisance trips, or a control system that will not complete its normal sequence. Stop and arrange qualified inspection when continued operation could worsen damage.",
    sections: [
      {
        heading: "Which warning signs deserve immediate attention?",
        answer:
          "Smoke, active arcing, melting, severe heat, exposed conductors, or a cooling system that is not operating should be treated as stop-work conditions. Do not keep cycling the equipment to see whether the problem clears.",
        bullets: [
          "Visible scorching or melted insulation",
          "Fans that do not start or move expected air",
          "Repeated fuse, breaker, or overload operation",
          "A load step that will not apply or release normally",
          "Loose, discolored, or heat-affected connections",
        ],
      },
      {
        heading: "Why is cooling condition so important?",
        answer:
          "Resistive load banks turn electrical energy into heat and depend on their designed airflow path to remove it. A failed fan, blocked intake, damaged control component, or incorrect operating condition can expose nearby parts to excessive temperature.",
        paragraphs: [
          "Manufacturer documentation commonly describes forced-air cooling, fan motors, contactors, overload protection, and independently serviceable resistor assemblies as linked parts of the load-bank system. That is why a failed fan should not be viewed in isolation.",
        ],
      },
      {
        heading: "What typically gets inspected inside the cabinet?",
        answer:
          "The inspection follows the symptom and equipment design. Common areas include resistor elements and supports, fan assemblies, contactors, fuses, control power, wiring, terminals, protective devices, airflow paths, and visible heat damage.",
        paragraphs: [
          "A burned component may be the result of another problem. The repair decision should account for surrounding conductors, connection integrity, control behavior, and whether a safe functional check can be completed afterward.",
        ],
      },
      {
        heading: "When does repair stop making sense?",
        answer:
          "Replacement may be the better path when damage is widespread, the enclosure or power path is compromised, compatible parts are unavailable, documentation is missing, or repair cost and downtime approach the value of suitable replacement equipment.",
        paragraphs: [
          "There is no honest repair-or-replace answer without seeing the unit. An estimate should explain the observed condition, likely repair scope, known limitations, and information still needed.",
        ],
      },
      {
        heading: "What should a facility team document before service?",
        answer:
          "Document the nameplate, model, full cabinet, damaged area, controls, fault messages, operating sequence, and the event that preceded the failure. Record only what can be gathered safely without opening energized equipment for photography.",
      },
    ],
    sources: [
      {
        label: "Simplex load bank maintenance schedules",
        href: "https://www.simplexdirect.com/service-and-support/maintenance-schedules/load-bank-maintenance/",
      },
      {
        label: "Simplex Saturn resistive load bank manual",
        href: "https://www.simplexdirect.com/resources/b79e9151-ceba-4dae-9f6f-24bc2c19240c/saturnmanualloadmarshalcontrol-210608.pdf",
      },
      {
        label: "Bison load bank storage and maintenance guidance",
        href: "https://www.bisonlb.com/_files/ugd/45bfe0_9f36b2a0ae0c4fce8dbf40d778226e78.pdf",
      },
    ],
    questions: [
      {
        question: "Can I run a load bank with one failed fan?",
        answer:
          "Do not assume the remaining fans provide adequate cooling. Follow the manufacturer's instructions and arrange qualified inspection before operation when the designed cooling system is not functioning normally.",
      },
      {
        question: "Does a burned contactor mean only the contactor needs replacement?",
        answer:
          "Not necessarily. The connected conductors, terminals, control circuit, load step, heat exposure, and cause of failure should also be evaluated before the repair is considered complete.",
      },
      {
        question: "Can photos confirm a repair price?",
        answer:
          "Photos can improve the initial conversation, but they may not show hidden damage, equipment configuration, access constraints, or the functional checks needed after repair.",
      },
    ],
  },
  {
    slug: "load-bank-testing-vs-repair",
    title: "Load Bank Testing vs. Load Bank Repair: What Is the Difference?",
    description:
      "Understand when a facility needs a planned load test, when damaged load-bank equipment needs repair, and why the scopes are not interchangeable.",
    published: "2026-08-14",
    modified: "2026-08-14",
    readingTime: "6 minute read",
    image: "/media/load-bank-field-testing.jpg",
    imageAlt: "Technician reviewing electrical system information on a laptop beside large power equipment",
    directAnswer:
      "Load bank testing applies a controlled electrical load to evaluate a power source or system under defined conditions. Load bank repair restores the load-bank equipment itself when fans, resistors, contactors, controls, wiring, or other components are damaged or unreliable. A site may need one service or both, but they solve different problems.",
    sections: [
      {
        heading: "What question does load bank testing answer?",
        answer:
          "A planned test asks whether the connected power source and related system can operate under a controlled load while technicians monitor defined readings and behavior. The procedure, duration, setup, and report depend on the equipment and test objective.",
      },
      {
        heading: "What question does load bank repair answer?",
        answer:
          "Repair asks why the load bank cannot safely or reliably perform its intended function and what work is needed to restore it. The answer may involve cooling, resistive elements, switching components, controls, wiring, or broader heat damage.",
      },
      {
        heading: "Can failed load-bank equipment invalidate a test plan?",
        answer:
          "Yes. A test plan assumes the test equipment is suitable for the intended use. If the load bank has compromised cooling, switching, wiring, protection, or control functions, its condition must be addressed before relying on it for a controlled test.",
      },
      {
        heading: "Which service should be booked first?",
        answer:
          "Book repair assessment first when the load bank shows physical damage, abnormal operation, failed cooling, or incomplete load steps. Book a testing conversation when the equipment is believed to be serviceable and the goal is evaluating a generator or power system under load.",
      },
      {
        heading: "What should a clear estimate separate?",
        answer:
          "A clear estimate separates equipment inspection, repair labor, parts, setup, testing time, reporting, travel, access, shutdown coordination, and any work outside the confirmed electrical scope. That keeps a repair quote from being mistaken for a full compliance test.",
      },
    ],
    sources: [
      {
        label: "Power Field Services load bank testing overview",
        href: "https://www.powerfieldservices.com/service-dept/load-bank-testing/",
      },
      {
        label: "Simplex load bank maintenance schedules",
        href: "https://www.simplexdirect.com/service-and-support/maintenance-schedules/load-bank-maintenance/",
      },
      {
        label: "Schneider Electric backup power testing architecture",
        href: "https://productinfo.se.com/esxp_digital_apps_iec/bpt/English/ESXP2GE014EN-05_Backup_Power_Testing.pdf",
      },
    ],
    questions: [
      {
        question: "Is load bank testing the same as generator maintenance?",
        answer:
          "No. A load test evaluates behavior under controlled load. Generator maintenance can include separate mechanical, fuel, cooling, electrical, and inspection work depending on the agreed scope.",
      },
      {
        question: "Does Power Now Service promise a specific test duration?",
        answer:
          "No. Test duration and procedure must be defined for the equipment, objective, facility, and applicable requirements before they are represented as part of the service.",
      },
      {
        question: "Can repair and testing happen during one visit?",
        answer:
          "Possibly, but only when the fault, parts, access, repair scope, and safe functional procedure are known. Many repairs require follow-up work or separate coordination.",
      },
    ],
  },
  {
    slug: "pcs-gear-maintenance-fundamentals",
    title: "PCS Gear and Critical-Power Control Maintenance Fundamentals",
    description:
      "A practical introduction to the controls, breakers, system displays, documentation, and coordination involved in PCS gear service.",
    published: "2026-08-14",
    modified: "2026-08-14",
    readingTime: "7 minute read",
    image: "/media/pcs-generator-control-panel.jpg",
    imageAlt: "Generator control cabinet with protection relay, power monitor, and manual controls",
    directAnswer:
      "Power control system gear coordinates sources, generators, breakers, transfer equipment, loads, monitoring, and operating sequences in critical-power applications. Maintenance starts with accurate documentation, alarm and event information, physical condition, safe access, and an understanding of how the installed system is supposed to operate.",
    sections: [
      {
        heading: "What does PCS gear coordinate?",
        answer:
          "Depending on the design, PCS gear can coordinate generator starting, synchronization, paralleling, breaker control, load sharing, load add or shed sequences, transfer equipment, status monitoring, alarms, and event history.",
      },
      {
        heading: "Why is system documentation part of maintenance?",
        answer:
          "Control behavior only makes sense against the intended sequence. Current one-lines, wiring diagrams, settings records, operating narratives, and alarm history help technicians distinguish a component fault from a configuration, communication, or sequence issue.",
      },
      {
        heading: "Which conditions should be recorded before service?",
        answer:
          "Record the active source, generator and breaker states, displayed alarms, timestamps, recent switching events, affected loads, and what changed immediately before the problem. Photos should be taken only from safe, authorized positions.",
      },
      {
        heading: "Why is a PCS issue not always a display issue?",
        answer:
          "The display is one view into a larger system. Incorrect status can relate to sensing, control power, communication, wiring, protective devices, breaker position, field conditions, or the controller itself. Diagnosis should follow the signal path.",
      },
      {
        heading: "When should manufacturer support be involved?",
        answer:
          "Manufacturer or authorized support may be appropriate when proprietary software, firmware, protected settings, obsolete hardware, specialized test equipment, or configuration changes are involved. A field evaluation should state those boundaries clearly.",
      },
    ],
    sources: [
      {
        label: "Schneider Electric ASCO 7000 Series low-voltage PCS",
        href: "https://www.se.com/us/en/product-range/66147-asco-7000-series-lowvoltage-power-control-system/",
      },
      {
        label: "Schneider Electric ASCO 7000 Series medium-voltage PCS",
        href: "https://www.se.com/us/en/product-range/66153-asco-7000-series-mediumvoltage-power-control-system/",
      },
      {
        label: "Schneider Electric power source and load control guide",
        href: "https://productinfo.se.com/esxp_digital_apps_iec/pslc/English/ESXP2GE018EN-05_Power_Source_Load_Control.pdf",
      },
    ],
    questions: [
      {
        question: "Is every PCS system configured the same way?",
        answer:
          "No. The number of sources, breakers, transfer devices, loads, control modes, communication paths, and operating sequences varies by facility and equipment design.",
      },
      {
        question: "Can alarm history help find an intermittent problem?",
        answer:
          "Yes. Accurate timestamps, alarm order, breaker states, and operating context can narrow the investigation, especially when the system appears normal by the time service arrives.",
      },
      {
        question: "Does Power Now Service claim manufacturer certification?",
        answer:
          "No manufacturer certification is claimed on this site. Equipment and scope are reviewed before service is confirmed, and manufacturer involvement may be recommended when required.",
      },
    ],
  },
];

export const articleBySlug = Object.fromEntries(
  articles.map((article) => [article.slug, article]),
) as Record<string, ArticleEntry>;
