import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [dogs, setDogs] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const fetchDogs = async () => {
    setLoading(true)
    try {
      // Crear 4 promesas para obtener 4 perros a la vez
      const promises = Array(4).fill(0).map(() => 
        axios.get('https://dog.ceo/api/breeds/image/random')
      )
      
      // Esperar a que todas las peticiones terminen
      const responses = await Promise.all(promises)
      
      // Extraer las URLs de las imágenes
      const dogImages = responses.map(response => response.data.message)
      setDogs(dogImages)
      
      toast.success('¡4 perritos obtenidos! 🐶', {
        position: "top-center"
      })
      
    } catch (error) {
      console.error('Error:', error)
      toast.error('❌ Error al cargar los perritos')
    } finally {
      setLoading(false)
    }
  }

  const clearDogs = () => {
    setDogs([])
    toast.info('¡Adiós perritos! 👋')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffafbd 0%, #ffc3a0 100%)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        maxWidth: '800px',
        width: '100%',
        textAlign: 'center'
      }}>
        {/* Header */}
        <h1 style={{
          color: '#e84393',
          marginBottom: '10px',
          fontSize: '2.5rem'
        }}>
          🐶 Galería de Perritos
        </h1>
        
        <p style={{
          color: '#636e72',
          fontSize: '18px',
          marginBottom: '30px'
        }}>
          Obteniendo 4 perritos aleatorios con Axios
        </p>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={fetchDogs}
            disabled={loading}
            style={{
              background: loading ? '#b2bec3' : '#e84393',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '50px',
              fontSize: '16px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
              minWidth: '160px'
            }}
          >
            {loading ? '🔄 Cargando...' : '📸 Obtener 4 Perritos'}
          </button>

          {dogs.length > 0 && (
            <button
              onClick={clearDogs}
              style={{
                background: '#fd79a8',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '50px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: 'bold',
                minWidth: '160px'
              }}
            >
              🧹 Limpiar
            </button>
          )}
        </div>

        {/* Dogs Grid */}
        {dogs.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '15px',
            marginTop: '20px'
          }}>
            {dogs.map((dogUrl, index) => (
              <div
                key={index}
                style={{
                  background: '#f8f9fa',
                  borderRadius: '15px',
                  padding: '10px',
                  border: '3px solid #ffeaa7'
                }}
              >
                <img 
                  src={dogUrl} 
                  alt={`Perrito ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px'
                  }}
                />
                <p style={{
                  margin: '10px 0 0 0',
                  color: '#636e72',
                  fontWeight: 'bold'
                }}>
                  Perrito #{index + 1} 🐕
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div style={{
            margin: '40px 0',
            padding: '20px'
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '10px',
              animation: 'spin 1s linear infinite'
            }}>
              🐶
            </div>
            <p style={{ 
              color: '#636e72',
              fontSize: '18px'
            }}>
              Buscando perritos lindos...
            </p>
          </div>
        )}

        {/* Instructions */}
        {dogs.length === 0 && !loading && (
          <div style={{
            background: '#ffeaa7',
            padding: '20px',
            borderRadius: '15px',
            marginTop: '30px'
          }}>
            <p style={{ 
              color: '#e17055', 
              margin: 0,
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              💡 Haz clic en "Obtener 4 Perritos" para cargar imágenes aleatorias de perros
            </p>
          </div>
        )}
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="colored"
      />

      {/* Estilos para animación */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  )
}

export default App