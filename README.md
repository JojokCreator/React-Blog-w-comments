## What is it

Blog app with components that display posts and comments and allow users to add new comments. Made with React. 

The page is basically styled with css and is fully responsive. It was designed with mobile-first design.

## Get Started

Clone the directory and run npm i to install dependencies. Run npm start to fire up react.

To test the app run npm test. 

## BlogPost

  - `blog` which should be an object with the following shape:

    ```ts
    {
      title: string,
      author: string,
      datePosted: string,
      content: string,
      imageSrc: string,
      imageAlt: string,
    }
    ```

    Example:

    ```js
    {
      title: "My Coding Post",
      author: "Daniel Roy",
      datePosted: "20/06/2021",
      content: `
        “An individual block of code takes moments to write, minutes or hours to debug, and can last forever without being touched again. It’s when you or someone else visits code written yesterday or ten years ago that having code written in a clear, consistent style becomes extremely useful. Understandable code frees mental bandwidth from having to puzzle out inconsistencies, making it easier to maintain and enhance projects of all sizes.”
        Loop `,
      imageSrc: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      imageAlt: "A couple of coders."
    }
    ```

## Comments

- Renders:

  - Display the author and comment
  - Display the capitalised initials of the commenter's full name in a nice little circle. Some examples:

    - `Bob Low` should appear as `BL` inside a circle
    - `Jane America Green` should display as `JAG` inside a circle

---

## Comment List

Comments are an array of objects. Each object in the array should should have the following shape:


    {
      id: string,
      author: string,
      content: string
    }



- Renders:
  - Render a `Comment` component for each item in the `comments` array (prop). Use the `id` of each comment as its React key.

## Comment Form

- Behaviours:

  - On clicking the button, `onSubmit` should be called with the user's input (both their name and their comment). This a way to let the parent component know what the user has entered.
  - If the comment is empty, do not call `onSubmit`.
  - Provide a default name for the author (e.g. `"Anon Author"`).
  - After calling `onSubmit`, clear the input for the comment but not the input for the name

- Renders:

  - An input for the author's name (with an "Author" label)
  - An input for the comment itself (with a "Comment" label)
  - A button containing "Submit"


## Result






