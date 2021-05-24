import { fetchHomepageData } from '@/services/api/HomeInit/index'

describe('fetchHomepageData', () => {
  it('should call axios', async () => {
    // eslint-disable-next-line global-require
    const axios = require('axios')
    axios.get = jest.fn()
    const result = await fetchHomepageData()
    expect(result.status).toBe(200) // .toHaveBeenCalled()
  })
})
