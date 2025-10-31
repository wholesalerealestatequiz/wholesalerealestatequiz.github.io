// ============================================
// WHOLESALE REAL ESTATE QUIZ - QUESTIONS DATABASE
// 50+ Original Questions Based on Wholesaling Knowledge
// ============================================

/**
 * Question Structure:
 * - id: unique identifier
 * - question: the question text
 * - context: optional scenario context
 * - options: array of answer choices
 * - correctAnswers: array of correct option indices (supports multi-select)
 * - type: 'single' or 'multiple'
 * - category: knowledge domain
 * - difficulty: 'easy', 'medium', or 'hard'
 * - explanation: why the answer is correct
 * - sourceChapter: reference to book chapter
 */

const questionBank = [
    // ========== MARKET ANALYSIS ==========
    {
        id: 1,
        question: "What is the primary goal when 'gridding' a neighborhood in wholesale real estate?",
        options: [
            "To count how many houses are for sale",
            "To identify high-demand areas where investors are actively buying and renting",
            "To find the cheapest properties available",
            "To locate neighborhoods with the newest homes"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Market Analysis",
        difficulty: "easy",
        explanation: "Gridding helps you systematically analyze neighborhoods to find where investor activity is strongest. This data-driven approach identifies areas with high rental demand and active buying, which are ideal for wholesaling.",
        sourceChapter: "Step One: Analyze Your Market"
    },
    {
        id: 2,
        question: "You're researching a new market. Which online tools would be MOST valuable for verifying investor activity and rental demand?",
        options: [
            "City Data for demographics and Rentometer for rental rates",
            "Zillow for listings and Craigslist for rental activity",
            "Social media groups and local news websites",
            "All of the above provide valuable complementary data"
        ],
        correctAnswers: [3],
        type: "single",
        category: "Market Analysis",
        difficulty: "medium",
        explanation: "Successful market analysis requires multiple data sources. City Data shows demographics, Rentometer validates rents, Zillow reveals listings, and Craigslist shows active rental demand. Combining these tools creates a comprehensive market picture.",
        sourceChapter: "Step One: Analyze Your Market"
    },
    {
        id: 3,
        question: "You discover a neighborhood with many foreclosure listings but very few rental properties advertised. What does this likely indicate?",
        context: "You're evaluating whether to focus your wholesale marketing efforts in this area.",
        options: [
            "It's an excellent wholesale market because properties are distressed",
            "There may be limited investor interest or rental demand in this area",
            "You should immediately buy every foreclosure you can find",
            "The area is oversaturated with wholesalers"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Market Analysis",
        difficulty: "hard",
        explanation: "While distressed properties seem attractive, lack of rental activity suggests weak investor demand. Successful wholesaling requires buyer interest. Always verify that investors actually want properties in an area before heavily marketing there.",
        sourceChapter: "Step One: Analyze Your Market"
    },
    {
        id: 4,
        question: "Why is physically driving through target neighborhoods important even when you have online data?",
        options: [
            "You can identify property conditions and neighborhood characteristics firsthand",
            "You can spot 'For Rent' signs and gauge rental activity",
            "You can observe which properties appear vacant or distressed",
            "You gain local knowledge that gives you credibility with sellers and buyers"
        ],
        correctAnswers: [0, 1, 2, 3],
        type: "multiple",
        category: "Market Analysis",
        difficulty: "medium",
        explanation: "Physical market research provides insights that online data cannot. You see actual conditions, spot opportunities, and develop the local expertise that positions you as a market authority to both sellers and investor-buyers.",
        sourceChapter: "Step One: Analyze Your Market"
    },

    // ========== REALTOR RELATIONSHIPS ==========
    {
        id: 5,
        question: "What type of Realtor is typically BEST suited for building a wholesale partnership?",
        options: [
            "Top-producing agents with established high-end clients",
            "Mid-tier agents who are hungry and willing to work on volume deals",
            "Brand new agents with no experience",
            "Luxury property specialists"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Realtor Relationships",
        difficulty: "easy",
        explanation: "Mid-tier Realtors are often more motivated to collaborate on volume wholesale deals. Top agents may be too busy with high-commission clients, while new agents lack experience. Hungry mid-tier agents appreciate consistent deal flow.",
        sourceChapter: "Step Two: Meet with Realtors"
    },
    {
        id: 6,
        question: "A Realtor asks why they should work with you as a wholesaler. What are the PRIMARY benefits you offer them?",
        options: [
            "Quick closings and consistent transaction volume",
            "Access to investor buyers who need Realtor services for rehabs",
            "REO and bank-owned property opportunities they can help you analyze",
            "Referrals to other investors who might need representation"
        ],
        correctAnswers: [0, 1, 3],
        type: "multiple",
        category: "Realtor Relationships",
        difficulty: "medium",
        explanation: "Wholesalers provide Realtors with steady deal flow, fast closings, investor connections, and referral opportunities. This creates a mutually beneficial relationship where both parties profit from consistent collaboration.",
        sourceChapter: "Step Two: Meet with Realtors"
    },
    {
        id: 7,
        question: "You've worked with a Realtor on three deals, but none have closed yet due to buyers backing out. How should you handle this situation?",
        context: "The Realtor is becoming frustrated with wasted time on deals that don't close.",
        options: [
            "Stop working with this Realtor and find someone else",
            "Improve your buyer qualification process and communicate progress transparently",
            "Blame the buyers and tell the Realtor it's not your fault",
            "Offer the Realtor money upfront to keep them interested"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Realtor Relationships",
        difficulty: "hard",
        explanation: "Trust is built through consistent closings. When deals fall through, strengthen your buyer vetting process and maintain transparent communication. Showing improvement and reliability will rebuild the Realtor's confidence in working with you.",
        sourceChapter: "Step Two: Meet with Realtors"
    },
    {
        id: 8,
        question: "What should you look for when evaluating whether a Realtor understands real estate investing?",
        options: [
            "They can quickly provide accurate comparable sales data",
            "They understand concepts like ARV, ROI, and cash-on-cash return",
            "They have investor clients themselves",
            "They're familiar with wholesaling and assignment contracts"
        ],
        correctAnswers: [0, 1, 2, 3],
        type: "multiple",
        category: "Realtor Relationships",
        difficulty: "medium",
        explanation: "Investment-savvy Realtors speak the language of investors, provide relevant comps efficiently, have their own investor clientele, and understand wholesale transactions. These qualities make them valuable long-term partners.",
        sourceChapter: "Step Two: Meet with Realtors"
    },

    // ========== CONTRACTOR PARTNERSHIPS ==========
    {
        id: 9,
        question: "As a wholesaler, why is it essential to understand local rehab costs even though you won't be doing the renovations yourself?",
        options: [
            "To accurately estimate repair costs when making offers on properties",
            "To avoid overpaying based on inflated repair cost assumptions",
            "To provide credible information to your investor buyers",
            "To ensure your deals actually make financial sense for buyers"
        ],
        correctAnswers: [0, 1, 2, 3],
        type: "multiple",
        category: "Contractor Partnerships",
        difficulty: "easy",
        explanation: "Understanding rehab costs is fundamental to wholesaling success. It allows you to make competitive offers, avoid underestimating value, provide trustworthy data to buyers, and ensure deals are actually profitable for your investors.",
        sourceChapter: "Step Three: Meet with General Contractors"
    },
    {
        id: 10,
        question: "You receive a rehab estimate of $80,000 for a property, but you suspect it's inflated. What should you do?",
        options: [
            "Use the $80,000 figure to be safe and lower your offer accordingly",
            "Get estimates from multiple contractors and build your own local pricing checklist",
            "Ignore the estimate and guess based on your intuition",
            "Add 20% to the estimate to account for unexpected costs"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Contractor Partnerships",
        difficulty: "medium",
        explanation: "Building relationships with multiple contractors and creating a local repair cost database protects you from inflated estimates. Overly conservative repair estimates force you to make unnecessarily low offers that won't be accepted.",
        sourceChapter: "Step Three: Meet with General Contractors"
    },
    {
        id: 11,
        question: "A contractor offers to give you wholesale estimates in exchange for referring your investor buyers to use their services. Is this a good arrangement?",
        context: "The contractor is licensed, reputable, and offers competitive pricing.",
        options: [
            "Yes, this creates a win-win relationship where both parties benefit from deal flow",
            "No, you should never mix contractor relationships with buyer referrals",
            "Only if the contractor pays you a commission for each referral",
            "Only if you mark up their estimates to make extra profit"
        ],
        correctAnswers: [0],
        type: "single",
        category: "Contractor Partnerships",
        difficulty: "medium",
        explanation: "This is a mutually beneficial arrangement common in wholesaling. Contractors get consistent work from your investor buyers, while you receive reliable estimates. This strengthens your business ecosystem without requiring upfront payment.",
        sourceChapter: "Step Three: Meet with General Contractors"
    },
    {
        id: 12,
        question: "Which of the following are important items to include in your local rehab pricing checklist?",
        options: [
            "Roof replacement costs per square foot",
            "HVAC system replacement costs",
            "Foundation repair costs",
            "Kitchen and bathroom renovation costs",
            "All of the above"
        ],
        correctAnswers: [4],
        type: "single",
        category: "Contractor Partnerships",
        difficulty: "easy",
        explanation: "A comprehensive rehab checklist includes all major systems and renovation areas. This allows you to quickly estimate repair costs on properties and make informed offer decisions without waiting for contractor inspections.",
        sourceChapter: "Step Three: Meet with General Contractors"
    },

    // ========== SELLER LEAD GENERATION ==========
    {
        id: 13,
        question: "What is the purpose of using a memorable vanity phone number (like 1-800-SELL-FAST) in your marketing?",
        options: [
            "It looks more professional than a regular number",
            "It's easier for motivated sellers to remember and recall your service",
            "It helps build brand identity and recognition in your market",
            "It makes your marketing more expensive and premium-looking"
        ],
        correctAnswers: [1, 2],
        type: "multiple",
        category: "Seller Lead Generation",
        difficulty: "easy",
        explanation: "Vanity numbers are memorable and reinforce your brand. When sellers see your marketing multiple times and need to sell quickly, an easy-to-remember number increases the likelihood they'll contact you instead of competitors.",
        sourceChapter: "Step Four: Marketing Plan for Lead Generation"
    },
    {
        id: 14,
        question: "You have a $2,000 monthly marketing budget for finding motivated sellers. How should you allocate it for maximum effectiveness?",
        options: [
            "Spend it all on one marketing channel to dominate that space",
            "Diversify across multiple channels: direct mail, online ads, bandit signs, and guerrilla marketing",
            "Save it until you have $10,000 for a major campaign",
            "Spend it all on Facebook ads since everyone uses social media"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Seller Lead Generation",
        difficulty: "medium",
        explanation: "Diversified marketing reaches different types of motivated sellers through various touchpoints. Some sellers respond to direct mail, others to signs or online ads. Testing multiple channels helps you find what works best in your market.",
        sourceChapter: "Step Four: Marketing Plan for Lead Generation"
    },
    {
        id: 15,
        question: "Your direct mail campaign targets homeowners in foreclosure. What message would be MOST effective?",
        context: "You want to position yourself as a problem-solver, not a predatory investor.",
        options: [
            "\"We buy houses for cash - any condition!\"",
            "\"Facing foreclosure? We can help you avoid it and move forward with dignity\"",
            "\"Sell to us now or lose everything in foreclosure!\"",
            "\"We'll give you the highest price for your home!\""
        ],
        correctAnswers: [1],
        type: "single",
        category: "Seller Lead Generation",
        difficulty: "medium",
        explanation: "Empathetic messaging that addresses specific pain points (foreclosure) while offering a dignified solution resonates with motivated sellers. Aggressive or misleading messages damage your reputation and reduce response rates.",
        sourceChapter: "Step Four: Marketing Plan for Lead Generation"
    },
    {
        id: 16,
        question: "Which of these are legitimate guerrilla marketing tactics for finding motivated sellers?",
        options: [
            "Networking at local coffee shops and community events",
            "Building relationships with probate attorneys and divorce lawyers",
            "Partnering with property managers who hear about problem landlords",
            "Hacking into public records databases to find distressed owners",
            "Attending estate sales and talking to family members"
        ],
        correctAnswers: [0, 1, 2, 4],
        type: "multiple",
        category: "Seller Lead Generation",
        difficulty: "hard",
        explanation: "Creative networking and relationship-building are powerful guerrilla tactics. Illegal activities like hacking are never acceptable. Building authentic connections with professionals and community members creates consistent referral sources.",
        sourceChapter: "Step Four: Marketing Plan for Lead Generation"
    },
    {
        id: 17,
        question: "After launching your marketing campaign, how long should you typically wait before evaluating its effectiveness?",
        options: [
            "1-2 days to see immediate results",
            "4-6 weeks to allow for response time and multiple touchpoints",
            "6 months to gather long-term data",
            "You should see results immediately or change tactics"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Seller Lead Generation",
        difficulty: "medium",
        explanation: "Marketing campaigns need time to generate responses. Sellers often see your message multiple times before acting. Four to six weeks allows enough time for initial responses while not wasting money on ineffective campaigns.",
        sourceChapter: "Step Four: Marketing Plan for Lead Generation"
    },

    // ========== BUYER MARKETING & LIST BUILDING ==========
    {
        id: 18,
        question: "When building your buyers list, what critical information should you gather from each investor?",
        options: [
            "Preferred zip codes and neighborhoods they invest in",
            "Maximum purchase price and typical cash flow requirements",
            "Types of properties they prefer (single-family, multi-unit, etc.)",
            "Their credit score and personal financial details"
        ],
        correctAnswers: [0, 1, 2],
        type: "multiple",
        category: "Buyer Marketing & List Building",
        difficulty: "easy",
        explanation: "Understanding buyers' investment criteria helps you match properties efficiently. You need location preferences, price ranges, and property types. Personal financial details are intrusive and unnecessary for wholesale transactions.",
        sourceChapter: "Step Five: Marketing Plan for Investors"
    },
    {
        id: 19,
        question: "You're at a local REIA meeting with 50 investors. What's the BEST strategy for building relationships with potential buyers?",
        context: "This is your first time attending this particular group.",
        options: [
            "Give a presentation about your wholesale deals to the entire group",
            "Sit in the back and collect business cards without talking to anyone",
            "Introduce yourself individually, ask about their investment goals, and follow up afterward",
            "Hand out flyers about your properties and leave early"
        ],
        correctAnswers: [2],
        type: "single",
        category: "Buyer Marketing & List Building",
        difficulty: "medium",
        explanation: "Personal connections at networking events are invaluable. Taking time to understand each investor's needs builds trust and positions you as a resource. Genuine relationship-building outperforms impersonal mass marketing.",
        sourceChapter: "Step Five: Marketing Plan for Investors"
    },
    {
        id: 20,
        question: "A buyer who purchased three properties from you asks if you know any other wholesalers with deals. How should you respond?",
        options: [
            "Never refer them to competitors - keep them exclusively for yourself",
            "Refer them to reputable wholesalers, as goodwill often generates reciprocal referrals",
            "Charge the buyer a finder's fee for the referral",
            "Tell them you're the only wholesaler they need"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Buyer Marketing & List Building",
        difficulty: "hard",
        explanation: "Referring buyers to other wholesalers when you can't serve them builds trust and community goodwill. These wholesalers often reciprocate with referrals, and buyers appreciate your helpfulness, strengthening long-term relationships.",
        sourceChapter: "Step Five: Marketing Plan for Investors"
    },
    {
        id: 21,
        question: "What are effective channels for marketing wholesale properties to your buyers list?",
        options: [
            "Email broadcasts with property details and photos",
            "Text messages for time-sensitive deals",
            "Private Facebook groups or online investor communities",
            "Personal phone calls for your best buyers",
            "All of the above depending on buyer preferences"
        ],
        correctAnswers: [4],
        type: "single",
        category: "Buyer Marketing & List Building",
        difficulty: "easy",
        explanation: "Different buyers prefer different communication methods. Using multiple channels ensures your deals reach buyers effectively. Top buyers may get calls, while broader lists receive emails or texts based on their preferences.",
        sourceChapter: "Step Five: Marketing Plan for Investors"
    },

    // ========== LEAD MANAGEMENT & AUTOMATION ==========
    {
        id: 22,
        question: "As your wholesale business grows and lead volume increases, what is the PRIMARY benefit of implementing a CRM system?",
        options: [
            "It makes your business look more professional to sellers",
            "It centralizes contact data and automates follow-up communications",
            "It's required by law for wholesale businesses",
            "It eliminates the need for personal phone conversations"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Lead Management & Automation",
        difficulty: "easy",
        explanation: "CRM systems are essential for scaling. They organize contacts, track interactions, and automate follow-ups so no leads fall through the cracks. This efficiency allows you to manage higher deal volume without missing opportunities.",
        sourceChapter: "Step Six: Develop a Lead Management System"
    },
    {
        id: 23,
        question: "You receive 50 seller leads per week. Without a system, you're losing track of follow-ups and missing deals. What should you prioritize implementing?",
        options: [
            "Hire an assistant to manually track everything in spreadsheets",
            "Implement a CRM with automated email sequences and task reminders",
            "Reduce your marketing to generate fewer leads",
            "Only focus on the leads that seem most motivated"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Lead Management & Automation",
        difficulty: "medium",
        explanation: "Technology scales better than manual processes. A CRM automates follow-ups, tracks lead status, and ensures consistent communication. This allows you to handle high lead volume while maintaining quality engagement with each prospect.",
        sourceChapter: "Step Six: Develop a Lead Management System"
    },
    {
        id: 24,
        question: "What are the key features your lead management system should have for effective wholesale operations?",
        options: [
            "Mobile access to manage leads and contacts on the go",
            "Automated email and text message sequences for lead nurturing",
            "Integration with your marketing platforms to capture leads automatically",
            "Reporting and analytics to track conversion rates and deal pipeline"
        ],
        correctAnswers: [0, 1, 2, 3],
        type: "multiple",
        category: "Lead Management & Automation",
        difficulty: "medium",
        explanation: "Comprehensive lead management requires mobile accessibility, automation, integration, and analytics. These features allow you to manage your entire wholesale pipeline efficiently from anywhere while tracking what's working.",
        sourceChapter: "Step Six: Develop a Lead Management System"
    },
    {
        id: 25,
        question: "A seller called about your marketing but wasn't ready to sell immediately. How should your CRM help you nurture this lead?",
        options: [
            "Delete the lead since they're not motivated right now",
            "Set up automated follow-up emails every 2-3 weeks to stay top-of-mind",
            "Call them every day until they agree to sell",
            "Wait for them to call you back when they're ready"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Lead Management & Automation",
        difficulty: "medium",
        explanation: "Many sellers aren't immediately ready but may sell later. Automated nurturing sequences keep you top-of-mind without manual effort. When their situation changes and they're ready to sell, you'll be the first person they think of.",
        sourceChapter: "Step Six: Develop a Lead Management System"
    },

    // ========== NETWORKING & REIA ==========
    {
        id: 26,
        question: "What is the PRIMARY value of joining and actively participating in your local Real Estate Investor Association (REIA)?",
        options: [
            "You can advertise your wholesale deals at every meeting",
            "You build relationships with investors, service providers, and potential partners",
            "It looks good on your business card",
            "You get discounts on real estate software"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Networking & REIA",
        difficulty: "easy",
        explanation: "REIAs are networking goldmines. You meet investor buyers, find service providers like contractors and lenders, learn from experienced members, and build credibility in your local investing community. Relationships drive wholesale success.",
        sourceChapter: "Step Seven: Join Your Local REIA"
    },
    {
        id: 27,
        question: "At your first REIA meeting, you meet a private lender, two contractors, and five investor buyers. How should you maximize this opportunity?",
        options: [
            "Pitch your current wholesale deals to everyone immediately",
            "Collect contact information and schedule follow-up conversations to learn their needs",
            "Focus only on the investor buyers since they buy properties",
            "Don't bother following up - just attend next month's meeting"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Networking & REIA",
        difficulty: "medium",
        explanation: "Effective networking is about building relationships, not immediate transactions. Following up to understand each person's needs creates lasting partnerships. Lenders and contractors become part of your investor ecosystem, adding value beyond just buying deals.",
        sourceChapter: "Step Seven: Join Your Local REIA"
    },
    {
        id: 28,
        question: "There is no active REIA in your area. According to wholesaling best practices, what should you consider doing?",
        options: [
            "Move to a city with an established REIA",
            "Skip networking altogether and focus only on online marketing",
            "Consider starting your own local investor meetup or association",
            "Only network online through social media groups"
        ],
        correctAnswers: [2],
        type: "single",
        category: "Networking & REIA",
        difficulty: "hard",
        explanation: "Starting your own REIA or investor meetup positions you as a community leader and creates massive networking opportunities. You become the hub connecting local investors, which naturally flows deals to you as the organizer and connector.",
        sourceChapter: "Step Seven: Join Your Local REIA"
    },
    {
        id: 29,
        question: "Beyond buyers and sellers, who else at REIA meetings can be valuable to your wholesale business?",
        options: [
            "Title company representatives who handle investor closings",
            "Property insurance agents familiar with investment properties",
            "Real estate attorneys who understand creative deal structures",
            "Hard money lenders who can fund your buyers' purchases"
        ],
        correctAnswers: [0, 1, 2, 3],
        type: "multiple",
        category: "Networking & REIA",
        difficulty: "medium",
        explanation: "REIAs attract entire investment ecosystems. Building relationships with service providers improves your deal flow, provides resources for your buyers, and creates referral partnerships. Your network's strength directly impacts your wholesale success.",
        sourceChapter: "Step Seven: Join Your Local REIA"
    },

    // ========== MAKING OFFERS & NEGOTIATIONS ==========
    {
        id: 30,
        question: "In wholesaling, what is generally the maximum percentage of After Repair Value (ARV) you should offer on a property?",
        options: [
            "70-75% of ARV minus estimated repairs",
            "50% of ARV to ensure sufficient profit margin",
            "90% of ARV if it's a great property",
            "It depends entirely on each specific situation"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Making Offers & Negotiations",
        difficulty: "easy",
        explanation: "The rule is to stay around 50% of ARV or less to ensure your investor buyers can profit after repairs and your wholesale fee. Going higher leaves insufficient margin for the buyer, making deals unattractive and difficult to sell.",
        sourceChapter: "Step Eight: Prepare to Make Offers"
    },
    {
        id: 31,
        question: "You analyze 100 properties per week and make offers on 50 of them. How many offers should you expect to get accepted?",
        context: "You're making competitive offers around 50% of ARV.",
        options: [
            "40-50 offers (80-100% acceptance rate)",
            "25-30 offers (50-60% acceptance rate)",
            "10-15 offers (20-30% acceptance rate)",
            "2-3 offers (less than 5% acceptance rate)"
        ],
        correctAnswers: [3],
        type: "single",
        category: "Making Offers & Negotiations",
        difficulty: "medium",
        explanation: "Acceptance rates in wholesaling are typically very low - often less than 5%. This is normal and expected. Success comes from making hundreds of offers consistently. Volume is the key to finding truly motivated sellers willing to accept wholesale prices.",
        sourceChapter: "Step Eight: Prepare to Make Offers"
    },
    {
        id: 32,
        question: "A seller is offended by your low offer and angrily rejects it. How should you respond?",
        options: [
            "Apologize profusely and immediately increase your offer substantially",
            "Argue with the seller about why your offer is fair",
            "Politely explain your offer rationale and leave the door open for future contact",
            "Never contact that seller again since they were rude"
        ],
        correctAnswers: [2],
        type: "single",
        category: "Making Offers & Negotiations",
        difficulty: "hard",
        explanation: "Rejection is part of wholesaling. Stay professional, briefly explain your offer reasoning, and keep communication open. Many initially offended sellers return later when their motivation increases and they realize your offer was actually fair.",
        sourceChapter: "Step Eight: Prepare to Make Offers"
    },
    {
        id: 33,
        question: "Why are inspection contingencies particularly important when you're a newer wholesaler?",
        options: [
            "They allow you to back out if you can't find a buyer",
            "They give you time to get more accurate repair estimates",
            "They protect you if you discover undisclosed property issues",
            "They make sellers take your offer more seriously"
        ],
        correctAnswers: [0, 1, 2],
        type: "multiple",
        category: "Making Offers & Negotiations",
        difficulty: "medium",
        explanation: "Inspection contingencies provide crucial protection for new wholesalers. They allow time to verify property condition, refine repair estimates, and secure a buyer. You can exit gracefully if the deal doesn't work, minimizing risk while you learn.",
        sourceChapter: "Step Eight: Prepare to Make Offers"
    },
    {
        id: 34,
        question: "You're negotiating with a motivated seller who wants $100k, but your analysis shows the maximum offer should be $65k. What's your best strategy?",
        options: [
            "Offer $65k and hold firm since that's what the numbers support",
            "Meet in the middle at $82.5k to make the seller happy",
            "Offer $50k hoping to negotiate up to $65k",
            "Walk away immediately since you're too far apart"
        ],
        correctAnswers: [0],
        type: "single",
        category: "Making Offers & Negotiations",
        difficulty: "hard",
        explanation: "Stick to your numbers based on ARV analysis. Overpaying makes deals unsellable to investor buyers. Present your $65k offer with clear reasoning. Truly motivated sellers will either accept or counter reasonably. Compromising on numbers kills wholesale margins.",
        sourceChapter: "Step Eight: Prepare to Make Offers"
    },

    // ========== PROPERTY MARKETING TO BUYERS ==========
    {
        id: 35,
        question: "You get a property under contract. What should be your FIRST action?",
        options: [
            "Start renovating the property to increase its value",
            "Immediately market the property to your pre-qualified buyers list",
            "Wait until closer to closing to tell buyers about it",
            "List it on the MLS through a Realtor"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Property Marketing to Buyers",
        difficulty: "easy",
        explanation: "Time is critical in wholesaling. Immediately marketing to your buyers list ensures you find a buyer quickly, verify the deal pricing is correct, and maintain momentum. Delays risk losing the contract or missing your closing deadline.",
        sourceChapter: "Step Nine: Market Your Property to Buyers"
    },
    {
        id: 36,
        question: "Your primary buyer for a deal can't close due to financing issues. You have 10 days until closing. What should you do?",
        context: "You have a buyers list of 50 investors and the property is a solid deal.",
        options: [
            "Panic and let the deal fall through",
            "Request a closing extension from the seller and immediately market to your full buyers list",
            "Try to buy the property yourself even though you don't have funds",
            "Sue your original buyer for backing out"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Property Marketing to Buyers",
        difficulty: "medium",
        explanation: "Backup buyers are essential in wholesaling. Communicate with the seller about a brief extension, then aggressively market to your entire list. Good deals attract multiple buyers. Your buyers list depth determines your ability to close even when Plan A fails.",
        sourceChapter: "Step Nine: Market Your Property to Buyers"
    },
    {
        id: 37,
        question: "When marketing a property to buyers, what information is MOST critical to include?",
        options: [
            "Address, property photos, and asking price",
            "ARV, estimated repair costs, and potential profit margin",
            "Neighborhood demographics and school ratings",
            "Your personal story about how you found the deal"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Property Marketing to Buyers",
        difficulty: "medium",
        explanation: "Investor buyers make decisions based on numbers. Provide ARV, repair estimates, and profit potential upfront. This allows them to quickly evaluate if the deal meets their criteria. Clear financial data speeds up buyer decisions and closes deals faster.",
        sourceChapter: "Step Nine: Market Your Property to Buyers"
    },
    {
        id: 38,
        question: "You maintain detailed buyer profiles in your CRM. How does this help when marketing properties?",
        options: [
            "You can match properties to buyers based on their specific investment criteria",
            "You can prioritize contacting buyers most likely to be interested and act quickly",
            "You avoid wasting time marketing properties to buyers who won't be interested",
            "You can personalize your pitch to address each buyer's specific goals"
        ],
        correctAnswers: [0, 1, 2, 3],
        type: "multiple",
        category: "Property Marketing to Buyers",
        difficulty: "hard",
        explanation: "Detailed buyer profiles create efficiency. You target the right buyers immediately, increasing closing speed and deal flow. Personalized outreach based on known preferences improves response rates and strengthens buyer relationships.",
        sourceChapter: "Step Nine: Market Your Property to Buyers"
    },

    // ========== CLOSING & ESCROW COORDINATION ==========
    {
        id: 39,
        question: "What should you look for when selecting a title company or closing attorney for your wholesale business?",
        options: [
            "Experience with investor transactions and wholesale assignments",
            "Fast closing timelines and flexible scheduling",
            "Competitive fees and transparent cost structures",
            "Willingness to handle high transaction volume"
        ],
        correctAnswers: [0, 1, 2, 3],
        type: "multiple",
        category: "Closing & Escrow Coordination",
        difficulty: "easy",
        explanation: "Your closing partner is crucial to wholesale success. They must understand assignments, move quickly, offer fair pricing, and handle volume efficiently. Finding the right partner prevents deal delays and complications.",
        sourceChapter: "Step Ten: Set Up Appointment with Closing Attorney or Title Agent"
    },
    {
        id: 40,
        question: "Why is it recommended to test multiple title companies before committing to one?",
        options: [
            "Different companies have different fee structures that impact your profit",
            "You can evaluate their service quality, speed, and expertise with investor deals",
            "Some may not understand or handle wholesale assignments properly",
            "Building relationships with multiple companies provides backup options if one is busy"
        ],
        correctAnswers: [0, 1, 2, 3],
        type: "multiple",
        category: "Closing & Escrow Coordination",
        difficulty: "medium",
        explanation: "Not all title companies are equal. Testing several reveals who offers the best combination of price, speed, expertise, and service. Having multiple trusted partners provides flexibility and ensures deals don't get delayed by capacity issues.",
        sourceChapter: "Step Ten: Set Up Appointment with Closing Attorney or Title Agent"
    },
    {
        id: 41,
        question: "Your title company discovers a lien on a property three days before closing. How should you handle this situation?",
        context: "Your buyer is ready to close and you've already assigned the contract.",
        options: [
            "Demand the seller resolve it immediately or cancel the deal",
            "Work with the title company to understand the lien and explore resolution options",
            "Tell the buyer to walk away from the deal",
            "Ignore it and hope it doesn't cause problems at closing"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Closing & Escrow Coordination",
        difficulty: "hard",
        explanation: "Title issues are common but often resolvable. Collaborate with your title company to understand the problem and potential solutions. Many liens can be cleared, paid from proceeds, or negotiated. Professional problem-solving saves deals.",
        sourceChapter: "Step Ten: Set Up Appointment with Closing Attorney or Title Agent"
    },
    {
        id: 42,
        question: "What role does the closing agent play in coordinating between buyer, seller, and wholesaler?",
        options: [
            "They handle document preparation and ensure all paperwork is legally correct",
            "They coordinate signing appointments and collect necessary documentation from all parties",
            "They manage funds, ensuring proper distribution at closing",
            "They provide neutral third-party oversight to protect all parties' interests"
        ],
        correctAnswers: [0, 1, 2, 3],
        type: "multiple",
        category: "Closing & Escrow Coordination",
        difficulty: "medium",
        explanation: "Closing agents are central coordinators managing documents, schedules, funds, and legal compliance. They ensure smooth transactions while protecting everyone involved. A competent closing agent makes complex wholesale transactions simple and secure.",
        sourceChapter: "Step Ten: Set Up Appointment with Closing Attorney or Title Agent"
    },

    // ========== MIXED STRATEGIC SCENARIOS ==========
    {
        id: 43,
        question: "You're analyzing two markets: Market A has many distressed properties but few active investors, while Market B has fewer distressed properties but very active investor demand. Which should you focus on?",
        options: [
            "Market A - more inventory means more opportunity",
            "Market B - active buyers make deals easier to close",
            "Both markets equally to diversify",
            "Neither - find a market with both distressed properties and active investors"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Market Analysis",
        difficulty: "hard",
        explanation: "Wholesaling requires willing buyers. Active investor demand (Market B) is more valuable than abundant inventory without buyers. You can find deals anywhere, but consistent buyer demand ensures you can actually close and profit from your efforts.",
        sourceChapter: "Step One: Analyze Your Market"
    },
    {
        id: 44,
        question: "A seller agrees to your price but wants to close in 90 days instead of your standard 30 days. How does this affect your wholesale strategy?",
        options: [
            "It's better because you have more time to find a buyer",
            "It's problematic because buyers may lose interest or financing over extended timelines",
            "It makes no difference to your wholesale business",
            "You should never accept closing dates beyond 45 days"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Making Offers & Negotiations",
        difficulty: "hard",
        explanation: "Extended closing timelines increase risk. Buyers' situations change, financing expires, and motivation decreases over time. While you want flexibility, 60-90 day closings create uncertainty. Negotiate for 30-45 days when possible to maintain deal momentum.",
        sourceChapter: "Step Eight: Prepare to Make Offers"
    },
    {
        id: 45,
        question: "You receive 100 seller inquiries per month but only close 2 deals. What is MOST likely the problem?",
        options: [
            "Your marketing is attracting unqualified or unmotivated sellers",
            "Your offer prices are too low and scaring away potential deals",
            "You're not following up effectively with leads",
            "You need to improve your negotiation and closing skills",
            "Any or all of the above could be contributing factors"
        ],
        correctAnswers: [4],
        type: "single",
        category: "Lead Management & Automation",
        difficulty: "hard",
        explanation: "A 2% conversion rate can have multiple causes: poor lead quality from wrong marketing, offers too low for even motivated sellers, weak follow-up systems losing deals, or poor closing skills. Systematic analysis of your pipeline reveals where improvements are needed.",
        sourceChapter: "Step Six: Develop a Lead Management System"
    },
    {
        id: 46,
        question: "Which of the following activities provide the HIGHEST return on time invested for a new wholesaler?",
        options: [
            "Analyzing deals and making offers on properties",
            "Building and nurturing your buyers list",
            "Creating systems for lead management and follow-up",
            "All three activities are equally critical and interdependent"
        ],
        correctAnswers: [3],
        type: "single",
        category: "Networking & REIA",
        difficulty: "hard",
        explanation: "Successful wholesaling requires balance. Finding deals without buyers leaves you stuck. Having buyers without deals means no income. Lacking systems causes chaos. Master all three areas simultaneously to build a sustainable wholesale business.",
        sourceChapter: "Step Seven: Join Your Local REIA"
    },
    {
        id: 47,
        question: "A Realtor brings you an REO property listed at $80k with an ARV of $140k and $30k in repairs. Should you make an offer?",
        context: "Your target is 50% of ARV maximum. The property is in a strong investor market.",
        options: [
            "Yes, offer $80k since it's already below your 50% threshold",
            "No, your maximum offer should be around $40k ($140k ARV × 50% = $70k, minus $30k repairs = $40k)",
            "Yes, offer $50k and negotiate from there",
            "No, REO properties are never good wholesale deals"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Making Offers & Negotiations",
        difficulty: "hard",
        explanation: "The formula is clear: 50% of ARV minus repairs. Here that's $70k minus $30k = $40k maximum. The $80k asking price leaves insufficient margin. Banks may negotiate, so make your $40k offer, but be prepared to walk away if they won't accept wholesale pricing.",
        sourceChapter: "Step Eight: Prepare to Make Offers"
    },
    {
        id: 48,
        question: "Your wholesale business is growing rapidly. Which team member should you hire FIRST to scale effectively?",
        options: [
            "An acquisition manager to find and analyze deals",
            "A transaction coordinator to manage paperwork and closings",
            "A marketing manager to generate more leads",
            "It depends on your specific bottleneck: lead generation, deal analysis, or transaction coordination"
        ],
        correctAnswers: [3],
        type: "single",
        category: "Lead Management & Automation",
        difficulty: "hard",
        explanation: "Hire to solve your biggest constraint. If you have deals but poor follow-through, hire coordination help. If you lack deals despite strong buyers, hire acquisition help. If you can't handle lead volume, hire marketing assistance. Identify your bottleneck first.",
        sourceChapter: "Step Six: Develop a Lead Management System"
    },
    {
        id: 49,
        question: "An investor buyer asks you to explain why your wholesale fee is $15,000 on a property deal. How should you justify this?",
        options: [
            "You don't need to justify it - take it or leave it",
            "Explain your marketing costs, time investment, and the value of finding this off-market opportunity",
            "Reduce the fee immediately to avoid losing the buyer",
            "Show them deals from other wholesalers with higher fees"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Buyer Marketing & List Building",
        difficulty: "medium",
        explanation: "Professional buyers understand wholesaling fees when they see the value. Explain your marketing investment, deal finding expertise, and the off-market opportunity you've provided. If the deal numbers work for them, a fair fee isn't an issue.",
        sourceChapter: "Step Five: Marketing Plan for Investors"
    },
    {
        id: 50,
        question: "What mindset is MOST important for long-term success in real estate wholesaling?",
        options: [
            "Get rich quick with minimal effort",
            "Persistence through rejection and consistent action despite low acceptance rates",
            "Always be the cheapest option to win every deal",
            "Focus exclusively on making money, regardless of relationships"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Networking & REIA",
        difficulty: "medium",
        explanation: "Wholesaling rewards persistence and consistency. You'll face constant rejection, low acceptance rates, and deals falling through. Success comes from making hundreds of offers, continuous marketing, relationship building, and refusing to quit when things get difficult.",
        sourceChapter: "Introduction & Bonus Steps"
    }
];

// Utility function to get filtered questions based on configuration
function getFilteredQuestions(config) {
    let filtered = questionBank;
    
    // Filter by selected topics/categories
    if (config.topics && config.topics.length > 0) {
        filtered = filtered.filter(q => config.topics.includes(q.category));
    }
    
    // Filter by difficulty
    if (config.difficulty && config.difficulty !== 'all') {
        filtered = filtered.filter(q => q.difficulty === config.difficulty);
    }
    
    // Shuffle and limit to requested count
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    const count = Math.min(config.questionCount || 25, shuffled.length);
    
    return shuffled.slice(0, count);
}

// Get all unique categories from question bank
function getAvailableCategories() {
    const categories = [...new Set(questionBank.map(q => q.category))];
    return categories.sort();
}
