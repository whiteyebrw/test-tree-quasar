import { QTreeNode } from 'quasar/dist/types/api';

export const initialNodes: QTreeNode[] = [
  {
    id: 1,
    label: 'Satisfied customers',
    children: [
      {
        id: 2,
        label: 'Good food',
        children: [
          {
            id: 3,
            label: 'Quality ingredients',
          },
          {
            id: 4,
            label: 'Good recipe',
          },
        ],
      },
      {
        id: 5,
        label: 'Good service',
        children: [
          { id: 6, label: 'Prompt attention' },
          { id: 7, label: 'Professional waiter' },
        ],
      },
      {
        id: 8,
        label: 'Pleasant surroundings',
        children: [
          { id: 9, label: 'Happy atmosphere' },
          { id: 10, label: 'Good table presentation' },
          { id: 11, label: 'Pleasing decor' },
        ],
      },
    ],
  },
];
