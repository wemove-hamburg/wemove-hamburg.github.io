/** @jsx jsx */
import { jsx } from 'theme-ui';

import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import Hero from '../texts/hero';
import Abstract from '../texts/abstract';
import Distribution from '../texts/distribution';
import Infrastructure from '../texts/infrastructure';
import Initiatives from '../texts/initiatives';
import Inspirations from '../texts/inspirations';
import People from '../texts/people';
import Preamble from '../texts/preamble';

const Homepage = () => {
  return (
    <Layout>
      <section sx={{ mb: [5, 6, 7], fontSize: [1, 2, 3], mt: 2 }}>
        <Hero />
      </section>

      <section sx={{ mb: [4, 5, 6] }}>
        <Preamble />
      </section>
      <section sx={{ mb: [4, 5, 6] }}>
        <Abstract />
      </section>
      <section sx={{ mb: [4, 5, 6] }}>
        <People />
      </section>
      <section sx={{ mb: [4, 5, 6] }}>
        <Distribution />
      </section>
      <section sx={{ mb: [4, 5, 6] }}>
        <Infrastructure />
      </section>
      <section sx={{ mb: [4, 5, 6] }}>
        <Initiatives />
      </section>
      <section sx={{ mb: [4, 5, 6] }}>
        <Inspirations />
      </section>
    </Layout>
  );
};

export default Homepage;
