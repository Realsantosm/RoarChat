import React from 'react'
import styled from 'styled-components'


const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

    }
  return (
    <>
        <FormContainer>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input placeholder='Enter your name' />
            </form>
        </FormContainer>
    </>
  )
}

const FormContainer = styled.div`

`;
export default Register