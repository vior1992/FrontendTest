describe("logic", () => {
    describe("search user", () => {
      it("should succeed on search", async () => {
        const query = "vior1992"
        const user = await logic.searchUser(query)

        expect(user.login).toEqual(query)
        expect(user.name).toEqual("Daniel Villegas")
        expect(user.bio).toEqual(null)
        expect(user.avatar_url).toEqual("https://avatars2.githubusercontent.com/u/43497439?v=4")
      })
  
      it("should fail on search", async () => {
        const query = "2837912371263sdajhd2312312323"

        const error = await logic.searchUser(query)
        expect(error.message).toEqual("Not Found")
      })
  
      it("should fail on undefined name", () => {
        expect(() => logic.searchUser(undefined)).toThrowError(Error, "undefined is not a string")
      })

      it("should fail on null name", () => {
        expect(() => logic.searchUser(null)).toThrowError(Error, "null is not a string")
      })

      it("should fail on numeric name", () => {
        expect(() => logic.searchUser(21093812)).toThrowError(Error, "21093812 is not a string")
      })
    })
    describe("search repositories", () => {
      it("should succeed on search", async () => {
        const query = "vior1992"
  
        const repos = await logic.searchRepos(query)
        expect(repos.length).toEqual(5)
        const [ repo1, , , , repo5]  = repos

        expect(repo1).toBeDefined()

        expect(repo1.name).toEqual("FrontendTest")
        expect(repo1.stargazers_count).toEqual(0)
        expect(repo1.forks_count).toEqual(0)
  
        expect(repo5.name).toEqual("skylab-bootcamp-201809")
        expect(repo5.stargazers_count).toEqual(0)
        expect(repo5.forks_count).toEqual(1)
      })
    })
})