import { FETCH_POSTS, NEW_POST } from './types';

export function fetchPosts() {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
            }))
    }
};

export function createPosts(postData) {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(posts => dispatch({
                type: NEW_POST,
                payload: posts
            }))
    }
};