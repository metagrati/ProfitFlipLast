import '../components/contract-info';

export default {
  title: 'Components/Contract Info',
};

export const Default = () => {
  const el = document.createElement('contract-info');
  el.setAttribute('address', '0x123456789abcdef');
  el.setAttribute('owner', '0xabcdef123456789');
  return el;
};
