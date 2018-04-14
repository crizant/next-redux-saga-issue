# Next-redux-saga-issue
This repo is an example to reproduce an issue in `next-redux-saga`.

On client side routing, after `getInitialProps` is executed,
`next-redux-saga` would dispatch a `END` action (*t1*) then wait for the saga tasks to be finished.
Then restart the saga (*t2*) after the tasks are finished.

But the actions dispatched between *t1* and *t2*, are not processed by saga.

## What does it do
In `getInitialProps` of `Other` page, it dispatches an action, which makes the saga to run for 3 seconds.
Then schedule to dispatch 5 other actions, each is 1 second behind the previous one.
The reducer and the corresponding handlers in saga will give output when they receives actions.

You can see that, the first 3 `OTHER_REQUEST` are not processed by saga,
only the last two are shown in the console. 

## How to run
1. Clone this repo
2. Install dependencies by `yarn` or `npm install`
3. Run by `yarn dev` or `npm run dev`
4. Go to `localhost:3000`, open the developer console, click `Go to other page` and observe the output