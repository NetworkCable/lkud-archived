/**
 * Use this component as a page wrapper.
 * When adding a bnackground image, use a section tag to wrap this container and add the background image to the section tag
 *
 * @children children JSX Elements
 */
const Container = ({ children }) => {
  return (
    <section className='max-w-7xl mx-auto container px-4'>{children}</section>
  )
}

export default Container
