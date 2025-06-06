

const Label = ({ children, required, htmlFor }) => {
    return (
        <label className="text-sm font-semibold text-primary" htmlFor={htmlFor}>
            {children} {required && <span className="text-red-500">*</span>}
        </label>
    );
};
export default Label