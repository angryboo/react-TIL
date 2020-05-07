/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './App.css';

const st = classNames.bind(style);

class App extends Component {
  changeInput = (text) => {
    console.log(`사용자 ${text} 입력중`);
  };

  clickButton = () => {
    console.log('로그인 시도');
  };

  render() {
    return (
      <form className={st('from')}>
        <div className={st('text')}>ID :</div>
        <input
          type="text"
          onChange={() => this.changeInput('아이디')}
          className={st('input')}
        />
        <div className={st('text')}>PASS :</div>
        <input
          type="password"
          onChange={() => this.changeInput('패스워드')}
          className={st('input')}
        />
        <button
          type="button"
          onClick={this.clickButton}
          className={st('button')}
        >
          로그인하기
        </button>
      </form>
    );
  }
}

export default App;
