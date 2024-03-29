<script setup lang="ts">
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { toRefs } from "vue";
import { useUserStore } from "../stores/use-user-store";
const { getSelectedRow, saveRow } = toRefs(useUserStore());
</script>

<template>
  <div class="flex flex-column gap-2 w-3">
    <label for="name">Наименование</label>
    <InputText id="name" v-model="getSelectedRow.name" />
    <label for="code">Код скрипта</label>
    <InputText id="code" v-model="getSelectedRow.code" />
    <label for="note">Примечание</label>
    <InputText id="note" v-model="getSelectedRow.note" />
    <Button class="w-min" label="Сохранить" severity="info" @click="saveRow" />
  </div>
</template>
