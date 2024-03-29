import { defineStore } from "pinia";
import { ref, computed, Ref, ComputedRef } from "vue";

interface User {
  id: number;
  name: string;
  code: number;
  note: string;
}

export const useUserStore = defineStore("users", () => {
  const users: Ref<User[]> = ref([
    { id: 1, name: "John", code: 20, note: "Note" },
    { id: 2, name: "Smith", code: 38, note: "Note" },
    { id: 3, name: "Bob", code: 29, note: "Note" },
    { id: 4, name: "Leslie", code: 45, note: "Note" },
  ]);

  const selectedRows: Ref<User[]> = ref([]);

  const getSelectedRow: ComputedRef<User[]> = computed(() => {
    return selectedRows.value;
  });

  const getUsers: ComputedRef<User[]> = computed(() => {
    return users.value;
  });

  const setSelectedRow = computed({
    get: () => selectedRows.value,
    set: (val: User[]) => updateRow(val),
  });

  function updateRow(newRow: User[]): void {
    selectedRows.value = remoteDataLink(newRow);
  }

  function addNewRow(): void {
    const newRow: User = {
      id: users.value.length + 1,
      name: "",
      code: null,
      note: "",
    };
    users.value.push(newRow);
    updateRow(newRow);
  }

  function saveRow(): void {
    users.value = users.value.map((user) =>
      user.id === selectedRows.value.id ? selectedRows.value : user,
    );
  }

  function remoteDataLink(data: User[]): User[] {
    return {
      id: data.id,
      name: data.name,
      code: data.code,
      note: data.note,
    };
  }

  return { getUsers, getSelectedRow, setSelectedRow, addNewRow, saveRow };
});
