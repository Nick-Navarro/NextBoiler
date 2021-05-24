import { fetchHomepageData } from '@/services/api/HomeInit/index'

describe('fetchHomepageData', () => {
  it('should call axios', async () => {
    const axios = require('axios')
    axios.get = jest.fn()
    fetchHomepageData()
    expect(axios.get).toHaveBeenCalled()
  })
})