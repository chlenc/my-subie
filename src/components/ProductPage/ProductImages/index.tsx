import React from 'react';
import styled from '@emotion/styled'
import { IItem } from '../../../stores/DataStore';
import NOPICYET from '../../../icons/HotGoods/NOPICYET.svg'

interface IProps {
    attachments: string[]
    item: IItem
    id: string
}
interface IState {
    selectedImage: number
}

export default class ProductImages extends React.Component<IProps, IState> {
    state = {
        selectedImage: this.props.attachments.length > 0 ? 0 : -1
    }
    imageHandler = (selectedImage: number) => this.setState({ selectedImage })
    render() {
        const { selectedImage } = this.state;
        const { attachments } = this.props;
        return <Root>
            <SelectedImage src={attachments[selectedImage] || NOPICYET} />
            <OtherImages attachments={this.props.attachments || []} imageHandler={this.imageHandler} />
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
    attachments: string[]
    imageHandler: (selectedImage: number) => void
}

class OtherImages extends React.Component<IOtherProps> {
    render() {
        const { attachments: refs, imageHandler } = this.props;
        return refs
            ? <OtherRoot>
                {refs.map((ref, index) => <MicroImage src={ref} key={index} onClick={() => imageHandler(index)} />)}
            </OtherRoot>
            : null
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