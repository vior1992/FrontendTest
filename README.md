# FrontendTest

## GOALS

#### The main goal of this tech test is to create a client side web application that reproduces the screenshots below by using [GitHub API](https://developer.github.com/v3/) .

We will only evaluate the client side code and the criteria will be based mainly on:

1. Good use of **pure Javascript** language without external libraries and frameworks like jQuery, React...
2. Clean HTML and CSS markup
3. Clean, maintainable & easy-to-read
4. Good architectural practices

## HOW TO START

1. Investigate the GitHub API calls for `user` and `repos` (for example: test them in the browser)
2. Fork this repository & enter into the directory
3. Launch the web application, for example with: `python -m SimpleHTTPServer 1337`
4. Open the browser with http://localhost:1337/ and start coding!

## NOT REQUIRED, BUT IMPRESSIVE

- Adding Unit Testing. External libraries limitation doesn't apply here, you can use Jasmine, Karma...
- Build System (browseriy, webpack, parcel..)
- Keep in consideration browsers support
- ES6+


## SCREENSHOTS

#### First Screen

The user can search a username of GitHub

![](https://doc-0k-50-docs.googleusercontent.com/docs/securesc/6o3bmeq76g8td4chjnab71pu7m2rt7na/hi8js16m5p9vtukefc7t161cvqchv0jt/1525694400000/03359671882345547890/03359671882345547890/1V19nQhn7Bn3E-sBNBFtFJIatSaqLUoUj?h=04697923248607655012&e=view)

#### Success Screen

If the searched username does exist: The searched user profile is displayed with all his repositories

![](https://doc-14-50-docs.googleusercontent.com/docs/securesc/6o3bmeq76g8td4chjnab71pu7m2rt7na/fi0i3ksrn5fl97424kv5acuepma0qr4j/1525694400000/03359671882345547890/03359671882345547890/1LHyqNTFVQZQ1tdidLXLrCOxo0w6JK9oa?h=04697923248607655012&e=view)

#### Error Screen

If the searched username does not exist: An error is shown

![](https://doc-14-50-docs.googleusercontent.com/docs/securesc/6o3bmeq76g8td4chjnab71pu7m2rt7na/etoee7pqqg7alk0fhevcd1i4i5i1h17j/1525694400000/03359671882345547890/03359671882345547890/1uIajOBQvo4ugtoxkga8KPbY5x2PlHh0j?h=04697923248607655012&e=view)




