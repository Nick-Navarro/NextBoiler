// Local files
import { fetchHomepageData } from '@/services/api'
import { HomepageInitResponseData } from '@/@types/api'
import { HomeInitials } from '@/@types/initializations'

export const getHomePageInitialValues = async (): Promise<HomeInitials> => {
  let initData: HomepageInitResponseData

  await fetchHomepageData()
    .then((res) => {
      initData = res.data
    })
    // eslint-disable-next-line no-console
    .catch((_error) => _error)
  return { homeData: initData }
}
