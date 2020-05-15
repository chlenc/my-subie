import React from 'react'
import {useWindowDimensions} from '../../utils/dimensions'
import ShopPageDesktop from './ShopPageDesktop'
import ShopPageMobile from './ShopPageMobile'

const ShopPage: React.FC = () => {
    const {width} = useWindowDimensions();
    return width > 1279 ? <ShopPageDesktop/> : <ShopPageMobile/>;
};

export default ShopPage