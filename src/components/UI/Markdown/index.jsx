import PropTypes from 'prop-types';

const Markdown = ({ markdown, className }) => (
  <article className={className} dangerouslySetInnerHTML={{ __html: markdown }} />
);

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Markdown;
