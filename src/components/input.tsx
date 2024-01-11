function Input({ onChange }: { onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <div>
            <input
                id="todo"
                name="todo"
                className="border-2 border-black max-w-xs"
                type="text"
                placeholder="Add todo"
                onChange={onChange}
            />
        </div>
    );
}

export default Input;
