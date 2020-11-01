import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import ThemeSwitcher from './ThemeSwitcher';
import CardSwitcher from './CardSwitcher'
import { fetchData } from './../CardDataUtils';
import { ReactComponent as LoadingImage } from './../images/loading.svg';

// EmptyBoxコンポーネントを実装してローディングイメージを中心に表示しましょう。
const EmptyBox = () => {
  const loadingBox = {
    border: '1px solid #efefef',
    borderRadius: '5px',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <article className='insta-card' style={{ height: 600 }}>
      <div style={loadingBox}>
        <LoadingImage />
      </div>
    </article>
  )
 
}

export default class extends Component {
  state = {
    theme: 'light',
    chosenId: 1,
    isLoading: true,
    data: null,
    loadedOnce: false
  }

  componentDidMount() {
    // データを取得してstateに反映します。
    fetchData().then((data) => {
      this.setState({
        isLoading: false,
        data
      })
    })
  }

  onSwitchTheme = (theme, e = null) => {
    if (e) e.preventDefault();
    this.setState({ theme })
  }

  onSwitchCard = (id, e = null) => {
    if (e) e.preventDefault();
    // 与えられたidをもとに必要ならデータを再取得します。
    const {
      data
    } = this.state;
    if (id === data.id || !id) return;
      this.setState({
        chosenId: id,
        isLoading: true
      })
      fetchData(id).then((data) => {
        this.setState({
          isLoading: false,
          data,
          loadedOnce: true
        })
      })
  }

  render() {
    const { 
      theme, 
      chosenId,
      isLoading,
      data,
      loadedOnce
    } = this.state;
    let instaCardClass = "insta-card";
    if (theme === 'dark') {
      instaCardClass = "insta-card insta-card-dark"
    }
    let articlePart;
    if (isLoading && loadedOnce === false) {
      articlePart = <EmptyBox />  
    } else {
      articlePart = (
        <article className={instaCardClass}>
          <Header 
            theme={theme} 
            chosenId={chosenId}
            data={data}
          />
          <Body 
            theme={theme} 
            chosenId={chosenId}
            data={data}
          />
        </article>
      );
    }    
    return (
      <div className="card-wrapper">
        <div style={{ marginBottom: 7 }}>
          <p>- テーマを選択してください。</p>
          <ThemeSwitcher 
            theme={theme}
            switchTheme={this.onSwitchTheme} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <p>- 表示するカードを選択してください。</p>
          <CardSwitcher 
            chosenId={chosenId}
            switchCard={this.onSwitchCard} />
        </div>
        {articlePart}
      </div>
    );
  }
}