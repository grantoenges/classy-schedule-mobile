import React from 'react'

export const MyComponent = () => {
  React.useEffect(() => {
    const subscription = RNShake.addListener(() => {
      // Your code here...
      alert("Ska")
    })

    return () => {
      // Your code here...
      alert("[]")
      subscription.remove()
    }
  }, [])
}