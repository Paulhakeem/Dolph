export const useDbStore = defineStore("database", () => {});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDbStore, import.meta.hot));
}
