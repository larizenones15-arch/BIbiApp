<template>
  <v-app :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'">
    <v-container fluid class="py-6 px-4 px-sm-6">
      
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-card class="rounded-xl overflow-hidden mb-6" elevation="3">
            <v-sheet color="teal darken-2" dark class="pa-6 text-center position-relative">
              <h1 class="headline font-weight-black mb-2">
                  Microsoft Excel Level 2
              </h1>
              <p class="subtitle-2 mb-3 teal--text text--lighten-4">
                This exam is a step up from Level 1. Review your material before completing the validation form[cite: 1].
              </p>
              <v-chip
                color="teal lighten-5"
                class="teal--text text--darken-3 font-weight-bold"
                href="https://www.excel-easy.com/"
                target="_blank"
                label
                outlined
              >
                <v-icon left small>mdi-open-in-new</v-icon>
                Study Resource: Excel Easy[cite: 1]
              </v-chip>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-if="pageLoading" justify="center" class="my-12">
        <v-progress-circular indeterminate color="teal" size="64"></v-progress-circular>
      </v-row>

      <v-row v-else justify="center">
        <v-col cols="12" md="10" lg="8">
          
          <v-card 
            v-if="examSubmitted" 
            class="rounded-xl mb-6 pa-6 text-center" 
            elevation="4" 
            :color="$vuetify.theme.dark ? '#1e1e1e' : 'white'"
            :class="scorePercentage >= 75 ? 'border-success' : 'border-fail'"
          >
            <v-avatar :color="scorePercentage >= 75 ? ( $vuetify.theme.dark ? 'green darken-4' : 'green lighten-5' ) : ( $vuetify.theme.dark ? 'red darken-4' : 'red lighten-5' )" size="72" class="mb-3">
              <v-icon :color="scorePercentage >= 75 ? 'green' : 'red'" size="40">
                {{ scorePercentage >= 75 ? 'mdi-checkbox-marked-circle-outline' : 'mdi-alert-circle-outline' }}
              </v-icon>
            </v-avatar>
            <h2 class="headline font-weight-black" :class="$vuetify.theme.dark ? 'white--text' : 'grey--text text--darken-3'">
              Exam Performance Summary
            </h2>
            <div class="display-2 font-weight-black my-2" :class="scorePercentage >= 75 ? 'green--text' : 'red--text'">
              {{ scoreSummary.score }} / {{ scoreSummary.total }}
            </div>
            <p class="font-weight-bold subtitle-1 mb-4 text-uppercase tracking-wide">
              Score: {{ scorePercentage }}% — {{ scorePercentage >= 75 ? 'Passed Certificate' : 'Requires Re-evaluation' }}
            </p>
            <v-btn color="teal" dark rounded class="px-6" @click="resetExam">
              <v-icon left>mdi-refresh</v-icon> Retake
            </v-btn>
          </v-card>

          <v-card 
            v-for="question in questions" 
            :key="question.id" 
            class="rounded-xl pa-5 mb-4 position-relative" 
            elevation="2"
            :color="$vuetify.theme.dark ? '#1e1e1e' : 'white'"
          >
            <div class="d-flex align-center mb-3">
              <v-chip :color="$vuetify.theme.dark ? 'grey lighten-3' : 'grey darken-3'" :dark="!$vuetify.theme.dark" small class="font-weight-black mr-2">
                <span :class="{ 'black--text': $vuetify.theme.dark }">Q{{ question.question_number }}</span>
              </v-chip>
              <v-chip v-if="question.type === 'TF'" :color="$vuetify.theme.dark ? 'blue-grey ease-darken-4' : 'blue-grey lighten-5'" :class="$vuetify.theme.dark ? 'white--text' : 'blue-grey--text text--darken-3'" class="text-caption font-weight-bold" small>
                True / False 
              </v-chip>
              <v-chip v-else :color="$vuetify.theme.dark ? 'indigo darken-4' : 'indigo lighten-5'" :class="$vuetify.theme.dark ? 'white--text' : 'indigo--text text--darken-3'" class="text-caption font-weight-bold" small>
                Multiple Choice
              </v-chip>

              <v-spacer></v-spacer>
              <v-chip 
                v-if="examSubmitted && gradingMap[question.id]" 
                :color="gradingMap[question.id].is_correct ? ($vuetify.theme.dark ? 'green darken-4' : 'green lighten-5') : ($vuetify.theme.dark ? 'red darken-4' : 'red lighten-5')" 
                :class="gradingMap[question.id].is_correct ? ($vuetify.theme.dark ? 'green--text text--lighten-2' : 'green--text text--darken-3') : ($vuetify.theme.dark ? 'red--text text--lighten-2' : 'red--text text--darken-3')"
                class="font-weight-bold"
                small
              >
                <v-icon left small :color="gradingMap[question.id].is_correct ? 'green' : 'red'">
                  {{ gradingMap[question.id].is_correct ? 'mdi-check-bold' : 'mdi-close-thick' }}
                </v-icon>
                {{ gradingMap[question.id].is_correct ? 'Correct' : 'Incorrect' }}
              </v-chip>
            </div>

            <p class="body-1 font-weight-medium mb-4" :class="$vuetify.theme.dark ? 'white--text' : 'grey--text text--darken-4'">
              {{ question.question_text }}
            </p>

            <v-radio-group 
              v-model="answers[question.id]" 
              hide-details 
              :disabled="examSubmitted"
              :active-class="$vuetify.theme.dark ? 'teal--text text--lighten-2 font-weight-black' : 'teal--text text--darken-3 font-weight-black'"
            >
              <v-sheet
                v-for="(label, key) in question.options" 
                :key="key"
                class="rounded-lg border-option mb-2 pa-2 d-flex align-center transition-all"
                :class="getOptionClass(question.id, key)"
                :color="$vuetify.theme.dark ? '#252525' : 'white'"
              >
                <v-radio :value="key" color="teal">
                  <template v-slot:label>
                    <span class="body-2 ml-2" :class="$vuetify.theme.dark ? 'grey--text text--lighten-2' : 'grey--text text--darken-3'">
                      <strong v-if="question.type === 'MC'" class="mr-1">{{ key }}.</strong> {{ label }}
                    </span>
                  </template>
                </v-radio>
              </v-sheet>
            </v-radio-group>

            <v-expand-transition>
              <div v-if="examSubmitted && gradingMap[question.id]" class="mt-4">
                <v-sheet :color="$vuetify.theme.dark ? '#2a2a2a' : 'grey lighten-5'" class="rounded-lg pa-4 border-left-indicator">
                  <div class="text-subtitle-2 font-weight-bold mb-1" :class="$vuetify.theme.dark ? 'white--text' : 'grey--text text--darken-3'">
                    <v-icon small :color="$vuetify.theme.dark ? 'white' : 'grey text--darken-3'" class="mr-1">mdi-information-outline</v-icon>
                    Correct Answer: <span class="teal--text font-weight-black" :class="$vuetify.theme.dark ? 'text--lighten-2' : 'text--darken-3'">{{ gradingMap[question.id].correct_answer }}</span>
                  </div>
                  <div class="text-caption leading-relaxed" :class="$vuetify.theme.dark ? 'grey--text text--lighten-1' : 'grey--text text--darken-2'">
                    {{ gradingMap[question.id].explanation }}
                  </div>
                </v-sheet>
              </div>
            </v-expand-transition>
          </v-card>

          <v-sheet
            v-if="!textExamSubmitted && questions.length > 0"
            class="mobile-action-footer d-flex justify-center align-center pa-3"
            elevation="10"
            :color="$vuetify.theme.dark ? '#1e1e1e' : '#ffffff'"
            :style="{ borderColor: $vuetify.theme.dark ? '#333' : '#e0e0e0' }"
          >
            <v-btn 
              color="teal darken-2" 
              dark 
              large 
              rounded 
              elevation="4" 
              class="w-full-mobile font-weight-bold text-uppercase px-12"
              @click="submitExam" 
              :loading="isSubmitting"
            >
              <v-icon left>mdi-file-check-outline</v-icon>
              Finalize & Submit Exam
            </v-btn>
          </v-sheet>

        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    pageLoading: true,
    isSubmitting: false,
    examSubmitted: false,
    questions: [],
    answers: {},
    scoreSummary: { score: 0, total: 0, percentage: 0 },
    gradingMap: {}
  }),
  computed: {
    scorePercentage() {
      return this.scoreSummary.percentage;
    },
    textExamSubmitted() {
      return this.examSubmitted;
    }
  },
  created() {
    this.fetchExamQuestions();
  },
  methods: {
    async fetchExamQuestions() {
      this.pageLoading = true;
      try {
        const res = await axios.get(`${this.$url}/api/excel-exam`);
        this.questions = res.data;
        
        const initialAnswers = {};
        res.data.forEach(q => {
          initialAnswers[q.id] = null;
        });
        this.answers = initialAnswers;
      } catch (err) {
        alert("Could not load exam data rows.");
      } finally {
        this.pageLoading = false;
      }
    },
    async submitExam() {
      const unansweredCount = Object.values(this.answers).filter(val => val === null).length;
      if (unansweredCount > 0) {
        if (!confirm(`You have left ${unansweredCount} question(s) blank. Proceed with submission?`)) {
          return;
        }
      }

      this.isSubmitting = true;
      try {
        const res = await axios.post(`${this.$url}/api/excel-exam`, {
          answers: this.answers
        });
        
        this.scoreSummary = res.data;
        
        const resultsMap = {};
        res.data.results.forEach(r => {
          resultsMap[r.id] = r;
        });
        this.gradingMap = resultsMap;
        this.examSubmitted = true;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err) {
        alert("Action update processing failure.");
      } finally {
        this.isSubmitting = false;
      }
    },
    getOptionClass(questionId, optionKey) {
      const isDark = this.$vuetify.theme.dark;
      if (!this.examSubmitted || !this.gradingMap[questionId]) {
        if (this.answers[questionId] === optionKey) {
          return isDark ? 'teal-dark-selected' : 'teal lighten-5';
        }
        return isDark ? 'dark-option-border' : '';
      }
      
      const grade = this.gradingMap[questionId];
      if (optionKey === grade.correct_answer) {
        return isDark ? 'green-dark-correct border-success-choice' : 'green lighten-5 border-success-choice';
      }
      if (this.answers[questionId] === optionKey && optionKey !== grade.correct_answer) {
        return isDark ? 'red-dark-fail border-fail-choice' : 'red lighten-5 border-fail-choice';
      }
      return isDark ? 'opacity-muted dark-muted' : 'grey lighten-4 opacity-muted';
    },
    resetExam() {
      this.examSubmitted = false;
      this.gradingMap = {};
      this.scoreSummary = { score: 0, total: 0, percentage: 0 };
      const clearedAnswers = {};
      this.questions.forEach(q => {
        clearedAnswers[q.id] = null;
      });
      this.answers = clearedAnswers;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
.rounded-xl { border-radius: 24px !important; }
.border-option {
  border: 1px solid #e0e0e0 !important;
  transition: all 0.2s ease;
}
.theme--dark .border-option {
  border: 1px solid #444444 !important;
}

/* State Background colors overriding for Dark mode choices */
.teal-dark-selected { background-color: #004d40 !important; }
.green-dark-correct { background-color: #1b5e20 !important; }
.red-dark-fail { background-color: #b71c1c !important; }
.dark-muted { background-color: #121212 !important; }

.border-success { border: 3px solid #2e7d32 !important; }
.border-fail { border: 3px solid #c62828 !important; }

.border-success-choice {
  border: 1px solid #2e7d32 !important;
  font-weight: bold;
}
.border-fail-choice {
  border: 1px solid #c62828 !important;
}

.border-left-indicator {
  border-left: 5px solid #00796b !important;
}

.opacity-muted {
  opacity: 0.45;
}

.leading-relaxed {
  line-height: 1.6;
}

.mobile-action-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  border-top: 1px solid #e0e0e0;
}

@media (max-width: 600px) {
  .w-full-mobile {
    width: 100% !important;
  }
}
</style>