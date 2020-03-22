import React from 'react'
import {useWindowDimensions} from './dimensions';
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

const Menu: React.FC = () => {
    const {width} = useWindowDimensions();
    return width > 768 ? <MenuDesktop/> : <MenuMobile/>;
};

export default  Menu 