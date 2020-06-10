import React from 'react'
import { useWindowDimensions } from '../../utils/dimensions'
import ShopPageDesktop from './ShopPageDesktop'
import ShopPageMobile from './ShopPageMobile'
import { IItem, DataStore } from '../../stores/DataStore'
import { inject, observer } from 'mobx-react'
import { SelectorsStore } from '../../stores/SelectorsStore'

interface IProps {
    searchValue?: string
    dataStore?: DataStore
    selectorsStore?: SelectorsStore
}

const ShopPage: React.FC<IProps> = inject('dataStore', 'selectorsStore')(observer((props) => {
    const { width } = useWindowDimensions();
    let goods = Object.entries(props.dataStore!.goods)
        .reduce((acc: IItem[], [key, value]) => ([...acc, { ...value, id: key }]), [])
    let selectedTags: string[] = props.selectorsStore!.selectedTags
    let selectedModel: string = props.selectorsStore!.selectedModel
    let selectedGen: string = props.selectorsStore!.selectedGen
    goods = filter(goods, selectedTags, selectedModel, selectedGen, props.searchValue)

    return width > 1279
        ? <ShopPageDesktop searchValue={props.searchValue} />
        : <ShopPageMobile filteredGoods={goods} />
}))

export default ShopPage

function filter(goods: IItem[], selectedTags: string[], selectedModel: string = '', selectedGen: string = '', searchValue: string = '') {
    let filteredGoods: IItem[] = goods
    const N = selectedTags.length
    selectedModel = selectedModel.toUpperCase()
    selectedGen = selectedGen.toUpperCase()
    searchValue = searchValue.toUpperCase()

    selectedModel === '' && selectedGen === ''
        ? filteredGoods = goods
        : selectedGen === '' && selectedModel !== ''
            ? filteredGoods = goods.filter(item => (item.model.toUpperCase().indexOf(selectedModel) !== -1))
            : filteredGoods = goods.filter(item => (item.model.toUpperCase().indexOf(selectedModel) !== -1)
                && (item.gen.toUpperCase().indexOf(selectedGen) !== -1))


    if (selectedTags.length)
        filteredGoods = filteredGoods.filter(item => {
            let count = 0
            for (let i = 0; i < N; i++) {
                if (item.tags.indexOf(`#${selectedTags[i]}`) !== -1) {
                    count += 1
                }
            }
            return count === N
        })

    if (searchValue.length)
        filteredGoods = filteredGoods.filter(item => {
            item.description.includes(searchValue)
                || item.gen.includes(searchValue)
                || item.model.includes(searchValue)
        })

    return filteredGoods
}