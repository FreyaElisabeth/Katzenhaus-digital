export function loadFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem('Katzenhaus-digital')) || []
  } catch (err) {
    console.log(err)
    return []
  }
}
