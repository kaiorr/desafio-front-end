import  styled from 'styled-components'

export const Header = styled.header`
  margin: 0 auto;
  max-width: 960px;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 60px;
    color: #3A8970;
`

export const Form = styled.form`
  margin: 40px;
  max-width: 800px;

  display: flex;
  align-items: center;
  justify-content: center;
  input {
    flex: 1;
    height: 60px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    margin-right: 10px;
  }

  button {
    width: 200px;
    height: 60px;
    border-radius: 30px;
    outline: none;

  }
`