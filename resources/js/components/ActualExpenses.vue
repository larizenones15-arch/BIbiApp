<template>
  <v-app :style="{ background: $vuetify.theme.dark ? '#121212' : '#f5f5f5' }">
    <v-container fluid>
      
      <v-row align="center" class="mb-4">
        <v-col cols="12" sm="8" class="py-1">
          <h1 
            class="headline font-weight-black"
            :class="$vuetify.theme.dark ? 'white--text' : 'grey--text text--darken-3'"
          >
            💸 Gastos & Bayarin Tracker
          </h1>
        </v-col>
        <v-col cols="12" sm="4" class="text-sm-right py-1">
          <v-btn 
            small 
            outlined 
            rounded 
            :color="$vuetify.theme.dark ? 'grey lighten-1' : 'grey darken-2'"
            @click="hideValues = !hideValues"
          >
            <v-icon left small>{{ hideValues ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
            {{ hideValues ? 'Show Balances' : 'Hide Balances' }}
          </v-btn>
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col v-for="(val, key) in combinedSpend" :key="key" cols="12" sm="4" md="2">
          <v-card 
            class="rounded-lg border-left-lg-red cursor-pointer" 
            elevation="2" 
            :dark="$vuetify.theme.dark"
            @click="hideValues = !hideValues"
          >
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle class="text-uppercase font-weight-bold" :class="$vuetify.theme.dark ? 'grey--text text--lighten-1' : 'grey--text'">
                  {{ key }} Spends
                </v-list-item-subtitle>
                <v-list-item-title class="headline font-weight-black" :class="$vuetify.theme.dark ? 'red--text text--lighten-2' : 'error--text'">
                  {{ hideValues ? '₱••••••' : `₱${formatNumber(val)}` }}
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
                <v-icon :color="$vuetify.theme.dark ? 'pink lighten-3' : 'white'">mdi-cart-arrow-down</v-icon>
              </v-avatar>
              <h2 class="title font-weight-bold" :class="$vuetify.theme.dark ? 'pink--text text--lighten-3' : 'magenta--text'">Log Larize Gastos</h2>
            </div>
            
            <v-text-field v-model="larizeForm.item_name" label="Item / Bayarin Name" filled rounded color="magenta" class="mb-2"></v-text-field>
            <v-select v-model="larizeForm.category" :items="larizeCategories" label="Fund Category Source" filled rounded color="magenta" class="mb-2"></v-select>
            <v-text-field
              v-model.number="larizeForm.amount"
              label="Amount Spent"
              prefix="₱"
              type="number"
              filled rounded color="magenta" hide-details
              class="no-spinners"
              @keydown="filterKey"
              @focus="$event.target.select()"
              @input="val => (larizeForm.amount = val === null || val === '' ? 0 : val)"
            ></v-text-field>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="rounded-xl pa-5" elevation="3" :dark="$vuetify.theme.dark">
            <div class="d-flex align-center mb-4">
              <v-avatar :color="$vuetify.theme.dark ? 'blue darken-4' : 'blue lighten-5'" size="48" class="mr-3">
                <v-icon :color="$vuetify.theme.dark ? 'blue lighten-3' : 'blue'">mdi-credit-card-outline</v-icon>
              </v-avatar>
              <h2 class="title font-weight-bold" :class="$vuetify.theme.dark ? 'blue--text text--lighten-3' : 'blue--text'">Log MJ Gastos</h2>
            </div>
            
            <v-text-field v-model="mjForm.item_name" label="Item / Bayarin Name" filled rounded color="blue" class="mb-2"></v-text-field>
            <v-select v-model="mjForm.category" :items="mjCategories" label="Fund Category Source" filled rounded color="blue" class="mb-2"></v-select>
            <v-text-field
              v-model.number="mjForm.amount"
              label="Amount Spent"
              prefix="₱"
              type="number"
              filled rounded color="blue" hide-details
              class="no-spinners"
              @keydown="filterKey"
              @focus="$event.target.select()"
              @input="val => (mjForm.amount = val === null || val === '' ? 0 : val)"
            ></v-text-field>
          </v-card>
        </v-col>
      </v-row>

      <v-sheet
        v-if="larizeForm.amount > 0 || mjForm.amount > 0"
        class="mobile-action-footer d-flex justify-center align-center pa-3"
        elevation="10"
        :dark="$vuetify.theme.dark"
      >
        <v-btn 
          :color="$vuetify.theme.dark ? 'red lighten-1' : 'red darken-2'" 
          :dark="!$vuetify.theme.dark"
          :light="$vuetify.theme.dark"
          large rounded elevation="4" class="w-full-mobile font-weight-bold text-uppercase px-6"
          @click="logExpenses" 
          :loading="isLoading"
        >
          <v-icon left>mdi-receipt</v-icon>
          Process and Record Gastos
        </v-btn>
      </v-sheet>

      <v-row class="mt-4">
        <v-col cols="12">
          <v-card elevation="4" class="rounded-xl overflow-hidden" :dark="$vuetify.theme.dark">
            <v-tabs v-model="activeTab" background-color="grey darken-4" dark grow slider-color="red">
              <v-tab><v-icon left class="hidden-xs-only">mdi-basket-outline</v-icon> Larize Logs</v-tab>
              <v-tab><v-icon left class="hidden-xs-only">mdi-basket-fill</v-icon> MJ Logs</v-tab>
            </v-tabs>
            
            <v-tabs-items v-model="activeTab" touchless>
              <v-tab-item v-for="logType in ['larize', 'mj']" :key="logType">
                <div class="table-responsive table-scroll-height">
                  <v-simple-table class="history-table" fixed-header>
                    <thead>
                      <tr>
                        <th class="text-uppercase text-caption font-weight-black no-wrap">Date</th>
                        <th class="text-uppercase text-caption font-weight-black no-wrap">Item / Description</th>
                        <th class="text-uppercase text-caption font-weight-black no-wrap">Category</th>
                        <th class="text-uppercase text-caption font-weight-black no-wrap">Cost</th>
                        <th class="text-center text-uppercase text-caption font-weight-black no-wrap">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in (logType === 'larize' ? larizeLogs : mjLogs)" :key="item.id">
                        <td class="no-wrap date-cell">{{ formatDate(item.date) }}</td>
                        <td class="font-weight-medium text-body-2">{{ item.item_name }}</td>
                        <td>
                          <v-chip small dense :color="getCategoryColor(item.category)" dark class="font-weight-bold text-caption">
                            {{ item.category }}
                          </v-chip>
                        </td>
                        <td class="font-weight-bold no-wrap" :class="$vuetify.theme.dark ? 'red--text text--lighten-2' : 'red--text text--darken-2'">
                          {{ hideValues ? '₱••••••' : `₱${formatNumber(item.amount)}` }}
                        </td>
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="editDialog" max-width="500px">
      <v-card class="rounded-lg" :dark="$vuetify.theme.dark">
        <v-card-title class="headline error white--text px-6" :class="{ 'red darken-4': $vuetify.theme.dark }">
          Edit Gastos Record
        </v-card-title>
        <v-card-text class="pt-6">
          <v-row dense>
            <v-col cols="12"><v-text-field v-model="editItem.date" label="Date" type="date" outlined dense></v-text-field></v-col>
            <v-col cols="12"><v-text-field v-model="editItem.item_name" label="Item Name" outlined dense></v-text-field></v-col>
            <v-col cols="12">
              <v-select 
                v-model="editItem.category" 
                :items="editItem.spender === 'larize' ? larizeCategories : mjCategories" 
                label="Category" outlined dense
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model.number="editItem.amount" label="Amount" outlined dense prefix="₱" type="number" class="no-spinners" @keydown="filterKey"></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey lighten-1" text @click="editDialog = false">Cancel</v-btn>
          <v-btn color="error" rounded class="px-6" @click="saveEdit" :loading="isLoading">Save Changes</v-btn>
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
    editItem: { id: null, item_name: '', category: '', amount: 0, date: '', spender: '' },
    activeTab: null,
    isLoading: false,
    hideValues: true,
    larizeForm: { item_name: '', category: 'Needs', amount: 0, spender: 'larize' },
    mjForm: { item_name: '', category: 'Needs', amount: 0, spender: 'mj' },
    larizeLogs: [],
    mjLogs: [],
    larizeCategories: ['Savings', 'Emergency', 'DF', 'Needs', 'Wants', 'Unexpected Gastos'],
    mjCategories: ['Savings', 'Emergency', 'Needs', 'Wants', 'Unexpected Gastos']
  }),
  computed: {
    combinedSpend() {
      const sum = (arr) => arr.reduce((acc, item) => acc + (parseFloat(item.amount) || 0), 0);
      return {
        Larize: sum(this.larizeLogs),
        MJ: sum(this.mjLogs),
        Overall: sum(this.larizeLogs) + sum(this.mjLogs)
      };
    }
  },
  created() {
    this.fetchGastos();
  },
  methods: {
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
    formatNumber(val) {
      if (!val) return "0.00";
      return parseFloat(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },
    getCategoryColor(category) {
      const colors = { 
        Savings: 'green', 
        Emergency: 'orange', 
        DF: 'purple', 
        Needs: 'blue', 
        Wants: 'pink',
        'Unexpected Gastos': 'cyan' 
      };
      return colors[category] || 'grey';
    },
    fetchGastos() {
      this.isLoading = true;
      axios.get(`${this.$url}/api/actual-expenses`)
        .then((res) => {
          this.larizeLogs = res.data.larize;
          this.mjLogs = res.data.mj;
        })
        .finally(() => { this.isLoading = false; });
    },
    async logExpenses() {
      this.isLoading = true;
      const endpoint = `${this.$url}/api/actual-expenses`;
      try {
        if (this.larizeForm.amount > 0 && this.larizeForm.item_name.trim() !== '') {
          await axios.post(endpoint, this.larizeForm);
          this.larizeForm = { item_name: '', category: 'Needs', amount: 0, spender: 'larize' };
        }
        if (this.mjForm.amount > 0 && this.mjForm.item_name.trim() !== '') {
          await axios.post(endpoint, this.mjForm);
          this.mjForm = { item_name: '', category: 'Needs', amount: 0, spender: 'mj' };
        }
        this.fetchGastos();
      } catch (e) {
        alert("Error saving your spend data.");
      } finally {
        this.isLoading = false;
      }
    },
    openEdit(item) {
      this.editItem = JSON.parse(JSON.stringify(item));
      if (this.editItem.date) this.editItem.date = this.editItem.date.split(' ')[0];
      this.editDialog = true;
    },
    async saveEdit() {
      this.isLoading = true;
      try {
        await axios.put(`${this.$url}/api/actual-expenses/${this.editItem.id}`, this.editItem);
        this.editDialog = false;
        this.fetchGastos();
      } catch (error) {
        alert("Failed to update entry.");
      } finally {
        this.isLoading = false;
      }
    },
    async deleteLog(id) {
      if (confirm("Delete this expense permanently?")) {
        this.isLoading = true;
        try {
          await axios.delete(`${this.$url}/api/actual-expenses/${id}`);
          this.fetchGastos();
        } catch (e) {
          alert("Delete action failed");
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
.magenta { background-color: #e91e63 !important; }
.magenta--text { color: #e91e63 !important; }
.border-left-lg-red { border-left: 6px solid #e53935 !important; }
.cursor-pointer { cursor: pointer; }

.table-scroll-height {
  max-height: 450px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #424242 transparent;
}

.theme--dark .table-scroll-height {
  scrollbar-color: #424242 transparent;
}

.table-scroll-height::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.table-scroll-height::-webkit-scrollbar-track {
  background: transparent; 
}
.table-scroll-height::-webkit-scrollbar-thumb {
  background-color: #cccccc;
  border-radius: 4px;
}
.theme--dark .table-scroll-height::-webkit-scrollbar-thumb {
  background-color: #424242; 
}
.table-scroll-height::-webkit-scrollbar-thumb:hover {
  background-color: #b0b0b0;
}
.theme--dark .table-scroll-height::-webkit-scrollbar-thumb:hover {
  background-color: #555555;
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

.table-responsive {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.no-wrap {
  white-space: nowrap !important;
}
.date-cell {
  min-width: 150px;
  font-size: 13px !important;
}
.actions-wrapper {
  gap: 4px;
  min-width: 80px;
}

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

@media (max-width: 600px) {
  .w-full-mobile {
    width: 100% !important;
  }
}
</style>