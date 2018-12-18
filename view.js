const view = {

    userInfo(user) {
        const userSection = document.createElement("div")
        userSection.id = "user__section"

        const avatar = document.createTextNode(user.avatar_url)
        const image = document.createElement('img')
        image.setAttribute("src", avatar)

        const userInfo = document.createElement("div")
        userInfo.id = "user__info"

        const _user = document.createTextNode(user.login)
        const fullname = document.createTextNode(user.name)
        const bio = document.createTextNode(user.bio ? user.bio : "No bio")
        
        userInfo.appendChild(_user)
        userInfo.appendChild(fullname)
        userInfo.appendChild(bio)

        userSection.appendChild(avatar)
        userSection.appendChild(userInfo)
        
        const search__form = document.getElementById('search__form')
        search__form.appendChild(userSection)
    },

    userRepos(username) {
        const userRepos = document.createElement("div")
        userRepos.id = "repos__info"

        const sectionTitle = document.createElement("h2")
        sectionTitle.innerHTML = "Repositories"
        userRepos.appendChild(sectionTitle)

        username.forEach(repo => {
            const _repo = document.createElement("div")
            _repo.id = "repository__section"
            
            const repoName = document.createTextNode(repo.name)
            const stars = document.createTextNode(repo.stargazers_count)
            const forks = document.createTextNode(repo.forks_count)

            _repo.appendChild(repoName)
            _repo.appendChild(stars)
            _repo.appendChild(forks)

            userRepos.appendChild(_repo)
        })

        const search__form = document.getElementById('search__form')
        search__form.appendChild(userRepos)
    },

    userNotFound(query) {
        const search__form = document.getElementById("search__form")

        const error = document.createElement("div")
        error.id = "error"

        const message = document.createTextNode(`user ${query} not found`)

        error.appendChild(message)
        search__form.appendChild(error)
    },
    
    clean(){
        const user = document.getElementById("user__section")
        const repos = document.getElementById("repos__info")
        const error = document.getElementById("error")

        if (error) error.parentNode.removeChild(error)

        else {
            user.parentNode.removeChild(user)
            repos.parentNode.removeChild(repos)
        }
    },
}