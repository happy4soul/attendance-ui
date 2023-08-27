


// import React, { useState } from 'react';

// const SubjectComponent = ({ isLoggedIn, onAddSubject, subjects, onDeleteSubject }) => {
//     const [isAddingSubject, setIsAddingSubject] = useState(false);
//     const [subjectName, setSubjectName] = useState('');
//     const [presentClasses, setPresentClasses] = useState('');
//     const [totalClasses, setTotalClasses] = useState('');

//     const handleAddSubject = () => {
//         const newSubject = {
//             subjectName: subjectName,
//             presentClasses: presentClasses,
//             totalClasses: totalClasses,
//         };
//         onAddSubject(newSubject);
//         setIsAddingSubject(false);
//         // Clear input fields after adding subject
//         setSubjectName('');
//         setPresentClasses('');
//         setTotalClasses('');
//     };

//     const handleAddClick = () => {
//         setIsAddingSubject(true)
//     }

//     const handleCancel = () => {
//         setIsAddingSubject(false)
//         setSubjectName('')
//         setPresentClasses('')
//         setTotalClasses('')
//     }

//     return (
//         <div>
//             {isLoggedIn && !isAddingSubject ? (
//                 <button className='btn btn-md btn-dark bg-dark' onClick={handleAddClick}>Add Subject</button>
//             ) : null}

//             {isAddingSubject && isLoggedIn && (
//                 <div>
//                     <input
//                         type="text"
//                         placeholder="Subject Name"
//                         value={subjectName}
//                         onChange={(e) => setSubjectName(e.target.value)}
//                     />
//                     <input
//                         type="number"
//                         placeholder="Present Classes"
//                         value={presentClasses}
//                         onChange={(e) => setPresentClasses(e.target.value)}
//                     />
//                     <input
//                         type="number"
//                         placeholder="Total Classes"
//                         value={totalClasses}
//                         onChange={(e) => setTotalClasses(e.target.value)}
//                     />
//                     <button className='btn btn-md btn-dark bg-dark' onClick={handleAddSubject}>Add</button>
//                     <button className='btn btn-md btn-dark bg-dark' onClick={handleCancel}>Cancel</button>
//                 </div>
//             )}
//             <div>
//                 {subjects.map((subject, index) => (
//                     <div key={index} className="subject-item">
//                         <p>{subject.subjectName}</p>
//                         <p>Present: {subject.presentClasses}</p>
//                         <p>Total: {subject.totalClasses}</p>
//                         {isLoggedIn && (
//                             <button
//                                 className="delete-subject-button"
//                                 onClick={() => onDeleteSubject(index)}
//                             >
//                                 Delete
//                             </button>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SubjectComponent;


