export function Input({ label = "Label", value = "value", onCountryFilterChange = null, id, autoFocus = false }) {
    
    const handleCountryFilterChange = ({currentTarget}) => {
        if (onCountryFilterChange) {
            const newValue = currentTarget.value;
            onCountryFilterChange(newValue);
        }
    }

    return (
        <>
            <div className="flex flex-col gap-1">
                <label
                    htmlFor={id}
                    className="text-sm"
                >
                    { label }
                </label>
                <input 
                    autoFocus={autoFocus}
                    type="text" 
                    name="inpt" 
                    id={id}  
                    className="border outline-none p-2 rounded-lg"
                    value={value}
                    onChange={handleCountryFilterChange}
                />
            </div>
        </>
    );
}
