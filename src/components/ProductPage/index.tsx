/**@jsx jsx*/
import React from 'react';
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import FilterHandler from '../ShopPage/FilterHandler'
import { observer, inject } from 'mobx-react';
import HistoryStore from '../../stores/HistoryStore'
import { IItem, DataStore } from '../../stores/DataStore';
import ReactLoaderSpinner from 'react-loader-spinner'
import ProductImages from './ProductImages'
import ItemTags from './ItemTags'
import CardProduct from './CardProduct';
import Description from './Description'
import { SelectorsStore } from '../../stores/SelectorsStore';
import RecommendedProducts from './RecommendedProducts';
import MerchProducts from './MerchProducts';
import { animateScroll as scroll } from 'react-scroll'
import GOHEADERBUTTON from '../../icons/GOHEADERBUTTON.svg'

interface IProps {
    historyStore?: HistoryStore
    dataStore?: DataStore
    selectorsStore?: SelectorsStore
}

interface IState {
    item: IItem | null
}

@inject('historyStore', 'dataStore')
@observer
export default class ProductPage extends React.Component<IProps, IState> {

    scrollToTop() { scroll.scrollToTop() }
    render() {
        const id = this.props.historyStore!.currentPath.replace('product/', '').replace('/', '');
        const goods = Object.entries(this.props.dataStore!.goods)
            .reduce((acc: IItem[], [key, value]) => [...acc, { ...value, id: key }], [])
        const item = goods.find(item => item.id === id)

        return goods && goods.length
            ? item !== undefined
                ? <Background><Root>
                    <FilterHandler />
                    <Wrapper>
                        <LeftColumn>
                            <ProductImages attachments={item.attachments || []} item={item} id={id} />
                            <ItemTags tags={item.tags} />
                        </LeftColumn>
                        <RightColumn>
                            <CardProduct item={item} />
                            <Description item={item} />
                        </RightColumn>
                    </Wrapper>
                    <RecommendedProducts items={goods} />
                    <MerchProducts items={goods} />
                    <GoTopButton src={GOHEADERBUTTON} onClick={this.scrollToTop} />
                </Root>
                </Background>
                : <NoProduct />
            : <Loader />
    }
}

const Loader = () => <div css={css` margin: 17% auto; `}>
    <ReactLoaderSpinner type="TailSpin" color="#00BFFF" height={100} width={100} />
</div>

const NoProduct = () => <div>Product does not exists</div>

const Root = styled.div`
width: 1070px;
display: flex;
flex-direction: column;
transition: all 500ms;
@media (max-width: 1074px){
    width: 630px;
}
@media (max-width: 666px){
    width: 92vw;
}
`
const Background = styled.div`
width: 100vw;
height: 100%;
background: #FAFAFA;
display: flex;
justify-content: center;
`
const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 20px;
@media (max-width: 1074px){
    flex-direction: column;
}
`
const LeftColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 58.87850467%;
@media (max-width: 1074px){
    width: 100%;
}
`

const RightColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 38.31775701%;
@media (max-width: 1074px){
    margin-top: 15px;
    width: 100%;
}
`

const GoTopButton = styled.img`
position: fixed;
left: 5%;
bottom: 50px;
width: 56px;
height: 56px;
border-radius: 50%;
cursor: pointer;
@media (max-width: 1074px){
    display: none;
}
`