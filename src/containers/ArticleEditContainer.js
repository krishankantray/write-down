import { connect } from "react-redux";

import ArticleEdit from '../components/article-edit/ArticleEdit';

const mapState = (state) => {
  const articleID = state.currentEdit;

  const selectedArticle = state.articles.data.find(article => article.id === articleID);

  if (selectedArticle && Object.keys(selectedArticle).length !== 0) {
    const { id, markdown, htmlOutput } = selectedArticle;

    return {
      id,
      markdown,
      htmlOutput
    };
  }

  return {};
};

export default connect(
  mapState,
  null
)(ArticleEdit);