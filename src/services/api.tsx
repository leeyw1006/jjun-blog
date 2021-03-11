import React, {createContext, useContext} from 'react';
import {JJunService} from "../object-model/model";
import {PostServiceMock} from "./post.service.mock";
import {CommentServiceMock} from "./comment.service.mock";


const initial: JJunService = {
    post: PostServiceMock,
    comment: CommentServiceMock,
};

export const AndyContext = createContext<JJunService>(initial);
export const useJJun = (): JJunService => useContext<JJunService>(AndyContext);

type JJunProviderProps = {
    andy: JJunService;
    children: JSX.Element | JSX.Element[];
};

export const JJunProvider = (props: JJunProviderProps): JSX.Element => {
    let andy: JJunService = useContext(AndyContext);

    if (props.andy !== andy) {
        andy = props.andy || null;
    }

    return <AndyContext.Provider value={andy}>{props.children}</AndyContext.Provider>;
};
