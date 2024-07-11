export const Practices = () => {
    const students = [2,3,4,5,6,7,8,9];
    console.log(students.length);
    return (
        <>
        {/* <p>{students.length && "No student Found"}</p> */}



        <p>{students.length === 0 && "No student Found"}</p>
        <p>Numbers of Students: {students.length}</p>
        </>
    )
};