<script setup lang="ts">
import TreePost from 'components/TreePost/TreePost.vue';
import { QTreeNode } from 'quasar/dist/types/api';
import { useLocalStorage } from 'src/composables/useLocalStorage';
import { initialNodes } from 'src/constansts/nodes';

const nodes = useLocalStorage<QTreeNode[]>('nodes', initialNodes);

const findNode = (id: number) => {
  const stack = [...nodes.value];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!node) {
      continue;
    }

    if (node.id === id) {
      return node;
    }

    if (node.children?.length) {
      stack.push(...node.children);
    }
  }

  return null;
};

const addNode = (parentId?: number) => {
  const newNode = {
    id: Date.now(),
    label: 'New element',
    children: [],
  };

  if (!parentId) {
    nodes.value.push(newNode);
    return;
  }

  const parentNode = findNode(parentId);
  if (!parentNode) {
    return;
  }

  if (!parentNode.children) {
    parentNode.children = [];
  }

  parentNode.children.push(newNode);
};

const updateLabelOfNode = (nodeId: number, newLabel: string) => {
  const node = findNode(nodeId);
  if (!node) {
    return;
  }

  node.label = newLabel;
};

const deleteNode = (nodeId: number) => {
  const deletedIdx = nodes.value.findIndex((node) => node.id === nodeId);
  if (deletedIdx !== -1) {
    nodes.value.splice(deletedIdx, 1);
    return;
  }

  const stack = [...nodes.value];

  while (stack.length > 0) {
    const parent = stack.pop();

    if (!parent || !parent.children) {
      return;
    }

    const deletedIdx = parent.children.findIndex((node) => node.id === nodeId);
    if (deletedIdx !== -1) {
      parent.children.splice(deletedIdx, 1);
      return;
    }

    stack.push(...parent.children);
  }
};
</script>

<template>
  <q-page>
    <tree-post
      :nodes="nodes"
      @add-node="addNode"
      @update-label-of-node="updateLabelOfNode"
      @delete-node="deleteNode"
    />
    <div class="q-pa-md">
      <q-btn @click="() => addNode()" color="primary" icon="add" rounded />
    </div>
  </q-page>
</template>
