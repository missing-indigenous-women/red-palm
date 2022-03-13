export default function Button2() {
    function handleClick() {
        alert('Wise choice!');
    }
    return (
        <button onClick={handleClick}>
            choose
        </button>
    );
}
