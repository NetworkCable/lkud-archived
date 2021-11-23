// Use this component as a input field.
// Pass the required fields
// @label string required
// @name string required
// @type string, default to 'text'
// @wrapperStyles wrapper div styles
// @placeholder string
// @register register function form the react-hook-form
// @validation validation object
// @errors errors object from the react-hook-form

const InputTag = ({
  label,
  name,
  type = 'text',
  wrapperStyles = '',
  placeholder,
  register,
  validation,
  errors,
  height = 'h-32',
}) => {
  return (
    <div className={`relative ${wrapperStyles}`}>
      <textarea
        id={name}
        type={type}
        {...register(name, validation)}
        placeholder={placeholder}
        className={`peer ${height} block w-full border border-maroon-base border-opacity-50 shadow-sm focus:outline-none focus:ring focus:ring-maroon-light focus:ring-opacity-50 placeholder-transparent resize-none p-3`}
      />
      <label
        htmlFor={name}
        className='absolute left-0 -top-5 text-maroon-base text-sm transition-all ease-out peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-maroon-base peer-focus:text-xs cursor-text'
      >
        {label}
      </label>
      {errors[name] && (
        <p className='absolute right-0 text-xs text-red-600'>
          {errors[name].message}
        </p>
      )}
    </div>
  )
}

export default InputTag
