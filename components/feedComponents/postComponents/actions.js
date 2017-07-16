import { PostApi } from '../../../constants/api'

const postApi = new PostApi()

export const FETCH_MY_POSTS = 'FETCH_MY_POSTS'

export const fetchMyPosts = () => ({
  type: FETCH_MY_POSTS,
  payload: postApi.fetchPosts()
})
