import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mySidebar: [
    {
      type: 'category',
      label: 'Capabilities',
      items: [
        'browse-offerings',    // References browse-offerings.md
        'shopping-cart',       // References shopping-cart.md
        'addon-management'     // References addon-management.md
      ],
    },
  ],
};

export default sidebars;

