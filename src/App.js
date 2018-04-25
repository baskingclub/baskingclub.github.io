import React, { Component } from 'react'
import logo from './logo.svg'
import poster from './poster.jpg'
import vid from './video.mp4'
import styled, { injectGlobal } from 'styled-components'
import isAutoplaySupported from './isAutoplaySupported'

injectGlobal`
  body {
    font-family: Menlo,Monaco,'Lucida Console','Liberation Mono','DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New',mono,monospace;
    background-color: #e8390e;
    font-size: 12px;
  }
`
const BgVideo = styled.video.attrs({
  src: vid,
  autoPlay: true,
  loop: true,
})`
  flex-shrink: 0;
`
const BgImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url(${poster});
  background-size: cover;
  background-position: 50% 50%;
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
`
const Container = styled.div`
  overflow-x: hidden;
  -wekit-oveflow-scrolling: touch;
  background-color: rgba(0,0,0,0.5);
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
  state = {}
  constructor(props) {
    super(props)
    this.onResize = this.onResize.bind(this)
  }
  onResize() {
    this.setState({
      size: Math.max(window.innerWidth, window.innerHeight)
    })
  }
  componentDidMount() {
    window.addEventListener('resize', this.onResize)
    isAutoplaySupported(autoplay => {
      this.setState({ autoplay })
      this.onResize()
    })
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }
  render() {
    const { autoplay, playing, size } = this.state
    return (
      <Container>
        { size &&  autoplay && <BgVideo width={size} height={size}/> }
        { size && !autoplay && <BgImage/> }
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
