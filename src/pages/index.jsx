import React from 'react';
import cx from 'classnames';
import Layout from '../components/layout';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import BackgroundLoader from '../components/BackgroundLoader';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
    };
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.timeoutIds = [];
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    this.timeoutIds.forEach(clearTimeout);
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: true,
      article,
    });

    this.timeoutIds.push(
      setTimeout(() => {
        this.setState({
          timeout: true,
        });
      }, 325)
    );

    this.timeoutIds.push(
      setTimeout(() => {
        this.setState({
          articleTimeout: true,
        });
      }, 350)
    );
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: false,
    });

    this.timeoutIds.push(
      setTimeout(() => {
        this.setState({
          timeout: false,
        });
      }, 325)
    );

    this.timeoutIds.push(
      setTimeout(() => {
        this.setState({
          isArticleVisible: false,
          article: '',
        });
      }, 350)
    );
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  render() {
    return (
      <Layout>
        <BackgroundLoader>
          {({ isLoading }) => (
            <div
              className={cx('body', {
                'is-loading': isLoading,
                'is-article-visible': this.state.isArticleVisible,
              })}
            >
              <div id="wrapper">
                <Header
                  onOpenArticle={this.handleOpenArticle}
                  timeout={this.state.timeout}
                />
                <Main
                  isArticleVisible={this.state.isArticleVisible}
                  timeout={this.state.timeout}
                  articleTimeout={this.state.articleTimeout}
                  article={this.state.article}
                  onCloseArticle={this.handleCloseArticle}
                  setWrapperRef={this.setWrapperRef}
                />
                <Footer timeout={this.state.timeout} />
              </div>
            </div>
          )}
        </BackgroundLoader>
      </Layout>
    );
  }
}

export default IndexPage;
