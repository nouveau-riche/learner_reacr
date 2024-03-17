export interface RegisterResponse {
    data: User
    message: string
    status: boolean
    "x-access-token": string
  }
  
  export interface User {
    __v: number
    _id: string
    address: string
    adminVerification: boolean
    age: number
    bio: string
    country: string
    countryCode: string
    createdAt: string
    deviceOS: string
    dob: any
    gender: string
    imageUrl: string
    name: string
    password: string
    uid: string
    updatedAt: string
    user_email: string
  }
  