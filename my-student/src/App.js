import { useEffect, useState } from "react";
import "./App.css";
function Navbar() {
return (
<nav>
<h2>Student Dashboard</h2>
</nav>
);
}
function Sidebar() {
return (
<aside>
<h3>Menu</h3>
<p>Dashboard</p>
<p>Students</p>
<p>Courses</p>
</aside>
);
}
function App() {
const [students, setStudents] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
fetch("/student.json")
.then(response => response.json())
.then(data => {
setStudents(data);
setLoading(false);
})
.catch(error => {
console.log(error);
setLoading(false);
});
}, []);
return (
<>
<Navbar />
<div className="layout">
<Sidebar />
<main>
<h2>Student Details</h2>
{loading ? (
<p>Loading...</p>
) : (
<div className="cards">
{students.map(student => (
<div className="card"
key={student.registerNo}><h3>{student.name}</h3>
<p>
Register No: {student.registerNo}
</p>
<p>
Course: {student.course}
</p>
<p>
Marks: {student.marks}
</p>
</div>
))}
</div>
)}
</main>
</div>
</>
);
}
export default App;