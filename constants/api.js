import axios from 'axios'

axios.defaults.baseURL = 'https://revmatch.herokuapp.com/api'

const fakeGroupId = '5966effedb74910011f790a3'

class MeetupApi {
  constructor(){
    console.log(this);
    this.groupId = fakeGroupId
    this.path = `/groups/${this.groupId}/meetups`
  }

  async fetchGroupMeetups(){
    try{
      console.log(this);
      const { data } = await axios.get(this.path)
      console.log('apicall', data);
      console.log('yoi', data.meetups);
      return data.meetups
    } catch(e) {
      throw e
    }

  }

  async createGroupMeetups(args){
    try{
      const res = await axios.post(`${this.path}/new`, { ...args })
      console.log(res);
      return res
    } catch(e){
      throw e
    }
  }

}

class PostApi{
  constructor(){
    console.log(this);
    this.path = '/posts'
  }

  async fetchPosts(){
    try{
      console.log(this);
      const { data } = await axios.get(this.path)
      console.log('apicall', data);
      console.log('yoi 2', data.posts);

      return data.posts
    } catch(e){
      throw e
    }

  }
}

export {
  MeetupApi,
  PostApi
}


class UserApi{
  constructor(){
    this.path = '/users'
  }

  async logIn(args){
    try{
      const { data } = await axios.post(`${this.path}/auth0`, args)

      return data
    } catch(e) {
      throw e
    }
  }
}

export const User = new UserApi()
