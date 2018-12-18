const logic = {
    _baseUrl: "https://api.github.com",
    _meth: "GET",

    // _call(path) {
    //     return fetch(`${this._baseUrl}/users/${path}`, {
    //       method: this._meth
    //     })
    //       .then(res => res.json())
    //       .then(res => {
    //         if (res.error) throw Error(res.error)
    
    //         return res
    //       })
    //   },

    async _call(query) {
            const response = await fetch(`${this._baseUrl}/users/${query}`, {meth: this._meth})

            return response.json()
    },

    searchUser(query) {
        if (typeof query !== "string") throw TypeError(query + " is not a string")

        if (!query.trim().length) throw Error("query is empty or blank")

        return this._call(query)
    },

    searchRepos(username){
        if (typeof username !== "string") throw TypeError(username + " is not a string")

        if (!username.trim().length) throw Error("username is empty or blank")

        return this._call(`${username}/repos`)
    }
}