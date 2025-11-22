import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const mostrarSaludo = () => {
    toast.success('¡Hola Mundo! 🌟', {
      position: "top-right",
      autoClose: 3000,
    })
  }

  const mostrarTipos = () => {
    toast.info('Este es un mensaje de información ℹ️')
    toast.success('¡Todo salió bien! ✅')
    toast.warning('Cuidado con eso ⚠️')
    toast.error('¡Algo salió mal! ❌')
    toast('Este es un mensaje por defecto 📝')
    toast.dark('Este es un mensaje oscuro 🌑')
    toast('Mensaje personalizado con estilo 🎨', 
      {
        style: {
          background: '#ff4757',
          color: 'white',
          fontWeight: 'bold'
        }
      }
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #74b9ff, #0984e3)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        textAlign: 'center',
        maxWidth: '400px'
      }}>
        <h1 style={{ 
          color: '#2d3436', 
          marginBottom: '10px' 
        }}>
          ¡Hola Mundo! 👋
        </h1>
        
        <p style={{ 
          color: '#636e72', 
          marginBottom: '30px',
          fontSize: '18px'
        }}>
          Presiona los botones para ver las notificaciones
        </p>

        <button 
          onClick={mostrarSaludo}
          style={{
            background: '#00b894',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            margin: '5px',
            width: '200px'
          }}
        >
          Saludar 👋
        </button>

        <button 
          onClick={mostrarTipos}
          style={{
            background: '#6c5ce7',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            margin: '5px',
            width: '200px'
          }}
        >
          Ver Ejemplos 🎭
        </button>
      </div>

      <ToastContainer />
    </div>
  )
}

export default App