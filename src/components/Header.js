import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <Link to='/'>
                    <img src='/images/home-icon.svg' />
                    <span>HOME</span>
                </Link>
                <a>
                    <img src='/images/search-icon.svg' />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg' />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg' />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg' />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg' />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src='/images/zain.jpg' />
        </Nav>
    )
}

export default Header;

const Nav = styled.nav`
    overflow-x: hidden;
    height: 70px;
    background: #000;
    display: flex;
    align-items: center;
    padding: 0 calc(3.5vw + 5px);
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 40px;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;
        color:inherit;
        img{
            width: 20px;
        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: '';
                height: 1px;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -2px;
                background: white;
                transition: all 0.2s linear;
                opacity: 0;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`
