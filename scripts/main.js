const form = document.getElementById('search__form')
let clear = true

form.addEventListener('submit', async () => {
    event.preventDefault()

    if (clear == false) view.clean()

    input = await document.getElementById('form__input')

    const user = await logic.searchUser(input.value)

    if(user.message) return view.userNotFound(input.value), input.value = null, clear = false
    
    const searchRepos = await logic.searchRepos(user.login)

    view.userInfo(user)

    view.userRepos(searchRepos)

    clear = false
    input.value = null
})