import React from 'react'
import {useWindowDimensions} from '../../utils/dimensions'
import HotGoodsDesktop from './HotGoodsDesktop'
import HotGoodsMobile from './HotGoodsMobile'

const HotGoods: React.FC = () => {
    const {width} = useWindowDimensions();
    return width > 768 ? <HotGoodsDesktop/> : <HotGoodsMobile/>;
};

export default HotGoods