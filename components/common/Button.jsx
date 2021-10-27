/**
 * Use this component as a button.
 *
 * @type string default to 'button'
 * @children JSX elements required
 * @onClick function to call
 * @color default to 'bg-gray-900 hover:bg-gray-700'
 * @textColor default to 'text-white'
 * @padding default to py-2 px-4
 * @width default to md:w-32 sm:w-28 w-24
 * @margin default to ''
 * @btnStyles other styles
 * @disabled boolean, default to false
 */
 const Button = ({
    type = 'button',
    children,
    onClick = null,
    color = 'bg-maroon-base hover:bg-maroon-light',
    textSize = 'text-sm ',
    textColor = 'text-white',
    padding = 'py-2 px-4',
    width = 'md:w-32 sm:w-28 w-24',
    margin = '',
    btnStyles = '',
    disabled = false,
  }) => {
    return (
      <button
        type={type}
        className={`${color} ${textColor} ${btnStyles} ${padding} ${margin} ${width} font-medium ${textSize} sm:text-base rounded-md shadow-md transition ease-in`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
  
  export default Button
  