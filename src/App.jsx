import { useState } from "react"

          function App() {

            const [password, setPassword] = useState(null)
            const [copy, setCopy] = useState("Copiar")
            const [passwordSize, setPasswordSize] = useState(12)

            function generate() {
              const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
              let newPassword = ""

              for (let i = 0; i < passwordSize; i++) {
                const position = Math.floor(Math.random() * characters.length)
                newPassword += characters[position]
              }
              setPassword(newPassword)
              setCopy("Copiar!")
            }

            function copyToClipboard() {
              window.navigator.clipboard.writeText(password)
              setCopy("Copiado!")
              setPassword("")

            }

            return (
              <div>
                <h1>Gerador de senhas</h1>
                <div>
                  <label htmlFor="passwordSize">Tamanho:</label>
                  <input 
                  type="number" 
                  name="" 
                  id="passwordSize" 
                  min={4} 
                  max={50}
                  value={passwordSize} 
                  onChange={(ev) => setPasswordSize(ev.target.value)}
                  />
                </div>
                <button onClick={generate}>Gerar senha de {passwordSize} caracteres</button>
                <button onClick={copyToClipboard}>{copy}</button>
                <div>{password}</div>
              </div>
            )

          }

          export default App
