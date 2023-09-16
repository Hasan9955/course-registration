
# HBA Course Registration




## Project Features
### 1.	Course Listing:
 - Users can view a list of available courses on the website.
 - Each course is displayed with a title, description, cradit and price.

 ### 2. Course Enrollment:
 - Users can enroll in courses they are interested in.
 ### 3. Responsive Design:
 - The website is responsive and adapts to different screen sizes and devices for a seamless user experience.


 ## State Management

 ### Getting Started
To set up and run the project locally, follow these steps:
#### 1.	Clone the repository from [GitHub Repo URL].
#### 2.	Navigate to the project directory.
#### 3.	Run npm install to install the project dependencies.
#### 4.	Run npm start to start the development server.



 ### Component State:

Local state is used to manage data that is specific to a particular component and does not need to be shared with other components. For example:

```bash
  const [courses, setCourses] = useState([]);
```
This state variable would be used to store the list of courses that the component is currently displaying. When the component needs to update the list of courses, it would call the setCourses() function.

Global state is used to manage data that needs to be shared with multiple components. For example, the state of a component that displays a shopping cart might include the following:

```bash
 const [cart, setCart] = useState([]);
```

This state variable would be used to store the list of courses that have been added to the shopping cart. When a component needs to add a course to the shopping cart, it would call the setCart() function.

 
