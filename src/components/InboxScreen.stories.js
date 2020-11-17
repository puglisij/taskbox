import InboxScreen from './InboxScreen.svelte';

export default {
  title: 'TaskBox/PureInboxScreen',
  Component: InboxScreen,
};

export const standard = () => ({
  Component: InboxScreen,
});

export const error = () => ({
  Component: InboxScreen,
  props: {
    error: true,
  },
});