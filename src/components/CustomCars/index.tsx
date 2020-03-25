import React from 'react'
import {useWindowDimensions} from '../../utils/dimensions'
import CustomCarsDesktop from './CustomCarsDesktop'

const CustomCars: React.FC = () => {
    const {width} = useWindowDimensions();
    return width > 768 ? <CustomCarsDesktop/> : null;
};

export default CustomCars

