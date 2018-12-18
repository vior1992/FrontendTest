const logic = {
    _baseUrl: "https://api.github.com",
    _meth: "GET",

    _call(path) {
        return fetch(`${this._baseUrl}/users/${path}`, {
          method: this._meth
        })
          .then(res => res.json())
          .then(res => {
            if (res.error) throw Error(res.error)
    
            return res
          })
      },

    // _call(query) {
    //     return (async () => {
    //         const fetch = await fetch(`${this._baseUrl}/users/${query}`, {
    //         meth: this._meth
    //         })

    //         const res = await fetch.json()
    //         console.log(res)
    //         if (res.error) throw Error(res.error)
    //             return res
    //     })()
    // },

    searchUser(query) {
        if (typeof query !== "string") throw TypeError(query + " is not a string")

        if (!query.trim().length) throw Error("query is empty or blank")

        return this._call(query)
    },

    searchRepos(query){
        if (typeof query !== "string") throw TypeError(query + " is not a string")

        if (!query.trim().length) throw Error("query is empty or blank")

        return this._call(`${query}/repos`)
    }
}