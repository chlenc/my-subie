import React from 'react'
import { useWindowDimensions } from '../../utils/dimensions'
import HowToBuyDesktop1280 from './HowToBuyDesktop1280'
import HowToBuyDesktop768 from './HowToBuyDesktop768'

const HowToBuy: React.FC = () => {
    const { width } = useWindowDimensions();
    if (width <= 768) return null
    else if (width <= 1280) return <HowToBuyDesktop768 />
    else return <HowToBuyDesktop1280 />
};

export default HowToBuy

