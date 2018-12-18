const view = {

    userInfo(user) {
        const userSection = document.createElement("div")
        userSection.id = "user_info"

        const avatar = document.createTextNode(user.avatar_url)
        const _user = document.createTextNode(user.login)
        const fullname = document.createTextNode(user.name)
        const bio = document.createTextNode(user.bio ? user.bio : "No bio")

        const image = document.createElement('img')
        image.setAttribute("src", avatar);
        
        userSection.appendChild(avatar)
        userSection.appendChild(_user)
        userSection.appendChild(fullname)
        userSection.appendChild(bio)

            
        const form = document.getElementById('search__form')
        form.appendChild(userSection)
    },

    userRepos(user) {
        user.forEach(repo => {
            const userRepos = document.createElement("div")
            userRepos.className = "user_info"

            const repoName = document.createTextNode(repo.name)
            const stars = document.createTextNode(repo.stargazers_count)
            const forks = document.createTextNode(repo.forks_count)

            userRepos.appendChild(repoName)
            userRepos.appendChild(stars)
            userRepos.appendChild(forks)

            const _userSection = document.getElementById('user_info')
            _userSection.appendChild(userRepos)
        })
    },

    userNotFound(user) {
        const form = document.getElementById("search__form")
        const error = document.createElement("div")
        const message = document.createTextNode(`user ${user} not found`)

        error.appendChild(message)
        form.appendChild(error)
    },
    
    clean(){
        const form = document.getElementById("search__form")
        
        form.removeChild(form.childNodes[5])
    },
    
}