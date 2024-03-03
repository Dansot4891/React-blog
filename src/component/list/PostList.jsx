import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

// & > * 해당 부모 엘리먼트의 모든 자식들에게
// 스타일을 적용하기 위한 셀렉터

// 마지막 자식이 아닌 엘리먼트에게 스타일을 적용(마지막 자식은X)
// & > * {
//     :not(:last-child){
//         margin-bottom: 16px;
//     }
// }

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child){
            margin-bottom: 16px;
        }
    }
`;

function PostList(props){
    const {posts, onClickItem} = props;

    return(
        <Wrapper>
            {posts.map((post, index) => {
                return(
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;