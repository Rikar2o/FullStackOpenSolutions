const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      <p>
        {course.course[0].name} {course.course[0].exercises}
      </p>
      <p>
        {course.course[1].name} {course.course[1].exercises}
      </p>
      <p>
        {course.course[2].name} {course.course[2].exercises}
      </p>
    </div>
  );
};

const Total = ({ course }) => {
  const totalExercises = course.course.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <p>Total number of exercises {totalExercises}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    course: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
