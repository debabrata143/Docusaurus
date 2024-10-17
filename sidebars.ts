import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mySidebar: [
    {
      type: 'category',
      label: 'Capabilities',
      items: [
        {
          type: 'category',
          label: 'Browse Offerings',
          items: [
            'browse-offerings/use-case-1',
            'browse-offerings/use-case-2',
            'browse-offerings/use-case-3',
          ],
        },
        {
          type: 'category',
          label: 'Shopping Cart',
          items: [
            'shopping-cart/use-case-1',
            'shopping-cart/use-case-2',
          ],
        },
        {
          type: 'category',
          label: 'Addon Management',
          items: [
            'addon-management/use-case-1',
            'addon-management/use-case-2',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
