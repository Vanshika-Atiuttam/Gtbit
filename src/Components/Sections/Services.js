import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'
import ServiceItem from '../ServiceItem/ServiceItem'
import Title from '../Title/Title'
import { code, design, desktop } from '../../utils/Icons'


function Services() {
    const theme = useTheme()
    return (
        <ServicesStyled id='services' theme={theme}>
            <Title name={'TYPES OF EVENTS WE ARE OFFERING TO CONDUCT'}/>
            <div className="services-con">
                <ServiceItem 
                    icon={design} 
                    title={'Educational Event'}
                    bg={theme.colorPurple}
                    shadow={theme.shadowPurple}
                    desc={'An event to spread information among under-priviliged kids'}
                />
                <ServiceItem 
                    icon={desktop}
                    title={'Vocational Events'}
                    bg={theme.colorGreenDark}
                    shadow={theme.shadowGreen}
                    desc={'An event to spread happiness among children with the help of fun activities'}
                />
                <ServiceItem 
                    icon={code}
                    title={'Health campaigns'}
                    shadow={theme.shadowPrimary}
                    bg={theme.colorPrimary}
                    desc={'Health Campaigns carried out to maintain the health of children'}
                />
                <ServiceItem 
                    icon={code}
                    title={'Awareness Drives'}
                    shadow={theme.shadowPrimary}
                    bg={theme.colorPrimary}
                    desc={'Drives conducted in order to spread information regarding social causes.'}
                />
                <ServiceItem 
                    icon={design} 
                    title={'Seminars'}
                    bg={theme.colorPurple}
                    shadow={theme.shadowPurple}
                    desc={'Seminars help in collaboration with Industrial Experts'}
                />
                <ServiceItem 
                    icon={desktop}
                    title={'Competitions'}
                    bg={theme.colorGreenDark}
                    shadow={theme.shadowGreen}
                    desc={'Periodic Competitions held in order to spread team spirit and competitiveness'}
                />
                
                
            </div>
        </ServicesStyled>
    )
}

const ServicesStyled = styled(SectionLayout)`
    background: ${(props) => props.theme.colorBgGrad};
    .services-con{
        margin-top: 3.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 2rem;
    }
`;

export default Services