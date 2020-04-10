/**@jsx jsx*/
import React from 'react'
import { css, jsx } from '@emotion/core'
import { useWindowDimensions } from '../../utils/dimensions'
import HotGoodsDesktop from './HotGoodsDesktop'
import HotGoodsMobile from './HotGoodsMobile'
import { inject, observer } from 'mobx-react'
import { IItem, DataStore } from '../../stores/DataStore'
import Loader from 'react-loader-spinner'

interface IProps {
    dataStore?: DataStore
}

const HotGoods: React.FC<IProps> = inject('dataStore')(observer(
    ({ dataStore }) => {
        const goods = Object.values(dataStore!.goods)
        const hotGoods = randomGoods(goods)
        const { width } = useWindowDimensions();
        if (!(goods && goods.length)) {
            return <div css={css` margin: 10% auto; `}>
                <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </div>
        } else {
            return width > 768 ? <HotGoodsDesktop goods={hotGoods} /> : <HotGoodsMobile goods={hotGoods} />;
        }
    }
));



function randomGoods(goods: Array<IItem>) {
    const hotGoods: Array<IItem> = []
    const filterGoods = goods.filter(item => !item.tags.toString().includes('HOT'))
    const N = filterGoods.length
    console.log('N=', N)
    let rand: number = 0
    while (hotGoods.length < 10) {
        rand = Math.floor(Math.random() * N)
        hotGoods.push(filterGoods[rand])
    }
    console.log(filterGoods)
    return hotGoods
}
export default HotGoods