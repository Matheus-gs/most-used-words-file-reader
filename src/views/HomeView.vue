<template>
  <v-container fluid>
    <v-form>
      <v-file-input
        label="Selecione as Legendas"
        prepend-icon="mdi-message-text"
        append-outer-icon="mdi-send"
        outlined
        multiple
        chips
        v-model="files"
        @click:append-outer="processSubtitles"
      />
    </v-form>

    <div class="pills">
      <AppPill
        v-for="word in groupedWords"
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from "electron";
import AppPill from "../components/AppPill.vue";

export default {
  components: { AppPill },

  data: function () {
    return {
      files: [],
      groupedWords: [],
    };
  },

  methods: {
    processSubtitles() {
      const filePaths = this.files.map((file) => file.path);
      ipcRenderer.send("getFiles", filePaths);
      ipcRenderer.on("getFiles", (event, response) => {
        this.groupedWords = response
      });
    },
  },
};
</script>

<style scoped>
.pills {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
}
</style>