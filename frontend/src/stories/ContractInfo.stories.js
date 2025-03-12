import '../components/contract-info.js';

export default {
  title: 'Components/ContractInfo',
  component: 'contract-info',
  // Decorators let you wrap your story in a styled container
  decorators: [
    (Story) => {
      // Create a container with a nice background and padding
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.justifyContent = 'center';
      container.style.alignItems = 'flex-start';
      container.style.minHeight = '100vh';
      container.style.padding = '2rem';
      container.style.backgroundColor = '#f5f7fa'; // soft gray background

      // Append the story (the <contract-info> element) to our container
      container.appendChild(Story());
      return container;
    },
  ],
};

const Template = (args) => {
  const element = document.createElement('contract-info');
  if (args.address) element.setAttribute('address', args.address);
  if (args.owner) element.setAttribute('owner', args.owner);
  return element;
};

export const Default = Template.bind({});
Default.args = {
  address: '0x1234567890abcdef1234567890abcdef12345678',
  owner: '0xabcdef1234567890abcdef1234567890abcdef12',
};
