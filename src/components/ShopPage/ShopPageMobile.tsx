/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import SortByModel from './SortByModel'
import FilteredGoods from './FilteredGoods'
import FilterHandler from './FilterHandler'
import { IItem, DataStore } from '../../stores/DataStore'
import { inject, observer } from 'mobx-react'
import ReactLoaderSpinner from 'react-loader-spinner'
import { animateScroll as scroll } from 'react-scroll'
import { SelectorsStore } from '../../stores/SelectorsStore'
import SortByTagMobile from './SortByTag/SortByTagMobile'

const Loader = () => <div css={css` margin: 17% auto; `}>
    <ReactLoaderSpinner type="TailSpin" color="#00BFFF" height={100} width={100} />
</div>

interface IProps {
    dataStore?: DataStore
    selectorsStore?: SelectorsStore
}

@inject('dataStore', 'selectorsStore')
@observer
export default class MainPage extends React.Component<IProps, {}> {
    scrollToTop() { scroll.scrollToTop() }

    render() {
        const goods = Object.entries(this.props.dataStore!.goods).reduce((acc: IItem[], [key, value]) => ([...acc, { ...value, id: key }]), [])

        let selectedTags: string[] = this.props.selectorsStore!.selectedTags
        let selectedModel: string = this.props.selectorsStore!.selectedModel
        let selectedGen: string = this.props.selectorsStore!.selectedGen
        return goods && goods.length
            ? <Root>
                <Selectors>
                    <SortByModel />
                    <SortByTagMobile />
                </Selectors>
                <FilterHandler />
                <FilteredGoods goods={filter(goods, selectedTags, selectedModel, selectedGen)} />
            </Root>
            : <Loader />
    }
}

const Root = styled.div`
width: 92vw;
`
const Selectors = styled.div`
display: flex;
justify-content: space-between;
`

function filter(goods: IItem[], selectedTags: string[], selectedModel: string = '', selectedGen: string = '') {
    let filteredGoods: IItem[] = goods
    const N = selectedTags.length
    selectedModel = selectedModel.toUpperCase()
    selectedGen = selectedGen.toUpperCase()

    selectedModel === '' && selectedGen === ''
        ? filteredGoods = goods
        : selectedGen === '' && selectedModel !== ''
            ? filteredGoods = goods.filter(item => (item.model.toUpperCase().indexOf(selectedModel) !== -1))
            : filteredGoods = goods.filter(item => (item.model.toUpperCase().indexOf(selectedModel) !== -1)
                && (item.gen.toUpperCase().indexOf(selectedGen) !== -1))


    filteredGoods = filteredGoods.filter(item => {
        let count = 0
        for (let i = 0; i < N; i++) {
            if (item.tags.indexOf(`#${selectedTags[i]}`) !== -1) {
                count += 1
            }
        }
        return (count === N)
    })

    return filteredGoods
}