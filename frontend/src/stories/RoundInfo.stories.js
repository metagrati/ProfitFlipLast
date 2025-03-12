import '../components/round-info.js';

export default {
  title: 'Components/RoundInfo',
  component: 'round-info',
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

      // Append the story (the <round-info> element) to our container
      container.appendChild(Story());
      return container;
    },
  ],
};

const Template = (args) => {
  const element = document.createElement('round-info');
  if (args.epoch) element.setAttribute('epoch', args.epoch);
  if (args.start) element.setAttribute('start', args.start);
  if (args.lock) element.setAttribute('lock', args.lock);
  if (args.close) element.setAttribute('close', args.close);
  if (args['lock-price']) element.setAttribute('lock-price', args['lock-price']);
  if (args['close-price']) element.setAttribute('close-price', args['close-price']);
  if (args['total-amount']) element.setAttribute('total-amount', args['total-amount']);
  return element;
};

export const Default = Template.bind({});
Default.args = {
  epoch: '42',
  start: new Date().toLocaleString(),
  lock: new Date(Date.now() + 60000).toLocaleString(),
  close: new Date(Date.now() + 120000).toLocaleString(),
  'lock-price': '2000',
  'close-price': '2100',
  'total-amount': '100 MATIC',
};
