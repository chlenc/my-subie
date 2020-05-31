/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import ARROW from '../../../icons/LEFTARROW_mini.svg'
import { SelectorsStore } from '../../../stores/SelectorsStore'
import { inject, observer } from 'mobx-react'
import Tag from './Tag'
import deleteIcon from '../../../icons/DELETETAGICONRED.svg'

interface IProps {
    selectorsStore?: SelectorsStore
}
interface IState {
    isOpen: boolean
}

@inject('selectorsStore')
@observer
export default class SortByTagMobile extends React.Component<IProps, IState> {
    state = {
        isOpen: false,
    }
    handleClose = () => this.setState({ isOpen: false })
    handleOpen = () => this.setState({ isOpen: true })

    render() {
        return <Root>
            <Button onClick={() => this.handleOpen()}>
                {`#TAG FILTER(${this.props.selectorsStore?.selectedTags.length})`}
            </Button>
            {this.state.isOpen
                ? <div css={css`position: absolute; left: 4vw;`}>
                    <Layout onClick={() => this.handleClose()} />
                    <Menu handleClose={this.handleClose} />
                </div>
                : <Layout css={css`display: none;`} />}

        </Root>
    }
}

const Root = styled.div`
width: 48%;
font-family: 'GothamPro-Medium';
`
const Button = styled.div`
height: 44px;
padding-top: 3px;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
font-size: 20px;
line-height: 19px;
text-align: center;
color: #000000;
border: 2px solid #9D998E;
box-sizing: border-box;
border-radius: 10px;
cursor: pointer;
`
const CloseButton = styled.div`
width: 91.30434783%;
height: 30px;
margin-top: 15px;
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: center;
background: #FFAE00;
border-radius: 29px;
font-size: 20px;
line-height: 19px;
text-align: center;
cursor: pointer;
p {
    margin: 3px 15px 0 15px;

}
`



const Layout = styled.div`
display: flex;
justify-content: center;
position: fixed;
left: 0; top:0; bottom: 0;right: 0;
background-color: rgba(0,0,0,.6);
z-index:4;
cursor: pointer;
`

interface IPropsMenu {
    handleClose: () => void,
    selectorsStore?: SelectorsStore
}

@inject('selectorsStore')
@observer
class Menu extends React.Component<IPropsMenu, {}> {
    render() {
        let selectedTags: string[] = this.props.selectorsStore!.selectedTags
        return <RootMenu>
            <CloseButton onClick={() => this.props.handleClose()}>
                <img src={ARROW} />
                <p>CLOSE FILTERS</p>
                <img src={ARROW} />
            </CloseButton>
            <div css={css`width: 92vw; display: flex;`}>
                <Wrapper>
                    <TagBlock>
                        <NameTagBlock>PLACEMENT</NameTagBlock>
                        {['FRONT', 'REAR', 'SIDE', 'INTERIOR'].map((tag, key) =>
                            <Tag
                                tag={tag} key={key}
                                handleAddTag={this.props.selectorsStore!.addTag}
                                handleDeleteTag={this.props.selectorsStore!.deleteTag}
                                selectedTags={selectedTags}
                            />
                        )}
                    </TagBlock>
                    <TagBlock>
                        <NameTagBlock>FITMENT</NameTagBlock>
                        <Tag tag={'SEDAN'} handleAddTag={this.props.selectorsStore!.addTag} handleDeleteTag={this.props.selectorsStore!.deleteTag} selectedTags={this.props.selectorsStore!.selectedTags} />
                        <Tag tag={'WAGON'} handleAddTag={this.props.selectorsStore!.addTag} handleDeleteTag={this.props.selectorsStore!.deleteTag} selectedTags={this.props.selectorsStore!.selectedTags} />
                    </TagBlock>
                </Wrapper>
                <TagBlock>
                    <NameTagBlock>ITEM TAG</NameTagBlock>
                    {['HOT', 'RARE', 'EXTRARARE', 'BRANDNEW', 'DISCOUNTED', 'NEWARRIVALS', 'BRANDED'].map((tag, key) =>
                        <Tag
                            tag={tag} key={key}
                            handleAddTag={this.props.selectorsStore!.addTag}
                            handleDeleteTag={this.props.selectorsStore!.deleteTag}
                            selectedTags={this.props.selectorsStore!.selectedTags}
                        />
                    )}
                </TagBlock>
            </div>
            <DeleteAllTags onClick={() => this.props.selectorsStore!.deleteAllTags()}>
                <TextClearAll >CLEAR ALL</TextClearAll>
                <TagDeleteBtn />
            </DeleteAllTags>
        </RootMenu>
    }
}
const RootMenu = styled.div`
position: fixed;
background: #FAFAFA;
z-index: 5;
display: flex;
justify-content: center;
flex-wrap: wrap;
box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.6);
@media (max-width: 1279px){
    width: 92vw;
    border-radius: 10px;
    border: 2px solid #9D998E;
    top: 188px;
}
@media (max-width: 767px){
    width: 100vw;
    top: 0;
    left: 0;
}
`
const Wrapper = styled.div`
display: flex;
flex: 2;
@media (max-width: 767px){
    flex-direction: column;

}
`
const TagBlock = styled.div`
display: flex;
justify-content: column;
align-items: flex-start;
justify-content: flex-start;
display: flex;
flex-direction: column;
@media (max-width: 1023px){
    flex: 1;
    margin-bottom: 30px;
    padding-left: 30px;
}
@media (max-width: 767px){
    margin-bottom: 30px;
    width: calc(50% - 15px);
    padding-left: 5px;
}
`
const NameTagBlock = styled.div`
font-weight: bold;
font-size: 14px;
line-height: 13px;
display: flex;
align-items: center;
color: #9D998E;
border-bottom: 2px solid #9D998E;
`
const DeleteAllTags = styled.div`
height: 100%;
padding: 6px 20px;
display: flex;
align-items: center;
right: 10px;
margin-bottom: 25px;
border: 2px solid #CF4B4B;
box-sizing: border-box;
border-radius: 35px;
cursor: pointer;
`
const TextClearAll = styled.div`
cursor: pointer;
font-family: inherit;
font-weight: bold;
margin-top: 2px;
font-size: 14px;
display: flex;
align-items: center;
color: #CF4B4B;
`
const TagDeleteBtn = styled.div`
width: 14px;
height: 14px;
margin-left: 10px;
margin-top: -2px;
background-image: url(${deleteIcon});
`