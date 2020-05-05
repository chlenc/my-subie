/**@jsx jsx*/
import React from 'react';
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import FilterHandler from '../FilterHandler'
import { observer, inject } from 'mobx-react';
import HistoryStore from '../../stores/HistoryStore'
import { IItem, DataStore } from '../../stores/DataStore';
import ReactLoaderSpinner from 'react-loader-spinner'
import ProductImages from '../ProductImages'

interface IProps {
    historyStore?: HistoryStore
    dataStore?: DataStore
}

interface IState {
    item: IItem | null
}

@inject('historyStore', 'dataStore')
@observer
export default class ProductPage extends React.Component<IProps, IState> {
    
    constructor(props: IProps) {
        super(props)
    }
    
    render() {
        const id = this.props.historyStore!.currentPath.replace('product/', '').replace('/', '');
        const goods = Object.entries(this.props.dataStore!.goods)
        const item = goods.find(([key]) => key === id)
        this.state = { item: item ? { key: item[0], ...item[1] } : null }
        if (goods && goods.length)
            if (item![1])
                return <Root>
                    <FilterHandler />
                    <Wrapper>
                        <LeftColumn>
                            <ProductImages item={this.state.item!}/>
                        </LeftColumn>
                        <RightColumn>

                        </RightColumn>
                    </Wrapper>
                </Root>
            else return <NoProduct />
        else return <Loader />
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
`
const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
margin-top: 20px;
`
const LeftColumn = styled.div`
display: flex;
flex-direction: column;
width: 58.87850467%;
`

const RightColumn = styled.div`
display: flex;
flex-direction: column;
width: 38.31775701%
`