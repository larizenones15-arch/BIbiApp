<template>
  <div class="exam-container" :class="{ 'theme--dark': $vuetify.theme.dark }">
    <div v-if="pageLoading" class="loading-panel">
      <div class="spinner"></div>
      <h2>Loading Assessment Tasks...</h2>
      <p>Please wait while we set up your testing environment.</p>
    </div>

    <div v-else-if="!currentTopic && !showResults" class="dashboard-panel">
      <div class="panel-header">
        <h2>Select Your Examination Module</h2>
        <p class="subtitle">Choose a category below to test your technical competency skills.</p>
      </div>
      <div class="module-grid">
        <div class="module-card vue-theme" @click="startExam('vue_l2')">
          <div class="module-badge">Vue</div>
          <h3>Frontend Level 2</h3>
          <p>Vue.js 2.x Architecture, Component Lifecycles, and Reactive States.</p>
          <button class="btn accent-btn">Start Assessment</button>
        </div>
        <div class="module-card js-theme" @click="startExam('js_l1')">
          <div class="module-badge">JS</div>
          <h3>JavaScript Level 1</h3>
          <p>Core Fundamentals, Scope Isolation, Array Methods, and Basic Logic.</p>
          <button class="btn accent-btn">Start Assessment</button>
        </div>
      </div>
    </div>

    <div v-if="currentTopic && !showResults && !pageLoading" class="test-panel">
      <div class="test-header">
        <div>
          <span class="topic-tag">Active Session</span>
          <h3>{{ currentTopic === 'vue_l2' ? 'Vue.js Level 2 Examination' : 'JavaScript Level 1 Fundamentals' }}</h3>
        </div>
        <button @click="exitExam" class="btn cancel-btn">Exit Exam</button>
      </div>

      <div class="questions-wrapper">
        <div v-for="(q, index) in questions" :key="q.id" class="question-card">
          <div class="question-meta">
            <span class="q-number">Question {{ q.question_number }}</span>
          </div>
          <p class="question-text">{{ q.question_text }}</p>
          
          <div class="options-container">
            <label 
              v-for="(label, val) in q.options" 
              :key="val" 
              :class="['option-label', { 'is-selected': answers[q.id] === val }]"
            >
              <div class="radio-wrapper">
                <input 
                  type="radio" 
                  :name="'q_' + q.id" 
                  :value="val" 
                  v-model="answers[q.id]"
                />
                <span class="custom-radio"></span>
              </div>
              <span class="option-text">
                <template v-if="val === label">
                  <strong>{{ label }}</strong>
                </template>
                <template v-else>
                  <strong class="option-key">{{ val }}</strong> {{ label }}
                </template>
              </span>
            </label>
          </div>
        </div>
      </div>

      <div class="test-footer">
        <button @click="submitAnswers" :disabled="submitting" class="btn submit-btn">
          {{ submitting ? 'Evaluating Answers...' : 'Submit Final Answers for Evaluation' }}
        </button>
      </div>
    </div>

    <div v-if="showResults && !pageLoading" class="results-panel">
      <div class="results-header">
        <h2>Exam Summary Report</h2>
        <p>Your performance metrics have been compiled successfully.</p>
      </div>

      <div class="score-summary-card">
        <div class="score-segment">
          <span class="summary-label">Final Score</span>
          <p class="score-text"><strong>{{ results.score }}</strong> / {{ results.total }}</p>
        </div>
        <div class="divider"></div>
        <div class="score-segment">
          <span class="summary-label">Grade Percentage</span>
          <p class="percentage-text" :class="results.percentage >= 70 ? 'text-passed' : 'text-failed'">
            <strong>{{ results.percentage }}%</strong>
          </p>
        </div>
      </div>

      <div class="review-list">
        <h3>Question Evaluation Details</h3>
        <div 
          v-for="item in results.breakdown" 
          :key="item.question_number" 
          :class="['review-card', item.is_correct ? 'card-passed' : 'card-failed']"
        >
          <div class="review-card-header">
            <span class="q-number">Question {{ item.question_number }}</span>
            <span :class="['status-badge', item.is_correct ? 'badge-passed' : 'badge-failed']">
              {{ item.is_correct ? 'Correct' : 'Incorrect' }}
            </span>
          </div>
          <p class="review-question">{{ item.question_text }}</p>
          
          <div class="answers-comparison">
            <div class="response-pill">
              <span class="pill-label">Your Response:</span>
              <span class="pill-value" :class="{'text-muted': !item.user_answer}">
                {{ item.user_answer || 'Skipped' }}
              </span>
            </div>
            <div class="response-pill valid-pill">
              <span class="pill-label">Correct Key:</span>
              <span class="pill-value text-success">{{ item.correct_answer }}</span>
            </div>
          </div>
          
          <div v-if="item.explanation" class="explanation-box">
            <strong>Explanation:</strong> {{ item.explanation }}
          </div>
        </div>
      </div>

      <div class="actions-footer">
        <button @click="resetDashboard" class="btn return-btn">Return to Main Selection Menu</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      currentTopic: null,
      questions: [],
      answers: {},
      submitting: false,
      pageLoading: false,
      showResults: false,
      results: {
        score: 0,
        total: 0,
        percentage: 0,
        breakdown: []
      }
    };
  },
  methods: {
    async startExam(topic) {
      this.pageLoading = true;
      try {
        const res = await axios.get(`${this.$url}/api/exam/${topic}`);
        this.questions = res.data;
        this.currentTopic = topic;
        this.showResults = false;

        const initialAnswers = {};
        res.data.forEach(q => {
          this.$set(initialAnswers, q.id, null);
        });
        this.answers = initialAnswers;
      } catch (err) {
        alert("Failed to retrieve exam questions. Please verify connection metrics.");
        console.error(err);
      } finally {
        this.pageLoading = false;
      }
    },
    async submitAnswers() {
      if (!confirm('Are you sure you want to finish and submit your answers for evaluation?')) {
        return;
      }
      this.submitting = true;
      try {
        const res = await axios.post(`${this.$url}/api/exam`, {
          topic: this.currentTopic,
          answers: this.answers
        });
        this.results = res.data;
        this.showResults = true;
        this.currentTopic = null;
      } catch (err) {
        alert('Transmission error encountered during evaluation cycle.');
        console.error(err);
      } finally {
        this.submitting = false;
      }
    },
    exitExam() {
      if (confirm('Cancel assessment? Current input progress will be reset.')) {
        this.resetDashboard();
      }
    },
    resetDashboard() {
      this.currentTopic = null;
      this.questions = [];
      this.answers = {};
      this.showResults = false;
    }
  }
};
</script>

<style scoped>
/* Core Container & Color Variable Fallbacks (Light Mode Defaults) */
.exam-container { 
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-hover: #f1f5f9;
  --border-color: #e2e8f0;
  --border-light: #f1f5f9;
  --text-main: #0f172a;
  --text-body: #1e293b;
  --text-muted: #64748b;
  --accent-btn-bg: #f8fafc;
  --accent-btn-text: #334155;
  --radio-bg: #ffffff;
  --radio-border: #cbd5e1;

  max-width: 840px; 
  margin: 1.5rem auto; 
  padding: 0 1rem; 
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: var(--text-body);
  line-height: 1.5;
  box-sizing: border-box;
}

/* Dark Mode Theme Variables Override */
.exam-container.theme--dark {
  --bg-primary: #1e1e1e;
  --bg-secondary: #252526;
  --bg-hover: #2d2d30;
  --border-color: #333333;
  --border-light: #2d2d30;
  --text-main: #f5f5f5;
  --text-body: #e0e0e0;
  --text-muted: #aaaaaa;
  --accent-btn-bg: #2d2d30;
  --accent-btn-text: #e0e0e0;
  --radio-bg: #1e1e1e;
  --radio-border: #555555;
}

/* Panels */
.dashboard-panel, .test-panel, .results-panel, .loading-panel { 
  background: var(--bg-primary); 
  padding: 1.5rem; 
  border-radius: 16px; 
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-light);
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

@media (min-width: 640px) {
  .dashboard-panel, .test-panel, .results-panel, .loading-panel {
    padding: 2.5rem;
  }
}

.panel-header {
  margin-bottom: 2rem;
  text-align: center;
}

.panel-header h2 {
  font-size: 1.5rem;
  color: var(--text-main);
  margin: 0 0 0.5rem 0;
  font-weight: 700;
}

@media (min-width: 640px) {
  .panel-header h2 { font-size: 1.8rem; }
}

.subtitle {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin: 0;
}

/* Module Grid Selection Cards */
.module-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .module-grid { grid-template-columns: 1fr 1fr; gap: 1.5rem; }
}

.module-card {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
  padding: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
}

@media (min-width: 640px) {
  .module-card { padding: 2rem; }
}

.module-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -8px rgba(0, 0, 0, 0.2);
  background-color: var(--bg-hover);
}

.vue-theme:hover { border-color: #41b883; }
.js-theme:hover { border-color: #f7df1e; }

.module-badge {
  align-self: flex-start;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 50px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.vue-theme .module-badge { background: #e6f7f0; color: #15803d; }
.theme--dark .vue-theme .module-badge { background: #113b29; color: #41b883; }

.js-theme .module-badge { background: #fef9c3; color: #854d0e; }
.theme--dark .js-theme .module-badge { background: #3a3410; color: #f7df1e; }

.module-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: var(--text-main);
}

.module-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
}

/* Interactive Utility Button Elements */
.btn {
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.accent-btn {
  background-color: var(--accent-btn-bg);
  color: var(--accent-btn-text);
  border: 1px solid var(--border-color);
  width: 100%;
}

.module-card:hover .accent-btn {
  background-color: #0f172a;
  color: #ffffff;
  border-color: #0f172a;
}
.theme--dark .module-card:hover .accent-btn {
  background-color: #f5f5f5;
  color: #121212;
  border-color: #f5f5f5;
}

.cancel-btn {
  background-color: #fff1f2;
  color: #b91c1c;
  border: 1px solid #ffe4e6;
}
.cancel-btn:hover { background-color: #ffe4e6; }
.theme--dark .cancel-btn {
  background-color: #4c1d1d;
  color: #fca5a5;
  border: 1px solid #7f1d1d;
}
.theme--dark .cancel-btn:hover { background-color: #7f1d1d; }

.submit-btn {
  background-color: #4f46e5;
  color: #ffffff;
  width: 100%;
  font-size: 1.05rem;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.15);
}
.submit-btn:hover { background-color: #4338ca; }
.submit-btn:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }

.return-btn {
  background-color: #0f172a;
  color: white;
  padding: 1rem 2rem;
  width: 100%;
}
@media (min-width: 640px) {
  .return-btn { width: auto; }
}
.return-btn:hover { background-color: #1e293b; }
.theme--dark .return-btn {
  background-color: #f5f5f5;
  color: #121212;
}
.theme--dark .return-btn:hover { background-color: #e0e0e0; }

/* Test Panel Layout Components */
.test-header {
  display: flex;
  flex-direction: column-reverse; 
  gap: 1rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .test-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.test-header h3 { margin: 0; font-size: 1.25rem; color: var(--text-main); }

.topic-tag {
  font-size: 0.75rem;
  color: #4f46e5;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 0.25rem;
}
.theme--dark .topic-tag { color: #818cf8; }

.questions-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.question-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  padding: 1.25rem;
  border-radius: 12px;
}

@media (min-width: 640px) {
  .question-card { padding: 1.75rem; }
}

.question-meta { margin-bottom: 0.5rem; }
.q-number {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
}

.question-text {
  font-size: 1.05rem;
  font-weight: 500;
  margin: 0 0 1.25rem 0;
  color: var(--text-main);
}

/* Custom Interactive Option Selection Fields */
.options-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.option-label {
  display: flex;
  align-items: flex-start; 
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.85rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
  background: var(--bg-secondary);
}

.option-label:hover {
  background-color: var(--bg-hover);
  border-color: var(--text-muted);
}

.option-label.is-selected {
  background-color: #eff6ff;
  border-color: #3b82f6;
  box-shadow: 0 0 0 1px #3b82f6;
}
.theme--dark .option-label.is-selected {
  background-color: #112240;
  border-color: #3b82f6;
}

.radio-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-top: 2px; 
  flex-shrink: 0;
}

.radio-wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 2;
}

.custom-radio {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: var(--radio-bg);
  border: 2px solid var(--radio-border);
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 1;
}

.option-label:hover .custom-radio { border-color: var(--text-muted); }
.option-label.is-selected .custom-radio {
  border-color: #3b82f6;
  background-color: #3b82f6;
}

.custom-radio::after {
  content: "";
  position: absolute;
  display: none;
  top: 5px;
  left: 5px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
}

.option-label.is-selected .custom-radio::after { display: block; }

.option-text { font-size: 0.95rem; color: var(--text-body); word-break: break-word; }
.option-key {
  background: var(--bg-primary);
  border: 1px solid var(--radio-border);
  color: var(--text-main);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  margin-right: 0.25rem;
  font-size: 0.85rem;
}
.option-label.is-selected .option-key {
  border-color: #bfdbfe;
  color: #1d4ed8;
}
.theme--dark .option-label.is-selected .option-key {
  border-color: #1d4ed8;
  color: #60a5fa;
  background: #112240;
}

/* Results Summaries & Matrix Overlays */
.results-header { text-align: center; margin-bottom: 2rem; }
.results-header h2 { margin: 0 0 0.5rem 0; color: var(--text-main); font-weight: 700; }
.results-header p { margin: 0; color: var(--text-muted); font-size: 0.95rem; }

.score-summary-card {
  display: flex;
  flex-direction: column; 
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 2rem;
  gap: 1.25rem;
  text-align: center;
}

@media (min-width: 640px) {
  .score-summary-card {
    flex-direction: row; 
    padding: 1.5rem;
    gap: 0;
  }
}

.score-segment { flex: 1; }
.summary-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 0.25rem;
}

.score-text { font-size: 1.4rem; margin: 0; color: var(--text-body); }
.score-text strong { font-size: 2rem; color: var(--text-main); }
.percentage-text { font-size: 2rem; margin: 0; font-weight: 800; }

.text-passed { color: #16a34a; }
.text-failed { color: #dc2626; }
.theme--dark .text-passed { color: #4ade80; }
.theme--dark .text-failed { color: #f87171; }

.score-summary-card .divider {
  display: none;
}

@media (min-width: 640px) {
  .score-summary-card .divider {
    display: block;
    width: 1px;
    height: 50px;
    background-color: var(--border-color);
  }
}

.review-list h3 { color: var(--text-main); margin-bottom: 1rem; }

/* Evaluation Score Breakdown Review Cards */
.review-card {
  padding: 1.25rem;
  margin-bottom: 1rem;
  background: var(--bg-primary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

@media (min-width: 640px) {
  .review-card { padding: 1.75rem; }
}

.review-card.card-passed { border-left: 5px solid #16a34a; }
.review-card.card-failed { border-left: 5px solid #dc2626; }
.theme--dark .review-card.card-passed { border-left: 5px solid #4ade80; }
.theme--dark .review-card.card-failed { border-left: 5px solid #f87171; }

.review-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.status-badge {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 50px;
  text-transform: uppercase;
}

.badge-passed { background: #dcfce7; color: #15803d; }
.badge-failed { background: #fee2e2; color: #991b1b; }
.theme--dark .badge-passed { background: #113b29; color: #4ade80; }
.theme--dark .badge-failed { background: #4c1d1d; color: #f87171; }

.review-question {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-main);
  margin: 0 0 1rem 0;
}

.answers-comparison {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

@media (min-width: 640px) {
  .answers-comparison {
    flex-direction: row;
    gap: 1rem;
  }
}

.response-pill {
  background: var(--bg-secondary);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--border-light);
}

@media (min-width: 640px) {
  .response-pill {
    justify-content: flex-start;
  }
}

.valid-pill { background: #e6f7f0; border-color: #bfdbfe; }
.theme--dark .valid-pill { background: #113b29; border-color: #14532d; }

.pill-label { color: var(--text-muted); font-weight: 500; }
.pill-value { font-weight: 700; color: var(--text-body); }
.text-success { color: #16a34a; }
.theme--dark .text-success { color: #4ade80; }
.text-muted { color: var(--text-muted); font-style: italic; }

.explanation-box {
  font-size: 0.9rem;
  color: var(--text-body);
  background: var(--bg-secondary);
  padding: 0.85rem;
  border-radius: 8px;
  border-top: 1px dashed var(--border-color);
  word-break: break-word;
}

.actions-footer {
  margin-top: 2rem;
  text-align: center;
}

/* Page Loading Processing Element Hooks */
.loading-panel {
  text-align: center;
  padding: 3rem 1rem;
}

.loading-panel h2 { margin: 1.5rem 0 0.5rem 0; color: var(--text-main); font-size: 1.4rem; }
.loading-panel p { color: var(--text-muted); margin: 0; font-size: 0.95rem; }

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--border-light);
  border-top-color: #4f46e5;
  border-radius: 50%;
  display: inline-block;
  animation: rotation 0.8s linear infinite;
}

@keyframes rotation {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>