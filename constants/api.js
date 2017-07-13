import axios from 'axios'

axios.defaults.baseURL = 'https://revmatch.herokuapp.com/api'

const fakeGroupId = '59653deab2863f8b2403383e'

class MeetupApi {
  constructor(){
    console.log();
    this.groupId = fakeGroupId
    this.path = `/groups/${this.groupId}/meetups`
  }

  async fetchGroupMeetups(){
    const { data } = await axios.get(this.path)

    return data.meetups
  }

}

class postApi{

}

export {
  MeetupApi
}
