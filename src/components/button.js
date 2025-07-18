export default function Button({ onClickEvent, shouldDisable, text }) {
    return (
        <button className="" onClick={onClickEvent} disabled={shouldDisable}>
            {text}
        </button>
    );
}