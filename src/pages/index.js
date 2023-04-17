import Image from 'next/image';

import { Layout } from '@components/templates'
import { Header, LoginCard } from '@components/molecules';

import { StyledLogo, StyledContainer } from '@styles/Home.styled';


const Home = () => {
  const loginCard = {
    title: '¡Hola de nuevo!',
    subtitle: 'Ingresa para ir a la Zona de Padres o a la Zona de Estudiantes de cada uno de tus pequeños:',
    userInput: {
      type: 'text',
      placeholder: 'Usuario'
    },
    passwordInput: {
      type: 'password',
      placeholder: 'Contranseña'
    },
    alert: {
      hightLightText: '¡Recuerda!',
      text: 'Enviamos tu usuario y contraseña a tu correo cuando inscribiste a tu hijo o hija.'
    },
    buttonText: 'Ingresar',
    footerText: '¿Olvidaste tu contraseña?'
  }
  return (
    <Layout>
      <Header />
      <StyledContainer>
        <StyledLogo>
          <Image
              alt='crack-the-code-login'
              quality={100}
              priority
              src='/icons/login.webp'
              width={504}
              height={620}
          />
        </StyledLogo>
        <LoginCard loginCard={loginCard}/>
      </StyledContainer>
    </Layout>
  )
};

export default Home;
