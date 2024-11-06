import { ref, watch } from 'vue';

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const storedValue = localStorage.getItem(key);
  const data = ref<T>(storedValue ? JSON.parse(storedValue) : defaultValue);

  watch(
    data,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    { deep: true }
  );

  return data;
};
