(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(t,e,i){"use strict";i.r(e);var s=i("q1tI"),a=i.n(s),n=i("Bl7J"),r=i("rY4l"),o=i("eC7B"),l=i("JwsL");function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var u=function(t){var e,i;function s(e){var i;return(i=t.call(this,e)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},i.handleOpenArticle=i.handleOpenArticle.bind(c(i)),i.handleCloseArticle=i.handleCloseArticle.bind(c(i)),i.setWrapperRef=i.setWrapperRef.bind(c(i)),i.handleClickOutside=i.handleClickOutside.bind(c(i)),i}i=t,(e=s).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var u=s.prototype;return u.componentDidMount=function(){var t=this;this.timeoutId=setTimeout((function(){t.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},u.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},u.setWrapperRef=function(t){this.wrapperRef=t},u.handleOpenArticle=function(t){var e=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:t}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({articleTimeout:!e.state.articleTimeout})}),350)},u.handleCloseArticle=function(){var t=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({isArticleVisible:!t.state.isArticleVisible,article:""})}),350)},u.handleClickOutside=function(t){this.wrapperRef&&!this.wrapperRef.contains(t.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},u.render=function(){return a.a.createElement(n.a,{location:this.props.location},a.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},a.a.createElement("div",{id:"wrapper"},a.a.createElement(r.a,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),a.a.createElement(o.a,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),a.a.createElement(l.a,{timeout:this.state.timeout})),a.a.createElement("div",{id:"bg"})))},s}(a.a.Component);e.default=u}}]);
//# sourceMappingURL=component---src-pages-index-js-06644f25fec8693ac6bf.js.map