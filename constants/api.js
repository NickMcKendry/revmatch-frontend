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
    console.log(this);
    const { data } = await axios.get(this.path)
    console.log('apicall', data);
    console.log('yoi', data.meetups);
    return data.meetups
  }

}

class PostApi{
  constructor(){
    console.log(this);
    this.path = '/posts'
  }

  async fetchPosts(){
    console.log(this);
    const { data } = await axios.get(this.path)
    console.log('apicall', data);
    console.log('yoi 2', data.posts);

    return data.posts
  }
}

export {
  MeetupApi,
  PostApi
}
