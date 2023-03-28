import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'
import about from '../../img/about.jpg'
import about2 from '../../img/aboutUs2.png'
import Title from '../Title/Title'
import Button from '../Button/Button'
import { brief, download, flame, medal, mug } from '../../utils/Icons'
import Progressbar from '../Progressbar/Progressbar'
import Stats from '../Stats/Stats'
import shape1 from '../../img/shape1.png'
import shape2 from '../../img/shape2.png'

function About() {
    const theme = useTheme()
    return (
        <AboutStyled id='about' theme={theme}>
            <div className="about-info">
                <div className="about-image">
                    <img src={about2} alt="" />
                </div>
                <div className="about-content">
                    <Title name={'About Us'} />
                    <p>
                    The Helping Hand platform connects the grateful contributors with the organizations and the NGO's to provide a wide range of volunteering services to impact the lives of millions, one at a time..
                    <br />
                    <br />
                    With changing times and the New Normal set-in, Digital has taken precedence over everything today, how do we stay connected and deliver best outcomes from every volunteering activity that takes place? How does one attain maximum benefits from volunteering and what is the Face of New-age volunteering?
                    <br />
                    <br />
                    LittleThings portal is your answer! The robust online solution not only elevates the level of volunteering but also structures and re-define the ways it can be done.
                    </p>
                    <div className="progress-bars">
                        {/* <Progressbar
                            bg={theme.colorPrimary}
                            service={'Web Development'}
                            progress={'85'}
                        />
                        <Progressbar bg={theme.colorPurple} service="UI/UX Design" progress="93" />
                        <Progressbar bg={theme.colorGreen} service="Game Development" progress="75" />
                         */}
                    </div>
                    <div className="btn-con">
                        {/* <Button 
                            name="Download CV"
                            blob="blob"
                            icon={download}
                            bg={theme.colorPrimary}
                            color={theme.colorWhite}
                            bFw={'600'}
                            onClick="onClick"
                            bRad={'30px'}
                            bPad={theme.bPad1}
                        /> */}
                    </div>
                </div>
            </div>
            <div className="stats-container">
                <Stats
                    icon={flame}
                    number="100+" 
                    desc="NGOs" 
                />
                <Stats icon={mug} number="200+" desc="Volunteers" />
                <Stats icon={brief} number="500+" desc="Hours of Support" />
                <Stats icon={medal} number="50+" desc="Amount Saved" />
            </div>
            <img alt='shape' src={shape1} className="shape1" />
            <img alt='shape' src={shape2} className="shape2" />
        </AboutStyled>
    )
}

const AboutStyled = styled(SectionLayout)`
    background-color: ${props => props.theme.aboutBg};
    position: relative;
    overflow: hidden;
    .stats-container{
        padding-top: 2rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .about-info{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        position: relative;
        z-index: 5;
        @media screen and (max-width: 1150px){
            grid-template-columns: repeat(1, 1fr);
        }
        .about-image{
            padding: 1.5rem;
            background: ${(props) => props.theme.colorBg3};
            border-radius: 5px;
            width: 80%;
            @media screen and (max-width: 1150px){
                width: 100%;
            }
            img{
                width: 100%;
            }
        }

        .about-content{
            .progress-bars{
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                margin-top: 1.5rem;
            }
            .btn-con{
                margin-top: 2rem;
                @media screen and (max-width: 1150px){
                    margin-bottom: 2rem;
                }
            }
        }
    }

    .shape1{
        position: absolute;
        left: -7px;
        top: -7px;
        z-index: 1;
        opacity: 0.05;
        pointer-events: none;
    }
    .shape2{
        position: absolute;
        right: -7px;
        top: -7px;
        z-index: 1;
        opacity: 0.05;
        pointer-events: none;
    }
`;

export default About