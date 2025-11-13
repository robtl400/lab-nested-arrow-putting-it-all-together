
function createLoginTracker (userInfo) {
  
  let attemptCount = 0

  const pA = (passwordAttempt) => {
    attemptCount++

      if (attemptCount <= 3 && passwordAttempt === userInfo.password)
      return ("Login successful")

        if (attemptCount <= 3 && passwordAttempt !== userInfo.password)
      return ("Attempt $attemptCount: Login failed")

      else 
      return ("Account locked due to too many failed login attempts")
  }

  return pA
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};