import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native'
import { SignInContainer } from '../../components/SignIn'

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const formValues = { username: 'Markus', password: 'password' }
      const onSubmitMock = jest.fn()

      render(<SignInContainer onSubmit={onSubmitMock} />)

      fireEvent.changeText(
        screen.getByPlaceholderText('Username'),
        formValues.username
      )

      fireEvent.changeText(
        screen.getByPlaceholderText('Password'),
        formValues.password
      )

      await waitFor(() => {
        fireEvent.press(screen.getByText('Sign in'))
        expect(onSubmitMock).toHaveBeenCalledWith(formValues)
      })
    })
  })
})
