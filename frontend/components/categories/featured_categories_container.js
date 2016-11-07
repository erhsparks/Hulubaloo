import { connect } from 'react-redux';
import { values } from 'lodash';
import FeaturedCategories from './featured_categories';

const mapStateToProps = ({ categories }) => ({
  categories: values(categories)
});

export default connect(
  mapStateToProps
)(FeaturedCategories);
