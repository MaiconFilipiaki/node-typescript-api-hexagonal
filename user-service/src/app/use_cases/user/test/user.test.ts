import ApiError from '../../../exception/ApiError'
import User from '../../../interfaces/User'
import userCase from '../userCase'
import UserRepoMock from './UserRepoMock'

const mockUser = () => {
    const userWithSuccess = new User('John', 'Brasil')
    const userWithErrorCountry = new User('John', 'USA')

    return {userWithSuccess, userWithErrorCountry}
}

test('Create user with success', async () => {
    const {userWithSuccess} = mockUser()

    const userCreateByUseCase = await new userCase(new UserRepoMock()).createUserUseCase(userWithSuccess)

    expect(userCreateByUseCase.name).toEqual(userWithSuccess.name)
    expect(userCreateByUseCase.country).toEqual(userWithSuccess.country)
    expect(userCreateByUseCase._hash).not.toEqual('')
})

test('Create user with Error Country', async () => {
    const {userWithErrorCountry} = mockUser()

    try {
        await new userCase(new UserRepoMock()).createUserUseCase(userWithErrorCountry)
    } catch (err) {
        expect(err).toBeInstanceOf(ApiError)
        expect(err.message).toBe(ApiError.COUNTRY_BE_MUST_BRASIL)
        expect(err.code).toBe(422)
    }
})