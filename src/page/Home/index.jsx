import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useContext } from 'react';
import Form from '../../components/Form';
import Button from '../../components/Button';
import { schema } from '../../validations/registerUser';
import { AuthContext } from '../../contexts/AuthContext';

const Home = () => {
  const { registerUser } = useContext(AuthContext);
  // prop drilling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      {/* // eslint-disable-next-line react/jsx-no-bind */}
      <Form onSubmit={handleSubmit(registerUser)}>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' {...register('email')} />
        <p>{errors.email?.message}</p>

        <label htmlFor='password'>Senha</label>
        <input id='password' type='text' {...register('password')} />
        <p>{errors.password?.message}</p>

        <Button type='submit'>Entrar</Button>
      </Form>
    </>
  );
};

export default Home;
