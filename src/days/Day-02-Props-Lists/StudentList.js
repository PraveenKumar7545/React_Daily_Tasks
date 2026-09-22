import StudentCard from "./StudentCard";

function StudentList() {
  const students = [
    {
      id: 1,
      name: "Praveen Kumar M",
      course: "B.Tech IT",
      year: "Final Year",
      skills: ["Java", "React", "MySQL"],
    },
    {
      id: 2,
      name: "Neena",
      course: "B.E EEE",
      year: "Final Year",
      skills: ["Embedded Systems", "LabVIEW", "MATLAB"],
    },
    {
      id: 3,
      name: "Mithra",
      course: "B.Tech IT",
      year: "Final Year",
      skills: ["Python", "SQL", "Git"],
    },
    {
      id: 4,
      name: "Dhashwin Krishnan",
      course: "Diploma in ECE",
      year: "Final Year",
      skills: ["Arduino", "C/C++", "E-CAD"],
    },
    {
      id: 5,
      name: "Gowtham",
      course: "B.Tech IT",
      year: "Final Year",
      skills: [".NET", "C#", "SQL Server"],
    },
    {
      id: 6,
      name: "Bavithra",
      course: "B.Tech IT",
      year: "Final Year",
      skills: ["React", "Latex", "Git"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          year={student.year}
          skills={student.skills}
        />
      ))}
    </div>
  );
}

export default StudentList;