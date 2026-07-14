<template>
  <v-app :style="{ background: $vuetify.theme.dark ? '#121212' : '#f5f5f5' }">
    <v-container fluid class="pa-6">
      <v-row align="center" class="mb-4">
        <v-col cols="12" class="d-flex align-center justify-space-between flex-nowrap">
          <h1 
            class="text-h6 text-sm-h5 font-weight-black text-nowrap pr-2"
            :class="$vuetify.theme.dark ? 'white--text' : 'grey--text text--darken-3'"
          >
            💰 Financial Dashboard
          </h1>
          <v-btn 
            outlined 
            rounded 
            :color="$vuetify.theme.dark ? 'grey lighten-2' : 'grey darken-3'" 
            class="font-weight-bold px-3 px-sm-4 flex-shrink-0"
            @click="hideValues = !hideValues"
          >
            <v-icon :left="$vuetify.breakpoint.smAndUp">
              {{ hideValues ? 'mdi-eye-off' : 'mdi-eye' }}
            </v-icon>
            <span class="d-none d-sm-inline">
              {{ hideValues ? 'Show Balances' : 'Hide Balances' }}
            </span>
          </v-btn>
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col v-for="(val, key) in combinedTotals" :key="key" cols="12" sm="6" md="3">
          <v-card class="rounded-lg border-left-lg" elevation="2" :dark="$vuetify.theme.dark">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle class="text-uppercase font-weight-bold" :class="$vuetify.theme.dark ? 'grey--text text--lighten-1' : 'grey--text'">
                  {{ key }}
                </v-list-item-subtitle>
                <v-list-item-title class="headline font-weight-black success--text">
                  <template v-if="hideValues">₱•••••</template>
                  <template v-else>₱{{ formatNumber(val) }}</template>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-card class="rounded-xl pa-5" elevation="3" :dark="$vuetify.theme.dark">
            <div class="d-flex align-center mb-4">
              <v-avatar :color="$vuetify.theme.dark ? 'pink darken-4' : 'magenta lighten-5'" size="48" class="mr-3">
                <v-icon :color="$vuetify.theme.dark ? 'pink lighten-3' : 'white'">mdi-account-heart</v-icon>
              </v-avatar>
              <h2 class="title font-weight-bold" :class="$vuetify.theme.dark ? 'pink--text text--lighten-3' : 'magenta--text'">Larize Deposit</h2>
            </div>
            <v-text-field
              v-model.number="larizeInput"
              label="Amount to Distribute"
              prefix="₱"
              type="number"
              filled
              rounded
              hide-details
              persistent-placeholder
              class="no-spinners"
              @keydown="filterKey"
              @focus="$event.target.select()"
              @input="val => (larizeInput = val === null || val === '' ? 0 : val)"
            ></v-text-field>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="rounded-xl pa-5" elevation="3" :dark="$vuetify.theme.dark">
            <div class="d-flex align-center mb-4">
              <v-avatar :color="$vuetify.theme.dark ? 'blue darken-4' : 'blue lighten-5'" size="48" class="mr-3">
                <v-icon :color="$vuetify.theme.dark ? 'blue lighten-3' : 'blue'">mdi-account-star</v-icon>
              </v-avatar>
              <h2 class="title font-weight-bold" :class="$vuetify.theme.dark ? 'blue--text text--lighten-3' : 'blue--text'">MJ Deposit</h2>
            </div>
            <v-text-field
              v-model.number="mjInput"
              label="Amount to Distribute"
              prefix="₱"
              type="number"
              filled
              rounded
              hide-details
              persistent-placeholder
              class="no-spinners"
              @keydown="filterKey"
              @focus="$event.target.select()"
              @input="val => (mjInput = val === null || val === '' ? 0 : val)"
            ></v-text-field>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center" class="my-8">
        <v-btn 
          v-show="larizeInput > 0 || mjInput > 0"
          :color="$vuetify.theme.dark ? 'indigo lighten-1' : 'indigo darken-2'" 
          :dark="!$vuetify.theme.dark"
          :light="$vuetify.theme.dark"
          x-large 
          rounded 
          elevation="8"
          class="px-12 font-weight-bold"
          @click="logDistributions" 
          :loading="isLoading"
        >
          <v-icon left>mdi-rocket-launch</v-icon>
          Process and Log Data
        </v-btn>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-card outlined class="rounded-lg overflow-hidden" :dark="$vuetify.theme.dark">
            <v-toolbar flat color="magenta" dark dense>
              <v-toolbar-title class="body-1 font-weight-bold">Larize Current Distribution</v-toolbar-title>
            </v-toolbar>
            <v-simple-table dense>
              <tbody>
                <tr v-for="(val, key) in larizeDist" :key="key">
                  <td class="font-weight-medium" :class="$vuetify.theme.dark ? 'grey--text text--lighten-1' : 'grey--text text--darken-1'">{{ key }}</td>
                  <td class="text-right font-weight-bold">
                    <template v-if="hideValues">₱•••••</template>
                    <template v-else>₱{{ formatNumber(val) }}</template>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card outlined class="rounded-lg overflow-hidden" :dark="$vuetify.theme.dark">
            <v-toolbar flat color="blue" dark dense>
              <v-toolbar-title class="body-1 font-weight-bold">MJ Current Distribution</v-toolbar-title>
            </v-toolbar>
            <v-simple-table dense>
              <tbody>
                <tr v-for="(val, key) in mjDist" :key="key">
                  <td class="font-weight-medium" :class="$vuetify.theme.dark ? 'grey--text text--lighten-1' : 'grey--text text--darken-1'">{{ key }}</td>
                  <td class="text-right font-weight-bold">
                    <template v-if="hideValues">₱•••••</template>
                    <template v-else>₱{{ formatNumber(val) }}</template>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-8">
        <v-col cols="12">
          <v-card elevation="4" class="rounded-xl overflow-hidden" :dark="$vuetify.theme.dark">
            <v-tabs v-model="activeTab" background-color="grey darken-4" dark grow slider-color="yellow">
              <v-tab><v-icon left>mdi-history</v-icon> Larize Logs</v-tab>
              <v-tab><v-icon left>mdi-history</v-icon> MJ Logs</v-tab>
            </v-tabs>
            
            <v-tabs-items v-model="activeTab" touchless>
              <v-tab-item v-for="logType in ['larize', 'mj']" :key="logType">
                <v-responsive class="overflow-x-auto table-scroll-container">
                  <v-simple-table class="history-table mt-2" fixed-header>
                    <thead>
                      <tr>
                        <th v-for="h in (logType === 'larize' ? larizeHeaders : mjHeaders)" :key="h.text" class="text-uppercase text-caption font-weight-black text-nowrap">
                          {{ h.text }}
                        </th>
                        <th class="text-center text-nowrap">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in (logType === 'larize' ? larizeLogs : mjLogs)" :key="item.id">
                        <td class="font-weight-medium mobile-date-text py-2" :class="$vuetify.theme.dark ? 'grey--text text--lighten-2' : 'grey--text text--darken-3'">
                          {{ formatTimestamp(item.date) }}
                        </td>
                        <td class="font-weight-bold text-nowrap">
                          <template v-if="hideValues">₱•••••</template>
                          <template v-else>₱{{ formatNumber(item.deposit) }}</template>
                        </td>
                        <td class="green--text text--darken-2 text-nowrap" :class="{ 'green--text text--lighten-2': $vuetify.theme.dark }">
                          <template v-if="hideValues">₱•••••</template>
                          <template v-else>₱{{ formatNumber(item.savings) }}</template>
                        </td>
                        <td class="orange--text text--darken-2 text-nowrap" :class="{ 'orange--text text--lighten-2': $vuetify.theme.dark }">
                          <template v-if="hideValues">₱•••••</template>
                          <template v-else>₱{{ formatNumber(item.emergency) }}</template>
                        </td>
                        <td v-if="logType === 'larize'" class="text-nowrap">
                          <template v-if="hideValues">₱•••••</template>
                          <template v-else>₱{{ formatNumber(item.df) }}</template>
                        </td>
                        <td class="text-nowrap">
                          <template v-if="hideValues">₱•••••</template>
                          <template v-else>₱{{ formatNumber(item.needs) }}</template>
                        </td>
                        <td class="text-nowrap">
                          <template v-if="hideValues">₱•••••</template>
                          <template v-else>₱{{ formatNumber(item.wants) }}</template>
                        </td>
                        <td class="text-center text-nowrap" width="1%">
                          <div class="d-flex align-center justify-center">
                            <v-btn icon small :color="$vuetify.theme.dark ? 'blue lighten-3' : 'primary'" class="mr-1" @click="openEdit(item, logType)">
                              <v-icon small>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn icon small :color="$vuetify.theme.dark ? 'red lighten-3' : 'error'" @click="deleteLog(item.id, logType)">
                              <v-icon small>mdi-delete</v-icon>
                            </v-btn>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </v-responsive>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="editDialog" max-width="500px">
      <v-card class="rounded-lg" :dark="$vuetify.theme.dark">
        <v-card-title class="headline primary white--text px-6" :class="{ 'grey darken-3': $vuetify.theme.dark }">
          Edit Entry
        </v-card-title>
        <v-card-text class="pt-6">
          <v-row dense>
            <v-col cols="12"><v-text-field v-model="editItem.date" label="Date" type="date" outlined dense></v-text-field></v-col>
            <v-col cols="12"><v-text-field v-model.number="editItem.deposit" label="Deposit" outlined dense prefix="₱"></v-text-field></v-col>
            <v-col cols="6"><v-text-field v-model.number="editItem.savings" label="Savings" outlined dense prefix="₱"></v-text-field></v-col>
            <v-col cols="6"><v-text-field v-model.number="editItem.emergency" label="Emergency" outlined dense prefix="₱"></v-text-field></v-col>
            <v-col cols="6" v-if="editItem.type === 'larize'"><v-text-field v-model.number="editItem.df" label="DF" outlined dense prefix="₱"></v-text-field></v-col>
            <v-col cols="6"><v-text-field v-model.number="editItem.needs" label="Needs" outlined dense prefix="₱"></v-text-field></v-col>
            <v-col cols="6"><v-text-field v-model.number="editItem.wants" label="Wants" outlined dense prefix="₱"></v-text-field></v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn :color="$vuetify.theme.dark ? 'grey lighten-1' : 'grey lighten-1'" text @click="editDialog = false">Cancel</v-btn>
          <v-btn color="primary" rounded class="px-6" @click="saveEdit" :loading="isLoading">Save Changes</v-btn>
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
    editItem: { id: null, deposit: 0, type: '' },
    activeTab: null,
    larizeInput: 0,
    mjInput: 0,
    isLoading: false,
    hideValues: true,
    rates: {
      larize: { savings: 0.3, emergency: 0.25, needs: 0.15, wants: 0.1, df: 0.2 },
      mj: { savings: 0.4, emergency: 0.3, needs: 0.17, wants: 0.13 }
    },
    larizeLogs: [],
    mjLogs: [],
    larizeHeaders: [
      { text: 'Date' }, { text: 'Deposit' }, { text: 'Savings' }, 
      { text: 'Emergency' }, { text: 'DF' }, { text: 'Needs' }, { text: 'Wants' }
    ],
    mjHeaders: [
      { text: 'Date' }, { text: 'Deposit' }, { text: 'Savings' }, 
      { text: 'Emergency' }, { text: 'Needs' }, { text: 'Wants' }
    ]
  }),
  computed: {
    larizeDist() {
      const input = this.larizeInput || 0;
      return {
        Savings: (input * this.rates.larize.savings),
        Emergency: (input * this.rates.larize.emergency),
        DF: (input * this.rates.larize.df),
        Needs: (input * this.rates.larize.needs),
        Wants: (input * this.rates.larize.wants)
      };
    },
    mjDist() {
      const input = this.mjInput || 0;
      return {
        Savings: (input * this.rates.mj.savings),
        Emergency: (input * this.rates.mj.emergency),
        Needs: (input * this.rates.mj.needs),
        Wants: (input * this.rates.mj.wants)
      };
    },
    combinedTotals() {
      const sum = (arr, key) => arr.reduce((acc, item) => acc + (parseFloat(item[key]) || 0), 0);
      
      const savingsTotal = sum(this.larizeLogs, 'savings') + sum(this.mjLogs, 'savings');
      const emergencyTotal = sum(this.larizeLogs, 'emergency') + sum(this.mjLogs, 'emergency');
      
      return {
        "General Savings": savingsTotal + emergencyTotal,
        Savings: savingsTotal,
        Emergency: emergencyTotal,
        DF: sum(this.larizeLogs, 'df'),
      };
    }
  },
  created() {
    this.fetchExpenses();
  },
  methods: {
    formatNumber(val) {
      if (!val) return "0.00";
      return parseFloat(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },
    formatTimestamp(rawDate) {
      if (!rawDate) return "";
      const dateObj = new Date(rawDate.replace(/-/g, "/"));
      if (isNaN(dateObj.getTime())) return rawDate;

      const datePart = dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      const timePart = dateObj.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });

      return `${datePart} at ${timePart}`;
    },
    fetchExpenses() {
      this.isLoading = true;
      axios.get(`${this.$url}/api/expenses`)
        .then((res) => {
          this.larizeLogs = res.data.larize;
          this.mjLogs = res.data.mj;
        })
        .finally(() => { this.isLoading = false; });
    },
    async logDistributions() {
      this.isLoading = true;
      const endpoint = `${this.$url}/api/expenses`;
      try {
        if (this.larizeInput > 0) {
          await axios.post(endpoint, {
            type: "larize",
            deposit: this.larizeInput,
            savings: this.larizeDist.Savings.toFixed(2),
            emergency: this.larizeDist.Emergency.toFixed(2),
            df: this.larizeDist.DF.toFixed(2),
            needs: this.larizeDist.Needs.toFixed(2),
            wants: this.larizeDist.Wants.toFixed(2)
          });
        }
        if (this.mjInput > 0) {
          await axios.post(endpoint, {
            type: "mj",
            deposit: this.mjInput,
            savings: this.mjDist.Savings.toFixed(2),
            emergency: this.mjDist.Emergency.toFixed(2),
            needs: this.mjDist.Needs.toFixed(2),
            wants: this.mjDist.Wants.toFixed(2)
          });
        }
        this.larizeInput = 0;
        this.mjInput = 0;
        this.fetchExpenses();
      } catch (e) {
        alert("Error saving data");
      } finally {
        this.isLoading = false;
      }
    },
    openEdit(item, type) {
      this.editItem = JSON.parse(JSON.stringify(item));
      if (this.editItem.date) this.editItem.date = this.editItem.date.split(' ')[0];
      this.editItem.type = type;
      this.editDialog = true;
    },
    async saveEdit() {
      this.isLoading = true;
      try {
        await axios.put(`${this.$url}/api/expenses/${this.editItem.id}`, this.editItem);
        this.editDialog = false;
        this.fetchExpenses();
      } catch (error) {
        alert("Failed to update log.");
      } finally {
        this.isLoading = false;
      }
    },
    async deleteLog(id, type) {
      if (confirm("Delete this entry permanently?")) {
        this.isLoading = true;
        try {
          await axios.delete(`${this.$url}/api/expenses/${id}`, { params: { type: type } });
          this.fetchExpenses();
        } catch (e) {
          alert("Delete failed");
        } finally {
          this.isLoading = false;
        }
      }
    },
    filterKey(e) {
      if (['e', 'E', '+', '-'].includes(e.key)) {
        e.preventDefault();
      }
    },
  },
  watch: {
    larizeInput(val) {
      if (val === null || val === '') {
        this.larizeInput = 0;
      }
    },
    mjInput(val) {
      if (val === null || val === '') {
        this.mjInput = 0;
      }
    }
  },
};
</script>

<style scoped>
.magenta { background-color: #e91e63 !important; }
.magenta--text { color: #e91e63 !important; }
.border-left-lg { border-left: 6px solid #4caf50 !important; }

.table-scroll-container {
  max-height: 450px;
  overflow-y: auto !important;
  scrollbar-width: thin;
  scrollbar-color: #cccccc transparent;
}

.theme--dark .table-scroll-container {
  scrollbar-color: #424242 transparent;
}

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
  background-color: #424242; 
}
.table-scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: #b0b0b0;
}
.theme--dark .table-scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: #555555;
}

.history-table >>> td, 
.history-table >>> th {
  padding: 0 8px !important;
}

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

.overflow-x-auto {
  overflow-x: auto !important;
  -webkit-overflow-scrolling: touch;
}

.mobile-date-text {
  font-size: 0.8rem !important;
  white-space: normal !important;
  min-width: 90px;
  line-height: 1.25 !important;
}
@media (max-width: 600px) {
  .mobile-date-text {
    font-size: 0.72rem !important;
  }
}
</style>