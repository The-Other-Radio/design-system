import React from 'react';

import { BlogCard } from './BlogCard';

export default {
  title: 'Example/BlogCard',
  component: BlogCard
};

const Template = (args) => <BlogCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'BlogCard'
};
