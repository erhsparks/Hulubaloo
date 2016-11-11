import { connect } from 'react-redux';
import { rowsOfFour } from '../../../reducers/selectors_and_transformers';
import CategoryDetail from './category_detail';

const mapStateToProps = ({ category }) => {
  let rows = rowsOfFour(category.videos);

  return ({
    category,
    rows
  });
};

export default connect (
  mapStateToProps
)(CategoryDetail);
