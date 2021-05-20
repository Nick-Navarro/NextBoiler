// Local files
import { fetchHomepageData } from '@/services/api/HomeInit'
import { HomepageInitResponseData } from '@/@types/api'
import { HomeInitials } from '@/@types/initializations'

export const getHomePageInitialValues = async (): Promise<HomeInitials> => {
  let initData: HomepageInitResponseData

  await fetchHomepageData()
    .then((res) => {
      initData = res.data
    })
    .catch((_error) => console.debug(_error))

  return { user: initData }
}
