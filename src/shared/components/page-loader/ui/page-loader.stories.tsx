import { ComponentStory, ComponentMeta } from '@storybook/react';
import PageLoader from './page-loader';

export default {
  title: 'shared/PageLoader',
  component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = () => <PageLoader />;

export const Default = Template.bind({});
