import React from 'react';
import {useJJun} from "../../services/api";
import {JJunService, Post} from "../../object-model/model";
import {AsyncEffectState, PromiseFn, useAsyncEffect} from "../../services/async";
import { useParams } from 'react-router-dom'


export interface buttonProps {
  label?: string
  clickHandler?: () => void,
  style?: Object
}


function whenClicked(){
  alert("somebody click");
}

export const Detail = (props: buttonProps) => {
  const andy: JJunService = useJJun()
  const params:any = useParams()

  const asyncEffectState: AsyncEffectState<Post | undefined, Error, PromiseFn<Post | undefined>> = useAsyncEffect(andy.post.getPost, [parseInt(params.postId)], [])

  if (asyncEffectState.state.loading) return <div>Loading...</div>
  if (asyncEffectState.state.error) return <div>Something went wrong: ${asyncEffectState.state.error.message}</div>
  if (!asyncEffectState.state.data) return (<div>게시글이 없습니다.</div>)
  return (
    <div className="BlogDetail">
      {asyncEffectState.state.data.title}
    </div>
  );
}