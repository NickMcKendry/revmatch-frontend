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
    console.log('data', data);
    return data.meetups
  }

}

class postApi{

}

export {
  MeetupApi
}
