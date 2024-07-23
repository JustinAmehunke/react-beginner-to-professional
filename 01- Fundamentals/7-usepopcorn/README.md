# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
into one of three categories,

stateless or presentational components,

stateful components or structural components.


So starting with stateless or presentational components,

as the name says, these don't have any state.

Usually, they are components that receive some props

and then they simply present that data

or even some other content,

and therefore the name presentational.

Many times these are quite small components,

such as the logo, num results

and movie components in our current app.

Next, stateful components are simply components

that do have state.

Now, just because these components have state,

that doesn't mean that they can't be highly reusable.

For example, the search component that we built

does have state and we could reuse this input

as many times as we wanted throughout the app.

Now finally, you can think of structural components

as pages, layouts, or screens of the application,

which are oftentimes the result

of composing many smaller components together.

And more about composition later in this section.

So these structural components can be large

and non reusable components, but they don't have to.

Structural components are sometimes quite small too.

What matters is that they are responsible

for providing some sort of structure

to applications such as pages or layouts.

Therefore, these components might not be present

in really small apps,

but you will definitely have a few structural components

as your app grows bigger and bigger.

#### Prop Drilling
what we did was some so-called prop drilling,

which is not always the best solution,

especially if we need

to pass that prop down really, really deep into the tree.

#### Prop Drilling Solution : Components Composition 
Using the children prop
So formally component composition is the technique

of combining different components by using the children prop

or by explicitly defining components as props.

Now we use composition

for two big reasons or in two important situations.

First, when we want to create highly reusable

and flexible components such as the modal window

or really a million other reusable components

that we can think of.

And we do this really all the time.

Now, the second situation in which we can use composition is

in order to fix a prop drilling problem

like the one that we found in here

