import React from 'react';

import { parser } from '../lib/reactRenderer';

import { generator } from '../components/Page';
import TopNav from '../components/TopNav';
import Content from '../components/Content';

import markdown from '../content/example.md';

const content = parser(markdown);

/* WORKLOG:
 * all pages should be written like this
 * (using the page generator)
 * this will remove quite a bit of boiletplate
 */

export default generator('RootExample', [
  <TopNav />,
  <Content>
    {content}
  </Content>,
]);
