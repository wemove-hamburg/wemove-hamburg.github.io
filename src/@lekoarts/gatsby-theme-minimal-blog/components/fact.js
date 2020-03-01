/** @jsx jsx */
import { jsx } from 'theme-ui';

const Fact = ({ value, title, description, date, source }) => (
  <span>
    {title}: {value}
  </span>
);

export default Fact;
