# Food choice doodle
This is an application to have doodle for restaurant selection. User can create a new participant and can vote one out of three top places for the given area. There is a search bar to get new choices for the particular area. The data is a response coming from 3rd party vendor (https://foursquare.com/developers/apps). User can remove participants as well. The application also selects winner according to number of votes. 

## Prerequisites: set credentials for https://foursquare.com/developers/apps
```
cd src/redux
```
Change below variables by given values of client_id and client_secret from your foursquare account in ```effects.ts``` file.

```
client_id = <ID>  
client_secret = <SECRET>
```
For testing you can use ```client_id = F0MU3E24OUE0EYBLE1M253DA51ELKRS2GWJKUVQUPT2UIVMH and client_secret = SSN3LI1XIYXTH5D4WOTM3JKV4AKFLND3K5OEGFZR102NDIYS ```

## Available Scripts

In the project directory, you can run:

### `yarn install`

This will install all the dependencies from ```package.json``` file.


### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn run cypress:open`

Prerequisites: frontend server should be running before running tests. These tests includes end to end testing. 
Launches the test runner in the interactive UI mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
