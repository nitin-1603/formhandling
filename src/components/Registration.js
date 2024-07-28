import React from 'react'

export default function Registration(props) {
    return (
        <div className='container'>
            <form onSubmit={props.submit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name: </label>
                    <input type="text" className="form-control" name='name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br/>
            <div>
                <button type="submit" className="btn btn-primary">Cancel</button>

            </div>
        </div>
    )
}
