<script setup lang="ts">
import TreeEditButton from 'components/TreePost/TreeEditButton.vue';
import TreeDeleteButton from 'components/TreePost/TreeDeleteButton.vue';
import { QTreeNode } from 'quasar/dist/types/api';

interface Props {
  nodes: QTreeNode[];
}

defineProps<Props>();
const emit = defineEmits(['addNode', 'updateLabelOfNode', 'deleteNode']);
</script>

<template>
  <div class="q-pa-md">
    <q-tree :nodes="nodes" node-key="id">
      <template v-slot:default-header="{ node }">
        <q-card>
          <q-card-section>
            <div class="text-subtitle2">{{ node.label }}</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <tree-edit-button
              :label="node.label"
              @update:label="
                (newLabel) => emit('updateLabelOfNode', node.id, newLabel)
              "
            />
            <tree-delete-button
              :name="node.label"
              @delete="emit('deleteNode', node.id)"
            />
            <q-btn
              @click.stop="emit('addNode', node.id)"
              icon="add"
              rounded
              flat
            />
          </q-card-actions>
        </q-card>
      </template>
    </q-tree>
  </div>
</template>
