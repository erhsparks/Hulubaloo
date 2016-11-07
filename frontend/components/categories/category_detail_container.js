import { connect } from 'react-redux';
import CategoryDetail from './category_detail';

const mapStateToProps = ({ category }) => {
  let videos = category.videos;
  let rows = [];
  for (let i = 0; i < videos.length; i += 4) {
    rows.push(videos.slice(i + 0, i + 4));
  }

  return ({
    category,
    rows
  });
};

export default connect (
  mapStateToProps
)(CategoryDetail);
