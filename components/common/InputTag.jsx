/**
 * Use this component as a input field.
 * Pass the required fields
 *
 * @label string required
 * @name string required
 * @type string, default to 'text'
 * @wrapperStyles wrapper div styles
 * @placeholder string
 * @register register function form the react-hook-form
 * @validation validation object
 * @errors errors object from the react-hook-form
 *
 * see the example in SignUpForm component
 */

 const InputTag = ({
    handleChange,
    label,
    name,
    type = 'text',
    wrapperStyles = '',
    placeholder,
    register,
    validation,
    errors,
    index = '-1',
    labelStyles = 'text-sm text-black',
    onFocus,
    onBlur,
  }) => {
    return (
      <div className={`relative ${wrapperStyles}`}>
        <input
          onChange={handleChange}
          id={`${name}${index}`}
          type={type}
          {...register(name, validation)}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          className='peer h-12 block w-full rounded-md border-gray-500 border-opacity-50 shadow-sm focus:outline-none focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-transparent'
        />
        <label
          htmlFor={`${name}${index}`}
          className={`absolute left-0 -top-6  ${labelStyles} transition-all ease-out peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-black peer-focus:text-sm cursor-text`}
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
  