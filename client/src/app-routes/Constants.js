

export const BASE_URL = "http://localhost:8080/api" //LOCAL SERVER URL


export const defaultUser = {
    status: true,
    user: {
        first_name: "Praveen",
        last_Name: "H",
        email: "praveen@talganize.com",
        type_name: 'JobSeeker',
        user_type_id: 1
    },
    token: "TestUserToken"
}


// "homepage": "https://Talganize.github.io/talganize-app/",

// export const Home = '/talganize-app'//Github hosted
export const Home = '/'                 //server hosted


//
export const Content = '/content'

export const Login = '/login'
export const Register = '/register'
export const ForgotPassword = '/forgot-password'
export const ResetPassword = '/reset-password'
export const ContactUs = '/contact-us'


//Candidate routes
export const Jobs = '/jobs'
export const JobSeeker = '/job-seeker'
export const Companies = '/companies'
export const Profile = '/profile'
export const SavedJobs = '/saved-jobs'


//Employer routes
export const JobPost = '/job-post'
