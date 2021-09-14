import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <Fragment>
            <Navbar />
            <div className="flex w-100 justify-center">
                {children}
            </div>
        </Fragment>
    )
}
