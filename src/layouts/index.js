import React, { Component } from 'react'
import logo from './logo.svg'
import gif from './video.gif'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    font-family: Menlo,Monaco,'Lucida Console','Liberation Mono','DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New',mono,monospace;
    background-color: #e8390e;
    font-size: 12px;
  }
`
const BgImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${gif});
  background-size: cover;
  background-position: center top;
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
`
const Container = styled.div`
  overflow-x: hidden;
  -wekit-oveflow-scrolling: touch;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
`
const Logo = styled.img.attrs({
  width: 120,
  height: 200,
  src: logo
})`
  margin: 20px;
  flex-shrink: 0;
`
const Link = styled.a`
  margin-bottom: 20px;
  padding: 10px;
  color: white;
  text-decoration: none;
  &:hover {
    color: #e8390e;
  }
`

export default class App extends Component {
  render() {
    return (
      <Container>
        <BgImage />
        <Container>
          <Logo/>
          <Links>
            <Link href='https://www.instagram.com/basking_club'>Instagram</Link>
            <Link href='https://www.facebook.com/baskingclub/'>Facebook</Link>
          </Links>
        </Container>
      </Container>
    )
  }
}
