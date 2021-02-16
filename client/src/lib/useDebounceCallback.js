import { useEffect } from 'react'

/*
Effect hook to debounce calling of a `callback` function based on changes to a
`value`. When `value` changes, hook will delay execution of `callback` based on
`delay` value in ms. Subsequent changes to `value` will reset timer for delayed
execution.
*/
const useDebounceCallback = (value, callback, delay) => {
  useEffect(() => {

    // time out to wait before execution of callback
    const timeout = setTimeout(() => callback(), delay)

    // cancel delayed execution of callback
    return () => clearTimeout(timeout)
  }, [value])
}

export default useDebounceCallback
