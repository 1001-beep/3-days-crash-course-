export type Title = {
  slug: string;
  name: string;
  summary: string;
  content: string | null; // markdown; null = not delivered yet
};

export type Course = {
  slug: string;
  name: string;
  titles: Title[];
};

export type Night = {
  slug: string;
  label: string; // e.g. "Night 1"
  theme: string; // e.g. "Foundations"
  dateLabel: string;
  courses: Course[];
};

const PLACEHOLDER = null;

export const curriculum: Night[] = [
  {
    slug: "night-1",
    label: "Night 1",
    theme: "Foundations",
    dateLabel: "August 7, 2026",
    courses: [
      {
        slug: "design-foundations",
        name: "Design Foundations",
        titles: [
          {
            slug: "introduction-to-graphic-design",
            name: "Introduction to Graphic Design",
            summary: "What graphic design is, why it exists, and the branches of the field.",
            content: `## What is Graphic Design?

Graphic design is the art and science of communicating ideas visually. Instead of using only words, designers use images, shapes, colors, typography, icons, and space to send a message.

Imagine someone wants to sell a new shoe. Without design, they might simply write "Buy our new shoes." With graphic design, they combine attractive photos, bold headlines, brand colors, and an organized layout. The result grabs attention and convinces people to buy.

## The Purpose of Graphic Design

Graphic design exists to solve communication problems. A designer asks: What message should people understand? Who is the audience? What feeling should they have? What action should they take?

- **Church flyer** — Invite people to church
- **Restaurant menu** — Help customers choose food
- **Business logo** — Build brand identity
- **Social media flyer** — Grab attention quickly
- **Billboard** — Deliver one message in seconds

A beautiful design that doesn't communicate the message has failed.

## Types of Graphic Design

**1. Branding** — Logos, brand colors, business cards, letterheads. Think of Coca-Cola: even before reading the name, you recognize the red color and script font.

**2. Advertising Design** — Facebook ads, Instagram flyers, posters, billboards. Goal: make people buy something.

**3. Social Media Design** — Graphics for Instagram, Facebook, WhatsApp, LinkedIn. Usually simple, bold and eye-catching.

**4. Print Design** — Books, magazines, brochures, flyers, packaging.

**5. UI Design** — Designing apps and websites. The buttons inside WhatsApp or Instagram were designed by UI designers.

**6. Motion Graphics** — Animated logos, video intros, YouTube animations.

## The Design Process

Professional designers rarely start by opening software. They usually follow these steps:

1. **Understand the problem** — e.g. a bakery wants a flyer: who are the customers, what products, what's the goal?
2. **Research** — competitors, colors, trends, inspiration
3. **Sketch ideas** — rough ideas on paper
4. **Create digitally** — PixelLab, Photoshop, Illustrator, Figma
5. **Review** — is the text readable? Is the layout balanced? Does it communicate?
6. **Deliver** — export for print, social media, or website

## Skills Every Designer Needs

Creativity, observation, communication, color understanding, typography, layout, problem-solving, patience. Software is just one tool — a person who understands design principles can often create better work in PixelLab than someone using expensive software without those principles.

## Common Beginner Mistakes

- Using too many fonts
- Using too many colors
- Crowding everything together
- Stretching images
- Copying designs without understanding them
- Ignoring alignment

## Design Vocabulary

- **Layout** — How elements are arranged on the page
- **Composition** — The overall organization of the design
- **Hierarchy** — Showing what should be noticed first, second, and third
- **Whitespace** — Empty space that gives a design room to breathe
- **Contrast** — Differences (size, color, shape) that create emphasis
- **Alignment** — Lining up elements neatly
- **Brand** — The identity and personality of a business`,
          },
          {
            slug: "design-principles",
            name: "Design Principles",
            summary: "Balance, contrast, alignment, repetition, proximity, hierarchy, emphasis, white space, unity.",
            content: `You can learn Photoshop, PixelLab, Illustrator, or Canva, but if you don't understand design principles, your work will still look unprofessional. Think of design principles as the rules that make a design look organized, attractive, and easy to understand — the foundation before you decorate the house.

## 1. Balance

Balance is the equal distribution of visual weight in a design. Large, dark, bold, or colorful elements feel "heavier" than small or light ones. If all the heavy elements sit on one side, the design feels unstable.

**Symmetrical balance** — both sides almost identical (e.g. wedding invitations). Feels formal, stable, elegant.

**Asymmetrical balance** — sides are different but still feel balanced (e.g. a large photo on the left balanced by several smaller text blocks on the right). Feels energetic, modern, creative.

*Exercise:* Create two flyers — one with everything centered, another with the title on one side and the image on the opposite side. Notice how each feels different.

## 2. Contrast

Contrast means making elements different so they stand out — using color, size, shape, font weight, or brightness. Bad contrast: tiny light-gray text on white. Good contrast: white text on a dark blue background.

## 3. Alignment

Alignment means arranging elements so they line up neatly — nothing should look randomly placed.

- **Left alignment** — most common, easiest to read
- **Center alignment** — invitations, quotes, certificates
- **Right alignment** — less common, artistic layouts

Beginner mistake: putting every object in a different position without any invisible guideline.

## 4. Repetition

Repetition means using the same colors, fonts, shapes, icons, and line styles throughout a design. If your flyer uses blue headings, keep using blue for every heading — don't suddenly switch to green or red.

## 5. Proximity

Proximity means placing related items close together — people naturally assume nearby items belong together. Group your event title, date, venue, and time together rather than scattering them across the page.

## 6. Hierarchy

Hierarchy tells the viewer what to look at first, second, and third. Create it by increasing size, using bold fonts, adding color, leaving more space around important items, or using contrast.

## 7. Emphasis

Emphasis means making one element the main focus. Ask: "What is the most important message?" — SALE, FREE, GRAND OPENING, REGISTER NOW. Make that element larger, bolder, a different color, or surrounded by white space.

## 8. White Space

Also called negative space — the empty area around objects (not necessarily white). Many beginners think every corner should be filled; professional designers know empty space helps the eye rest. Benefits: cleaner designs, better readability, more professional appearance.

## 9. Unity

Unity means every element looks like it belongs together — like wearing a business suit with football boots, a cowboy hat, and swimming goggles: each item is fine alone, but together they clash. Use one or two fonts, a limited color palette, similar icon styles, and consistent spacing.

## Real-Life Example: Church Program Flyer

- **Balance** — distribute text and images evenly
- **Contrast** — white text on a dark background for readability
- **Alignment** — keep all text left-aligned or centered consistently
- **Repetition** — same font and color style throughout
- **Proximity** — keep the event date, time, and venue together
- **Hierarchy** — make the event title the largest text
- **Emphasis** — highlight "Free Entry" or the key theme
- **White Space** — leave breathing room between sections
- **Unity** — consistent color palette and design style

## Practical Assignment

Open PixelLab and design a simple event flyer with a title, subtitle, one image, date, time, venue, and contact number. Before exporting, check it against all nine principles above.`,
          },
          {
            slug: "colour-theory",
            name: "Colour Theory",
            summary: "The colour wheel, hue/saturation/value, warm vs cool, harmony, and colour psychology.",
            content: `Colour is one of the most powerful tools in graphic design. It influences emotions, attracts attention, strengthens branding, and guides the viewer's eye.

## The Colour Wheel

- **Primary colours** — Red, Blue, Yellow (cannot be mixed from other colours)
- **Secondary colours** — Orange (Red+Yellow), Green (Yellow+Blue), Purple (Blue+Red)
- **Tertiary colours** — Blue-Green, Red-Orange, Yellow-Green, Blue-Purple, Yellow-Orange, Red-Purple

## Colour Properties

- **Hue** — the actual colour itself
- **Saturation** — intensity/richness (high = bright and vivid, low = dull or muted)
- **Value (brightness)** — how light or dark; adding white creates a tint, adding black creates a shade

## Warm vs Cool Colours

**Warm** (red, orange, yellow) — energy, excitement, passion, urgency. Common for sales, promotions, food brands.

**Cool** (blue, green, purple) — trust, calmness, professionalism, relaxation. Common for banks, hospitals, technology.

## Colour Harmony

- **Monochromatic** — shades/tints of one colour; clean and elegant
- **Analogous** — three colours next to each other on the wheel; natural and harmonious
- **Complementary** — colours opposite each other (blue/orange, red/green, yellow/purple); strong contrast
- **Triadic** — three colours equally spaced (red, yellow, blue); colourful and balanced

## Colour Psychology

- **Red** — passion, love, danger, energy, power
- **Blue** — trust, peace, intelligence, stability, security
- **Green** — nature, growth, health, freshness, wealth
- **Yellow** — happiness, optimism, creativity, warmth
- **Orange** — confidence, fun, enthusiasm, friendliness
- **Purple** — luxury, royalty, creativity, wisdom
- **Black** — elegance, authority, sophistication, power
- **White** — simplicity, purity, cleanliness, peace
- **Gray** — neutrality, balance, professionalism, maturity

## Colour in Branding

Banks often use blue (trust). Restaurants use red and orange (stimulate appetite, attract attention). Environmental organizations use green (nature, sustainability). Luxury brands use black and gold (elegance, exclusivity).

## Choosing Colours: The 60-30-10 Rule

60% primary colour, 30% secondary colour, 10% accent colour — this creates visual balance without overwhelming the viewer. Also consider the purpose of the design, the target audience, the emotions you want to evoke, and readability.

## Common Colour Mistakes

Too many colours in one design, poor text contrast, ignoring colour psychology, clashing combinations, overly saturated colours everywhere, inconsistent colour usage across a brand.

## Key Takeaways

Colour communicates emotion and meaning. The colour wheel is the foundation of colour theory. Warm colours excite, cool colours calm. Colour harmony creates attractive combinations, and colour psychology shapes how a design is perceived.`,
          },
          {
            slug: "typography",
            name: "Typography",
            summary: "Typefaces vs fonts, categories, weight, size, alignment, spacing, hierarchy, and pairing.",
            content: `Typography is the art and technique of arranging text so it is readable, visually appealing, and communicates the right message. Good typography makes information easy to understand; poor typography confuses readers and weakens the design.

## Typeface vs Font

**Typeface** is a family of letter designs (Arial, Times New Roman, Helvetica, Poppins). A **font** is a specific style within a typeface (Poppins Bold, Poppins Regular, Poppins Italic).

## Categories of Typefaces

**Serif** — small decorative strokes at the ends of letters. Traditional, formal, elegant. Used for books, newspapers, luxury brands, legal documents (Times New Roman, Garamond, Georgia).

**Sans Serif** — no decorative strokes. Clean, modern, simple, professional. Used for websites, apps, social media, corporate branding (Arial, Helvetica, Poppins, Montserrat).

**Script** — imitates handwriting. Elegant, personal, decorative. Used for wedding invitations, beauty brands, logos. Avoid for long paragraphs.

**Display (Decorative)** — designed to grab attention. Unique, creative, bold. Used for posters, headlines, logos — not body text.

## Font Weight & Size

Weights range from Thin to Black; heavier weights attract more attention. Typical size hierarchy: Heading (largest) → Subheading → Body text → Caption/footer (smallest).

## Text Alignment

- **Left** — most common, easiest to read- **Center** — invitations, certificates, quotes (avoid for long paragraphs)
- **Right** — used sparingly, artistic layouts
- **Justified** — even on both edges; common in newspapers, can create uneven spacing

## Spacing

**Tracking** — space between all letters in a word/sentence. Tight = compact; loose = open. Too much reduces readability.

**Kerning** — space between individual letter pairs; fine-tuned in logos and headlines for balance.

**Leading** — vertical space between lines. Too little feels cramped; too much disconnects related lines.

## Typography Hierarchy

Main heading → Subheading → Body text → Supporting details → Contact information. The most important information should always stand out first.

## Font Pairing

Use no more than two or three font families. Pair a decorative heading font with a simple body font, and stay consistent throughout. Poor combinations make a design look unprofessional.

## Readability vs Legibility

**Legibility** — how easily individual letters can be recognized. **Readability** — how easily a block of text can be read and understood. A font can be legible but still unreadable if spacing, size, or alignment is poor.

## Typography in Branding

Bold sans-serif = confidence and modernity. Elegant serif = tradition and luxury. Script = personal or premium feel. Consistent typography strengthens brand recognition.

## Common Typography Mistakes

Using too many fonts, poor contrast between text and background, inconsistent sizing, ignoring hierarchy, cramped or excessive line spacing.`,
          },
          {
            slug: "getting-started-in-pixellab",
            name: "Getting Started in Pixel Lab",
            summary: "A first walkthrough of the free Pixel Lab app — the tool used for every exercise in the crash course.",
            content: `PixelLab is a mobile graphic design application that lets you create professional flyers, logos, social media posts, banners, thumbnails, and promotional graphics directly from a smartphone. It combines simplicity with powerful design features, making it suitable for both beginners and experienced designers.

## Understanding the Workspace

- **Canvas** — the workspace where your design is created
- **Toolbar** — options to add text, images, shapes, and export your design
- **Properties Panel** — editing options for the selected object: font, color, shadow, stroke, opacity, position
- **Layers** — every object exists on its own layer, so you can edit each one independently

## Essential Tools

Text Tool, Shape Tool, Image Import Tool, Background Tool, Color Picker, Gradient Tool, Shadow Tool, Stroke Tool, Duplicate Tool, Align Tool, and Lock/Hide Layer options.

## A Good PixelLab Workflow

1. Create the correct canvas size
2. Add the background
3. Import images
4. Arrange the layout
5. Add text
6. Apply colors and effects
7. Align every element
8. Export in the proper format

## Common Mistakes

- Using low-quality images
- Applying excessive shadows and effects
- Ignoring alignment
- Using too many fonts
- Designing on the wrong canvas size`,
          },
        ],
      },
    ],
  },
  {
    slug: "night-2",
    label: "Night 2",
    theme: "Designing with Purpose",
    dateLabel: "August 8, 2026",
    courses: [
      {
        slug: "from-elements-to-layout",
        name: "From Elements to Layout",
        titles: [
          {
            slug: "working-with-images",
            name: "Working with Images",
            summary: "Choosing, cropping, scaling, and removing backgrounds from images the right way.",
            content: `Images are among the most powerful elements in graphic design. They capture attention, communicate ideas instantly, and create emotional connections — but a poorly chosen or poorly edited image can reduce the impact of an otherwise well-designed project.

## The Role of Images

Images capture attention, communicate ideas quickly, support written information, create emotional responses, strengthen branding, and improve visual appeal. Choose images that support the message rather than simply filling empty space.

## Types of Images

- **Photographs** — real-life images; best for ads, event flyers, product promotions
- **Illustrations** — drawn/digital artwork; best for children's content, education, creative branding
- **Icons** — simple symbols (phone, email, location, cart) that simplify communication
- **Vector graphics** — created from mathematical paths; resize without losing quality, perfect for logos

## Choosing the Right Image

Consider **relevance** (does it relate to the message?), **quality** (always high-resolution), **composition** (good lighting, clear subject, balanced framing), and **emotion** (does it evoke the right feeling?).

## Resolution & Aspect Ratio

High-resolution images hold more detail; low-resolution images blur when enlarged. For print, high resolution is essential. Common aspect ratios: 1:1 (square), 4:5 (portrait), 16:9 (landscape), 9:16 (story).

## Cropping & Scaling

Cropping removes unwanted parts to focus on the subject, improve composition, and fit the layout. When scaling, always maintain the original proportions — stretching or compressing distorts the subject.

## Background Removal

Isolating the main subject by removing unwanted surroundings — used for product ads, business flyers, profile images, and composite designs.

- **Automatic AI removal** — fast and beginner-friendly, good for simple images
- **Manual selection** — greater accuracy, cleaner edges, better for difficult subjects

After removing a background, check the edges for jagged lines, leftover fragments, missing hair detail, or rough outlines. Save as **PNG** to preserve transparency.

## Shadows & Blending

Add a drop, soft, or long shadow to help a subject sit naturally in a design — keep it subtle. When blending an image into a design, match the **lighting**, **color**, **scale**, and **perspective** with the background.

## Common Image Formats

- **JPG** — photographs, web images; small size, no transparency
- **PNG** — logos, icons, transparent images; larger file size
- **SVG** — logos, icons, vector graphics; infinitely scalable
- **WebP** — modern web format; high quality, small size, supports transparency

## Copyright & Licensing

Only use images you have permission to use: public domain, Creative Commons, royalty-free, or commercial license. Using copyrighted images without permission can lead to legal consequences.

## Key Takeaways

Images communicate faster than text. High-quality, relevant images strengthen designs. Background removal isolates subjects and improves focus. Proper cropping, scaling, and blending create professional compositions.`,
          },
          {
            slug: "shapes-and-visual-elements",
            name: "Shapes & Visual Elements",
            summary: "Using shapes, lines, and icons as building blocks of a layout.",
            content: `Shapes are fundamental building blocks in graphic design. They help organize layouts, create emphasis, guide the viewer's eye, and strengthen visual communication.

## Types of Shapes

**Geometric shapes** — circle, square, rectangle, triangle, polygon. These communicate stability, professionalism, and structure.

**Organic shapes** — natural, irregular forms inspired by nature. They create a friendly and creative appearance.

**Abstract shapes** — simplified or symbolic forms used to communicate ideas creatively.

## Meaning of Common Shapes

- **Circle** — unity, community, wholeness, protection
- **Square & rectangle** — stability, strength, order, reliability (common in business and corporate design)
- **Triangle** — direction, energy, growth, innovation — its meaning changes depending on orientation

## Lines

Lines direct attention and organize content. Horizontal, vertical, diagonal, and curved lines each create a different emotional effect.

## Icons

Icons communicate ideas quickly without lengthy explanations — phone, email, location, calendar. Keep icon style consistent throughout a design.

## Visual Elements

Color, typography, texture, images, patterns, space, and contrast — every visual element should support the design's objective.

## Design Tips

- Avoid excessive decorative shapes
- Maintain consistent spacing
- Use shapes to improve hierarchy
- Support, don't overpower, the main message`,
          },
          {
            slug: "layout-and-composition",
            name: "Layout & Composition",
            summary: "Arranging elements on the page so the eye knows where to go.",
            content: `Layout is the arrangement of design elements. Composition is how those elements work together to create a visually balanced and effective design.

## Why It Matters

Good layouts improve readability, guide the viewer's eye, create professionalism, and prevent clutter.

## Visual Hierarchy

Arrange information by importance — usually Headline → Image → Supporting Text → Call-to-Action → Contact Information.

## Grid System

Invisible guides that help align elements consistently. Benefits: better organization, equal spacing, cleaner appearance.

## White Space

Empty space around objects. Benefits: improves readability, reduces clutter, creates elegance.

## Balance

**Symmetrical** — equal weight on both sides; formal and stable.

**Asymmetrical** — different elements balanced visually; modern and dynamic.

## Common Mistakes

Random placement, uneven spacing, multiple focal points, overcrowding.`,
          },
          {
            slug: "live-flyer-design-workshop",
            name: "Live Flyer Design Workshop",
            summary: "Designing effective social media and event flyers from headline to call-to-action.",
            content: `Social media flyers are digital graphics designed to communicate information quickly and attract attention on platforms like Instagram, Facebook, WhatsApp, X, LinkedIn, and TikTok. Unlike print, digital flyers compete with thousands of posts for attention — clarity and visual impact are essential.

## Objectives of a Flyer

Every flyer should have **one** clear objective: inform, promote, sell, invite, educate, inspire, or entertain. Trying to hit several unrelated objectives weakens the design.

## Know Your Audience

Identify age group, interests, occupation, location, preferences, and which platform they use most. A flyer for teenagers looks very different from one for business executives.

## The Structure of an Effective Flyer

1. **Headline** — short, bold, clear, attention-grabbing
2. **Supporting information** — date, time, venue, price, benefits — kept concise
3. **Image** — supports the message without distracting
4. **Brand identity** — logo, brand colors, brand fonts
5. **Call-to-Action (CTA)** — "Register Now," "Shop Today," "Send a Message" — clear and easy to find

## Visual Hierarchy

Main headline → main image → supporting information → CTA → contact details → logo. Viewers should understand the message within a few seconds.

## Colour & Typography

Match the brand, create contrast, reflect the intended emotion, and stay readable. Limit the palette to three or four colours. Use one font for headings and one for body text — bold only where emphasis is needed.

## Platform Considerations

- **Instagram Feed** — square/portrait, bold visuals
- **Instagram Stories** — vertical, larger text
- **Facebook** — must stay clear on desktop and mobile
- **WhatsApp** — must stay readable even when compressed
- **LinkedIn** — professional appearance over decoration

Always preview on a mobile screen before publishing — most viewers are on phones.

## Common Design Styles

**Minimalist** (few elements, generous white space), **Modern** (clean type, geometric shapes), **Bold** (large text, strong colour, high contrast), **Luxury** (elegant type, restrained palette), **Corporate** (clarity, trust, brand consistency).

## Common Mistakes

Too much text, poor image quality, weak contrast, inconsistent fonts, cluttered layout, multiple competing focal points, missing CTA, ignoring mobile readability.

## Workshop ExerciseIn PixelLab, design one flyer end-to-end: headline → image → supporting info → brand colours/logo → CTA. Check it against the visual hierarchy list above before sharing it in the group.`,
          },
          {
            slug: "group-design-review",
            name: "Group Design Review",
            summary: "Reviewing tonight's flyers together and applying feedback.",
            content: `Professional designers constantly review and critique work to improve quality. A design review evaluates whether a design successfully communicates its intended message.

## What to Review

- **Readability** — can viewers read the text quickly?
- **Hierarchy** — is the most important information immediately noticeable?
- **Alignment** — are all objects properly aligned?
- **Color** — do the colors support the message?
- **Typography** — are fonts consistent?
- **Images** — are they high quality and relevant?
- **Spacing** — is there enough breathing room?
- **Branding** — does the design match the brand identity?

## Receiving Feedback

Professional designers listen carefully, avoid taking criticism personally, ask questions, and improve based on feedback.

## Giving Feedback

Critique the design — not the designer. Focus on clarity, functionality, communication, and improvement.`,
          },
        ],
      },
    ],
  },
  {
    slug: "night-3",
    label: "Night 3",
    theme: "Going Professional",
    dateLabel: "August 9, 2026",
    courses: [
      {
        slug: "designer-to-professional",
        name: "Designer to Professional",
        titles: [
          {
            slug: "types-of-graphic-design-work",
            name: "Types of Graphic Design Work",
            summary: "The different career lanes a designer can specialise in.",
            content: `Graphic design consists of many specialties. Here are the main lanes you can grow into.

## Branding Design

Logos, brand identity, business cards, brand guidelines.

## Advertising Design

Flyers, posters, social media ads, billboards.

## Print Design

Books, magazines, packaging, brochures.

## UI Design

Designing interfaces for websites, mobile apps, and software.

## Motion Graphics

Animated graphics used in videos, advertisements, and social media.

## Illustration

Creating custom artwork for books, games, and branding.

## Packaging Design

Designing containers for products — focused on branding, protection, and marketing.

## Environmental Design

Large-scale graphics for physical spaces such as museums, airports, exhibitions, and signage.`,
          },
          {
            slug: "branding-basics",
            name: "Branding Basics",
            summary: "What a brand is, brand identity, logo types, brand colours, voice, and consistency.",
            content: `Branding is more than designing a logo. It's the process of creating a unique identity that distinguishes a business, organization, product, or individual from others. A strong brand builds recognition, trust, loyalty, and emotional connection.

## What is a Brand?

A brand is the overall perception people have about a business — its identity, reputation, personality, and the emotions it evokes. A brand is not what a company says it is; it's what people believe it is based on their experiences.

## Branding

Branding is the process of creating, developing, and maintaining a consistent identity. Effective branding helps businesses stand out, build trust, increase recognition, communicate values, and create loyalty.

## Brand Identity vs Brand Image

**Brand identity** is what a company creates — logo, colours, typography, icons, photography style, layout style. **Brand image** is how the public actually perceives it. A designer controls the identity; customers form the image through experience.

## Brand Personality

Brands are described with human traits: professional, friendly, luxurious, creative, innovative, trustworthy, playful, elegant. Every design decision should support the intended personality — a luxury brand uses elegant type and minimal layouts; a children's brand uses bright colours and playful illustrations.

## Logo Design

A logo's purpose is identification, not explanation. A strong logo is simple, memorable, unique, versatile, timeless, and appropriate.

**Types of logos:**
- **Wordmark** — the company name in distinctive type
- **Lettermark** — initials, for long names
- **Symbol/Icon** — a graphic mark without text
- **Combination mark** — text + symbol together (most versatile)
- **Emblem** — text inside a badge or symbol (schools, teams, government)

## Brand Colours

Consistent colour use builds recognition: blue = trust/professionalism, red = energy/passion, green = nature/growth, yellow = optimism, black = luxury, white = simplicity. Brands should use the same primary colours across all materials.

## Brand Typography & Voice

Establish a primary heading font, a secondary font, and a body font — and keep using them. Visuals should also match the brand's voice: a professional voice uses formal layouts and neutral colours; a friendly voice uses bright colours and rounded fonts; a luxury voice uses minimal layouts and elegant type.

## Brand Consistency & Guidelines

Every customer interaction should reinforce the same identity — logo, colours, fonts, photography, icons, layouts, tone. Brand guidelines are documents that lock in logo usage rules, approved colours, typography, image style, and spacing so every designer represents the brand the same way.

## Rebranding

Updating a brand's identity to modernise its appearance, reach new audiences, change direction, or improve perception — successful rebrands keep the core identity while improving presentation.

## Common Branding Mistakes

Frequently changing logos, inconsistent colours, unnecessary font switching, poor logo scalability, chasing trends instead of the brand's identity, overly complicated logos, ignoring the target audience.

## Key Takeaways

A brand is the overall perception people have of a business. Branding is the ongoing process of creating and maintaining that identity. Consistency in logo, colour, and typography is what builds recognition, trust, and loyalty over time.`,
          },
          {
            slug: "workflow-and-productivity",
            name: "Workflow & Productivity",
            summary: "Organising files, managing time, and working efficiently as a designer.",
            content: `Professional designers work efficiently through organized systems rather than relying solely on creativity.

## Typical Workflow

1. Receive the brief
2. Research
3. Brainstorm
4. Sketch concepts
5. Design
6. Review
7. Revise
8. Deliver

## Time Management

Prioritize tasks, meet deadlines, and avoid rushing projects.

## File Organization

Organize projects into folders that include assets, editable files, exports, fonts, and images.

## Naming Files

Use professional names, e.g. \`Restaurant_Flyer_Final_Print.pdf\`.

## Productivity Tips

- Use templates wisely
- Save frequently
- Create reusable assets
- Backup your work
- Eliminate distractions
- Plan before designing`,
          },
          {
            slug: "working-with-clients",
            name: "Working with Clients",
            summary: "Briefs, revisions, communication, and managing client expectations.",
            content: `Design is both a creative and communication profession. Understanding clients is just as important as understanding software.

## Understanding the Brief

Before designing, ask: What is the objective? Who is the audience? What style is preferred? What information is required? What are the deadlines?

## Communication

Professional designers respond politely, confirm instructions, explain design decisions, and keep clients informed.

## Revisions

Revisions are normal. Approach them professionally — determine what needs changing, why, and whether it improves the design.

## Managing Expectations

Never promise unrealistic delivery times. Set clear timelines and communicate delays early.

## Delivering Projects

Provide the print version, web version, editable files (if agreed), and properly named files.

## Professional Conduct

Always meet deadlines, be respectful, honor agreements, protect client confidentiality, and continue learning.`,
          },
          {
            slug: "building-your-design-career",
            name: "Building Your Design Career",
            summary: "Portfolios, finding clients, and next steps after the crash course.",
            content: `Graphic design is both an artistic profession and a business. Long-term success requires continuous improvement and professional development.

## Build a Portfolio

Include only your best work — branding, flyers, posters, mockups, social media graphics.

## Develop Your Personal Brand

Create a personal logo, consistent colors, a professional social media presence, and a strong portfolio.

## Networking

Build relationships with other designers, businesses, clients, and creative communities. Many opportunities come through referrals.

## Freelancing

Freelancers should learn pricing, invoicing, client communication, contracts, and time management.

## Continuous Learning

Technology and design trends evolve constantly — keep learning new software, design styles, marketing, branding, and business skills.

## Building Reputation

Your reputation is built through quality work, reliability, professional communication, honesty, and consistency. Satisfied clients become repeat clients and recommend your services to others.

## Course Summary

By completing all fifteen lessons, you've gone from design fundamentals — colour, typography, principles — through to the practical and professional side of graphic design: working in PixelLab, building layouts, reviewing work, understanding career paths, managing workflow, working with clients, and building a sustainable design career.`,
          },
        ],
      },
    ],
  },
];

export function getNight(nightSlug: string) {
  return curriculum.find((n) => n.slug === nightSlug);
}

export function getCourse(nightSlug: string, courseSlug: string) {
  const night = getNight(nightSlug);
  return night?.courses.find((c) => c.slug === courseSlug);
}

export function getTitle(nightSlug: string, courseSlug: string, titleSlug: string) {
  const course = getCourse(nightSlug, courseSlug);
  return course?.titles.find((t) => t.slug === titleSlug);
                          }
