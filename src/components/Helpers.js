export const checkAmount = (amount, residual) => {
  let clase

  if (amount / 4 > residual) {
    clase = 'alert alert-danger'
  } else if (amount / 2 > residual) {
    clase = 'alert alert-warning'
  } else {
    clase = 'alert alert-success'
  }
  return clase
}
