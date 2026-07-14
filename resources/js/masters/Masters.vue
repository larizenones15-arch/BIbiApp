<template>
  <v-container>
    <v-btn color="primary" @click="dialog = true">Open Master Settings</v-btn>

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Master Data Management
        </v-card-title>

        <v-tabs v-model="activeTab" background-color="transparent" color="primary" grow>
          <v-tab>Systems</v-tab>
          <v-tab>Teams</v-tab>
          <v-tab>Category</v-tab>
        </v-tabs>

        <v-tabs-items v-model="activeTab">
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-text-field
                  v-model="forms.system.SystemName"
                  label="System Name"
                  outlined
                ></v-text-field>
                <v-file-input
                  v-model="forms.system.Logo"
                  label="System Logo"
                  accept="image/*"
                  prepend-icon="mdi-camera"
                  outlined
                ></v-file-input>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-text-field
                  v-model="forms.team.TeamName"
                  label="Team Name"
                  outlined
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-text-field
                  v-model="forms.category.ContentType"
                  label="Content Type"
                  outlined
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="success" @click="saveData" :loading="loading">Save Entry</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    activeTab: 0,
    loading: false,
    forms: {
      system: { SystemName: "", Logo: null },
      team: { TeamName: "" },
      category: { ContentType: "" },
    },
  }),
  methods: {
    async saveData() {
      this.loading = true;
      let payload = new FormData();
      let endpoint = "";

      // Determine which tab is active and set payload
      if (this.activeTab === 0) {
        endpoint = "/api/systems";
        payload.append("SystemName", this.forms.system.SystemName);
        payload.append("Logo", this.forms.system.Logo);
      } else if (this.activeTab === 1) {
        endpoint = "/api/teams";
        payload.append("TeamName", this.forms.team.TeamName);
      } else {
        endpoint = "/api/categories";
        payload.append("ContentType", this.forms.category.ContentType);
      }

      try {
        await axios.post(endpoint, payload);
        alert("Data saved successfully!");
        this.dialog = false;
      } catch (error) {
        console.error("Error saving data", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
