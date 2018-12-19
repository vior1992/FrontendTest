const logic = {
    _baseUrl: "https://api.github.com",
    _meth: "GET",

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