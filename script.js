// ============================================
// WHOLESALE REAL ESTATE QUIZ - APPLICATION LOGIC
// Comprehensive State Management and Quiz Engine
// ============================================

/**
 * Application State Management
 * Centralized state object tracking all quiz data
 */
const state = {
    config: {
        topics: [],
        difficulty: 'medium',
        questionCount: 25,
        timeLimit: 'none'
    },
    currentQuestions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    timer: {
        intervalId: null,
        remainingSeconds: 0,
        startTime: null
    },
    theme: 'light'
};

// DOM Element References (cached for performance)
const elements = {
    // Pages
    homePage: document.getElementById('homePage'),
    configPage: document.getElementById('configPage'),
    quizPage: document.getElementById('quizPage'),
    resultsPage: document.getElementById('resultsPage'),
    
    // Home page
    startBtn: document.getElementById('startBtn'),

    
    // Config page
    topicCheckboxes: document.getElementById('topicCheckboxes'),
    questionCountSlider: document.getElementById('questionCount'),
    questionCountValue: document.getElementById('questionCountValue'),
    backToHomeBtn: document.getElementById('backToHomeBtn'),
    beginQuizBtn: document.getElementById('beginQuizBtn'),
    
    // Quiz page
    timerDisplay: document.getElementById('timerDisplay'),
    timerText: document.getElementById('timerText'),
    questionProgress: document.getElementById('questionProgress'),
    categoryDisplay: document.getElementById('categoryDisplay'),
    progressFill: document.getElementById('progressFill'),
    questionCard: document.getElementById('questionCard'),
    questionType: document.getElementById('questionType'),
    questionDifficulty: document.getElementById('questionDifficulty'),
    questionText: document.getElementById('questionText'),
    questionContext: document.getElementById('questionContext'),
    optionsContainer: document.getElementById('optionsContainer'),
    multiSelectHint: document.getElementById('multiSelectHint'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    submitBtn: document.getElementById('submitBtn'),
    
    // Results page
    finalScore: document.getElementById('finalScore'),
    correctCount: document.getElementById('correctCount'),
    incorrectCount: document.getElementById('incorrectCount'),
    performanceLevel: document.getElementById('performanceLevel'),
    categoryCharts: document.getElementById('categoryCharts'),
    strategicAnalysis: document.getElementById('strategicAnalysis'),
    detailedFeedback: document.getElementById('detailedFeedback'),
    toggleDetailedFeedback: document.getElementById('toggleDetailedFeedback'),
    recommendations: document.getElementById('recommendations'),
    retakeBtn: document.getElementById('retakeBtn'),
    newConfigBtn: document.getElementById('newConfigBtn'),
    
    // Theme toggle
    themeToggle: document.getElementById('themeToggle')
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    populateTopicCheckboxes();
    attachEventListeners();
});

// ============================================
// THEME MANAGEMENT
// ============================================

function loadTheme() {
    const savedTheme = localStorage.getItem('quizTheme') || 'light';
    state.theme = savedTheme;
    applyTheme(savedTheme);
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(state.theme);
    localStorage.setItem('quizTheme', state.theme);
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        elements.themeToggle.querySelector('.theme-icon').textContent = '☀️';
    } else {
        document.body.classList.remove('dark-theme');
        elements.themeToggle.querySelector('.theme-icon').textContent = '🌙';
    }
}

// Last performance tracking removed - cleaner home page experience

// ============================================
// CONFIGURATION PAGE
// ============================================

function populateTopicCheckboxes() {
    const categories = getAvailableCategories();
    elements.topicCheckboxes.innerHTML = categories.map(cat => `
        <label class="checkbox-option">
            <input type="checkbox" value="${cat}" checked>
            <span>${cat}</span>
        </label>
    `).join('');
}

function updateSliderValue() {
    elements.questionCountValue.textContent = elements.questionCountSlider.value;
}

function validateAndStartQuiz() {
    // Get selected topics
    const checkedBoxes = elements.topicCheckboxes.querySelectorAll('input[type="checkbox"]:checked');
    const selectedTopics = Array.from(checkedBoxes).map(cb => cb.value);
    
    if (selectedTopics.length === 0) {
        alert('Please select at least one topic for your assessment.');
        return;
    }
    
    // Get difficulty
    const difficultyRadio = document.querySelector('input[name="difficulty"]:checked');
    const difficulty = difficultyRadio ? difficultyRadio.value : 'medium';
    
    // Get question count
    const questionCount = parseInt(elements.questionCountSlider.value);
    
    // Get time limit
    const timeLimitRadio = document.querySelector('input[name="timeLimit"]:checked');
    const timeLimit = timeLimitRadio ? timeLimitRadio.value : 'none';
    
    // Update state configuration
    state.config = {
        topics: selectedTopics,
        difficulty: difficulty,
        questionCount: questionCount,
        timeLimit: timeLimit
    };
    
    startQuiz();
}

// ============================================
// QUIZ ENGINE
// ============================================

function startQuiz() {
    // Get filtered questions based on configuration
    state.currentQuestions = getFilteredQuestions(state.config);
    
    if (state.currentQuestions.length === 0) {
        alert('No questions available for your selected criteria. Please adjust your configuration.');
        return;
    }
    
    // Initialize user answers array
    state.userAnswers = new Array(state.currentQuestions.length).fill(null);
    state.currentQuestionIndex = 0;
    
    // Show countdown before starting quiz
    showCountdown();
}

function showCountdown() {
    const overlay = document.getElementById('countdownOverlay');
    const numberEl = document.getElementById('countdownNumber');
    let count = 3;
    
    // Show overlay
    overlay.style.display = 'flex';
    numberEl.textContent = count;
    numberEl.className = 'countdown-number';
    
    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            numberEl.textContent = count;
            // Re-trigger animation
            numberEl.classList.remove('countdown-number');
            void numberEl.offsetWidth; // Force reflow
            numberEl.classList.add('countdown-number');
        } else {
            // Show "GO!"
            numberEl.textContent = 'GO!';
            numberEl.classList.add('countdown-go');
            
            // Start quiz after brief delay
            setTimeout(() => {
                overlay.style.display = 'none';
                beginQuiz();
            }, 800);
            
            clearInterval(countdownInterval);
        }
    }, 1000);
}

function beginQuiz() {
    // Setup timer if enabled
    if (state.config.timeLimit !== 'none') {
        setupTimer(parseInt(state.config.timeLimit));
    }
    
    // Show quiz page
    showPage('quizPage');
    loadQuestion();
}

function setupTimer(minutes) {
    state.timer.remainingSeconds = minutes * 60;
    state.timer.startTime = Date.now();
    elements.timerDisplay.style.display = 'flex';
    
    updateTimerDisplay();
    
    state.timer.intervalId = setInterval(() => {
        state.timer.remainingSeconds--;
        updateTimerDisplay();
        
        if (state.timer.remainingSeconds <= 0) {
            clearInterval(state.timer.intervalId);
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(state.timer.remainingSeconds / 60);
    const seconds = state.timer.remainingSeconds % 60;
    const timeStr = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    elements.timerText.textContent = timeStr;
    
    // Add warning classes
    elements.timerDisplay.classList.remove('warning', 'danger');
    if (state.timer.remainingSeconds <= 60) {
        elements.timerDisplay.classList.add('danger');
    } else if (state.timer.remainingSeconds <= 300) {
        elements.timerDisplay.classList.add('warning');
    }
}

function loadQuestion() {
    const question = state.currentQuestions[state.currentQuestionIndex];
    
    // Update progress
    const progress = ((state.currentQuestionIndex + 1) / state.currentQuestions.length) * 100;
    elements.progressFill.style.width = progress + '%';
    elements.questionProgress.textContent = `Question ${state.currentQuestionIndex + 1} of ${state.currentQuestions.length}`;
    elements.categoryDisplay.textContent = question.category;
    
    // Update question content
    elements.questionType.textContent = question.type === 'multiple' ? 'Multiple Select' : 'Single Select';
    elements.questionDifficulty.textContent = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1);
    elements.questionDifficulty.className = `difficulty-badge ${question.difficulty}`;
    
    elements.questionText.textContent = question.question;
    
    // Handle context (scenario)
    if (question.context) {
        elements.questionContext.textContent = question.context;
        elements.questionContext.style.display = 'block';
    } else {
        elements.questionContext.style.display = 'none';
    }
    
    // Show multi-select hint
    elements.multiSelectHint.style.display = question.type === 'multiple' ? 'block' : 'none';
    
    // Render options
    renderOptions(question);
    
    // Update navigation buttons
    updateNavigationButtons();
}

function renderOptions(question) {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const userAnswer = state.userAnswers[state.currentQuestionIndex];
    
    elements.optionsContainer.innerHTML = question.options.map((option, index) => {
        const isSelected = Array.isArray(userAnswer) ? userAnswer.includes(index) : userAnswer === index;
        return `
            <div class="option ${isSelected ? 'selected' : ''}" data-index="${index}">
                <span class="option-letter">${letters[index]}</span>
                <span>${option}</span>
            </div>
        `;
    }).join('');
    
    // Attach click handlers
    const optionElements = elements.optionsContainer.querySelectorAll('.option');
    optionElements.forEach(opt => {
        opt.addEventListener('click', () => {
            const index = parseInt(opt.dataset.index);
            if (question.type === 'multiple') {
                selectMultipleOption(index);
            } else {
                selectOption(index);
            }
        });
    });
}

function selectOption(index) {
    state.userAnswers[state.currentQuestionIndex] = index;
    const question = state.currentQuestions[state.currentQuestionIndex];
    renderOptions(question);
}

function selectMultipleOption(index) {
    let userAnswer = state.userAnswers[state.currentQuestionIndex];
    
    if (!Array.isArray(userAnswer)) {
        userAnswer = [];
    }
    
    if (userAnswer.includes(index)) {
        userAnswer = userAnswer.filter(i => i !== index);
    } else {
        userAnswer.push(index);
    }
    
    state.userAnswers[state.currentQuestionIndex] = userAnswer.length > 0 ? userAnswer : null;
    const question = state.currentQuestions[state.currentQuestionIndex];
    renderOptions(question);
}

function updateNavigationButtons() {
    // Previous button
    elements.prevBtn.disabled = state.currentQuestionIndex === 0;
    
    // Next/Submit button
    const isLastQuestion = state.currentQuestionIndex === state.currentQuestions.length - 1;
    elements.nextBtn.style.display = isLastQuestion ? 'none' : 'inline-flex';
    elements.submitBtn.style.display = isLastQuestion ? 'block' : 'none';
}

function previousQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (state.currentQuestionIndex < state.currentQuestions.length - 1) {
        state.currentQuestionIndex++;
        loadQuestion();
    }
}

function submitQuiz() {
    // Stop timer if running
    if (state.timer.intervalId) {
        clearInterval(state.timer.intervalId);
    }
    
    // Check if all questions answered
    const unanswered = state.userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        const confirmSubmit = confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`);
        if (!confirmSubmit) return;
    }
    
    calculateResults();
    showPage('resultsPage');
}

// ============================================
// RESULTS CALCULATION & DISPLAY
// ============================================

function calculateResults() {
    let correctCount = 0;
    let totalPoints = 0;
    let earnedPoints = 0;
    
    const categoryResults = {};
    
    state.currentQuestions.forEach((question, index) => {
        const userAnswer = state.userAnswers[index];
        const correctAnswers = question.correctAnswers;
        
        // Initialize category tracking
        if (!categoryResults[question.category]) {
            categoryResults[question.category] = {
                correct: 0,
                total: 0
            };
        }
        
        categoryResults[question.category].total++;
        
        // Calculate score for this question
        if (question.type === 'single') {
            totalPoints++;
            if (userAnswer === correctAnswers[0]) {
                correctCount++;
                earnedPoints++;
                categoryResults[question.category].correct++;
            }
        } else {
            // Multiple select - partial credit possible
            totalPoints += correctAnswers.length;
            
            if (Array.isArray(userAnswer)) {
                const correctSelected = userAnswer.filter(a => correctAnswers.includes(a)).length;
                const incorrectSelected = userAnswer.filter(a => !correctAnswers.includes(a)).length;
                const points = Math.max(0, correctSelected - incorrectSelected);
                earnedPoints += points;
                
                if (correctSelected === correctAnswers.length && incorrectSelected === 0) {
                    correctCount++;
                    categoryResults[question.category].correct++;
                }
            }
        }
    });
    
    const percentage = Math.round((earnedPoints / totalPoints) * 100);
    const questionCorrect = correctCount;
    const questionIncorrect = state.currentQuestions.length - correctCount;
    
    // Display overall results
    elements.finalScore.textContent = percentage + '%';
    elements.correctCount.textContent = questionCorrect;
    elements.incorrectCount.textContent = questionIncorrect;
    
    // Performance level
    let performanceLevel = '';
    if (percentage >= 90) performanceLevel = 'Excellent';
    else if (percentage >= 75) performanceLevel = 'Good';
    else if (percentage >= 60) performanceLevel = 'Fair';
    else performanceLevel = 'Needs Improvement';
    
    elements.performanceLevel.textContent = performanceLevel;
    
    // Generate category charts
    generateCategoryCharts(categoryResults);
    
    // Generate strategic analysis
    generateAnalysis(percentage, categoryResults);
    
    // Generate detailed feedback
    generateDetailedFeedback();
    
    // Generate recommendations
    generateRecommendations(categoryResults);
}

function generateCategoryCharts(categoryResults) {
    elements.categoryCharts.innerHTML = Object.entries(categoryResults)
        .sort(([catA], [catB]) => catA.localeCompare(catB))
        .map(([category, data]) => {
            const percentage = Math.round((data.correct / data.total) * 100);
            return `
                <div class="category-chart">
                    <div class="chart-header">
                        <span class="chart-category">${category}</span>
                        <span class="chart-percentage">${percentage}%</span>
                    </div>
                    <div class="chart-bar-container">
                        <div class="chart-bar" style="width: ${percentage}%"></div>
                    </div>
                    <div class="chart-stats">
                        <span>${data.correct} correct</span>
                        <span>${data.total - data.correct} incorrect</span>
                        <span>${data.total} total</span>
                    </div>
                </div>
            `;
        }).join('');
}

function generateAnalysis(percentage, categoryResults) {
    let badgeClass = '';
    let badgeText = '';
    if (percentage >= 90) {
        badgeClass = 'excellent';
        badgeText = 'Excellent';
    } else if (percentage >= 75) {
        badgeClass = 'good';
        badgeText = 'Good';
    } else if (percentage >= 60) {
        badgeClass = 'fair';
        badgeText = 'Fair';
    } else {
        badgeClass = 'needs-improvement';
        badgeText = 'Needs Improvement';
    }
    
    let analysis = `
        <p>Your overall performance is <span class="performance-badge ${badgeClass}">${badgeText}</span></p>
    `;
    
    // Identify strengths and weaknesses
    const strengths = [];
    const weaknesses = [];
    
    Object.entries(categoryResults).forEach(([category, data]) => {
        const catPercentage = (data.correct / data.total) * 100;
        if (catPercentage >= 75) {
            strengths.push(category);
        } else if (catPercentage < 50) {
            weaknesses.push(category);
        }
    });
    
    if (strengths.length > 0) {
        analysis += `
            <h3>🌟 Your Strengths</h3>
            <ul>
                ${strengths.map(s => `<li>${s}: You demonstrate strong understanding in this area.</li>`).join('')}
            </ul>
        `;
    }
    
    if (weaknesses.length > 0) {
        analysis += `
            <h3>⚠️ Areas for Improvement</h3>
            <ul>
                ${weaknesses.map(w => `<li class="weakness">${w}: Focus your study efforts here to strengthen your wholesaling knowledge.</li>`).join('')}
            </ul>
        `;
    }
    
    // Strategic feedback based on difficulty
    if (state.config.difficulty === 'easy' && percentage >= 80) {
        analysis += `<p>You've mastered the fundamentals! Consider challenging yourself with Medium or Hard difficulty to test your strategic thinking and decision-making abilities.</p>`;
    } else if (state.config.difficulty === 'medium' && percentage >= 85) {
        analysis += `<p>Excellent work on applied scenarios! You're ready for Hard difficulty questions that test complex judgment and expert-level decision-making in challenging wholesaling situations.</p>`;
    } else if (state.config.difficulty === 'hard' && percentage >= 80) {
        analysis += `<p>Outstanding! You've demonstrated expert-level wholesaling knowledge and strategic thinking. You're well-prepared to handle complex real-world situations and scale your wholesale business effectively.</p>`;
    } else if (percentage < 60) {
        analysis += `<p>Focus on building foundational knowledge in your weak areas. Review the book chapters referenced in the feedback, practice analyzing deals, and consider retaking the assessment on Easy difficulty to build confidence.</p>`;
    }
    
    elements.strategicAnalysis.innerHTML = analysis;
}

function generateDetailedFeedback() {
    // ALL QUESTIONS ARE NOW FREE - No paywall
    const totalQuestions = state.currentQuestions.length;
    
    const feedback = state.currentQuestions.map((question, index) => {
        const userAnswer = state.userAnswers[index];
        const correctAnswers = question.correctAnswers;
        
        let isCorrect = false;
        if (question.type === 'single') {
            isCorrect = userAnswer === correctAnswers[0];
        } else {
            if (Array.isArray(userAnswer)) {
                const correctSelected = userAnswer.filter(a => correctAnswers.includes(a)).length;
                const incorrectSelected = userAnswer.filter(a => !correctAnswers.includes(a)).length;
                isCorrect = correctSelected === correctAnswers.length && incorrectSelected === 0;
            }
        }
        
        const userAnswerText = formatUserAnswer(question, userAnswer);
        const correctAnswerText = correctAnswers.map(i => question.options[i]).join(', ');
        
        // Show full feedback for ALL questions
        return `
            <div class="feedback-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="feedback-header">
                    <span class="feedback-question">${index + 1}. ${question.question}</span>
                    <span class="feedback-result ${isCorrect ? 'correct' : 'incorrect'}">
                        ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                </div>
                <div class="feedback-details">
                    <p><strong>Your Answer:</strong> ${userAnswerText}</p>
                    <p><strong>Correct Answer:</strong> ${correctAnswerText}</p>
                    <div class="feedback-explanation">
                        <strong>Explanation:</strong> ${question.explanation}
                    </div>
                    <p class="feedback-chapter"><strong>📚 Reference:</strong> ${question.sourceChapter}</p>
                </div>
            </div>
        `;
    }).join('');
    
    // No unlock prompt - all questions are free now
    elements.detailedFeedback.innerHTML = feedback;
}

function formatUserAnswer(question, userAnswer) {
    if (userAnswer === null) return '<em>Not answered</em>';
    
    if (Array.isArray(userAnswer)) {
        if (userAnswer.length === 0) return '<em>Not answered</em>';
        return userAnswer.map(i => question.options[i]).join(', ');
    }
    
    return question.options[userAnswer];
}

function generateRecommendations(categoryResults) {
    const recommendations = [];
    
    // Identify weak categories
    const weakCategories = Object.entries(categoryResults)
        .filter(([cat, data]) => (data.correct / data.total) < 0.5)
        .map(([cat]) => cat);
    
    // Generate category-specific recommendations
    const recMap = {
        'Market Analysis': {
            title: 'Market Analysis & Gridding',
            content: 'Spend time physically driving target neighborhoods. Use City Data, Zillow, and Rentometer to verify investor activity. Build a systematic approach to identifying high-demand areas before investing marketing dollars.',
            chapter: 'Step One: Analyze Your Market'
        },
        'Realtor Relationships': {
            title: 'Building Realtor Partnerships',
            content: 'Focus on mid-tier agents hungry for volume business. Demonstrate reliability by consistently closing deals. Show Realtors how your investor buyers need their services for rehab work and future deals.',
            chapter: 'Step Two: Meet with Realtors'
        },
        'Contractor Partnerships': {
            title: 'Understanding Rehab Costs',
            content: 'Create a local pricing checklist for common repairs (roof, HVAC, foundation, kitchens, baths). Build relationships with multiple contractors to verify estimates and avoid inflated repair cost assumptions.',
            chapter: 'Step Three: Meet with General Contractors'
        },
        'Seller Lead Generation': {
            title: 'Marketing to Motivated Sellers',
            content: 'Diversify your marketing channels: direct mail, online ads, bandit signs, guerrilla networking. Use vanity phone numbers for memorability. Target specific pain points (foreclosure, divorce, job loss) with empathetic messaging.',
            chapter: 'Step Four: Marketing Plan for Lead Generation'
        },
        'Buyer Marketing & List Building': {
            title: 'Building Your Buyers List',
            content: 'Interview buyers to understand their investment criteria deeply. Attend REIA meetings consistently. Provide value through education and market insights, not just deal flow. Build reciprocal referral relationships.',
            chapter: 'Step Five: Marketing Plan for Investors'
        },
        'Lead Management & Automation': {
            title: 'Systems & Lead Management',
            content: 'Implement a CRM with automated follow-up sequences. Ensure mobile access for field work. Track conversion rates at each pipeline stage. Use technology to scale without losing quality of engagement.',
            chapter: 'Step Six: Develop a Lead Management System'
        },
        'Networking & REIA': {
            title: 'Networking & Community Building',
            content: 'Join your local REIA and attend consistently. Build genuine relationships with investors, lenders, and service providers. If no REIA exists, consider starting one to position yourself as a community hub.',
            chapter: 'Step Seven: Join Your Local REIA'
        },
        'Making Offers & Negotiations': {
            title: 'Offer Strategy & Volume',
            content: 'Make hundreds of offers targeting 50% of ARV. Accept low acceptance rates (less than 5%). Use inspection contingencies to minimize risk. Don\'t fear rejection or offending sellers with low offers - discipline wins long-term.',
            chapter: 'Step Eight: Prepare to Make Offers'
        },
        'Property Marketing to Buyers': {
            title: 'Marketing Accepted Contracts',
            content: 'Immediately market properties upon contract acceptance. Maintain detailed buyer profiles to match deals quickly. Have backup buyers ready. Provide clear ARV, repair estimates, and profit potential upfront.',
            chapter: 'Step Nine: Market Your Property to Buyers'
        },
        'Closing & Escrow Coordination': {
            title: 'Closing Process Management',
            content: 'Build relationships with multiple title companies experienced in investor transactions. Test their service, speed, and fees. Choose partners who understand wholesale assignments and can handle high volume efficiently.',
            chapter: 'Step Ten: Set Up Appointment with Closing Attorney or Title Agent'
        }
    };
    
    // FREE VERSION: Show only top 3 recommendations, lock the rest
    const freeLimit = 3;
    
    // Add recommendations for weak areas (limited to 3 in free version)
    weakCategories.slice(0, freeLimit).forEach(cat => {
        if (recMap[cat]) {
            recommendations.push(`
                <div class="recommendation-item">
                    <h4>${recMap[cat].title}</h4>
                    <p>${recMap[cat].content}</p>
                    <p><strong>📖 Study:</strong> ${recMap[cat].chapter}</p>
                </div>
            `);
        }
    });
    
    // If there are more than 3 weak areas, show locked recommendations
    if (weakCategories.length > freeLimit) {
        const lockedCount = weakCategories.length - freeLimit;
        recommendations.push(`
            <div class="recommendation-item locked-recommendation">
                <div class="locked-content blurred">
                    <h4>Additional Focus Areas</h4>
                    <p>You have ${lockedCount} more areas that need attention with detailed study plans...</p>
                    <p><strong>📖 Study:</strong> Customized chapters based on your results</p>
                </div>
                <div class="unlock-overlay-small">
                    <div class="lock-icon">🔒</div>
                    <p><strong>Unlock ${lockedCount} More Recommendations</strong></p>
                </div>
            </div>
        `);
    }
    
    // Add general recommendations if doing well overall (always show this)
    if (weakCategories.length === 0) {
        recommendations.push(`
            <div class="recommendation-item">
                <h4>🎯 Continue Your Excellence</h4>
                <p>You're performing well across all categories! To further enhance your wholesaling success:</p>
                <ul>
                    <li>Implement systems from your knowledge</li>
                    <li>Teach others what you've learned</li>
                    <li>Focus on execution and massive action</li>
                </ul>
            </div>
        `);
    } else {
        // For users with weak areas, add teaser about premium actionable steps
        recommendations.push(`
            <div class="recommendation-item premium-teaser">
                <h4><i class="fas fa-brain"></i> Want a Complete Performance Analysis?</h4>
                <p>The free version shows your top ${freeLimit} focus areas. Upgrade to Premium to get:</p>
                <ul>
                    <li><i class="fas fa-check"></i> All ${weakCategories.length} personalized recommendations</li>
                    <li><i class="fas fa-check"></i> Deep thinking pattern analysis</li>
                    <li><i class="fas fa-check"></i> Decision-making framework assessment</li>
                    <li><i class="fas fa-check"></i> Strategic gaps identification</li>
                    <li><i class="fas fa-check"></i> Comprehensive improvement roadmap</li>
                </ul>
                <button onclick="document.getElementById('unlockPremiumBtn').scrollIntoView({behavior:'smooth'})" class="mini-unlock-btn primary-btn">
                    <i class="fas fa-unlock"></i> See Full Analysis - $14.99
                </button>
            </div>
        `);
    }
    
    elements.recommendations.innerHTML = recommendations.join('');
}

// ============================================
// PAGE NAVIGATION
// ============================================

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

// ============================================
// EVENT LISTENERS
// ============================================

function attachEventListeners() {
    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Home page
    elements.startBtn.addEventListener('click', () => showPage('configPage'));
    
    // Config page
    elements.questionCountSlider.addEventListener('input', updateSliderValue);
    elements.backToHomeBtn.addEventListener('click', () => showPage('homePage'));
    elements.beginQuizBtn.addEventListener('click', validateAndStartQuiz);
    
    // Quiz page
    elements.prevBtn.addEventListener('click', previousQuestion);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.submitBtn.addEventListener('click', submitQuiz);
    
    // Results page
    elements.toggleDetailedFeedback.addEventListener('click', toggleDetailedFeedbackDisplay);
    elements.retakeBtn.addEventListener('click', retakeQuiz);
    elements.newConfigBtn.addEventListener('click', () => showPage('configPage'));
    
    // Premium feature
    const unlockPremiumBtn = document.getElementById('unlockPremiumBtn');
    const closePremiumModal = document.getElementById('closePremiumModal');
    const premiumOrderModal = document.getElementById('premiumOrderModal');
    const premiumSuccessModal = document.getElementById('premiumSuccessModal');
    
    if (unlockPremiumBtn) {
        unlockPremiumBtn.addEventListener('click', handlePremiumPurchase);
    }
    
    if (closePremiumModal) {
        closePremiumModal.addEventListener('click', () => {
            premiumOrderModal.style.display = 'none';
        });
    }
    
    // Close modal on outside click (for the order modal)
    window.addEventListener('click', (e) => {
        if (e.target === premiumOrderModal) {
            premiumOrderModal.style.display = 'none';
        }
        if (e.target === premiumSuccessModal) {
            premiumSuccessModal.style.display = 'none';
        }
    });
}

function toggleDetailedFeedbackDisplay() {
    if (elements.detailedFeedback.style.display === 'none') {
        elements.detailedFeedback.style.display = 'block';
        elements.toggleDetailedFeedback.textContent = 'Hide Detailed Review';
    } else {
        elements.detailedFeedback.style.display = 'none';
        elements.toggleDetailedFeedback.textContent = 'Show Detailed Review';
    }
}

function retakeQuiz() {
    // Reset state but keep configuration
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    
    // Clear timer if exists
    if (state.timer.intervalId) {
        clearInterval(state.timer.intervalId);
    }
    state.timer = {
        intervalId: null,
        remainingSeconds: 0,
        startTime: null
    };
    
    // Restart quiz with same configuration
    startQuiz();
}

// ============================================
// PREMIUM FEATURE - MANUAL PAYMENT WORKFLOW
// ============================================

function handlePremiumPurchase() {
    // Show modal with Google Form + PayPal links
    const modal = document.getElementById('premiumOrderModal');
    modal.style.display = 'block';
    
    // Store results in sessionStorage for later reference if needed
    storeResultsForPremium();
}

function storeResultsForPremium() {
    // Calculate and store results for when you manually generate study plans
    const categoryResults = {};
    state.currentQuestions.forEach((question, index) => {
        if (!categoryResults[question.category]) {
            categoryResults[question.category] = {
                correct: 0,
                total: 0
            };
        }
        categoryResults[question.category].total++;
        
        const userAnswer = state.userAnswers[index];
        const correctAnswers = question.correctAnswers;
        
        if (question.type === 'single') {
            if (userAnswer === correctAnswers[0]) {
                categoryResults[question.category].correct++;
            }
        } else {
            if (Array.isArray(userAnswer)) {
                const correctSelected = userAnswer.filter(a => correctAnswers.includes(a)).length;
                const incorrectSelected = userAnswer.filter(a => !correctAnswers.includes(a)).length;
                if (correctSelected === correctAnswers.length && incorrectSelected === 0) {
                    categoryResults[question.category].correct++;
                }
            }
        }
    });
    
    // Calculate overall percentage
    let totalPoints = 0;
    let earnedPoints = 0;
    state.currentQuestions.forEach((question, index) => {
        const userAnswer = state.userAnswers[index];
        const correctAnswers = question.correctAnswers;
        
        if (question.type === 'single') {
            totalPoints++;
            if (userAnswer === correctAnswers[0]) {
                earnedPoints++;
            }
        } else {
            totalPoints += correctAnswers.length;
            if (Array.isArray(userAnswer)) {
                const correctSelected = userAnswer.filter(a => correctAnswers.includes(a)).length;
                const incorrectSelected = userAnswer.filter(a => !correctAnswers.includes(a)).length;
                const points = Math.max(0, correctSelected - incorrectSelected);
                earnedPoints += points;
            }
        }
    });
    
    const percentage = Math.round((earnedPoints / totalPoints) * 100);
    
    // Store in sessionStorage (persists until browser/tab closed)
    const resultsData = {
        percentage: percentage,
        difficulty: state.config.difficulty,
        categoryResults: categoryResults,
        timestamp: new Date().toISOString()
    };
    
    sessionStorage.setItem('quizResultsForPremium', JSON.stringify(resultsData));
    console.log('Results stored for premium study plan generation');
}

// Make downloadQuizResults globally accessible
window.downloadQuizResults = function() {
    console.log('downloadQuizResults called');
    console.log('state:', state);
    console.log('state.currentQuestions:', state.currentQuestions);
    
    // Generate comprehensive quiz results data for the customer to upload
    
    // Check if quiz data exists
    if (!state.currentQuestions || state.currentQuestions.length === 0) {
        alert('Please complete the quiz first before downloading results!');
        return;
    }
    
    console.log('Starting file generation...');
    
    const categoryResults = {};
    const detailedAnswers = [];
    
    state.currentQuestions.forEach((question, index) => {
        // Track category performance
        if (!categoryResults[question.category]) {
            categoryResults[question.category] = {
                correct: 0,
                total: 0
            };
        }
        categoryResults[question.category].total++;
        
        const userAnswer = state.userAnswers[index];
        const correctAnswers = question.correctAnswers;
        let isCorrect = false;
        
        // Check if answer is correct
        if (question.type === 'single') {
            isCorrect = userAnswer === correctAnswers[0];
            if (isCorrect) categoryResults[question.category].correct++;
        } else {
            if (Array.isArray(userAnswer)) {
                const correctSelected = userAnswer.filter(a => correctAnswers.includes(a)).length;
                const incorrectSelected = userAnswer.filter(a => !correctAnswers.includes(a)).length;
                isCorrect = correctSelected === correctAnswers.length && incorrectSelected === 0;
                if (isCorrect) categoryResults[question.category].correct++;
            }
        }
        
        // Store detailed answer info
        detailedAnswers.push({
            questionNumber: index + 1,
            category: question.category,
            questionText: question.question,
            userAnswer: Array.isArray(userAnswer) 
                ? userAnswer.map(i => question.options[i]) 
                : (userAnswer !== null ? question.options[userAnswer] : 'Not answered'),
            correctAnswer: correctAnswers.map(i => question.options[i]),
            isCorrect: isCorrect,
            explanation: question.explanation
        });
    });
    
    // Calculate overall score
    let totalPoints = 0;
    let earnedPoints = 0;
    state.currentQuestions.forEach((question, index) => {
        const userAnswer = state.userAnswers[index];
        const correctAnswers = question.correctAnswers;
        
        if (question.type === 'single') {
            totalPoints++;
            if (userAnswer === correctAnswers[0]) {
                earnedPoints++;
            }
        } else {
            totalPoints += correctAnswers.length;
            if (Array.isArray(userAnswer)) {
                const correctSelected = userAnswer.filter(a => correctAnswers.includes(a)).length;
                const incorrectSelected = userAnswer.filter(a => !correctAnswers.includes(a)).length;
                const points = Math.max(0, correctSelected - incorrectSelected);
                earnedPoints += points;
            }
        }
    });
    
    const overallScore = Math.round((earnedPoints / totalPoints) * 100);
    
    // Create comprehensive data object
    const resultsData = {
        testInfo: {
            completedDate: new Date().toISOString(),
            difficulty: state.config.difficulty,
            totalQuestions: state.currentQuestions.length,
            selectedCategories: state.config.topics || ['All Categories']
        },
        performance: {
            overallScore: overallScore,
            correctAnswers: earnedPoints,
            totalPoints: totalPoints,
            categoryBreakdown: Object.keys(categoryResults).map(category => ({
                category: category,
                correct: categoryResults[category].correct,
                total: categoryResults[category].total,
                percentage: Math.round((categoryResults[category].correct / categoryResults[category].total) * 100)
            }))
        },
        detailedAnswers: detailedAnswers
    };
    
    // Generate formatted text file content
    let fileContent = '='.repeat(60) + '\n';
    fileContent += 'WHOLESALE REAL ESTATE QUIZ RESULTS\n';
    fileContent += '='.repeat(60) + '\n\n';
    
    fileContent += 'TEST INFORMATION\n';
    fileContent += '-'.repeat(60) + '\n';
    fileContent += `Completed: ${new Date(resultsData.testInfo.completedDate).toLocaleString()}\n`;
    fileContent += `Difficulty: ${resultsData.testInfo.difficulty}\n`;
    fileContent += `Total Questions: ${resultsData.testInfo.totalQuestions}\n`;
    fileContent += `Categories: ${(resultsData.testInfo.selectedCategories || ['All Categories']).join(', ')}\n\n`;
    
    fileContent += 'OVERALL PERFORMANCE\n';
    fileContent += '-'.repeat(60) + '\n';
    fileContent += `Overall Score: ${resultsData.performance.overallScore}%\n`;
    fileContent += `Correct Answers: ${resultsData.performance.correctAnswers} / ${resultsData.performance.totalPoints}\n\n`;
    
    fileContent += 'CATEGORY BREAKDOWN\n';
    fileContent += '-'.repeat(60) + '\n';
    resultsData.performance.categoryBreakdown.forEach(cat => {
        fileContent += `${cat.category}: ${cat.correct}/${cat.total} (${cat.percentage}%)\n`;
    });
    fileContent += '\n';
    
    fileContent += 'DETAILED ANSWERS\n';
    fileContent += '='.repeat(60) + '\n\n';
    
    resultsData.detailedAnswers.forEach(answer => {
        fileContent += `Question ${answer.questionNumber} - ${answer.category}\n`;
        fileContent += `Status: ${answer.isCorrect ? '✓ CORRECT' : '✗ INCORRECT'}\n`;
        fileContent += `Q: ${answer.questionText}\n`;
        fileContent += `Your Answer: ${Array.isArray(answer.userAnswer) ? answer.userAnswer.join(', ') : answer.userAnswer}\n`;
        fileContent += `Correct Answer: ${answer.correctAnswer.join(', ')}\n`;
        fileContent += `Explanation: ${answer.explanation}\n`;
        fileContent += '-'.repeat(60) + '\n\n';
    });
    
    fileContent += '\n' + '='.repeat(60) + '\n';
    fileContent += 'END OF REPORT\n';
    fileContent += 'This file is for your Performance Analysis purchase.\n';
    fileContent += 'Please upload this file to the order form.\n';
    fileContent += '='.repeat(60);
    
    // Create and download the file
    console.log('Creating blob and downloading...');
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz-results-${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.log('Download triggered successfully!');
    
    // Update the status message
    const statusElement = document.getElementById('downloadStatus');
    if (statusElement) {
        statusElement.innerHTML = '<i class="fas fa-check-circle"></i> Downloaded! Upload this file in Step 3';
        statusElement.style.color = '#10b981';
    }
};

function generateAndDownloadStudyPlan() {
    // Check if premium study plan script is loaded
    if (typeof generatePremiumStudyPlan !== 'function') {
        alert('Premium feature is loading... Please try again in a moment.');
        return;
    }
    
    // Calculate results for study plan
    const categoryResults = {};
    state.currentQuestions.forEach((question, index) => {
        if (!categoryResults[question.category]) {
            categoryResults[question.category] = {
                correct: 0,
                total: 0
            };
        }
        categoryResults[question.category].total++;
        
        const userAnswer = state.userAnswers[index];
        const correctAnswers = question.correctAnswers;
        
        if (question.type === 'single') {
            if (userAnswer === correctAnswers[0]) {
                categoryResults[question.category].correct++;
            }
        } else {
            if (Array.isArray(userAnswer)) {
                const correctSelected = userAnswer.filter(a => correctAnswers.includes(a)).length;
                const incorrectSelected = userAnswer.filter(a => !correctAnswers.includes(a)).length;
                if (correctSelected === correctAnswers.length && incorrectSelected === 0) {
                    categoryResults[question.category].correct++;
                }
            }
        }
    });
    
    // Calculate overall percentage
    let totalPoints = 0;
    let earnedPoints = 0;
    state.currentQuestions.forEach((question, index) => {
        const userAnswer = state.userAnswers[index];
        const correctAnswers = question.correctAnswers;
        
        if (question.type === 'single') {
            totalPoints++;
            if (userAnswer === correctAnswers[0]) {
                earnedPoints++;
            }
        } else {
            totalPoints += correctAnswers.length;
            if (Array.isArray(userAnswer)) {
                const correctSelected = userAnswer.filter(a => correctAnswers.includes(a)).length;
                const incorrectSelected = userAnswer.filter(a => !correctAnswers.includes(a)).length;
                const points = Math.max(0, correctSelected - incorrectSelected);
                earnedPoints += points;
            }
        }
    });
    
    const percentage = Math.round((earnedPoints / totalPoints) * 100);
    
    const quizResults = {
        percentage: percentage,
        difficulty: state.config.difficulty,
        date: new Date()
    };
    
    // Generate study plan
    const studyPlan = generatePremiumStudyPlan(
        quizResults,
        categoryResults,
        state.userAnswers,
        state.currentQuestions
    );
    
    // Format as HTML
    const htmlContent = formatStudyPlanHTML(studyPlan);
    
    // Download as HTML file
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Personalized-Wholesale-Study-Plan-${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Update modal
    setTimeout(() => {
        const modal = document.getElementById('premiumSuccessModal');
        const modalContent = modal.querySelector('.modal-content');
        modalContent.innerHTML = `
            <span class="close-modal" id="closePremiumModalSuccess">&times;</span>
            <div class="success-icon">🎉</div>
            <h2>Your Study Plan is Ready!</h2>
            <p>Your personalized 30-day study plan has been downloaded.</p>
            <p style="margin-top: 20px; color: #6b7280;">Check your Downloads folder for:<br><strong>Personalized-Wholesale-Study-Plan.html</strong></p>
            <p style="margin-top: 15px; font-size: 0.95rem;">Open it in your browser and print or save as PDF for easy reference!</p>
            <button onclick="document.getElementById('premiumSuccessModal').style.display='none'" style="margin-top: 20px; padding: 12px 24px; background: #2563eb; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem;">Got it!</button>
        `;
        
        // Re-attach close button listener
        const newCloseBtn = document.getElementById('closePremiumModalSuccess');
        if (newCloseBtn) {
            newCloseBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
    }, 1000);
}

// Stripe integration placeholder
// In production, replace this with actual Stripe checkout
function initializeStripePayment() {
    // const stripe = Stripe('your_publishable_key');
    // const elements = stripe.elements();
    // Implementation here
}
