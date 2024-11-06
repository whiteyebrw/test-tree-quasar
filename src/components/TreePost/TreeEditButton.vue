<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  label: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:label']);

const isOpenDialog = ref(false);
const label = ref(props.label);

const handleSubmit = () => {
  emit('update:label', label.value);
};

const handleHide = () => {
  label.value = props.label;
};
</script>

<template>
  <q-btn icon="edit" rounded flat @click.stop="isOpenDialog = true" />

  <q-dialog @hide="handleHide" v-model="isOpenDialog">
    <q-card style="min-width: 350px">
      <q-card-section>
        <q-input
          label="Label"
          dense
          v-model="label"
          autofocus
          @keyup.enter="isOpenDialog = false"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn @click="handleSubmit" flat label="Save" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped></style>
