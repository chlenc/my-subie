import {css} from "@emotion/core";

export const mainPadding = css`
padding-left:  450px;
padding-right:  450px;
@media(max-width: 1280px){
  padding-left: 30px;
  padding-right: 30px;
}
@media(max-width: 768px){
  padding-left: 60px;
  padding-right:60px;
}
@media(max-width: 375px){
  padding-left: 24px;
  padding-right:24px;
}
`

export const fullScreen = css`
width: calc(100% - 900px);
@media(max-width: 1280px){
  width: calc(100% - 220px);
}
@media(max-width: 768px){
  width: calc(100% - 120px);
}
@media(max-width: 375px){
  width: calc(100% - 48px);
}
`

