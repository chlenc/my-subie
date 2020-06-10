/**@jsx jsx*/
import React from 'react'
import { css, jsx } from '@emotion/core'
import { useWindowDimensions } from '../../../utils/dimensions'
import HotGoodsDesktop from './HotGoodsDesktop'
import HotGoodsMobile from './HotGoodsMobile'
import { inject, observer } from 'mobx-react'
import { IItem, DataStore } from '../../../stores/DataStore'
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
            return <div css={css` margin: 17% auto; `}>
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



function randomGoods(goods: IItem[]) {
    const hotGoods: IItem[] = []
    const filterGoods = goods.filter(item => item.tags.indexOf('#DISCOUNTED' || '#UNDER100') === -1 && item.tags[item.tags.length - 1] !== undefined)
    const N = filterGoods.length
    let rand: number = 0
    while (hotGoods.length < 10) {
        rand = Math.floor(Math.random() * N)
        hotGoods.push(filterGoods[rand])
    }
    return hotGoods
}
export default HotGoods