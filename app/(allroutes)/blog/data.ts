export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO 8601
  author: string;
  tags: string[];
  image: string;
  imageAlt: string;
  readTime: string;
  content: ContentBlock[];
}

export const posts: BlogPost[] = [
  {
    slug: "what-makes-ethiopian-specialty-coffee-different",
    title: "What Makes Ethiopian Specialty Coffee Different",
    excerpt:
      "Heirloom varieties, highland terroir and centuries of coffee culture — why beans from Ethiopia's highlands taste unlike anything else in the world.",
    date: "2025-03-02",
    author: "Tade Coffee",
    tags: ["Origins", "Specialty Coffee", "Ethiopia"],
    image: "/images/dried.jpg",
    imageAlt: "Sun-dried coffee cherries on raised drying beds in West Arsi, Ethiopia",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "Ethiopia is the birthplace of coffee. The forests of the south-west highlands are the only place on earth where Coffea arabica grows wild, and that genetic diversity is the foundation of everything special about Ethiopian coffee.",
      },
      { type: "heading", text: "Heirloom varieties you won't find elsewhere" },
      {
        type: "paragraph",
        text: "While most coffee-producing countries rely on a handful of cultivated cultivars, Ethiopian smallholders grow thousands of locally adapted heirloom varieties — often mixed within a single farm. This genetic kaleidoscope is a big reason Ethiopian coffees express such vivid florals, stone fruit and citrus notes.",
      },
      { type: "heading", text: "Altitude does the heavy lifting" },
      {
        type: "list",
        items: [
          "High-grown coffee (1,900–2,400 m) matures slowly, concentrating sugars",
          "Cool highland nights slow cherry development and raise density",
          "Dense beans roast more evenly and cup with greater clarity",
        ],
      },
      {
        type: "paragraph",
        text: "Our sites in the Nensebo Woreda of West Arsi sit between 2,100 and 2,400 meters — the upper edge of where coffee can grow. That extreme altitude, ancient forest canopy and iron-rich red soil produce cups with the distinctive jasmine-and-bergamot character the region is famous for.",
      },
      { type: "heading", text: "A culture built around coffee" },
      {
        type: "paragraph",
        text: "In Ethiopia coffee is not just a crop; it is a ceremony. The traditional buna ceremony — green beans roasted over coals, ground by hand, brewed in a jebena and served in three rounds — shapes how families harvest, sort and dry their coffee with genuine pride.",
      },
      {
        type: "quote",
        text: "Every bean carries the warmth of our sun and the soul of our highlands.",
        cite: "Tade Coffee field notes, Nensebo",
      },
      {
        type: "paragraph",
        text: "Want to taste the difference? Explore the washing and drying stations behind each lot on our Our Sites page, or contact us for current crop availability.",
      },
    ],
  },
  {
    slug: "washed-vs-natural-vs-anaerobic-coffee-processing",
    title: "Washed vs Natural vs Anaerobic: A Guide to Coffee Processing",
    excerpt:
      "The same cherry can become three completely different coffees. How washing, sun-drying and anaerobic fermentation shape flavor — and how we choose the right process for each lot.",
    date: "2025-03-18",
    author: "Tade Coffee",
    tags: ["Processing", "Quality", "Guide"],
    image: "/images/onsite-1.jpg",
    imageAlt: "Coffee processing station with washing channels in West Arsi, Ethiopia",
    readTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "Processing is where a coffee's personality is decided. Once the cherry is picked, the producer chooses how to remove the fruit from the seed — and that single decision can swing the cup from crystal-clean to wildly fruity.",
      },
      { type: "heading", text: "Washed (wet process)" },
      {
        type: "paragraph",
        text: "The cherry skin and mucilage are removed in washing channels before the beans dry on raised beds. Washing highlights the intrinsic character of the bean: clean acidity, tea-like body and transparent fruit notes. It is the most technically demanding process — fermentation, channel management and drying must be controlled daily.",
      },
      { type: "heading", text: "Natural (sun-dried)" },
      {
        type: "paragraph",
        text: "The whole cherry dries intact in the sun for several weeks, letting sugars and fruit juices ferment inside the fruit. Naturals are syrupy and explosive — blueberry, strawberry, tropical fruit — but unforgiving: a single over-ripe cherry can taint an entire lot. We hand-sort cherries before drying and turn the beds continuously.",
      },
      { type: "heading", text: "Anaerobic fermentation" },
      {
        type: "paragraph",
        text: "Cherries ferment in sealed tanks without oxygen, often for days, before drying. The result is unlike anything traditional processing produces: heavy, winey, sometimes spice-and-cacao flavors with a creamy texture. Anaerobic lots are small, experimental and highly sought after by roasters chasing competition coffee.",
      },
      { type: "heading", text: "How we choose a process" },
      {
        type: "list",
        items: [
          "Density and ripeness of the harvest — uniform, dense lots suit washing",
          "Weather during harvest — stable dry windows favor naturals",
          "Cupping results from small experimental micro-lots before scaling up",
          "Roaster demand — competition lots often warrant anaerobic trials",
        ],
      },
      {
        type: "paragraph",
        text: "You can filter every site we operate by its processing method — washed, natural or anaerobic — on the Our Sites page.",
      },
    ],
  },
  {
    slug: "farm-to-cup-traceability-in-ethiopian-coffee",
    title: "Farm to Cup: Why Traceability Matters in Ethiopian Coffee",
    excerpt:
      "Which site, which altitude, which harvest window — knowing exactly where your coffee comes from changes everything for roasters, importers and the farmers themselves.",
    date: "2025-04-05",
    author: "Tade Coffee",
    tags: ["Traceability", "Sustainability", "Export"],
    image: "/images/tadepic7.jpg",
    imageAlt: "Coffee farmer inspecting ripe cherries at a highland farm in Oromia",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "For most of coffee's history, a bag of Ethiopian green coffee carried little more information than a region name. Traceability flips that: it answers which washing station processed the lot, at what altitude it grew, who harvested it and when.",
      },
      { type: "heading", text: "What traceability means in practice" },
      {
        type: "list",
        items: [
          "Lot-level records: site, variety, altitude, process and harvest window",
          "Segregated storage — lots are never blended across sites",
          "Documented drying times and moisture readings per bed",
          "Direct relationships with the farmers delivering each cherry",
        ],
      },
      { type: "heading", text: "Why roasters care" },
      {
        type: "paragraph",
        text: "Traceable coffee is verifiable coffee. Roasters can reproduce a profile year after year, tell the true story of a coffee on the bag, and stand behind sustainability claims with evidence rather than marketing. For importers, clean documentation shortens every step from ECX warehouse to destination port.",
      },
      { type: "heading", text: "Why farmers care even more" },
      {
        type: "paragraph",
        text: "When a roaster knows the name behind a lot, quality pays better. Premiums flow to the specific site and community that produced the cup, creating a direct incentive for careful picking and meticulous drying.",
      },
      {
        type: "quote",
        text: "Traceability is not paperwork — it is the bridge between a hillside in Nensebo and a café in your city.",
      },
      {
        type: "paragraph",
        text: "Every site in our portfolio publishes its origin data — altitude, variety, process and harvest period. Start with Our Sites, or reach out via the contact page for detailed lot sheets for the current crop.",
      },
    ],
  },
];
