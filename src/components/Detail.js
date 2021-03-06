import React from 'react';
import styled from 'styled-components';

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="Eating something" />
            </Background>
            <ImageTitle>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78' alt='title' />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png' alt="play icon" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/images/play-icon-white.png' alt="play icon" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupMatchButton>
                    <img src="/images/group-icon.png" />
                </GroupMatchButton>
            </Controls>
            <SubTitle>
                2021 . 7m . Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                This is the application and it is dummy content will soon be replace with the actual content from database.
            </Description>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    margin-top: 60px;
    margin-bottom: 60px;
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const  Controls = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 26px;
`

const PlayButton = styled.div`
    background: rgb(249 249 249);
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    color: black;
    padding: 7px 25px;
    letter-spacing: 1.8px;
    cursor: pointer;
    margin-right: 22px;
    text-transform: uppercase;
    &:hover{
        background: rgb(198 198 198);
    }
`

const TrailerButton = styled(PlayButton)`
    color: white;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
`

const AddButton = styled.div`
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    background: rgba(0,0,0,0.6);
    border-radius: 50%;
    margin-right: 16px;
    cursor: pointer;
    span{
        font-size: 25px;
        font-family: auto;
        font-weight: bold;
        color: white;
    }
`

const GroupMatchButton = styled(AddButton)`
    background: black;
`

const SubTitle = styled.div`
    font-size: 15px;
    min-height: 20px;
    margin-bottom: 16px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    color: rgb(249 249 249);
`