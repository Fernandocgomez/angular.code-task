## Set up
- Install dependencies by running "npm i"
- Start your local server by running the command "ng serve"

## Notes
- I have built.
    - the UI 
    - the interface Post

## Tasks
- Create 2 routes
    - /all-posts (AllPostComponent)
        - This route should render a list of post. Make sure to use the lifecycle methods.
    - /create-post (CreatePostComponent)
        - This route should render a form to create a new post. 
- Create a services
    - PostService
        - Should have a method called getAllPosts() that returns an Observable of type Post<Array>.
        - Should have a method called createPost(payload: Post) that returns an Observable of type Post.
- AllPostComponent
    - Render a list of post when the component gets initialized.
- CreatePostComponent
    - Render a form to create new posts.
    - After we create a new post, the post should be render right below the form.