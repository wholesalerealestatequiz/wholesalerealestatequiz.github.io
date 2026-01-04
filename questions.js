// ============================================
// WHOLESALE REAL ESTATE QUIZ - QUESTIONS DATABASE
// 60+ Original Questions Based on Wholesaling Knowledge
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
 * - sourceChapter: reference to book chapter or topic
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
        sourceChapter: "Topic: Market Analysis Fundamentals"
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
        sourceChapter: "Topic: Market Analysis Fundamentals"
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
        sourceChapter: "Topic: Market Analysis Fundamentals"
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
        sourceChapter: "Topic: Market Analysis Fundamentals"
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
        sourceChapter: "Topic: Realtor Partnership Strategies"
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
        sourceChapter: "Topic: Realtor Partnership Strategies"
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
        sourceChapter: "Topic: Realtor Partnership Strategies"
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
        sourceChapter: "Topic: Realtor Partnership Strategies"
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
        sourceChapter: "Topic: Rehab Estimation & Contractor Relations"
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
        sourceChapter: "Topic: Rehab Estimation & Contractor Relations"
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
        sourceChapter: "Topic: Rehab Estimation & Contractor Relations"
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
        sourceChapter: "Topic: Rehab Estimation & Contractor Relations"
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
        sourceChapter: "Topic: Seller Acquisition Systems"
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
        sourceChapter: "Topic: Seller Acquisition Systems"
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
        sourceChapter: "Topic: Seller Acquisition Systems"
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
        sourceChapter: "Topic: Seller Acquisition Systems"
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
        sourceChapter: "Topic: Seller Acquisition Systems"
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
        sourceChapter: "Topic: Buyer Disposition Strategies"
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
        sourceChapter: "Topic: Buyer Disposition Strategies"
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
        sourceChapter: "Topic: Buyer Disposition Strategies"
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
        sourceChapter: "Topic: Buyer Disposition Strategies"
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
        sourceChapter: "Topic: Lead Management & CRM"
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
        sourceChapter: "Topic: Lead Management & CRM"
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
        sourceChapter: "Topic: Lead Management & CRM"
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
        sourceChapter: "Topic: Lead Management & CRM"
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
        sourceChapter: "Topic: Networking & Community Building"
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
        sourceChapter: "Topic: Networking & Community Building"
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
        sourceChapter: "Topic: Networking & Community Building"
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
        sourceChapter: "Topic: Networking & Community Building"
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
        sourceChapter: "Topic: Deal Analysis & Negotiation"
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
        sourceChapter: "Topic: Deal Analysis & Negotiation"
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
        sourceChapter: "Topic: Deal Analysis & Negotiation"
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
        sourceChapter: "Topic: Deal Analysis & Negotiation"
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
        sourceChapter: "Topic: Deal Analysis & Negotiation"
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
        sourceChapter: "Topic: Disposition & Marketing"
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
        sourceChapter: "Topic: Disposition & Marketing"
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
        sourceChapter: "Topic: Disposition & Marketing"
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
        sourceChapter: "Topic: Disposition & Marketing"
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
        sourceChapter: "Topic: Transaction Coordination & Closing"
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
        sourceChapter: "Topic: Transaction Coordination & Closing"
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
        sourceChapter: "Topic: Transaction Coordination & Closing"
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
        sourceChapter: "Topic: Transaction Coordination & Closing"
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
        sourceChapter: "Topic: Market Analysis Fundamentals"
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
        sourceChapter: "Topic: Deal Analysis & Negotiation"
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
        sourceChapter: "Topic: Lead Management & CRM"
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
        sourceChapter: "Topic: Networking & Community Building"
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
        sourceChapter: "Topic: Deal Analysis & Negotiation"
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
        sourceChapter: "Topic: Lead Management & CRM"
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
        sourceChapter: "Topic: Buyer Disposition Strategies"
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
        sourceChapter: "Topic: Wholesaling Mindset & Ethics"
    },
    // ========== ADVANCED STRATEGIES & LEGAL ==========
    {
        id: 51,
        question: "What is the primary legal difference between an 'Assignment of Contract' and a 'Double Closing'?",
        options: [
            "Assignments transfer your rights to the buyer, while Double Closings involve two separate transactions where you take title briefly",
            "Assignments are illegal in most states, while Double Closings are preferred",
            "Double Closings require less paperwork than Assignments",
            "There is no legal difference; they are just different terms for the same process"
        ],
        correctAnswers: [0],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "hard",
        explanation: "In an Assignment, you sell the paper (contract rights) for a fee. In a Double Closing (A-B, B-C), you actually purchase the property from the seller and immediately resell it to the end buyer, keeping the price difference. This offers more privacy but higher closing costs.",
        sourceChapter: "Topic: Advanced Closing Structures"
    },
    {
        id: 52,
        question: "Why might a wholesaler choose to use 'Transactional Funding' for a deal?",
        options: [
            "To pay for marketing expenses",
            "To fund the A-B leg of a double closing when they don't have their own cash",
            "To pay the seller a deposit before signing the contract",
            "To finance the rehab costs for the end buyer"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "medium",
        explanation: "Transactional funding is short-term (often same-day) financing used specifically for double closings. It allows a wholesaler to buy the property from the seller using borrowed funds, which are repaid immediately when the end buyer closes.",
        sourceChapter: "Topic: Creative Financing"
    },
    {
        id: 53,
        question: "What is a 'Subject-To' transaction in real estate wholesaling?",
        options: [
            "Buying a property subject to an inspection",
            "Taking over the seller's existing mortgage payments while receiving the deed",
            "Making an offer subject to your partner's approval",
            "Buying a property only if it appraises for a certain value"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "hard",
        explanation: "Subject-To involves acquiring the property deed while leaving the existing mortgage in the seller's name. The investor takes over the payments. This is a powerful strategy for properties with little equity or low interest rates.",
        sourceChapter: "Topic: Creative Financing"
    },
    {
        id: 54,
        question: "When dealing with 'Probate' leads, who is typically the decision-maker you need to contact?",
        options: [
            "The deceased owner",
            "The Personal Representative or Executor of the estate",
            "The probate judge",
            "The neighbors"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Seller Lead Generation",
        difficulty: "medium",
        explanation: "In probate situations, the Personal Representative (or Executor) is the person legally authorized to manage and sell the estate's assets. Building rapport with them is key to securing these often-lucrative deals.",
        sourceChapter: "Topic: Niche Lead Generation"
    },
    {
        id: 55,
        question: "What is the purpose of filing a 'Memorandum of Contract' or 'Affidavit of Interest'?",
        options: [
            "To sue the seller for damages",
            "To cloud the title and prevent the seller from selling to someone else behind your back",
            "To officially record the deed transfer",
            "To apply for a mortgage"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "hard",
        explanation: "A Memorandum of Contract is recorded in public records to notify third parties that you have a valid contract on the property. It protects your interest and prevents the seller from bypassing you to sell to another buyer.",
        sourceChapter: "Topic: Deal Protection & Ethics"
    },
    {
        id: 56,
        question: "Which of the following are common 'Red Flags' when analyzing a potential wholesale deal?",
        options: [
            "Seller refuses to allow access for inspection",
            "Title search reveals multiple unknown liens exceeding the purchase price",
            "Property is in a war zone with no recent comps",
            "Seller wants a large non-refundable deposit released immediately"
        ],
        correctAnswers: [0, 1, 2, 3],
        type: "multiple",
        category: "Deal Analysis & Negotiation",
        difficulty: "medium",
        explanation: "All listed items are major red flags. Lack of access hides condition issues. Liens can kill the deal's equity. No comps means no verifiable value. Releasing deposits early is a common scam or high-risk move.",
        sourceChapter: "Topic: Risk Management"
    },
    {
        id: 57,
        question: "What is 'Wholetailing'?",
        options: [
            "Wholesaling retail properties",
            "Buying a property, doing minor cleanup/repairs, and listing it on the MLS for retail buyers",
            "Selling a wholesale deal to another wholesaler",
            "Wholesaling only tail-end properties"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "medium",
        explanation: "Wholetailing is a hybrid strategy. You close on the property (buy it), do minimal work (trash out, clean), and then list it on the open market (MLS) to attract retail buyers or investors paying higher prices than typical cash buyers.",
        sourceChapter: "Topic: Exit Strategies"
    },
    {
        id: 58,
        question: "Why is 'Earning Money Deposit' (EMD) important in a wholesale contract?",
        options: [
            "It is the wholesaler's profit",
            "It shows the seller you are a serious buyer and provides consideration for the contract",
            "It pays the realtor's commission",
            "It is not important and should always be $1"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Making Offers & Negotiations",
        difficulty: "easy",
        explanation: "EMD demonstrates 'skin in the game' and makes your offer legally binding (consideration). While wholesalers try to keep it low ($100-$500), a reasonable EMD builds trust with sellers.",
        sourceChapter: "Topic: Contract Fundamentals"
    },
    {
        id: 59,
        question: "What does 'Novation' mean in the context of real estate?",
        options: [
            "Renovating a property",
            "Replacing an old contract with a new one, often to change terms or parties",
            "Notarizing a document",
            "Negotiating a lower price"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "hard",
        explanation: "Novation is the act of substituting a new contract for an old one. In wholesaling, a 'Novation Agreement' can be used to allow a wholesaler to sell the property on the MLS on behalf of the seller, often netting a higher profit than a standard assignment.",
        sourceChapter: "Topic: Advanced Contract Law"
    },
    {
        id: 60,
        question: "You find a property with a 'Tax Lien'. What does this mean for the transaction?",
        options: [
            "The property cannot be sold",
            "The lien must be paid off (satisfied) at or before closing for the title to be clear",
            "The buyer automatically assumes the debt",
            "The government now owns the property"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Closing & Escrow Coordination",
        difficulty: "medium",
        explanation: "Tax liens are debts attached to the property. They don't prevent a sale, but they must be paid from the seller's proceeds (or by the buyer) to transfer clear title. This reduces the seller's net cash, which must be accounted for in your offer.",
        sourceChapter: "Topic: Title & Lien Resolution"
    },

    // ========== NEW QUESTIONS - WHOLESALING & INVESTMENT STRATEGY ==========
    {
        id: 61,
        question: "Which two main strategies are identified for wholesale real estate acquisition?",
        options: [
            "Transactional and Speculative",
            "Transactional and Relational",
            "Relational and Traditional",
            "Institutional and Private"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "medium",
        explanation: "The two main acquisition strategies are Transactional (quick, deal-focused) and Relational (building long-term relationships with agents, investors, and sellers). Relational strategies often provide free lead flow and long-term benefits.",
        sourceChapter: "Topic: Wholesaling Strategy"
    },
    {
        id: 62,
        question: "In wholesaling, what is the term for the 'art of selling,' which involves finding buyers and closing contracts for fees?",
        options: [
            "Acquisition",
            "Disposition",
            "Capitalization",
            "Assignment"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Buyer Marketing & List Building",
        difficulty: "easy",
        explanation: "Disposition is the process of selling or 'disposing' of properties to buyers. It involves finding cash buyers, marketing deals, and closing transactions for assignment fees.",
        sourceChapter: "Topic: Disposition Fundamentals"
    },
    {
        id: 63,
        question: "According to the 'Reverse Wholesaling' strategy, where should an investor focus 80% of their revenue-producing efforts?",
        options: [
            "Finding distressed properties",
            "Negotiating with sellers",
            "Finding cash buyers and building relationships with them",
            "Calculating repair estimates"
        ],
        correctAnswers: [2],
        type: "single",
        category: "Buyer Marketing & List Building",
        difficulty: "medium",
        explanation: "Reverse Wholesaling flips the traditional model - instead of finding properties first, you find buyers first. By understanding what buyers want, you can 'shop' for properties that match their needs, leading to faster deals and higher success rates.",
        sourceChapter: "Topic: Reverse Wholesaling"
    },
    {
        id: 64,
        question: "What does the acronym 'MAO' stand for in a wholesaler's value calculation?",
        options: [
            "Minimum Annual Operating",
            "Maximum Allowable Offer",
            "Monthly Acquisition Objective",
            "Market Appraised Option"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Making Offers & Negotiations",
        difficulty: "easy",
        explanation: "MAO (Maximum Allowable Offer) is the highest price a wholesaler can pay for a property while still leaving room for profit. It's typically calculated as: ARV × 70% - Repairs - Wholesale Fee.",
        sourceChapter: "Topic: Offer Calculations"
    },
    {
        id: 65,
        question: "The 'bundle of rights' included in real property ownership typically comprises which of the following?",
        options: [
            "Possession, use, and the right to avoid taxes",
            "Possession, use, enjoyment, and disposition",
            "Improvement, occupancy, and public grant",
            "Zoning, taxation, and acquisition"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "medium",
        explanation: "The bundle of rights includes: Possession (right to occupy), Use (right to use as desired within law), Enjoyment (right to use without interference), and Disposition (right to sell, lease, or transfer).",
        sourceChapter: "Topic: Property Rights"
    },
    {
        id: 66,
        question: "Which legal term describes the reversion of property to the state when an owner dies without a will and has no legally qualified heirs?",
        options: [
            "Eminent Domain",
            "Escheat",
            "Foreclosure",
            "Adverse Possession"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "hard",
        explanation: "Escheat is the legal process where property reverts to the state when the owner dies intestate (without a will) and has no identifiable heirs. This can create wholesaling opportunities through state auctions.",
        sourceChapter: "Topic: Property Law"
    },
    {
        id: 67,
        question: "What is the primary difference between 'Police Power' and 'Eminent Domain'?",
        options: [
            "Police power requires just compensation, while eminent domain does not",
            "Eminent domain is for public safety, while police power is for taking land",
            "Police power involves regulating use without compensation, while eminent domain involves taking private property for public use with just compensation",
            "There is no legal distinction between the two"
        ],
        correctAnswers: [2],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "hard",
        explanation: "Police Power allows governments to regulate property use (zoning, building codes) without compensation. Eminent Domain allows governments to take private property for public use but requires 'just compensation' to the owner.",
        sourceChapter: "Topic: Government Powers"
    },
    {
        id: 68,
        question: "What is a 'fiduciary' relationship in the context of real estate?",
        options: [
            "A relationship between two competitive brokers",
            "A position of trust and confidence between a principal and an agent",
            "A contract between a lender and a government agency",
            "The relationship between a buyer and a seller in a 'caveat emptor' market"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Realtor Relationships",
        difficulty: "medium",
        explanation: "A fiduciary relationship is one of trust and confidence where the agent (fiduciary) must act in the best interests of the principal. This includes duties of loyalty, disclosure, obedience, confidentiality, and accounting.",
        sourceChapter: "Topic: Agency Relationships"
    },
    {
        id: 69,
        question: "Which type of contract is described as a temporary partnership between two or more entities working together to close a deal?",
        options: [
            "A-B Contract",
            "Option Agreement",
            "B-C Contract",
            "Joint Venture (JV) Contract"
        ],
        correctAnswers: [3],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "medium",
        explanation: "A Joint Venture (JV) is a temporary partnership for a specific deal. It's like 'dating' rather than 'marriage' - you work together on one project without forming a permanent business entity.",
        sourceChapter: "Topic: Partnership Structures"
    },
    {
        id: 70,
        question: "What is the function of an 'Assignment Contract' in wholesaling?",
        options: [
            "It creates a new loan for the buyer",
            "It establishes a long-term lease",
            "It assigns the position of ownership interest from the wholesaler to a buyer",
            "It allows the seller to cancel the sale within three business days"
        ],
        correctAnswers: [2],
        type: "single",
        category: "Making Offers & Negotiations",
        difficulty: "easy",
        explanation: "An Assignment Contract transfers your contractual rights (your position in the purchase agreement) to an end buyer. You're selling your contract, not the property itself, which is the essence of wholesaling.",
        sourceChapter: "Topic: Assignment Contracts"
    },
    {
        id: 71,
        question: "Which contract type allows a party to purchase a property within a specific timeframe for a specific price without requiring them to act?",
        options: [
            "Option Agreement",
            "A-B Contract",
            "Bilateral Contract",
            "Assignment of Mortgage"
        ],
        correctAnswers: [0],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "medium",
        explanation: "An Option Agreement gives the buyer the RIGHT but not the OBLIGATION to purchase at a set price within a timeframe. The buyer pays an option fee for this privilege, which may or may not be credited at closing.",
        sourceChapter: "Topic: Option Contracts"
    },
    {
        id: 72,
        question: "How many square feet are contained in one acre of land?",
        options: [
            "36,000",
            "43,560",
            "48,000",
            "5,280"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Market Analysis",
        difficulty: "easy",
        explanation: "One acre contains exactly 43,560 square feet. This is essential knowledge for calculating lot sizes, price per square foot, and land valuations.",
        sourceChapter: "Topic: Real Estate Math"
    },
    {
        id: 73,
        question: "Which appraisal approach is most reliable for non-investment and non-marketable properties like churches or government buildings?",
        options: [
            "Sales Comparison Approach",
            "Cost Approach",
            "Income Capitalization Approach",
            "Gross Rent Multiplier"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Market Analysis",
        difficulty: "hard",
        explanation: "The Cost Approach estimates value based on land value plus construction cost minus depreciation. It's best for unique properties (churches, schools) where comparable sales don't exist and the property doesn't generate income.",
        sourceChapter: "Topic: Property Valuation"
    },
    {
        id: 74,
        question: "What is the 'After Repair Value' (ARV)?",
        options: [
            "The cost of materials needed for a renovation",
            "The price a property sells for in its distressed state",
            "The value of a property after it has been remodeled to the highest degree suitable for the area",
            "The net profit a wholesaler makes after a deal"
        ],
        correctAnswers: [2],
        type: "single",
        category: "Market Analysis",
        difficulty: "easy",
        explanation: "ARV is the estimated value of a property AFTER all renovations are complete. It's the 'North Star' for wholesalers and fix-and-flip investors, used to calculate MAO and potential profit margins.",
        sourceChapter: "Topic: ARV Calculation"
    },
    {
        id: 75,
        question: "To find the Capitalization Rate (Cap Rate) using market extraction, which formula is used?",
        options: [
            "Value multiplied by Net Operating Income",
            "Net Operating Income divided by Value (or Sales Price)",
            "Total Gross Income divided by Operating Expenses",
            "Principal multiplied by Interest Rate"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Market Analysis",
        difficulty: "medium",
        explanation: "Cap Rate = NOI ÷ Value (or Purchase Price). This ratio helps investors compare the potential return on different investment properties regardless of financing.",
        sourceChapter: "Topic: Investment Analysis"
    },
    {
        id: 76,
        question: "In real estate math, a 'banker's year' is typically composed of how many days?",
        options: [
            "365",
            "360",
            "366",
            "300"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Closing & Escrow Coordination",
        difficulty: "medium",
        explanation: "A banker's year uses 360 days (12 months × 30 days) for simpler calculations when prorating expenses like taxes, insurance, and HOA fees at closing.",
        sourceChapter: "Topic: Closing Calculations"
    },
    {
        id: 77,
        question: "What does the acronym 'TRID' stand for?",
        options: [
            "TILA-RESPA Integrated Disclosure",
            "Total Real Estate Investment Debt",
            "Trust in Real Estate and Insurance Document",
            "Tax and Revenue Internal Division"
        ],
        correctAnswers: [0],
        type: "single",
        category: "Closing & Escrow Coordination",
        difficulty: "hard",
        explanation: "TRID (TILA-RESPA Integrated Disclosure) combined Truth in Lending Act (TILA) and Real Estate Settlement Procedures Act (RESPA) disclosures into simplified Loan Estimate and Closing Disclosure forms.",
        sourceChapter: "Topic: Lending Regulations"
    },
    {
        id: 78,
        question: "What is the definition of 'Loan-to-Value Ratio' (LTV)?",
        options: [
            "The relationship between the annual interest and the principal",
            "The ratio of monthly income to house payments",
            "The relationship between the amount of the mortgage loan and the appraised value of the property",
            "The difference between the list price and the final sales price"
        ],
        correctAnswers: [2],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "medium",
        explanation: "LTV = Loan Amount ÷ Property Value. A higher LTV means more leverage but also more risk. Most conventional lenders require an LTV of 80% or less to avoid PMI.",
        sourceChapter: "Topic: Lending Fundamentals"
    },
    {
        id: 79,
        question: "When hiring for a wholesale business, which personality trait is characterized by an individual being driven to achieve goals?",
        options: [
            "Openness",
            "Agreeableness",
            "Conscientiousness",
            "Neuroticism"
        ],
        correctAnswers: [2],
        type: "single",
        category: "Lead Management & Automation",
        difficulty: "medium",
        explanation: "Conscientiousness (from the 'Big Five' personality traits) indicates someone who is organized, dependable, and driven to achieve goals - ideal traits for acquisitions managers and key team members.",
        sourceChapter: "Topic: Building Your Team"
    },
    {
        id: 80,
        question: "In Clothier's business philosophy, what does 'MWA' stand for, and why should it be avoided by the business owner?",
        options: [
            "Minimum Wage Activities; because owners should use technology or hire others for these tasks to focus on higher-value growth",
            "Monthly Weighted Average; because it distorts profit margins",
            "Market Wholesale Acquisition; because it is too risky",
            "Mandatory Work Assignments; because they reduce employee morale"
        ],
        correctAnswers: [0],
        type: "single",
        category: "Lead Management & Automation",
        difficulty: "medium",
        explanation: "MWA = Minimum Wage Activities. These are tasks like data entry, cold calling, or administrative work that should be automated or delegated so the owner can focus on revenue-generating activities and strategic growth.",
        sourceChapter: "Topic: Business Scaling"
    },
    {
        id: 81,
        question: "According to Damji, what is the first step to scaling a wholesaling empire?",
        options: [
            "Hiring an acquisitions manager",
            "Establishing your Mission and Vision",
            "Creating a functional organizational structure",
            "Setting up automated SMS marketing"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Lead Management & Automation",
        difficulty: "medium",
        explanation: "Before hiring or building systems, you must establish your Mission (why you exist) and Vision (where you're going). This provides direction and helps attract team members who share your values.",
        sourceChapter: "Topic: Business Scaling"
    },
    {
        id: 82,
        question: "What is the core principle behind 'Reverse Wholesaling'?",
        options: [
            "Finding a property at a 50% discount and then cold-calling for buyers",
            "Finding active cash buyers first, identifying their specific needs, and then 'shopping' for properties that match those needs",
            "Purchasing a property with a bank loan and immediately refinancing it",
            "Using high-pressure sales tactics to convince sellers to lower their prices"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Buyer Marketing & List Building",
        difficulty: "medium",
        explanation: "Reverse Wholesaling is about understanding buyer needs FIRST. By knowing exactly what your buyers want (price range, location, property type), you can target your marketing and make offers confidently knowing you have a buyer waiting.",
        sourceChapter: "Topic: Reverse Wholesaling"
    },
    {
        id: 83,
        question: "Which of the following is considered an example of 'forced appreciation'?",
        options: [
            "Waiting for the market prices in a specific ZIP code to naturally rise",
            "Renovating a kitchen with upgraded materials or adding a swimming pool",
            "Obtaining a lower interest rate on a primary mortgage",
            "Selling a property for the same price it was purchased for without any changes"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Market Analysis",
        difficulty: "easy",
        explanation: "Forced appreciation means actively increasing a property's value through improvements, unlike natural/market appreciation which happens passively. Renovations, additions, and upgrades 'force' the value up.",
        sourceChapter: "Topic: Value-Add Strategies"
    },
    {
        id: 84,
        question: "What is a 'Hot Zone' according to Kent Clothier?",
        options: [
            "An area where a property fire has recently occurred",
            "A neighborhood with high crime rates where property values are low",
            "A specific ZIP code or region where public records show the majority of cash transactions are occurring",
            "The location of a wholesaler's main headquarters"
        ],
        correctAnswers: [2],
        type: "single",
        category: "Market Analysis",
        difficulty: "medium",
        explanation: "Hot Zones are areas with high investor activity, identified by analyzing public records for cash purchases. These areas indicate strong buyer demand, making them ideal targets for wholesale marketing.",
        sourceChapter: "Topic: Market Selection"
    },
    {
        id: 85,
        question: "In Jamil Damji's business model, what does the core value 'Cold Showers' represent?",
        options: [
            "Saving money on utility bills to increase net profit",
            "Getting out of one's comfort zone, seeking hard work, and seeing obstacles as opportunities",
            "A mandatory requirement for all new acquisitions managers",
            "The feeling of losing a deal to a competitor"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Lead Management & Automation",
        difficulty: "medium",
        explanation: "'Cold Showers' is a metaphor for embracing discomfort and challenges. It represents the mindset of pursuing growth through hard work and viewing obstacles as opportunities rather than setbacks.",
        sourceChapter: "Topic: Business Mindset"
    },
    {
        id: 86,
        question: "Under the 'Straight-Line Method' of depreciation, how is the annual depreciation amount calculated?",
        options: [
            "Multiplying the land value by the interest rate",
            "Dividing the initial cost of an improvement (minus salvage value) by its estimated economic life",
            "Subtracting the mortgage balance from the sales price",
            "Adding the replacement cost to the land value"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Market Analysis",
        difficulty: "hard",
        explanation: "Straight-line depreciation = (Cost - Salvage Value) ÷ Useful Life. For example, a $100,000 building with 27.5 year life depreciates at approximately $3,636 per year.",
        sourceChapter: "Topic: Depreciation"
    },
    {
        id: 87,
        question: "What is the 'Gross Debt Service' (GDS) ratio?",
        options: [
            "The relationship between total assets and total liabilities",
            "The lender's allowable ratio of gross monthly payments (Principal, Interest, and Taxes) to the gross monthly income of a borrower",
            "The percentage of commission paid to a listing broker",
            "The total amount of debt an investor carries across all properties"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "hard",
        explanation: "GDS ratio measures housing costs (PITI) as a percentage of gross income. Lenders typically want GDS below 28-32%. This helps determine how much a buyer can afford.",
        sourceChapter: "Topic: Lending Qualifications"
    },
    {
        id: 88,
        question: "What is the difference between 'Real Property' and 'Personal Property'?",
        options: [
            "Real property is owned by corporations; personal property is owned by individuals",
            "Real property consists of land and things permanently affixed to it (immovable); personal property is generally movable (chattels)",
            "Personal property cannot be taxed, whereas real property can",
            "There is no legal distinction between the two"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "medium",
        explanation: "Real property = land and permanent attachments (buildings, fixtures). Personal property (chattels) = movable items (furniture, appliances). This distinction matters for contracts, taxes, and what conveys with a sale.",
        sourceChapter: "Topic: Property Classifications"
    },
    {
        id: 89,
        question: "What is an 'Easement by Prescription'?",
        options: [
            "A right-of-way granted in a written deed for a fee",
            "The acquisition of a right to use another's land through continuous, uninterrupted use for a specific statutory period",
            "A temporary permit issued by a city for construction",
            "The reversion of land to the state when an owner dies"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "hard",
        explanation: "Easement by Prescription is acquired through continuous, open, and hostile use of another's property for a statutory period (often 10-20 years). It's similar to adverse possession but grants use rights rather than ownership.",
        sourceChapter: "Topic: Property Rights"
    },
    {
        id: 90,
        question: "Which legal term describes a person who dies without a will?",
        options: [
            "Testate",
            "Intestate",
            "Grantor",
            "Escheat"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "medium",
        explanation: "Intestate = dying without a valid will. Testate = dying with a will. When someone dies intestate, state laws determine how property is distributed among heirs.",
        sourceChapter: "Topic: Estate Law"
    },
    {
        id: 91,
        question: "What is 'Negative Amortization'?",
        options: [
            "Paying off a loan earlier than the scheduled term",
            "A situation where monthly payments do not cover all the interest due, causing the loan balance to increase over time",
            "The reduction of a property's value due to economic decline",
            "A legal process used to remove a lien from a property"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "hard",
        explanation: "Negative amortization occurs when loan payments are less than the interest owed, causing unpaid interest to be added to the principal. This increases the loan balance over time - a dangerous situation for borrowers.",
        sourceChapter: "Topic: Mortgage Types"
    },
    {
        id: 92,
        question: "What is a 'Take-out Loan'?",
        options: [
            "A loan used to purchase food for a business meeting",
            "A long-term permanent loan that replaces short-term construction (interim) financing",
            "A loan that is defaulted upon and 'taken out' of a bank's portfolio",
            "The cash an investor 'takes out' of a deal at closing"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "hard",
        explanation: "A take-out loan is permanent financing that 'takes out' (replaces) short-term construction or bridge loans. It's typically obtained after a project is complete and stabilized.",
        sourceChapter: "Topic: Construction Financing"
    },
    {
        id: 93,
        question: "In the 'Old School' wholesaling model, what is the first step?",
        options: [
            "Building a relationship with a cash buyer",
            "Getting a discounted property under contract",
            "Automating a marketing system",
            "Hiring a property management firm"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Seller Lead Generation",
        difficulty: "easy",
        explanation: "Traditional (Old School) wholesaling starts with finding and contracting properties, then finding buyers. Reverse Wholesaling flips this by finding buyers first.",
        sourceChapter: "Topic: Wholesaling Methods"
    },
    {
        id: 94,
        question: "How does a 'Joint Venture' (JV) typically differ from a permanent partnership in real estate?",
        options: [
            "JVs require a corporate seal, whereas partnerships do not",
            "A JV is often a temporary arrangement for a specific project/deal (like 'dating'), while a permanent partnership involves shared entities and long-term commitment (like 'marriage')",
            "Partnerships are only legal for commercial properties",
            "JVs do not allow for the sharing of profits"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Networking & REIA",
        difficulty: "medium",
        explanation: "JVs are deal-specific partnerships that dissolve after the transaction. They're flexible and low-commitment compared to formal partnerships with shared liability and ongoing obligations.",
        sourceChapter: "Topic: Business Structures"
    },
    {
        id: 95,
        question: "What is the primary difference between a principal and a representative in a real estate transaction?",
        options: [
            "A representative has an ownership interest; a principal does not",
            "A principal acts solely as the buyer or seller in the contract; a representative acts for someone else",
            "Only a representative can force appreciation",
            "A principal must be a licensed real estate broker"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "medium",
        explanation: "A principal is a party to the transaction (buyer/seller). A representative (agent) acts on behalf of a principal. Wholesalers are principals when they sign contracts, not representatives.",
        sourceChapter: "Topic: Transaction Roles"
    },
    {
        id: 96,
        question: "In Jamil Damji's wholesaling model, what is the 'North Star' for determining property potential?",
        options: [
            "The Maximum Allowable Offer (MAO)",
            "The original purchase price",
            "The After Repair Value (ARV)",
            "The current tax assessment"
        ],
        correctAnswers: [2],
        type: "single",
        category: "Market Analysis",
        difficulty: "easy",
        explanation: "ARV is the 'North Star' because all other calculations flow from it. Once you know what a property will be worth after repairs, you can calculate MAO, repair budget, and profit margins.",
        sourceChapter: "Topic: Deal Analysis"
    },
    {
        id: 97,
        question: "What is the 'Appraisal Rule' for selecting comparable properties regarding time?",
        options: [
            "Comps should be no older than one year",
            "Comps should be no older than 90 days; if older, the ARV should be adjusted down 10-20%",
            "You should only use properties that sold in the last 30 days",
            "Time does not matter as long as the property is in the same subdivision"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Market Analysis",
        difficulty: "medium",
        explanation: "Ideally, comps should be within 90 days. Older comps may not reflect current market conditions. If you must use older comps, adjust your ARV estimate downward to account for uncertainty.",
        sourceChapter: "Topic: Comparative Market Analysis"
    },
    {
        id: 98,
        question: "To convert square feet to square yards, you must divide the total square footage by:",
        options: [
            "3",
            "9",
            "12",
            "144"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Market Analysis",
        difficulty: "easy",
        explanation: "Since 1 yard = 3 feet, 1 square yard = 3×3 = 9 square feet. Divide square feet by 9 to get square yards. This is useful for flooring and carpet calculations.",
        sourceChapter: "Topic: Real Estate Math"
    },
    {
        id: 99,
        question: "Which ratio is used by lenders to measure a borrower's ability to pay principal, interest, and taxes relative to their gross monthly income?",
        options: [
            "Debt-to-Equity Ratio",
            "Gross Debt Service (GDS) Ratio",
            "Loan-to-Value Ratio",
            "Capitalization Rate"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Advanced Strategies & Legal",
        difficulty: "medium",
        explanation: "GDS ratio = Housing Costs (PITI) ÷ Gross Monthly Income. Lenders use this to ensure borrowers aren't overextending on housing payments.",
        sourceChapter: "Topic: Lending Qualifications"
    },
    {
        id: 100,
        question: "What is the purpose of 'Business Rules' in the context of scaling a wholesaling business?",
        options: [
            "To increase the workload of the owner",
            "To empower people to do their jobs without owner involvement",
            "To ensure the IRS accepts the company's tax filings",
            "To prevent the hiring of outside contractors"
        ],
        correctAnswers: [1],
        type: "single",
        category: "Lead Management & Automation",
        difficulty: "medium",
        explanation: "Business Rules are documented procedures that allow team members to make decisions independently. They create an 'autopilot' system so the business can run without constant owner oversight.",
        sourceChapter: "Topic: Systems & Processes"
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
