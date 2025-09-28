/**
 * ==========================================
 * COMMUNITY-CENTERED NPC BACKSTORY DATA
 * 
 * NPCs with relatable, human stories:
 * - Connected to their community
 * - Realistic hopes and fears
 * - Grounded in everyday life
 * ==========================================
 */
console.log("community-npc-data.js is loading...");

/**
 * ==========================================
 * COMMUNITY-FOCUSED NPC SYSTEM
 * 
 * Design Pattern: Characters rooted in place
 * - Local backgrounds and connections
 * - Realistic motivations and struggles
 * - Human flaws and simple joys
 * ==========================================
 */

// NPC NAME POOLS (more common, everyday names)
const NPC_NAMES = {
    human: {
        male: ["Marcus", "Willem", "Cedric", "Thomas", "Oliver", "Samuel", "Henry", "Jacob", "Daniel", "Matthew", "Luke", "Peter", "James", "Robert", "Michael"],
        female: ["Emma", "Sarah", "Anna", "Claire", "Grace", "Lucy", "Rose", "Mary", "Elizabeth", "Kate", "Jane", "Ruth", "Helen", "Alice", "Margaret"]
    },
    elf: {
        male: ["Aelin", "Finn", "Rowan", "Ash", "River", "Sky", "Forest", "Vale", "Glen", "Reed", "Sage", "Storm", "Clay", "Stone", "Brook"],
        female: ["Luna", "Dawn", "Ivy", "Willow", "Hazel", "Iris", "Fern", "Rain", "Star", "Meadow", "Pearl", "Crystal", "Ruby", "Amber", "Sage"]
    },
    dwarf: {
        male: ["Borin", "Torin", "Dain", "Cole", "Knox", "Clay", "Stone", "Flint", "Steel", "Bronze", "Iron", "Gold", "Copper", "Silver", "Slate"],
        female: ["Vera", "Terra", "Petra", "Ruby", "Jade", "Opal", "Amber", "Pearl", "Crystal", "Gemma", "Stella", "Clara", "Nora", "Cora", "Dora"]
    },
    halfling: {
        male: ["Pip", "Sam", "Ben", "Tom", "Joe", "Max", "Leo", "Finn", "Jack", "Will", "Nick", "Dan", "Alex", "Chris", "Matt"],
        female: ["Rosie", "Daisy", "Lily", "Poppy", "Violet", "Holly", "Ivy", "Sage", "Mint", "Basil", "Thyme", "Clover", "Fern", "Iris", "Pansy"]
    },
    tiefling: {
        male: ["Dante", "Felix", "Victor", "Adrian", "Damien", "Jasper", "Raven", "Phoenix", "Blaze", "Ash", "Storm", "Shadow", "Ember", "Flint", "Sage"],
        female: ["Scarlett", "Raven", "Luna", "Ember", "Storm", "Shadow", "Flame", "Rose", "Thorn", "Crimson", "Ruby", "Onyx", "Jet", "Ash", "Sage"]
    }
};

// BASIC NPC TRAITS (more grounded professions)
const NPC_RACES = ["Human", "Elf", "Dwarf", "Halfling", "Tiefling", "Half-Elf", "Half-Orc", "Gnome", "Dragonborn"];

const NPC_PROFESSIONS = [
    "Farmer", "Blacksmith", "Baker", "Tailor", "Innkeeper", "Merchant", "Fisher", "Carpenter", "Healer", "Teacher", "Guard", "Miner", "Cook", "Shepherd", "Librarian", "Musician", "Stable Hand", "Miller", "Weaver", "Hunter", "Bandit", "Corrupt Tax Collector", "Black Market Dealer", "Loan Shark", "Cruel Overseer", "Poisoner", "Fence", "Extortionist"
];

const NPC_AGES = ["Young Adult (20-30)", "Adult (30-45)", "Middle-aged (45-60)", "Elder (60+)"];

const NPC_ALIGNMENTS = [
    "Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"
];

// PRE-BUILT NPC TEMPLATES (grounded, community-focused characters)
const NPC_TEMPLATES = {
    // CHARACTER TEMPLATES
    characters: [
        {
            name: "Marcus Ironbell",
            race: "Human",
            profession: "Blacksmith",
            age: "Adult (35)",
            alignment: "Lawful Good",
            backstory_origin: "Apprenticed to the local blacksmith as a teenager",
            favorite_people: "fellow craftspeople who share techniques",
            backstory_secret: "He secretly sends money to support relatives in another town",
            backstory_relationship: "coordinates with other farmers to help during harvest season",
            problem_solving_approach: "organizes the village's defense and has successfully designed weapons that helped repel two bandit attacks",
            personality: "Practical problem-solver who believes preparation prevents tragedy",
            quirk: "Has burn scars on his arms and can judge metal temperature by sound alone",
            physical_quirk: "Has sun-weathered skin from years of outdoor work",
            simple_dream: "To see his children grow up happy and healthy",
            common_fear: "That the bandits will attack again",
            hobby: "Teaches young people metalworking and basic self-defense skills",
            community_connection: "His forge serves as an unofficial meeting place where defense strategies are planned"
        },
        {
            name: "Luna Brightwater",
            race: "Half-Elf",
            profession: "Fisher & Diplomat",
            age: "Young Adult (28)",
            alignment: "Neutral Good",
            origin: "Grew up helping their parent fish the local rivers and lakes",
            motivation: "negotiates with neighboring villages to establish fishing rights and trade agreements that benefit everyone",
            secret: "She's terrified of deep water despite being a fisher",
            relationship: "trades with nearby villages",
            personality: "Patient negotiator who believes most conflicts can be resolved if people understand each other",
            quirk: "Can predict weather changes days in advance by reading water and animal behavior",
            physical_quirk: "Always smells faintly of whatever they cook",
            simple_dream: "To master her craft completely",
            common_fear: "That her children will move to the big city",
            hobby: "Plays flute by the water and teaches river songs that help fishers coordinate their work",
            community_connection: "Her diplomatic efforts have prevented three potential conflicts and secured vital trade deals",
            favorite_people: "traveling merchants with tales from far places"
        },
        {
            name: "Rose Goldenheart",
            race: "Halfling",
            profession: "Baker & Community Organizer",
            age: "Middle-aged (52)",
            alignment: "Lawful Good",
            origin: "Child of the village baker, learned the trade from a young age",
            motivation: "coordinates community meal programs and has organized food distribution that kept families fed during hard times",
            secret: "She can't read very well but is too proud to ask for help",
            relationship: "organizes community events",
            personality: "Natural organizer who can coordinate complex community projects while making it look effortless",
            quirk: "Can calculate grain ratios in her head and always knows exactly how much food the village has",
            physical_quirk: "Has incredibly strong handshake from manual labor",
            simple_dream: "To own her own home with a garden",
            common_fear: "That next winter will be too harsh to survive",
            hobby: "Organizes seasonal festivals that bring the whole community together and boost morale",
            community_connection: "Her bakery functions as the village's communication center and emergency coordination hub",
            favorite_people: "hardworking farmers during harvest time"
        },
        {
            name: "Finn Stormwright",
            race: "Dwarf",
            profession: "Farmer & Agricultural Innovator",
            age: "Adult (42)",
            alignment: "True Neutral",
            origin: "Grew up on a small family farm that struggled with poor harvests",
            motivation: "develops crop rotation methods and pest management techniques that have increased village food security by 40%",
            secret: "He's been saving for years to propose to someone",
            relationship: "coordinates with other professionals",
            personality: "Methodical experimenter who approaches problems with scientific curiosity",
            quirk: "Can identify plant diseases by smell and always carries a small notebook of observations",
            physical_quirk: "Wears his late spouse's wedding ring on a chain",
            simple_dream: "To travel to the ocean just once",
            common_fear: "That his business will fail",
            hobby: "Carves detailed wooden models of his experimental farm layouts and new tool designs",
            community_connection: "His agricultural innovations have made the village more self-sufficient and resilient",
            favorite_people: "quiet scholars who appreciate knowledge"
        },
        {
            name: "Clara Moonwhisper",
            race: "Human",
            profession: "Healer & Crisis Mediator",
            age: "Elder (67)",
            alignment: "Neutral Good",
            origin: "Raised by grandparents after parents died in a mining accident",
            motivation: "mediates disputes before they escalate and has prevented several family feuds from splitting the community",
            secret: "She knows who's been stealing from the village stores",
            relationship: "mediates family disputes",
            personality: "Calm presence who can defuse tension with a few well-chosen words",
            quirk: "Can diagnose both physical ailments and social problems with equal accuracy",
            physical_quirk: "Has a scar from a farming accident years ago",
            simple_dream: "To be remembered fondly after she's gone",
            common_fear: "That she's not good enough at her craft",
            hobby: "Maintains detailed records of medicinal plants and family histories to help prevent future problems",
            community_connection: "Her dual role as healer and mediator makes her essential for both physical and social village health",
            favorite_people: "healers who help others selflessly"
        },
        {
            name: "Oliver Brightforge",
            race: "Human",
            profession: "Carpenter & Infrastructure Coordinator",
            age: "Adult (39)",
            alignment: "Lawful Neutral",
            origin: "Born into a family of traveling merchants",
            motivation: "leads building projects that have improved housing quality and created jobs for local workers",
            secret: "He has nightmares about the bandits who killed his sibling",
            relationship: "helps elderly neighbors",
            personality: "Strategic thinker who plans projects three steps ahead and always considers long-term impact",
            quirk: "Can estimate building materials needed just by looking at a foundation site",
            physical_quirk: "Always has flour/dirt/sawdust somewhere on his clothes",
            simple_dream: "To help his community thrive",
            common_fear: "That the village will become a ghost town",
            hobby: "Teaches apprentices advanced techniques and helps them start their own workshops",
            community_connection: "His infrastructure improvements have made the village more prosperous and defensible",
            favorite_people: "teachers who inspire the next generation"
        },
        {
            name: "Gareth Blackwater",
            race: "Human",
            profession: "Corrupt Tax Collector",
            age: "Adult (44)",
            alignment: "Lawful Evil",
            origin: "Moved to town when his family's inn went out of business",
            motivation: "seeks to gain control over the village's food supply through fear",
            secret: "He's been poisoning the village well water slowly over months",
            relationship: "controls desperate people through unpayable debts",
            personality: "Speaks in clipped, official tones and shows no empathy for struggling families",
            quirk: "Always counts coins and has ink-stained fingers from falsifying records",
            physical_quirk: "Walks with a slight limp from an old injury",
            simple_dream: "To find someone who truly understands him",
            common_fear: "That he'll never find true love",
            hobby: "Collects expensive wines while villagers go hungry",
            community_connection: "Directly responsible for much of the village's financial suffering",
            favorite_people: "no one - he despises the entire village"
        },
        {
            name: "Vera Thornfield",
            race: "Half-Elf",
            profession: "Black Market Dealer",
            age: "Adult (38)",
            alignment: "Neutral Evil",
            origin: "Born during the worst winter storm in decades",
            motivation: "wants to drive out residents to claim valuable land for themselves",
            secret: "She's the one organizing the bandit raids while pretending to be a victim",
            relationship: "has corrupted several village youth into criminal activities",
            personality: "Charming and sympathetic on the surface, but watches people's suffering with cold calculation",
            quirk: "Always has exactly what desperate people need, for a terrible price",
            physical_quirk: "Has calloused hands that tell the story of her work",
            simple_dream: "To never go hungry again",
            common_fear: "That her health is failing",
            hobby: "Studies people's weaknesses to better exploit them later",
            community_connection: "Preys on the village's darkest moments and deepest needs",
            favorite_people: "desperate people she can manipulate"
        },
        {
            name: "Magnus Rotwell",
            race: "Human",
            profession: "Loan Shark",
            age: "Middle-aged (51)",
            alignment: "Lawful Evil",
            origin: "Helped run the family shop since he was old enough to count",
            motivation: "hopes to eliminate competition by sabotaging other businesses",
            secret: "He's been selling village children to slavers in distant lands",
            relationship: "maintains a network of informants through blackmail",
            personality: "Speaks softly but everyone knows the violence that backs his gentle words",
            quirk: "Never forgets a debt or a payment date, keeps meticulous records of everyone's desperation",
            physical_quirk: "Always wears a lucky hat that's seen better days",
            simple_dream: "To see peace return to the land",
            common_fear: "That he's becoming a burden on others",
            hobby: "Visits debtors' homes just to watch them squirm and beg for more time",
            community_connection: "His predatory lending has trapped entire families in cycles of poverty",
            favorite_people: "those who owe him money and fear him"
        },
        {
            name: "Damien Ashworth",
            race: "Tiefling",
            profession: "Bandit Leader",
            age: "Adult (33)",
            alignment: "Chaotic Evil",
            origin: "Raised by a single parent who worked multiple jobs",
            motivation: "dreams of establishing his own criminal empire in the region",
            secret: "He murdered his business partner and made it look like an accident",
            relationship: "manipulates grieving families during their weakest moments",
            personality: "Charismatic and brutal, able to inspire loyalty through fear and shared hatred",
            quirk: "Still wears pieces of his old guard uniform as a mockery",
            physical_quirk: "Has kind eyes that crinkle when he smiles",
            simple_dream: "To pass on his knowledge to the next generation",
            common_fear: "That old traditions will be forgotten",
            hobby: "Collects trophies from his raids - children's toys, family heirlooms, wedding rings",
            community_connection: "Represents the village's greatest fear made manifest - one of their own turned monster",
            favorite_people: "those who share his hatred and desire for revenge"
        },
        {
            name: "Thea Brightleaf",
            race: "Elf",
            profession: "Teacher & Librarian",
            age: "Adult (134)",
            alignment: "Neutral Good",
            origin: "Family moved here when bandits destroyed their old village",
            motivation: "seeks to help her community",
            secret: "She's slowly going deaf but hasn't told anyone",
            relationship: "mentors local youth",
            personality: "natural teacher",
            quirk: "remembers everyone's birthday",
            physical_quirk: "Tends to speak with her hands while talking",
            simple_dream: "To help her community thrive",
            common_fear: "That the bandits will attack again",
            hobby: "Reading adventure stories aloud",
            community_connection: "Preserves village knowledge and educates the young",
            favorite_people: "young children learning new skills"
        },
        {
            name: "Willem Strongarm",
            race: "Human",
            profession: "Guard Captain",
            age: "Middle-aged (48)",
            alignment: "Lawful Good",
            origin: "Learned to read in the village library and never left",
            motivation: "wants to protect others",
            secret: "He once had to eat tree bark to survive a harsh winter",
            relationship: "maintains old friendships",
            personality: "patient listener",
            quirk: "never sits still",
            physical_quirk: "Has a nervous habit of checking his pockets",
            simple_dream: "To see peace return to the land",
            common_fear: "That his children will move to the big city",
            hobby: "Training the village dogs tricks",
            community_connection: "Organizes village defenses and keeps watch schedules",
            favorite_people: "honest guards who protect the community"
        },
        {
            name: "Sage Willowbrook",
            race: "Halfling",
            profession: "Herbalist & Cook",
            age: "Elder (78)",
            alignment: "True Neutral",
            origin: "Grew up tending sheep in the nearby hills",
            motivation: "wants to master her craft",
            secret: "She's the one who's been leaving anonymous gifts for the poor",
            relationship: "cares for aging parents",
            personality: "wise advisor",
            quirk: "talks to animals",
            physical_quirk: "Always carries a small tool of her trade",
            simple_dream: "To pass on her knowledge to the next generation",
            common_fear: "That next winter will be too harsh to survive",
            hobby: "Growing herbs for cooking and healing",
            community_connection: "Provides natural remedies and comfort food to villagers",
            favorite_people: "gentle souls who care for animals"
        },
        {
            name: "Jasper Ironhold",
            race: "Dwarf",
            profession: "Miner & Gem Cutter",
            age: "Adult (87)",
            alignment: "Chaotic Neutral",
            origin: "Learned cooking from their grandmother's secret recipes",
            motivation: "hopes to find true love",
            secret: "They know a hidden cave full of valuable minerals",
            relationship: "trains apprentices",
            personality: "creative problem-solver",
            quirk: "collects interesting stones",
            physical_quirk: "Has a distinctive laugh that carries across the village",
            simple_dream: "To find someone who truly understands them",
            common_fear: "That their business will fail",
            hobby: "Making simple jewelry from local materials",
            community_connection: "Supplies precious stones and teaches craftsmanship",
            favorite_people: "skilled artisans who take pride in their work"
        },
        {
            name: "Ember Nightwhisper",
            race: "Tiefling",
            profession: "Musician & Storyteller",
            age: "Young Adult (25)",
            alignment: "Chaotic Good",
            origin: "Family has lived in this town for generations",
            motivation: "dreams of traveling",
            secret: "They know the location of their grandfather's buried savings",
            relationship: "organizes the annual village festival every year",
            personality: "eternal optimist",
            quirk: "excellent cook",
            physical_quirk: "Wears clothes that are practical rather than fashionable",
            simple_dream: "To travel to the ocean just once",
            common_fear: "That the village will become a ghost town",
            hobby: "Teaching children folk dances",
            community_connection: "Preserves oral traditions and lifts spirits with performances",
            favorite_people: "musicians who play traditional songs",
            favorite_food: "smoked fish that lasts through storms"
        }
    ]
};

const PERSONALITY_TRAITS = [
    "Always offers food to visitors",
    "Hums while working",
    "Tells the same three jokes repeatedly",
    "Can't sleep unless all the animals are safely secured",
    "Reads the same book over and over",
    "Always knows everyone's business",
    "Terrible at remembering names but great with faces",
    "Collects smooth stones from the river",
    "Always cold, even in summer",
    "Laughs at their own jokes",
    "Extremely punctual for everything",
    "Can't throw anything away",
    "Always optimistic about next year's harvest",
    "Talks to plants and animals",
    "Never sits down during conversations",
    "Remembers everyone's birthday",
    "Always has dirt under their fingernails",
    "Shares vegetables from their garden",
    "Extremely superstitious about weather",
    "Makes the same meal every week on the same day"
];

console.log("Community-centered NPC data loaded successfully!");
console.log("Features deep character templates and reusable short components!");
console.log("Characters have relatable motivations, community connections, and emotional depth!");
console.log("Includes both heroes and villains deeply connected to village life!");