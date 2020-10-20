import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import ThemeSwitcher from './ThemeSwitcher';
import CardSwitcher from './CardSwitcher'
import { fetchData } from './../CardDataUtils';

// EmptyBoxコンポーネントを実装してローディングイメージを中心に表示しましょう。
const EmptyBox = () => {
  const loadingBox = {
    border: '1px solid #efefef',
    borderRadius: '5px',
    width: '614px',
    height: '614px',
    display: 'flex',
    justifyContent: 'center'
  }
  return (
    <article className='insta-card'>
      <div style={loadingBox}>
      </div>
    </article>
  )
 
}

export default class extends Component {
  state = {
    theme: 'light',
    chosenId: 1,
    isLoading: true
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
  }

  render() {
    const { 
      theme, 
      chosenId,
      isLoading,
    } = this.state;
    let instaCardClass = "insta-card";
    if (theme === 'dark') {
      instaCardClass = "insta-card insta-card-dark"
    }
    let articlePart;
    if (isLoading === false) {
      articlePart = (
        <article className={instaCardClass}>
          <Header 
            theme={theme} 
            chosenId={chosenId}
            isLoading={isLoading}
          />
          <Body 
            theme={theme} 
            chosenId={chosenId}
            isLoading={isLoading}
          />
        </article>
      );
    } else {
      articlePart = <EmptyBox />
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