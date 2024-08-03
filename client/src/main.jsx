import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <GoogleOAuthProvider clientId='859397030957-vrmj21dngh2q6k3v4epjs1od96rltiri.apps.googleusercontent.com'>
            <App />
        </GoogleOAuthProvider>
    </BrowserRouter>
)
