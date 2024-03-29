<script setup lang="ts">
import DataTable from "primevue/datatable";
import Button from "primevue/button";
import Column from "primevue/column";
import { toRefs } from "vue";
import { useUserStore } from "../stores/use-user-store";
const { getUsers, setSelectedRow, addNewRow } = toRefs(useUserStore());
</script>

<template>
  <div class="flex flex-column gap-2">
    <DataTable
      :value="getUsers"
      v-model:selection="setSelectedRow"
      selectionMode="single"
      dataKey="id"
      showGridlines
      tableStyle="min-width: 50rem"
    >
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Наименование"></Column>
      <Column field="code" header="Код скрипта"></Column>
      <Column field="note" header="Примечание"></Column>
    </DataTable>
    <Button class="w-min" label="Добавить" severity="info" @click="addNewRow" />
  </div>
</template>

<style scoped></style>
