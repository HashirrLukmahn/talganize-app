

const Label = ({ children, required }) => {
    return (
        <label className="text-sm font-semibold">
            {children} {required && <span className="text-red-500">*</span>}
        </label>
    );
};
export default Label