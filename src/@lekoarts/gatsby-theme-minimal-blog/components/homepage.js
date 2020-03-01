/** @jsx jsx */
import { jsx } from 'theme-ui';

import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import Hero from '../texts/hero';
import Audience from '../texts/audience';
import Preamble from '../texts/preamble';

const Homepage = () => {
  return (
    <Layout>
      <section sx={{ mb: [5, 6, 7], fontSize: [1, 2, 3], mt: 2 }}>
        <Hero />
      </section>

      <Preamble />
      <Audience />
    </Layout>
  );
};

export default Homepage;
