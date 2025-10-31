// ============================================
// PREMIUM STUDY PLAN GENERATOR
// Personalized 30-Day Study Plan with Book References
// ============================================

/**
 * Generates a comprehensive personalized study plan based on quiz results
 * Includes book references, daily action items, and practice exercises
 */

// Book database with chapters and topics
const bookDatabase = {
    wholesaling101: {
        title: "10 Steps to Wholesaling 10 Houses a Month",
        author: "Jason Prescott",
        chapters: {
            marketAnalysis: {
                chapter: "Step 1: Analyze Your Market",
                pages: "15-32",
                keyTopics: ["Gridding neighborhoods", "Data analysis tools", "Identifying investor activity", "Rental demand research"]
            },
            realtorRelationships: {
                chapter: "Step 2: Meet with Realtors",
                pages: "33-48",
                keyTopics: ["Finding investor-friendly agents", "Building trust through closings", "Volume partnerships", "REO access"]
            },
            contractorPartnerships: {
                chapter: "Step 3: Meet with General Contractors",
                pages: "49-64",
                keyTopics: ["Rehab cost estimation", "Building contractor networks", "Local pricing checklists", "Avoiding inflated estimates"]
            },
            sellerMarketing: {
                chapter: "Step 4: Marketing Plan for Lead Generation",
                pages: "65-92",
                keyTopics: ["Direct mail campaigns", "Online advertising", "Guerrilla marketing", "Vanity phone numbers", "Brand building"]
            },
            buyerMarketing: {
                chapter: "Step 5: Marketing Plan for Investors",
                pages: "93-112",
                keyTopics: ["Building buyers list", "REIA networking", "Buyer personas", "Communication channels"]
            },
            leadManagement: {
                chapter: "Step 6: Develop a Lead Management System",
                pages: "113-134",
                keyTopics: ["CRM implementation", "Automation sequences", "Mobile systems", "Follow-up protocols"]
            },
            networking: {
                chapter: "Step 7: Join Your Local REIA",
                pages: "135-148",
                keyTopics: ["REIA benefits", "Strategic networking", "Building relationships", "Service provider connections"]
            },
            makingOffers: {
                chapter: "Step 8: Prepare to Make Offers",
                pages: "149-178",
                keyTopics: ["50% ARV rule", "Volume offer strategy", "Inspection contingencies", "Handling rejection"]
            },
            propertyMarketing: {
                chapter: "Step 9: Market Your Property to Buyers",
                pages: "179-194",
                keyTopics: ["Immediate marketing", "Buyer matching", "Deal presentation", "Backup buyers"]
            },
            closing: {
                chapter: "Step 10: Set Up with Closing Attorney",
                pages: "195-212",
                keyTopics: ["Title company selection", "Assignment process", "Transaction coordination", "Volume partnerships"]
            }
        }
    },
    flippingHouses: {
        title: "The Book on Flipping Houses",
        author: "J Scott",
        relevantChapters: {
            dealAnalysis: "Chapter 3: Evaluating Deals",
            rehab: "Chapter 8: The Scope of Work",
            contractors: "Chapter 9: Hiring Contractors"
        }
    },
    brrrr: {
        title: "Buy, Rehab, Rent, Refinance, Repeat",
        author: "David Greene",
        relevantChapters: {
            dealFinding: "Chapter 2: Finding Deals",
            analysis: "Chapter 3: Analyzing Deals"
        }
    },
    wholesalingBible: {
        title: "Real Estate Wholesaling Bible",
        author: "Than Merrill",
        relevantChapters: {
            fundamentals: "Part 1: Wholesaling Fundamentals",
            marketing: "Part 2: Marketing Strategies",
            systems: "Part 3: Building Systems"
        }
    },
    millionaireInvestor: {
        title: "The Millionaire Real Estate Investor",
        author: "Gary Keller",
        relevantChapters: {
            mindset: "Part 1: Think a Million",
            criteria: "Part 2: Buy a Million",
            network: "Part 3: Own a Million"
        }
    }
};

// Category mapping to book sections
const categoryToBookMap = {
    "Market Analysis": {
        primary: bookDatabase.wholesaling101.chapters.marketAnalysis,
        supplementary: [
            bookDatabase.brrrr.relevantChapters.dealFinding,
            bookDatabase.wholesalingBible.relevantChapters.fundamentals
        ]
    },
    "Realtor Relationships": {
        primary: bookDatabase.wholesaling101.chapters.realtorRelationships,
        supplementary: [
            bookDatabase.millionaireInvestor.relevantChapters.network
        ]
    },
    "Contractor Partnerships": {
        primary: bookDatabase.wholesaling101.chapters.contractorPartnerships,
        supplementary: [
            bookDatabase.flippingHouses.relevantChapters.contractors,
            bookDatabase.flippingHouses.relevantChapters.rehab
        ]
    },
    "Seller Lead Generation": {
        primary: bookDatabase.wholesaling101.chapters.sellerMarketing,
        supplementary: [
            bookDatabase.wholesalingBible.relevantChapters.marketing
        ]
    },
    "Buyer Marketing & List Building": {
        primary: bookDatabase.wholesaling101.chapters.buyerMarketing,
        supplementary: [
            bookDatabase.millionaireInvestor.relevantChapters.network
        ]
    },
    "Lead Management & Automation": {
        primary: bookDatabase.wholesaling101.chapters.leadManagement,
        supplementary: [
            bookDatabase.wholesalingBible.relevantChapters.systems
        ]
    },
    "Networking & REIA": {
        primary: bookDatabase.wholesaling101.chapters.networking,
        supplementary: [
            bookDatabase.millionaireInvestor.relevantChapters.network
        ]
    },
    "Making Offers & Negotiations": {
        primary: bookDatabase.wholesaling101.chapters.makingOffers,
        supplementary: [
            bookDatabase.brrrr.relevantChapters.analysis,
            bookDatabase.flippingHouses.relevantChapters.dealAnalysis
        ]
    },
    "Property Marketing to Buyers": {
        primary: bookDatabase.wholesaling101.chapters.propertyMarketing,
        supplementary: [
            bookDatabase.wholesalingBible.relevantChapters.marketing
        ]
    },
    "Closing & Escrow Coordination": {
        primary: bookDatabase.wholesaling101.chapters.closing,
        supplementary: []
    }
};

// Practice exercises by category
const practiceExercises = {
    "Market Analysis": [
        "Grid 3 neighborhoods in your target market this week. Document rental listings, for-sale properties, and property conditions.",
        "Research 5 zip codes using City Data, Zillow, and Rentometer. Create a comparison spreadsheet.",
        "Identify 10 rental properties on Craigslist and analyze pricing trends.",
        "Drive through your target area and photograph distressed properties. Note addresses and conditions."
    ],
    "Realtor Relationships": [
        "Contact 5 Realtors and interview them about their investor experience.",
        "Attend an open house and discuss investment opportunities with the listing agent.",
        "Create a presentation showing how you can provide volume deals to a Realtor partner.",
        "Research REO listings in your market and identify which agents handle them."
    ],
    "Contractor Partnerships": [
        "Build a local rehab pricing checklist for 20 common repairs in your market.",
        "Get estimates from 3 contractors on a sample property to compare pricing.",
        "Visit a Home Depot and price out materials for a typical kitchen renovation.",
        "Watch YouTube videos on estimating rehab costs and take notes."
    ],
    "Seller Lead Generation": [
        "Design a direct mail postcard targeting motivated sellers in foreclosure.",
        "Create 3 different Facebook ad campaigns targeting distressed homeowners.",
        "Order and install 20 bandit signs in high-traffic areas (check local laws).",
        "Set up a Google My Business profile for your wholesaling business."
    ],
    "Buyer Marketing & List Building": [
        "Attend a local REIA meeting and collect contact info from 10 investor buyers.",
        "Create buyer intake forms to document investment criteria.",
        "Post a property deal on Facebook investor groups and track responses.",
        "Build an email template for marketing deals to your buyers list."
    ],
    "Lead Management & Automation": [
        "Research and sign up for a CRM system (try free trials of 3 platforms).",
        "Create automated email sequences for seller follow-up.",
        "Set up a simple spreadsheet to track all leads and their status.",
        "Implement a task reminder system for follow-ups."
    ],
    "Networking & REIA": [
        "Attend 2 REIA meetings this month and introduce yourself to 5 people at each.",
        "Connect with a hard money lender and learn their lending criteria.",
        "Schedule coffee meetings with 3 experienced investors to learn from them.",
        "Join online real estate investing communities and contribute value."
    ],
    "Making Offers & Negotiations": [
        "Analyze 25 properties and calculate maximum offer prices using 50% ARV rule.",
        "Submit 10 offers this week on properties that meet your criteria.",
        "Practice your offer explanation script with a friend or mentor.",
        "Create a spreadsheet to track all offers made and their outcomes."
    ],
    "Property Marketing to Buyers": [
        "Create a professional property presentation template with photos, numbers, and analysis.",
        "Build an email broadcast system to send deals to your buyers list.",
        "Practice pitching a deal over the phone to an investor buyer.",
        "Create a Facebook group for your investor buyers to market deals."
    ],
    "Closing & Escrow Coordination": [
        "Interview 3 title companies and compare their fees and services.",
        "Review a sample wholesale assignment contract with your attorney.",
        "Create a closing checklist to ensure smooth transactions.",
        "Build relationships with closing coordinators at your chosen title company."
    ]
};

/**
 * Generate comprehensive personalized study plan
 */
function generatePremiumStudyPlan(quizResults, categoryResults, userAnswers, questions) {
    const plan = {
        userInfo: {
            overallScore: quizResults.percentage,
            difficulty: quizResults.difficulty,
            date: new Date().toLocaleDateString(),
            totalQuestions: questions.length
        },
        priorityAreas: [],
        weeklyPlan: [],
        readingSchedule: [],
        practiceExercises: [],
        milestones: []
    };

    // Identify priority areas (weak categories)
    const sortedCategories = Object.entries(categoryResults)
        .map(([category, data]) => ({
            category,
            percentage: Math.round((data.correct / data.total) * 100),
            correct: data.correct,
            total: data.total
        }))
        .sort((a, b) => a.percentage - b.percentage);

    // Top 3 weakest areas become priorities
    plan.priorityAreas = sortedCategories.slice(0, 3);

    // Generate 30-day weekly plan
    plan.weeklyPlan = generateWeeklyPlan(plan.priorityAreas, sortedCategories);

    // Generate reading schedule
    plan.readingSchedule = generateReadingSchedule(plan.priorityAreas, sortedCategories);

    // Assign practice exercises
    plan.practiceExercises = generatePracticeExercises(plan.priorityAreas);

    // Set milestones
    plan.milestones = generateMilestones(plan.priorityAreas);

    return plan;
}

function generateWeeklyPlan(priorities, allCategories) {
    const weeks = [];

    // Week 1: Focus on #1 priority
    weeks.push({
        week: 1,
        focus: priorities[0].category,
        goal: `Build foundational understanding of ${priorities[0].category}`,
        dailyActions: [
            `Day 1: Read primary book chapter on ${priorities[0].category}`,
            `Day 2-3: Complete comprehension notes and highlight key concepts`,
            `Day 4-5: Watch 3-5 YouTube tutorials on the topic`,
            `Day 6: Complete first practice exercise`,
            `Day 7: Review week's learning and self-assess understanding`
        ]
    });

    // Week 2: Continue #1, introduce #2
    weeks.push({
        week: 2,
        focus: `${priorities[0].category} + ${priorities[1].category}`,
        goal: `Deepen ${priorities[0].category} and introduce ${priorities[1].category}`,
        dailyActions: [
            `Day 8: Complete second practice exercise for ${priorities[0].category}`,
            `Day 9-10: Read primary chapter on ${priorities[1].category}`,
            `Day 11: Begin implementing ${priorities[0].category} strategies in real market`,
            `Day 12-13: Study supplementary materials for both topics`,
            `Day 14: Take practice quiz on both categories`
        ]
    });

    // Week 3: Focus on #2 and #3
    weeks.push({
        week: 3,
        focus: `${priorities[1].category} + ${priorities[2].category}`,
        goal: `Master ${priorities[1].category} and begin ${priorities[2].category}`,
        dailyActions: [
            `Day 15-16: Complete practice exercises for ${priorities[1].category}`,
            `Day 17: Read primary chapter on ${priorities[2].category}`,
            `Day 18-19: Apply ${priorities[1].category} strategies in your market`,
            `Day 20: Case study analysis for all three priority areas`,
            `Day 21: Mid-point assessment - retake quiz sections`
        ]
    });

    // Week 4: Integration and mastery
    weeks.push({
        week: 4,
        focus: "Integration & Real-World Application",
        goal: "Combine all learning and apply to actual wholesaling activities",
        dailyActions: [
            `Day 22-23: Complete advanced exercises for ${priorities[2].category}`,
            `Day 24: Create your personalized action plan for next 90 days`,
            `Day 25-26: Execute real deals incorporating all three priority areas`,
            `Day 27: Review all book chapters and notes from month`,
            `Day 28-30: Final mastery assessment - complete full quiz again`
        ]
    });

    return weeks;
}

function generateReadingSchedule(priorities, allCategories) {
    const schedule = [];

    priorities.forEach((priority, index) => {
        const bookRef = categoryToBookMap[priority.category];
        if (bookRef) {
            schedule.push({
                week: index + 1,
                category: priority.category,
                primaryReading: {
                    book: bookDatabase.wholesaling101.title,
                    chapter: bookRef.primary.chapter,
                    pages: bookRef.primary.pages,
                    estimatedTime: "2-3 hours",
                    keyTopics: bookRef.primary.keyTopics
                },
                supplementaryReading: bookRef.supplementary.map(supp => ({
                    reference: supp,
                    estimatedTime: "1-2 hours"
                }))
            });
        }
    });

    // Add general reading for week 4
    schedule.push({
        week: 4,
        category: "Integration & Mindset",
        primaryReading: {
            book: bookDatabase.millionaireInvestor.title,
            chapter: bookDatabase.millionaireInvestor.relevantChapters.mindset,
            estimatedTime: "2 hours",
            keyTopics: ["Investor mindset", "Long-term strategy", "Building wealth"]
        }
    });

    return schedule;
}

function generatePracticeExercises(priorities) {
    const exercises = [];

    priorities.forEach((priority, index) => {
        const categoryExercises = practiceExercises[priority.category] || [];
        exercises.push({
            category: priority.category,
            week: index + 1,
            exercises: categoryExercises,
            completionCriteria: `Complete at least 3 out of ${categoryExercises.length} exercises`,
            successMetrics: `Document your work and results for each exercise`
        });
    });

    return exercises;
}

function generateMilestones(priorities) {
    return [
        {
            week: 1,
            milestone: `Complete all reading for ${priorities[0].category}`,
            checkIn: "Can you explain the core concepts to someone else?"
        },
        {
            week: 2,
            milestone: `Execute first real-world practice exercise`,
            checkIn: "Did you take action in your market this week?"
        },
        {
            week: 3,
            milestone: `Master all three priority areas through practice`,
            checkIn: "Have you completed exercises for each weak category?"
        },
        {
            week: 4,
            milestone: `Score 80%+ on full quiz retake`,
            checkIn: "Are you ready to apply this knowledge to close deals?"
        }
    ];
}

/**
 * Format study plan as downloadable HTML/PDF content
 */
function formatStudyPlanHTML(plan) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Personalized 30-Day Wholesale Study Plan</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1 { color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 10px; }
        h2 { color: #3b82f6; margin-top: 30px; }
        h3 { color: #6366f1; }
        .header { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 30px; border-radius: 10px; margin-bottom: 30px; }
        .priority { background: #fef3c7; padding: 15px; border-left: 5px solid #f59e0b; margin: 15px 0; }
        .week-plan { background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .exercise { background: #e0f2fe; padding: 12px; margin: 10px 0; border-radius: 5px; }
        .milestone { background: #d1fae5; padding: 15px; border-left: 5px solid #10b981; margin: 15px 0; }
        ul { padding-left: 25px; }
        li { margin: 8px 0; }
        .book-ref { font-style: italic; color: #6366f1; }
        @media print { body { max-width: 100%; } }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎓 Your Personalized 30-Day Wholesale Real Estate Study Plan</h1>
        <p><strong>Generated:</strong> ${plan.userInfo.date}</p>
        <p><strong>Your Score:</strong> ${plan.userInfo.overallScore}% on ${plan.userInfo.difficulty} difficulty</p>
    </div>

    <h2>🎯 Your Priority Focus Areas</h2>
    ${plan.priorityAreas.map((area, i) => `
        <div class="priority">
            <h3>Priority #${i+1}: ${area.category}</h3>
            <p><strong>Current Performance:</strong> ${area.percentage}% (${area.correct}/${area.total} correct)</p>
            <p><strong>Goal:</strong> Reach 80%+ understanding within ${i === 0 ? '7' : i === 1 ? '14' : '21'} days</p>
        </div>
    `).join('')}

    <h2>📅 Your 30-Day Weekly Study Plan</h2>
    ${plan.weeklyPlan.map(week => `
        <div class="week-plan">
            <h3>Week ${week.week}: ${week.focus}</h3>
            <p><strong>Goal:</strong> ${week.goal}</p>
            <h4>Daily Action Items:</h4>
            <ul>
                ${week.dailyActions.map(action => `<li>${action}</li>`).join('')}
            </ul>
        </div>
    `).join('')}

    <h2>📚 Customized Reading Schedule</h2>
    ${plan.readingSchedule.map(reading => `
        <div class="week-plan">
            <h3>Week ${reading.week}: ${reading.category}</h3>
            <p class="book-ref"><strong>Primary Reading:</strong> "${reading.primaryReading.book}"</p>
            <p><strong>Chapter:</strong> ${reading.primaryReading.chapter}</p>
            ${reading.primaryReading.pages ? `<p><strong>Pages:</strong> ${reading.primaryReading.pages}</p>` : ''}
            <p><strong>Time Investment:</strong> ${reading.primaryReading.estimatedTime}</p>
            ${reading.primaryReading.keyTopics ? `
                <p><strong>Key Topics to Master:</strong></p>
                <ul>
                    ${reading.primaryReading.keyTopics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
            ` : ''}
            ${reading.supplementaryReading && reading.supplementaryReading.length > 0 ? `
                <p><strong>Supplementary Reading:</strong></p>
                <ul>
                    ${reading.supplementaryReading.map(supp => `
                        <li>${supp.reference} (${supp.estimatedTime})</li>
                    `).join('')}
                </ul>
            ` : ''}
        </div>
    `).join('')}

    <h2>💪 Practice Exercises</h2>
    ${plan.practiceExercises.map(exercise => `
        <div class="exercise">
            <h3>Week ${exercise.week}: ${exercise.category}</h3>
            <p><strong>Completion Criteria:</strong> ${exercise.completionCriteria}</p>
            <ul>
                ${exercise.exercises.map(ex => `<li>${ex}</li>`).join('')}
            </ul>
            <p><strong>Success Metrics:</strong> ${exercise.successMetrics}</p>
        </div>
    `).join('')}

    <h2>🏆 Weekly Milestones & Check-Ins</h2>
    ${plan.milestones.map(milestone => `
        <div class="milestone">
            <h3>Week ${milestone.week} Milestone</h3>
            <p><strong>Target:</strong> ${milestone.milestone}</p>
            <p><strong>Self-Check:</strong> ${milestone.checkIn}</p>
        </div>
    `).join('')}

    <h2>📖 Complete Book List</h2>
    <ul>
        <li><strong>"${bookDatabase.wholesaling101.title}"</strong> by ${bookDatabase.wholesaling101.author} - PRIMARY RESOURCE</li>
        <li><strong>"${bookDatabase.flippingHouses.title}"</strong> by ${bookDatabase.flippingHouses.author}</li>
        <li><strong>"${bookDatabase.brrrr.title}"</strong> by ${bookDatabase.brrrr.author}</li>
        <li><strong>"${bookDatabase.wholesalingBible.title}"</strong> by ${bookDatabase.wholesalingBible.author}</li>
        <li><strong>"${bookDatabase.millionaireInvestor.title}"</strong> by ${bookDatabase.millionaireInvestor.author}</li>
    </ul>

    <h2>✅ Next Steps</h2>
    <ol>
        <li>Print or save this study plan for easy reference</li>
        <li>Order or borrow the recommended books immediately</li>
        <li>Block out study time on your calendar for the next 30 days</li>
        <li>Join your local REIA to find accountability partners</li>
        <li>Set a reminder to retake the quiz after 30 days</li>
    </ol>

    <div style="margin-top: 50px; padding: 20px; background: #f9fafb; border-radius: 10px; text-align: center;">
        <p><strong>Remember:</strong> Knowledge without action is meaningless. Complete this plan AND take massive action in your market!</p>
        <p style="margin-top: 20px; font-size: 0.9em; color: #6b7280;">Educational content inspired by industry-leading wholesaling books • For learning purposes only</p>
    </div>
</body>
</html>
    `;
}
