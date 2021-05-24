import { fetchHomepageData } from '@/services/api/HomeInit/index'
import homeData from '@/../mock-data/user-data.json'

describe('fetchHomepageData', () => {
  it('should resolve promise to', async () => {
    const res = await fetchHomepageData()
    expect(res).toMatchObject({
      status: 200, data: homeData, statusText: '', headers: '', config: {} 
    })
  })
})