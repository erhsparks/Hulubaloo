import { connect } from 'react-redux';
import FeaturedCategories from './featured_categories';
import {
  fetchAllCategories,
  fetchVideosInCategory
} from '../../actions/video_actions';

const mapStateToProps = ({ video }) => ({
  categories: video.categories
});

const mapDispatchToProps = dispatch => ({
  fetchAllCategories: () => dispatch(fetchAllCategories()),
  fetchVideosInCategory: id => dispatch(fetchVideosInCategory(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedCategories);
