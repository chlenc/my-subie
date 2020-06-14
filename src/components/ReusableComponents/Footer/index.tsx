import React from 'react'
import {useWindowDimensions} from '../../../utils/dimensions'
import FooterDesktop from './FooterDesktop'
import FooterMobile from './FooterMobile'

const Footer: React.FC = () => {
    const {width} = useWindowDimensions();
    return width > 768 ? <FooterDesktop/> : <FooterMobile/>;
};

export default Footer