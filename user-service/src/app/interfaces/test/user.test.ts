import User from "../User"

const mock = {
    name: 'Maicon',
    country: 'Brasil'
}

test('Create user', () => {
    const user = new User(mock.name, mock.country)

    expect(user.name).toBe(mock.name)
    expect(user.country).toBe(mock.country)
    expect(user._hash).not.toEqual('')
})
