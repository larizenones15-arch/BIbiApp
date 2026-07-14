<template>
  <v-app :style="{ background: $vuetify.theme.dark ? '#121212' : '#f5f5f5' }">
    <v-container fluid>
      
      <v-row align="center" class="mb-4">
        <v-col cols="12">
          <h1 
            class="headline font-weight-black"
            :class="$vuetify.theme.dark ? 'white--text' : 'grey--text text--darken-3'"
          >
            📋 Customer Log
          </h1>
          <span class="text-caption font-weight-bold" :class="$vuetify.theme.dark ? 'grey--text text--lighten-1' : 'grey--text'">
            Live Rate: 1 JPY = ₱{{ jpyToPhpRate.toFixed(4) }} PHP
            <v-icon 
              x-small 
              :color="$vuetify.theme.dark ? 'grey lighten-1' : 'grey'" 
              class="ml-1" 
              :class="{ 'spin-animation': isRateLoading }"
              @click="fetchExchangeRate"
            >
              mdi-refresh
            </v-icon>
          </span>
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col v-for="(val, key) in billingSummaries" :key="key" cols="12" sm="6" md="4">
          <v-card class="rounded-lg border-left-lg-teal" elevation="2" :dark="$vuetify.theme.dark">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle class="text-uppercase font-weight-bold" :class="$vuetify.theme.dark ? 'grey--text text--lighten-1' : 'grey--text'">{{ key }} Total</v-list-item-subtitle>
                <v-list-item-title class="headline font-weight-black" :class="$vuetify.theme.dark ? 'teal--text text--lighten-2' : 'teal--text text--darken-2'">
                  ¥{{ formatYen(val) }}
                </v-list-item-title>
                <v-list-item-subtitle class="font-weight-medium mt-1" :class="$vuetify.theme.dark ? 'green--text text--lighten-2' : 'green--text text--darken-2'">
                  ≈ ₱{{ formatPeso(val * jpyToPhpRate) }} PHP
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card class="rounded-xl pa-5" elevation="3" :dark="$vuetify.theme.dark">
            <div class="d-flex align-center mb-4">
              <v-avatar :color="$vuetify.theme.dark ? 'teal darken-4' : 'teal lighten-5'" size="48" class="mr-3">
                <v-icon :color="$vuetify.theme.dark ? 'teal lighten-3' : 'teal'">mdi-account-cash-outline</v-icon>
              </v-avatar>
              <h2 class="title font-weight-bold" :class="$vuetify.theme.dark ? 'teal--text text--lighten-3' : 'teal--text'">Log Customer Transaction</h2>
            </div>
            
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="logForm.customer_name" label="Customer Name" filled rounded color="teal" hide-details></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model.number="logForm.price"
                  label="Price (Yen)"
                  prefix="¥"
                  type="number"
                  filled rounded color="teal" hide-details
                  class="no-spinners"
                  @keydown="filterKey"
                  @focus="$event.target.select()"
                  @input="val => (logForm.price = val === null || val === '' ? 0 : val)"
                ></v-text-field>
                <div v-if="logForm.price > 0" class="text-caption pl-4 pt-1 font-weight-bold" :class="$vuetify.theme.dark ? 'green--text text--lighten-2' : 'green--text text--darken-2'">
                  Est: ≈ ₱{{ formatPeso(logForm.price * jpyToPhpRate) }} PHP
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-sheet
        v-if="logForm.price > 0 && logForm.customer_name.trim() !== ''"
        class="mobile-action-footer d-flex justify-center align-center pa-3"
        elevation="10"
        :dark="$vuetify.theme.dark"
      >
        <v-btn 
          :color="$vuetify.theme.dark ? 'teal lighten-1' : 'teal darken-2'" 
          :dark="!$vuetify.theme.dark"
          :light="$vuetify.theme.dark"
          large rounded elevation="4" class="w-full-mobile font-weight-bold text-uppercase px-6"
          @click="saveTransactionLog" 
          :loading="isLoading"
        >
          <v-icon left>mdi-file-document-edit-outline</v-icon>
          Record Transaction Entry
        </v-btn>
      </v-sheet>

      <v-row class="mt-4">
        <v-col cols="12">
          <v-card elevation="4" class="rounded-xl overflow-hidden" :dark="$vuetify.theme.dark">
            <div v-if="monthsAvailable.length === 0" class="pa-8 text-center text-subtitle-1" :class="$vuetify.theme.dark ? 'grey--text text--lighten-1' : 'grey--text text--darken-1'">
              No recorded.
            </div>
            <div v-else>
              <v-tabs v-model="activeTab" background-color="grey darken-4" dark grow slider-color="teal lighten-1">
                <v-tab v-for="monthName in monthsAvailable" :key="monthName">
                  <v-icon left class="hidden-xs-only">mdi-calendar-month</v-icon> 
                  {{ monthName }}
                </v-tab>
              </v-tabs>
              
              <v-tabs-items v-model="activeTab" :touchless="true">
                <v-tab-item v-for="monthName in monthsAvailable" :key="monthName">
                  <div class="table-responsive table-scroll-container">
                    <v-simple-table fixed-header class="history-table">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-caption font-weight-black no-wrap">Date & Time</th>
                          <th class="text-uppercase text-caption font-weight-black no-wrap">Customer Name</th>
                          <th class="text-uppercase text-caption font-weight-black no-wrap">Price (JPY)</th>
                          <th class="text-uppercase text-caption font-weight-black no-wrap">Est. (PHP)</th>
                          <th class="text-center text-uppercase text-caption font-weight-black no-wrap">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in monthlyLogsGrouped[monthName]" :key="item.id">
                          <td class="no-wrap date-cell">{{ formatDate(item.date) }}</td>
                          <td class="font-weight-medium text-body-2 text-capitalize">{{ item.customer_name }}</td>
                          <td class="font-weight-bold no-wrap" :class="$vuetify.theme.dark ? 'teal--text text--lighten-2' : 'teal--text text--darken-3'">¥{{ formatYen(item.price) }}</td>
                          <td class="text-caption no-wrap" :class="$vuetify.theme.dark ? 'grey--text text--lighten-1' : 'grey--text text--darken-2'">₱{{ formatPeso(item.price * jpyToPhpRate) }}</td>
                          <td class="text-center">
                            <div class="d-flex align-center justify-center actions-wrapper">
                              <v-btn icon small :color="$vuetify.theme.dark ? 'blue lighten-3' : 'primary'" @click="openEdit(item)"><v-icon small>mdi-pencil</v-icon></v-btn>
                              <v-btn icon small :color="$vuetify.theme.dark ? 'red lighten-3' : 'error'" @click="deleteLog(item.id)"><v-icon small>mdi-delete</v-icon></v-btn>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </div>
                </v-tab-item>
              </v-tabs-items>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="editDialog" max-width="500px">
      <v-card class="rounded-lg" :dark="$vuetify.theme.dark">
        <v-card-title class="headline teal white--text px-6" :class="{ 'teal darken-4': $vuetify.theme.dark }">
          Edit Customer Log
        </v-card-title>
        <v-card-text class="pt-6">
          <v-row dense>
            <v-col cols="12"><v-text-field v-model="editItem.date" label="Date/Time" type="datetime-local" outlined dense></v-text-field></v-col>
            <v-col cols="12"><v-text-field v-model="editItem.customer_name" label="Customer Name" outlined dense></v-text-field></v-col>
            <v-col cols="12">
              <v-text-field v-model.number="editItem.price" label="Total Price Paid (¥)" outlined dense prefix="¥" type="number" class="no-spinners" @keydown="filterKey"></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey lighten-1" text @click="editDialog = false">Cancel</v-btn>
          <v-btn color="teal" dark rounded class="px-6" @click="saveEdit" :loading="isLoading">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    editDialog: false,
    editItem: { id: null, customer_name: '', price: 0, date: '' },
    activeTab: null,
    isLoading: false,
    isRateLoading: false, 
    logForm: { customer_name: '', price: 0 },
    rawDatabaseLogs: [],
    jpyToPhpRate: 0.36
  }),
  computed: {
    monthlyLogsGrouped() {
      const groups = {};
      this.rawDatabaseLogs.forEach(item => {
        if (!item.date) return;
        const dateObj = new Date(item.date.replace(' ', 'T'));
        if (isNaN(dateObj.getTime())) return;
        
        const keyName = dateObj.toLocaleString('en-US', { month: 'long', year: 'numeric' });
        if (!groups[keyName]) {
          groups[keyName] = [];
        }
        groups[keyName].push(item);
      });
      return groups;
    },
    monthsAvailable() {
      return Object.keys(this.monthlyLogsGrouped);
    },
    billingSummaries() {
      const summaries = {};
      Object.keys(this.monthlyLogsGrouped).forEach(month => {
        summaries[month] = this.monthlyLogsGrouped[month].reduce(
          (acc, item) => acc + (parseFloat(item.price) || 0), 0
        );
      });
      return summaries;
    }
  },
  created() {
    this.fetchLedgerLogs();
    this.fetchExchangeRate();
  },
  methods: {
   fetchExchangeRate() {
      this.isRateLoading = true;

      fetch('https://open.er-api.com/v6/latest/JPY')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          if (data && data.rates && data.rates.PHP) {
            this.jpyToPhpRate = data.rates.PHP;
          }
        })
        .catch(err => {
          console.error("Could not fetch real-time exchange rates, using fallback.", err);
        })
        .finally(() => {
          this.isRateLoading = false;
        });
    },
    formatDate(rawDate) {
      if (!rawDate) return "—";
      const dateObj = new Date(rawDate.replace(' ', 'T'));
      if (isNaN(dateObj.getTime())) return rawDate; 

      return dateObj.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
    },
    formatYen(val) {
      if (!val) return "0";
      return parseFloat(val).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    },
    formatItem(val) {
      if (!val) return "0.00";
      return parseFloat(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },
    formatPeso(val) {
      return this.formatItem(val);
    },
    fetchLedgerLogs() {
      this.isLoading = true;
      axios.get(`${this.$url}/api/customer-logs`)
        .then((res) => {
          this.rawDatabaseLogs = res.data;
        })
        .finally(() => { this.isLoading = false; });
    },
    async saveTransactionLog() {
      this.isLoading = true;
      try {
        await axios.post(`${this.$url}/api/customer-logs`, this.logForm);
        this.logForm = { customer_name: '', price: 0 };
        this.fetchLedgerLogs();
      } catch (e) {
        alert("Error handling log creation.");
      } finally {
        this.isLoading = false;
      }
    },
    openEdit(item) {
      this.editItem = JSON.parse(JSON.stringify(item));
      if (this.editItem.date) {
        this.editItem.date = this.editItem.date.replace(' ', 'T').substring(0, 16);
      }
      this.editDialog = true;
    },
    async saveEdit() {
      this.isLoading = true;
      try {
        const payload = { ...this.editItem };
        payload.date = payload.date.replace('T', ' ');
        
        await axios.put(`${this.$url}/api/customer-logs/${payload.id}`, payload);
        this.editDialog = false;
        this.fetchLedgerLogs();
      } catch (error) {
        alert("Action update processing failure.");
      } finally {
        this.isLoading = false;
      }
    },
    async deleteLog(id) {
      if (confirm("Permanently delete this customer record?")) {
        this.isLoading = true;
        try {
          await axios.delete(`${this.$url}/api/customer-logs/${id}`);
          this.fetchLedgerLogs();
        } catch (e) {
          alert("Delete processing failed.");
        } finally {
          this.isLoading = false;
        }
      }
    },
    filterKey(e) {
      if (['e', 'E', '+', '-'].includes(e.key)) {
        e.preventDefault();
      }
    }
  }
};
</script>

<style scoped>
.border-left-lg-teal { border-left: 6px solid #00796b !important; }

/* Responsive Dark Mode Table overrides */
.history-table th {
  background-color: #fafafa !important;
  color: #616161 !important;
}
.theme--dark .history-table th {
  background-color: #1e1e1e !important;
  color: #e0e0e0 !important;
}
.theme--dark .v-data-table >>> tbody tr:hover {
  background: #272727 !important;
}

.rounded-xl { border-radius: 24px !important; }
.no-spinners >>> input::-webkit-outer-spin-button,
.no-spinners >>> input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.no-spinners >>> input[type=number] {
  -moz-appearance: textfield;
}
.no-spinners >>> input {
  appearance: none;
}
.no-spinners >>> .v-input__prefix {
  padding-right: 4px;
  opacity: 0.7;
}

/* Height bounding container layout layout tracking controls */
.table-scroll-container {
  max-height: 400px; 
  overflow-y: auto !important;   
  scrollbar-width: thin;
  scrollbar-color: #cccccc transparent;
}

/* Custom Scrollbar theme parameters for Dark Mode */
.theme--dark .table-scroll-container {
  scrollbar-color: #424242 transparent;
}

/* WebKit Engine specific style declarations (Chrome, Safari, Edge) */
.table-scroll-container::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.table-scroll-container::-webkit-scrollbar-track {
  background: transparent;
}
.table-scroll-container::-webkit-scrollbar-thumb {
  background-color: #cccccc;
  border-radius: 4px;
}
.theme--dark .table-scroll-container::-webkit-scrollbar-thumb {
  background-color: #424242; /* Soft grey matching standard dark panels */
}
.table-scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: #b0b0b0;
}
.theme--dark .table-scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: #555555;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;   
  -webkit-overflow-scrolling: touch;
}
.no-wrap {
  white-space: nowrap !important;
}
.date-cell {
  min-width: 165px;
  font-size: 13px !important;
}
.actions-wrapper {
  gap: 4px;
  min-width: 80px;
}

/* Dynamic Dark Theme Sticky Footer */
.mobile-action-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: #ffffff !important;
  border-top: 1px solid #e0e0e0;
}
.theme--dark.mobile-action-footer {
  background-color: #1e1e1e !important;
  border-top: 1px solid #333333;
}

.spin-animation {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 600px) {
  .w-full-mobile {
    width: 100% !important;
  }
}
</style>