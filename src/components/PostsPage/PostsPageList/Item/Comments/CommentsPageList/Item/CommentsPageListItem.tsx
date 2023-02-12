import c from "./CommentsPageListItem.module.sass";
import React from "react";
import {ICommentData} from "../../Types/commentsPageTypes";

interface IProps {
    item: ICommentData
}

export const CommentsPageListItem: React.FC<IProps> = ({item}) => {

    return (
        <div
            className={c.CommentsPageListItem}
            key={item.id}
        >
            <div
                className={c.CommentsPageListItemLeftBlock}
            >
                <div
                    className={c.CommentsPageListItemLeftBlockVoid}
                />
                <div
                    className={c.CommentsPageListItemLeftBlockLayout}>
                    <div>
                        Автор: {item.name}
                    </div>
                    <div>
                        {item.email}
                    </div>
                </div>

            </div>
            <div
                className={c.CommentsPageListItemRightBlock}
            >
                <div
                    className={c.CommentsPageListItemRightBlockVoid}
                />
                <div
                    className={c.CommentsPageListItemRightBlockLayout}
                >
                    <div>
                        {item.body}
                    </div>
                </div>

            </div>
        </div>
    )
}