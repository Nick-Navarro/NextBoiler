import { render, screen } from '@testing-library/react'
import Home, { getServerSideProps } from '@/pages/index'
import { HomepageInitResponseData } from '@/@types/api'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    route: '/',
    push: jest.fn(),
  }))
}))

const responseUser: HomepageInitResponseData = {
  dataResponseType: 'homepage_init',
  user: {
    _id: '1',
    fullName: 'Nick Navarro',
    username: 'Test_Monkey',
    email: 'test@gmail.com',
  }
}

jest.mock('@/services/initializations', () => ({
  getHomePageInitialValues: jest.fn().mockImplementationOnce(async () => Promise.resolve({
    data: responseUser.user
  }))
}))

jest.mock('react-intl', () => {
  const { default: messages } = require('../public/locales/en/index')
  return {
  useIntl: () => ({
    formatMessage: ({ id }: { id: string }): string => messages[id]})
  }
})

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home homeData={responseUser} />)
    const h1 = screen.getByText('Starting Patient Portal')
    expect(h1).toBeDefined()
  })

  it('describes getServerSideProps', async () => {
    const props = await getServerSideProps();
    expect(props).toMatchObject({
      props: {}
    })
  })
})
