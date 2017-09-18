import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card'
import TextField from 'material-ui/TextField'

const SignUp = ({process, errors}) => (
<Card>
    <form onSubmit={process}>
        <h2 className="card-heading">Sign up </h2>
        {errors.summary &&  <p>{errors.summary}</p>}

        <div className="field-line">
        <TextField
          floatingLabelText="Name"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>
    </form>
</Card>
)

SignUp.propTypes =  {

}

export default SignUp