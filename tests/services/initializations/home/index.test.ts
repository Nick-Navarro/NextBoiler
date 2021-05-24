import { HomepageInitResponseData } from '@/@types/api'
import { getHomePageInitialValues } from '@/services/initializations/home';

const responseUser: HomepageInitResponseData = {
  dataResponseType: 'homepage_init',
  user: {
    _id: '1',
  fullName: 'Nick Navarro',
  username: 'Test_Monkey',
  email: 'test@gmail.com',
  }
}

describe('getHomePageInitialValues | success', () => {
  it('should return data in shape of HomepageInitResponseData', async () => {
    const module = require('@/services/api/HomeInit')
    module.fetchHomepageData = jest.fn().mockImplementationOnce(async () => Promise.resolve({
      data: responseUser.user
    }))
    const res = await getHomePageInitialValues();
    expect(res).toMatchObject({ homeData: responseUser.user })
  })

  it('should return an error', async () => {
    const module = require('@/services/api/HomeInit')
    module.fetchHomepageData = jest.fn().mockImplementationOnce(async () => Promise.reject(new Error('error')))
    const res = await getHomePageInitialValues();
    expect(res).toMatchObject({ homeData: undefined })
  })
})