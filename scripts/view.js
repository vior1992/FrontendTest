const view = {

    userInfo(user) {
        const userSection = document.createElement("div")
        userSection.id = "user__section"

        const avatar = document.createElement('img')
        avatar.src = user.avatar_url
        avatar.id = "user__avatar"

        const userInfo = document.createElement("div")
        userInfo.id = "user__info"

        const _user = document.createElement("p")
        const _fullname = document.createElement("h1")
        const _bio = document.createElement("p")

        const username = document.createTextNode(user.login)
        const fullname = document.createTextNode(user.name)
        const bio = document.createTextNode(user.bio ? user.bio : "This user not have bio")

        _user.appendChild(username)
        _fullname.appendChild(fullname)
        _bio.appendChild(bio)
        
        userInfo.appendChild(_user)
        userInfo.appendChild(_fullname)
        userInfo.appendChild(_bio)

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
        sectionTitle.id = "repos__title"
        userRepos.appendChild(sectionTitle)

        username.forEach(repo => {
            const _repo = document.createElement("div")
            _repo.id = "repository__section"
            
            const repoName = document.createElement("h2")
            repoName.innerHTML = repo.name
            repoName.id = "repository__name"
            _repo.appendChild(repoName)

            const repoInfo = document.createElement("div")
            repoInfo.id = "repository__info"
            _repo.appendChild(repoInfo)

            const starsPic = document.createElement('img')
            starsPic.src = "./images/stars.svg"
            starsPic.id = "repo__starsPic"
            repoInfo.appendChild(starsPic)

            const stars = document.createTextNode(repo.stargazers_count)
            repoInfo.appendChild(stars)

            const forksPic = document.createElement('img')
            forksPic.src = "./images/fork.svg"
            forksPic.id = "repo__forksPic"
            repoInfo.appendChild(forksPic)

            const forks = document.createTextNode(repo.forks_count)
            repoInfo.appendChild(forks)
        
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