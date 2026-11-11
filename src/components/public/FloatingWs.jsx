import { FloatingWhatsApp } from 'react-floating-whatsapp';

function FloatingWs({
  phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE,
  accountName = 'La Paragua',
  chatMessage = 'Hola, ¿cómo podemos ayudarte con tu reserva?',
  placeholder = 'Escribe un mensaje...',
  avatar
}) {
  if (!phoneNumber) {
    return null;
  }

  return (
    <FloatingWhatsApp
      phoneNumber={phoneNumber}
      accountName={accountName}
      chatMessage={chatMessage}
      placeholder={placeholder}
      allowClickAway
      darkMode
      avatar={avatar}
    />
  );
}

export default FloatingWs;