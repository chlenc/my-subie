import React from 'react'
import {useWindowDimensions} from '../../utils/dimensions'
import SortByModelDesktop from './SortByModelDesktop'
import SortByModelMobile from './SortByModelMobile'

const ShopPage: React.FC = () => {
    const {width} = useWindowDimensions();
    return width > 768 ? <SortByModelDesktop/> : <SortByModelMobile/>;
};

export default ShopPage
