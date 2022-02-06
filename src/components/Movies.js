import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <Link to="/detail">
                        <img src="https://www.looper.com/img/gallery/the-untold-truth-of-the-simpsons/intro-1495123029.jpg" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/detail">
                        <img src="https://www.looper.com/img/gallery/the-untold-truth-of-the-simpsons/intro-1495123029.jpg" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/detail">
                        <img src="https://www.looper.com/img/gallery/the-untold-truth-of-the-simpsons/intro-1495123029.jpg" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/detail">
                        <img src="https://www.looper.com/img/gallery/the-untold-truth-of-the-simpsons/intro-1495123029.jpg" alt="" />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    padding: 0 0 60px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    img{
        width:100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
        border: 3px solid rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px, rgb(0 0 0 / 72%) 0px 16px 10px -10px;
        cursor: pointer;
        transition: all 250ms linear;
    }
`