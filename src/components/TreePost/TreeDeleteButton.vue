<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  name: string;
}

defineProps<Props>();
const emit = defineEmits(['delete']);

const isOpenDialog = ref(false);
</script>

<template>
  <q-btn icon="cancel" rounded flat @click.stop="isOpenDialog = true" />

  <q-dialog v-model="isOpenDialog">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Delete?</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ name }}
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn @click="emit('delete')" flat label="Delete" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped></style>
