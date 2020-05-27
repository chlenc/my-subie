import React from 'react'
import {useWindowDimensions} from '../../../utils/dimensions'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

const Menu: React.FC = () => {
    const {width} = useWindowDimensions();
    return width > 767 ? <MenuDesktop/> : <MenuMobile/>;
};

export default  Menu 