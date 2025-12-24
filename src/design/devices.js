const breakpoints = {
  xs: 320,
  sm: 425,
  md: 768,
  lg: 2560
}

const devices = {
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`
}

export default devices
export { breakpoints }
