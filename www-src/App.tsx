import { h } from 'preact'
import { useState, useEffect } from  "https://esm.sh/preact/hooks"
// import { invoke } from '@tauri-apps/api/tauri'
// import { invoke } from "https://esm.sh/@tauri-apps/api/tauri";
// import { invoke } from "https://cdn.skypack.dev/@tauri-apps/api";
import { invoke } from 'https://esm.sh/@tauri-apps/api/core' 



export function App() {
  const [cards, setCards] = useState([])
  const [currentCard, setCurrentCard] = useState(null)

  useEffect(() => {
    // Replace electron IPC with Tauri commands
    invoke('get_cards').then((result) => {
      setCards(JSON.parse(result))
    })
  }, [])

  const handleImport = async () => {
    const result = await invoke('import_cards')
    setCards(JSON.parse(result))
  }

  const handleNewTopic = async (topic: string) => {
    await invoke('create_topic', { topic })
  }

  return (
    <div class="container">
      <header>
        <button onClick={handleImport}>Import</button>
        <button onClick={() => handleNewTopic('New Topic')}>New Topic</button>
      </header>
      <main>
        {/* Card display logic */}
      </main>
    </div>
  )
}