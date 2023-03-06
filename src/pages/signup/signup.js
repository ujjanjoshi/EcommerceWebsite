import React from 'react'

export const Signup = () => {
    return (
        <div className='container text-left'>
            <div class="card" style={{width:"30rem", textAlign:"left",marginLeft:"30%",marginTop:"5%", marginBottom:"150px"}}>
                {/* <h5 class="card-header">Featured</h5> */}
                <div class="card-body" style={{justifyContent:"left"}}>
                    <h1 class="card-title"><b>Sign Up</b></h1><br/>
                    <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               </div><br/>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div><br/>
                <button type="submit" class="btn btn-primary" style={{width:"100%",borderRadius:"10px"}}>Submit</button>
            </form>
                </div>
            </div>
        </div>
    )
}
