/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

const Fact = ({ value, label, description, date, source }) => {
  const title = description ? date + `\n${description}` : date;
  const formatedValue = value.toLocaleString('de-DE');
  const formatedLabel = label + ': ';

  return (
    <span>
      {formatedLabel}
      <Styled.a
        target="_blank"
        title={title}
        alt={`Quelle für ${title}`}
        href={source}
      >
        {formatedValue}
      </Styled.a>
    </span>
  );
};

export default Fact;
