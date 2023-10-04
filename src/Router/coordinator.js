export const goToHomePage = (navigate) => {
    navigate("/home")
}

export const goToSignupPage = (navigate) => {
    navigate("/signup")
}

export const goToLoginPage = (navigate) => {
    navigate("/")
}

export const goToTransfersPage = (navigate) => {
    navigate("/tranfers")
}

export const goToTransitionPage = (navigate) => {
    navigate("/transitions")
}

export const goToUserPage = (navigate, id) => {
    navigate(`/users/${id}`)
}

export const goToUserDetailsPage = (navigate, id) => {
    navigate(`/users-details/${id}`)
}