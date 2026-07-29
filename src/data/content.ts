import type { Question } from '../types'

export const companyCards = [
  { id:'mission', title:'Physical AI for housing', summary:'Reframe combines architecture, design engineering, robotics, software, factory operations, modular construction, and field installation to make high-performance housing more attainable.', matters:'The product is the complete delivery system—not only a module or robot.', role:'DFMA connects design intent to repeatable factory and field execution.', talking:'I’m drawn to work where a digital design has to become a reliable physical process.' },
  { id:'model', title:'Vertically integrated delivery', summary:'Projects move from architectural intent and detailed modeling through DFMA review, production planning, fabrication, release, transport, set, and button-up.', matters:'Feedback can travel across the whole building lifecycle.', role:'The DFMA Engineer closes loops among design, automation, operators, and field crews.', talking:'My strongest work has also been at the design-to-production boundary.' },
  { id:'factory', title:'Andover microfactory', summary:'The Andover, Massachusetts facility uses robotics for portions of wall and ceiling framing while people complete work including wiring and plumbing.', matters:'Automation and skilled labor must be designed as one production system.', role:'Buildability includes tooling, access, sequence, quality, and operator information.', talking:'I would bring a practical habit of observing real process behavior before prescribing a fix.' },
  { id:'system', title:'Standardized and adaptable', summary:'The system balances standardized manufacturing with designs responsive to sites, communities, zoning, and customer needs.', matters:'Scalability depends on controlling variation without erasing necessary flexibility.', role:'DFMA helps locate the right interfaces, configurations, and design rules.', talking:'My parametric grid work taught me how configuration rules can reduce error without eliminating useful variation.' },
  { id:'culture', title:'Learning culture', summary:'Beliefs are testable. Learn, do, inspire. Maintain a beginner’s mind, adapt, take calculated risks, simplify to scale, and teach as part of the work.', matters:'The culture values evidence, iteration, first principles, and shared learning.', role:'A DFMA engineer must test assumptions and turn lessons into standards.', talking:'That matches how I prototype, test, document, and improve production systems.' },
  { id:'growth', title:'Projects and regional growth', summary:'Reframe has built in Arlington and Somerville, is developing six duplexes (12 homes) in Devens, and is expanding capacity in Southern California through deployable regional microfactories.', matters:'The company is proving both product delivery and a replicable factory model.', role:'Standards and release discipline become more important as factories multiply.', talking:'I’m interested in how lessons from Andover become portable production standards.' }
]

export const responsibilities = [
  ['Early design','Evaluate assemblies and compatibility with factory automation'],
  ['Early design','Balance manufacturing cost and factory-versus-field scope'],
  ['Early design','Represent buildability in reviews with architects and consultants'],
  ['Modeling & release','Ensure digital models reflect physical build reality'],
  ['Modeling & release','Map parts into kits, panels, processes, and work sequences'],
  ['Modeling & release','Review production plans, assembly views, and release readiness'],
  ['Modeling & release','Create shop drawings, handoffs, and process documentation'],
  ['Factory & field','Investigate tolerance stack-ups, alignment, and framing issues'],
  ['Factory & field','Build mockups and first articles'],
  ['Factory & field','Support module set, button-up, and project-specific changes'],
  ['Factory & field','Feed factory and field lessons back into design standards']
]

export const stories = [
  { id:'grid', title:'Parametric Onshape Grid System', focus:'Converted an inconsistent, specialist-dependent setup into variables and configurations. Reduced repetitive setup and configuration risk without inventing a time metric.', relevance:'Standardization · design release · accessible process knowledge' },
  { id:'feeder', title:'Vibratory Feeder Lane Investigation', focus:'Observed uneven tile movement, compared lane pairs, identified gaps, fasteners, vibration differences, and pileups, then documented controlled tests.', relevance:'Factory troubleshooting · first principles · material flow' },
  { id:'chute', title:'Return Chute Redesign', focus:'Iterated geometry, slope, bridging, friction, and materials through CAD and printed prototypes; planned Gocator measurement.', relevance:'Prototype validation · process behavior · feedback loop' },
  { id:'apollo', title:'Apollo Grid Print Validation', focus:'Found ArUco recess fit issues, separated dimensional accuracy from support-process effects, and sent precise corrective feedback while avoiding unnecessary reprints.', relevance:'First article · tolerance · clear technical communication' },
  { id:'ownership', title:'Production-System Ownership', focus:'Progressed from assigned production tasks into CAD, prototyping, automation support, documentation, and system-level improvement.', relevance:'Initiative · cross-functional ownership · startup fit' }
]

const prompts = [
['Introductory','Tell me about yourself.'],['Background','Walk me through your background.'],['Motivation','Why are you interested in Reframe Systems?'],['Motivation','Why are you interested in this DFMA Engineer role?'],['Company','What do you understand about what Reframe is building?'],['Background','How does your architecture background affect the way you approach manufacturing?'],['Behavioral','Tell me about a time you converted an informal process into a repeatable system.'],['Factory troubleshooting','Tell me about a manufacturing problem you diagnosed.'],['Manufacturing','Tell me about a design that did not behave as expected when physically produced.'],['DFMA','How do you decide whether a problem should be solved through design, process, or operator instruction?'],['DFMA','How do you approach tolerance and alignment problems?'],['DFMA','How do you validate a design before production release?'],['Manufacturing','Tell me about your experience with first articles or prototypes.'],['Collaboration','How do you communicate technical information to production personnel?'],['Collaboration','How do you document process changes?'],['Collaboration','Tell me about a time you worked across multiple disciplines.'],['Construction','How comfortable are you reading architectural drawing sets?'],['Construction','What is your experience with structural drawings?'],['Construction','What is your experience with construction or carpentry?'],['CAD','What is your experience with Onshape?'],['Difficult questions','Have you used Revit?'],['CAD','How would you approach learning an unfamiliar CAD or BIM platform?'],['Startup environment','How do you handle incomplete or changing design information?'],['Behavioral','Tell me about a time you found a problem before it became more expensive.'],['Factory troubleshooting','How do you prioritize production-floor issues?'],['DFMA','What does design for manufacturing mean to you?'],['DFMA','What does design for assembly mean to you?'],['DFMA','How would you determine whether work belongs in the factory or in the field?'],['Factory troubleshooting','How would you investigate a recurring fit-up issue?'],['DFMA','How would you turn factory feedback into a design standard?'],['Motivation','What interests you about modular construction?'],['Motivation','What interests you about housing automation?'],['Difficult questions','Why are you looking to leave your current position?'],['Motivation','What type of work are you hoping to own next?'],['Background','What is your greatest professional strength?'],['Difficult questions','What technical area are you still developing?'],['Behavioral','How do you respond when a prototype fails?'],['Behavioral','Describe a disagreement with a colleague about a technical solution.'],['Startup environment','How do you operate in a rapidly changing startup?'],['Questions for interviewer','What questions do you have for us?'],
['Behavioral','Tell me about a time you had to learn a technical system quickly.'],['Manufacturing','How do you know when a prototype is good enough to release?'],['Collaboration','How do you close a communication loop after a production change?'],['DFMA','What makes a work instruction effective?'],['Startup environment','How do you balance urgency with disciplined testing?']
]
export const questions: Question[] = prompts.map(([category,prompt],i)=>({id:`q${i+1}`,category,prompt}))

export const dfmaTopics = [
['Design for Manufacturing','Shape a design around capable, repeatable production processes.','Standard wall assemblies compatible with factory tooling.','I revise CAD geometry when printed or automated processes expose constraints.'],
['Design for Assembly','Reduce assembly effort, ambiguity, and error.','Self-locating panel interfaces with accessible fasteners.','My grid configurations and handling components improve fit and repeatability.'],
['Tolerance stack-up','Understand how individual variation accumulates across interfaces.','Floor, wall, ceiling, and module connections must still align.','I investigate flange gaps, recess fit, and lane alignment in physical systems.'],
['Datum strategy','Use stable references for measurement and assembly.','Locate panels from a controlled structural datum, not cumulative edges.','I separate nominal CAD intent from observable process-specific variation.'],
['Mistake-proofing','Make incorrect assembly difficult or obvious.','Asymmetric connections prevent reversed installation.','Naming conventions and configurations reduce wrong-file and wrong-setup risk.'],
['First-article inspection','Validate the first physical output before releasing repetition.','Inspect the first wall panel or module interface against critical dimensions.','Apollo grid prints exposed recess and support-material issues before wider printing.'],
['Work instructions','Translate intent into clear sequence, tools, checks, and acceptance criteria.','Operator view shows kit, datum, fasteners, torque, and quality gate.','I document print profiles, restrictions, and repeatable production workflows.'],
['Factory versus field','Place work where quality, repetition, access, safety, cost, and risk are best controlled.','Factory-install repeated MEP rough-ins; preserve site-adjustable interfaces where variability is high.','I distinguish geometry fixes from process controls and operator guidance.'],
['Change control','Ensure revisions are reviewed, communicated, traceable, and used at the point of work.','A module release revision updates model, kit, drawings, and floor instruction together.','I use naming and routing rules to keep manufacturing files unambiguous.'],
['Buildability review','Challenge design decisions early using real production and installation constraints.','Check access, tooling, lift points, tolerances, and sequence before release.','I compare digital assumptions with observed tile motion, friction, vibration, and fit.']
]

export const askQuestions = [
'What would you want the person in this role to understand or take ownership of during the first 90 days?',
'Where does the largest gap currently exist between design intent and factory execution?',
'How is buildability feedback currently captured and incorporated into Reframe’s design standards?',
'How does the DFMA Engineer divide time between digital modeling, design reviews, factory work, and field support?',
'At what point in a project does this role gain authority to challenge or change a design decision?',
'How does Reframe determine which operations should be completed in the factory versus at the site?',
'What types of tolerance, alignment, or integration problems occur most often during module production?',
'How mature are the current production documentation and work-instruction systems?',
'How do design engineering, automation engineering, factory operations, and field teams communicate during a module release?',
'What distinguishes someone who performs well in this role from someone who struggles?',
'What upcoming project or factory milestone would this person immediately support?',
'How is Reframe balancing standardized building systems with site-responsive architectural design?'
]

export const introDraft = `I currently work at Artaic Innovative Mosaic, where I began in production and have progressively taken on more responsibility for mechanical design, rapid prototyping, automation support, and production-system improvement. A large part of my work involves identifying where a digital design or production process does not match physical reality, developing and testing a solution, and then documenting it so the process becomes more repeatable.

My background also includes architectural studies, drafting, parametric modeling, and hands-on construction experience. That combination has led me toward roles at the intersection of design, manufacturing, and physical assembly.

Reframe interests me because the DFMA role appears to sit directly at that intersection—connecting architectural intent, digital models, factory execution, and field installation. I believe my experience working between CAD, prototyping, automation, and production would allow me to contribute while continuing to develop deeper expertise in modular construction.`

export const whyDraft = `I am interested in Reframe because the company is addressing housing as a complete systems problem rather than treating design, manufacturing, automation, and construction as separate activities. My strongest work has happened at those boundaries—where a design needs to become a reliable physical process and where production feedback needs to become a better design or standard.

The DFMA Engineer role is particularly compelling because it combines architectural understanding, digital modeling, hands-on problem solving, factory support, and process documentation. That is the direction in which my responsibilities have already been developing, and it is also the type of work I want to take greater ownership of.`
