import React from 'react';
import styled from '@emotion/styled'
import { IItem } from '../../stores/DataStore';

interface IProps {
    item: IItem
}
interface IState {
    selectedImage: string
}

export default class ProductImages extends React.Component<IProps, IState> {
    state = {
        selectedImage: this.props.item.attachments![0]
    }
    imageHandler = (ref: string) => this.setState({ selectedImage: ref })
    render() {
        return <Root>
            <SelectedImage src={this.state.selectedImage} />
            <OtherImages item={this.props.item} imageHandler={this.imageHandler} />
        </Root>
    }
}

const Root = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
transition: all 1s;
@media (max-width: 1023px){
    width: 630px;
}
@media (max-width: 767px){
    width: 92vw;
}
`

const SelectedImage = styled.img`
width: 100%;
height: auto;
max-height: 600px;
object-fit: scale-down;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`
interface IOtherProps {
    item: IItem
    imageHandler: (ref: string) => void
}

class OtherImages extends React.Component<IOtherProps> {
    render() {
        const Refs = this.props.item.attachments!
        return <OtherRoot>
            {Refs.map(ref => <MicroImage src={ref} onClick={() => this.props.imageHandler(ref)} />)}
        </OtherRoot>
    }
}

const OtherRoot = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
> img:nth-child(10) {
 margin-right: 0;
}
> img:nth-child(20) {
 margin-right: 0;
}
> img:nth-child(30) {
 margin-right: 0;
}
`
const MicroImage = styled.img`
width: 54px;
height: 54px;
margin-top: 10px;
margin-right: 10px;
cursor: pointer;
`