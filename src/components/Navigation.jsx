function Navigation({ arr }) {
    return (
        <ul>
            {arr.map((item) => (
           <div key={Math.random()}>
            
           </div>
            ))}
        </ul>
    );
}

export default Navigation;